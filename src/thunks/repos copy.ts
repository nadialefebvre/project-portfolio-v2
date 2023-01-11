import repos from "reducers/repos"

import { AppDispatch } from "store/types"

import { githubQuery } from "utils/github-query"

import { githubEndpoint, GITHUB_TOKEN } from "constants/github"

export const fetchRepos = () => {
  return (dispatch: AppDispatch) => {
    dispatch(repos.actions.setIsLoading(true))
    fetch(githubEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: githubQuery,
      }),
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((res) => {
        console.log(res)
        dispatch(repos.actions.setAllRepos(res.data.search.nodes))
        dispatch(repos.actions.setPinnedRepos(res.data.user.pinnedItems.nodes))
        dispatch(repos.actions.setIsLoading(false))
      })
      .catch((err) => console.log(err))
  }
}
