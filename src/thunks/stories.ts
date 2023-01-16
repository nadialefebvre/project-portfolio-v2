import stories from "reducers/stories"
import { mediumEndpoint } from "constants/medium"
import { AppDispatch } from "store/types"

export const fetchStories = () => {
  return (dispatch: AppDispatch) => {
    dispatch(stories.actions.setIsLoading(true))
    fetch(mediumEndpoint)
      .then((res) => res.json())
      .then((res) => {
        dispatch(stories.actions.setStories(res.items))
        dispatch(stories.actions.setIsLoading(false))
      })
      .catch((error) => {
        dispatch(stories.actions.setError(error))
        console.error(error)
      })
  }
}
