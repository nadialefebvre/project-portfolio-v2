import { useAppSelector } from "store/customHooks"

export const useIsLoadingState = () => {
  const isLoadingState = useAppSelector((store) => store.articles.isLoading)
  return isLoadingState
}

export const useArticlesState = () => {
  const articlesState = useAppSelector((state) => state.articles.articles)
  return articlesState
}
