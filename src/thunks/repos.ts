import repos from "reducers/repos"
import { client } from "graphql/client"
import { githubQuery } from "graphql/githubQuery"
import { AppDispatch } from "store/types"

export const fetchRepos = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await client.query({ query: githubQuery })
      dispatch(repos.actions.setAllRepos(data.search.nodes))
      dispatch(repos.actions.setPinnedRepos(data.user.pinnedItems.nodes))
    } catch (error) {
      dispatch(repos.actions.setError(error))
    } finally {
      dispatch(repos.actions.setIsLoading(false))
    }
  }
}
