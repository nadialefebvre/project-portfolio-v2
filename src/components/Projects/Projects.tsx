import React, { useEffect } from "react"

import { Error, Loader, Section } from "components"
import { FeaturedProject, OtherProject } from "components/Projects"
import {
  useAllReposState,
  useErrorState,
  useIsLoadingState,
  usePinnedReposState,
} from "selectors/repos"
import { useAppDispatch } from "store/customHooks"
import { fetchRepos } from "thunks/repos"

const Projects: React.FC = () => {
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
    return <Loader title="Featured projects" />
  }

  if (error !== "") {
    return (
      <Error
        text="There's an issue with the API fetching the projects."
        error={error}
        title="Featured projects"
      />
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
