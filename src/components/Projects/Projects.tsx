import React, { useEffect } from "react"

import { useAppDispatch } from "store/customHooks"

import { fetchRepos } from "thunks/repos"

import FeaturedProject from "./FeaturedProject"
import OtherProject from "./OtherProject"

import { Loader } from "components/Loader"

import { Section } from "components/Section"
import {
  useAllReposState,
  usePinnedReposState,
  useIsLoadingState,
  useErrorState,
} from "selectors/repos"
import { Error } from "components/Error"

const Projects = () => {
  const dispatch = useAppDispatch()

  const allRepos = useAllReposState()
  const pinnedRepos = usePinnedReposState()
  const isLoading = useIsLoadingState()
  const error = useErrorState()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  // should I put this function in another file or not ?
  const setNotPinnedRepos = () => {
    const pinnedReposIDs = pinnedRepos?.map((repo) => repo.id)

    const notPinnedRepos = allRepos?.filter(
      (repo) => !pinnedReposIDs?.includes(repo.id)
    )

    const notPinnedReposSorted = notPinnedRepos?.sort((a, b) => {
      if (a.createdAt !== undefined && b.createdAt !== undefined) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
      return 0
    })
    return notPinnedReposSorted
  }

  return isLoading || error !== "" ? (
    <Section title="Featured projects">
      {isLoading && <Loader />}
      {!isLoading && error !== "" && <Error item="projects" error={error} />}
    </Section>
  ) : (
    <Section
      title="Featured projects"
      featured={pinnedRepos.map((repo) => (
        <FeaturedProject project={repo} key={repo.id} />
      ))}
      subtitle="Other projects"
      other={setNotPinnedRepos().map((repo) => (
        <OtherProject project={repo} key={repo.id} />
      ))}
    />
  )
}

export default Projects
