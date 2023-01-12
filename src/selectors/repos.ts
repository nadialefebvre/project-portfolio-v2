import { useAppSelector } from "store/customHooks"

export const useAllReposState = () => {
  const allReposState = useAppSelector((state) => state.repos.allRepos)
  return allReposState
}

export const usePinnedReposState = () => {
  const pinnedReposState = useAppSelector((state) => state.repos.pinnedRepos)
  return pinnedReposState
}

export const useIsLoadingState = () => {
  const isLoadingState = useAppSelector((state) => state.repos.isLoading)
  return isLoadingState
}

export const useErrorState = () => {
  const errorState = useAppSelector((state) => state.repos.error)
  return errorState
}
