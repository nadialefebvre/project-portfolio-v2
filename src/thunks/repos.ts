import repos from "reducers/repos"

import { AppDispatch } from "store/types"

import { githubQuery } from "utils/github-query"

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const fetchRepos = () => {
  return (dispatch: AppDispatch) => {
    dispatch(repos.actions.setIsLoading(true))
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: githubQuery,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(repos.actions.setAllRepos(res.data.search.nodes))
        dispatch(repos.actions.setPinnedRepos(res.data.user.pinnedItems.nodes))
        dispatch(repos.actions.setIsLoading(false))
      })
      .catch((err) => console.log(err))
  }
}
