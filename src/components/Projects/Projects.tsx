import React, { useEffect } from "react"

import { Loader } from "components/Loader"
import { Error } from "components/Error"
import { Section } from "components/Section"
import { FeaturedProject, OtherProject } from "components/Projects"
import { useAppDispatch } from "store/customHooks"
import { fetchRepos } from "thunks/repos"
import {
  useAllReposState,
  usePinnedReposState,
  useIsLoadingState,
  useErrorState,
} from "selectors/repos"

const Projects = () => {
  const dispatch = useAppDispatch()

  const allRepos = useAllReposState()
  const pinnedRepos = usePinnedReposState()
  const isLoading = useIsLoadingState()
  const error = useErrorState()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  const setNotPinnedRepos = () => {
    const pinnedReposIDs = pinnedRepos.map((repo) => repo.id)

    const notPinnedRepos = allRepos.filter(
      (repo) => !pinnedReposIDs.includes(repo.id)
    )

    const notPinnedReposSorted = notPinnedRepos.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
      return 0
    })

    return notPinnedReposSorted
  }

  if (isLoading) {
    return (
      <Section title="Featured projects">
        <Loader />
      </Section>
    )
  }

  if (error !== "") {
    return (
      <Section title="Featured projects">
        <Error item="projects" error={error} />
      </Section>
    )
  }

  return (
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
