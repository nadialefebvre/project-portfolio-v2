import { useFetchData } from 'thunks/test';
import repos from "reducers/repos"
import { AppDispatch } from "store/types"

export const fetchRepos = () => {
  return (dispatch: AppDispatch) => {
    const { loading, error, data } = useFetchData()

    if (loading) {
      dispatch(repos.actions.setIsLoading(true))
      console.log("I am loading")
    }

    if (error) {
      console.log("I am an error")
    }

    dispatch(repos.actions.setAllRepos(data.search.nodes))
    dispatch(repos.actions.setPinnedRepos(data.user.pinnedItems.nodes))
    dispatch(repos.actions.setIsLoading(false))
  }
}
