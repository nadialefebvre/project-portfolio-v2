import React, { useEffect } from "react"

import { useAppSelector, useAppDispatch } from "App/hooks"

import { fetchRepos } from "reducers/repos"

import FeaturedProject from "./FeaturedProject"
import OtherProject from "./OtherProject"

import { Loader } from "components/Loader"

import { Repo } from "./Projects.types"

import { Section } from "components/Section"

const Projects = () => {
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector((store) => store.repos.isLoading)
  const allRepos = useAppSelector((state) => state.repos.allRepos)
  const pinnedRepos = useAppSelector((state) => state.repos.pinnedRepos)

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  const pinnedReposIDs = pinnedRepos?.map((repo) => repo.id)

  const notPinnedRepos = allRepos?.filter(
    (repo) => !pinnedReposIDs?.includes(repo.id)
  )

  const notPinnedReposSorted = notPinnedRepos?.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <Section
      title="Featured projects"
      featured={
        isLoading ? (
          <Loader item="featured projects" />
        ) : (
          pinnedRepos.map((repo: Repo) => (
            <FeaturedProject project={repo} key={repo.id} />
          ))
        )
      }
      subtitle="Other projects"
      other={
        isLoading ? (
          <Loader item="other projects" />
        ) : (
          notPinnedReposSorted.map((repo: Repo) => (
            <OtherProject project={repo} key={repo.id} />
          ))
        )
      }
    />
  )
}

export default Projects
