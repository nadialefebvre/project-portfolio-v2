import { mediumEndpoint } from "constants/medium"
import stories from "reducers/stories"
import { AppDispatch } from "store/types"

export const fetchStories = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(mediumEndpoint)
      const json = await res.json()
      dispatch(stories.actions.setStories(json.items))
    } catch (error) {
      dispatch(stories.actions.setError(error))
    } finally {
      dispatch(stories.actions.setIsLoading(false))
    }
  }
}
