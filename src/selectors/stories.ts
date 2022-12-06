import { useAppSelector } from "store/customHooks"

export const useIsLoadingState = () => {
  const isLoadingState = useAppSelector((store) => store.stories.isLoading)
  return isLoadingState
}

export const useStoriesState = () => {
  const storiesState = useAppSelector((state) => state.stories.stories)
  return storiesState
}
