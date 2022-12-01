import React, { useState } from "react"

import FeaturedProject from "./FeaturedProject"
import OtherProject from "./OtherProject"

import { Repo } from "./Projects.types"
import { githubQuery } from "utils/github-query"

import { Section } from "components/Section"

const Projects = () => {
  const [allRepos, setAllRepos] = useState<Repo[]>()
  const [pinnedRepos, setPinnedRepos] = useState<Repo[]>()

  const pinnedReposIDs = pinnedRepos?.map((repo) => repo.id)

  const notPinnedRepos = allRepos?.filter(
    (repo) => !pinnedReposIDs?.includes(repo.id)
  )

  const notPinnedReposSorted = notPinnedRepos?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  // put this in another file with other variables, or alone?
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

  if (allRepos === undefined) {
    fetch("https://api.github.com/graphql", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },

      body: JSON.stringify({
        query: githubQuery,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setAllRepos(res.data.search.nodes)
        setPinnedRepos(res.data.user.pinnedItems.nodes)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Section
      title="Featured projects"
      featured={
        pinnedRepos !== undefined &&
        pinnedRepos.map((repo: Repo) => (
          <FeaturedProject project={repo} key={repo.id} />
        ))
      }
      subtitle="Other projects"
      other={
        notPinnedReposSorted !== undefined &&
        notPinnedReposSorted.map((repo: Repo) => (
          <OtherProject project={repo} key={repo.id} />
        ))
      }
    />
  )
}

export default Projects
