import repos from "reducers/repos"
import { client } from "App/App"
import { AppDispatch } from "store/types"
import { githubQuery } from "utils/github-query"

export const fetchRepos = () => {
  return async (dispatch: AppDispatch) => {
    const { data, loading, error } = await client.query({ query: githubQuery })

    if (loading) {
      dispatch(repos.actions.setIsLoading(true))
    }

    if (error) {
      dispatch(repos.actions.setError(error))
    }

    dispatch(repos.actions.setAllRepos(data.search.nodes))
    dispatch(repos.actions.setPinnedRepos(data.user.pinnedItems.nodes))
    dispatch(repos.actions.setIsLoading(false))
  }
}
