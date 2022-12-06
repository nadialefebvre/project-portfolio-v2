import articles from "reducers/articles"

import data from "data/user.json"

import { AppDispatch } from "store/types"

export const fetchArticles = () => {
  return (dispatch: AppDispatch) => {
    dispatch(articles.actions.setIsLoading(true))
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${data.infos.usernameMedium}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(articles.actions.setArticles(res.items))
        dispatch(articles.actions.setIsLoading(false))
      })
      .catch((err) => console.log(err))
  }
}
