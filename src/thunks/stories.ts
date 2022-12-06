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
      .catch((err) => console.log(err))
  }
}
