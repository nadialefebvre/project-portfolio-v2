/*
import repos from "reducers/repos"

import { AppDispatch } from "store/types"

import { githubQuery } from "utils/github-query"

import { useQuery } from "@apollo/client"
import { useFetchData } from 'thunks/test';

export const fetchRepos = () => {
  return (dispatch: AppDispatch) => {
    const { loading, error, data } = useFetchData()

    if (loading) {
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
*/

import { useFetchData } from 'thunks/test';
import repos from "reducers/repos"
import { AppDispatch } from "store/types"

export const fetchRepos = () => {
  return (dispatch: AppDispatch) => {
    const { loading, error, data } = useFetchData()

    if (loading) {
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
