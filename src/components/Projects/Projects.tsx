import React, { useEffect } from "react"

import { useAppDispatch } from "store/customHooks"

import { fetchRepos } from "thunks/repos"

import FeaturedProject from "./FeaturedProject"
import OtherProject from "./OtherProject"

import { Loader } from "components/Loader"

import { Section } from "components/Section"
import {
  useAllReposState,
  useIsLoadingState,
  usePinnedReposState,
} from "selectors/repos"

const Projects = () => {
  const dispatch = useAppDispatch()

  const isLoading = useIsLoadingState()
  const allRepos = useAllReposState()
  const pinnedRepos = usePinnedReposState()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  const setNotPinnedRepos = () => {
    const pinnedReposIDs = pinnedRepos?.map((repo) => repo.id)

    const notPinnedRepos = allRepos?.filter(
      (repo) => !pinnedReposIDs?.includes(repo.id)
    )

    const notPinnedReposSorted = notPinnedRepos?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    return notPinnedReposSorted
  }

  return (
    <Section
      title="Featured projects"
      featured={
        isLoading ? (
          <Loader item="featured projects" />
        ) : (
          pinnedRepos.map((repo) => (
            <FeaturedProject project={repo} key={repo.id} />
          ))
        )
      }
      subtitle="Other projects"
      other={
        isLoading ? (
          <Loader item="other projects" />
        ) : (
          setNotPinnedRepos().map((repo) => (
            <OtherProject project={repo} key={repo.id} />
          ))
        )
      }
    />
  )
}

export default Projects
