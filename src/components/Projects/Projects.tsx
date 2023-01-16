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
