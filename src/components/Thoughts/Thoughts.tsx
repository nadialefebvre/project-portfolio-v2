import React, { useEffect } from "react"

import { useAppDispatch } from "store/customHooks"

import { fetchStories } from "thunks/stories"

import { FeaturedThought } from "./FeaturedThought"
import { OtherThought } from "./OtherThought"

import { Loader } from "components/Loader"
import { Section } from "components/Section"
import { useStoriesState, useIsLoadingState } from "selectors/stories"

// maybe add a JSON file with data here as backup if api isn't working???

// solution if no thumbnail?

// Medium feed has only the last 10 stories: what should I do with that?
// add link to all stories on Medium? no way to find how many stories have been published...
const Thoughts = () => {
  const dispatch = useAppDispatch()
  const isLoading = useIsLoadingState()
  const stories = useStoriesState()

  useEffect(() => {
    dispatch(fetchStories())
  }, [dispatch])

  // maybe try to find a way to fix the fact that it's updating very slowly compared to API...
  return (
    <Section
      title="My thoughts"
      extraTitle=" about code"
      featured={
        isLoading ? (
          <Loader item="featured thoughts" />
        ) : (
          stories
            .slice(0, 2)
            .map((story) => (
              <FeaturedThought thought={story} key={story.guid} />
            ))
        )
      }
      subtitle="More thoughts"
      other={
        isLoading ? (
          <Loader item="other thoughts" />
        ) : (
          stories
            .slice(2)
            .map((story) => (
              <OtherThought thought={story} key={story.guid} />
            ))
        )
      }
    />
  )
}

export default Thoughts

/*
If there's an issue with API, use this endpoint instead (https://v1.nocodeapi.com/nadialefebvre/medium/UWGgqYxfsNCHnlbd)
From here: https://app.nocodeapi.com/dashboard/api/medium
(and add key in .env file and use data from user.json for username)

But image (thumbnail) will need to be retrived from content directly (check response):
  const startSrc = thought.content.indexOf(`src=`) + 5
  const endSrc = thought.content.indexOf(`">`)
  console.log(thought.content.slice(startSrc, endSrc))

Otherwise, need to find a way to convert https://medium.com/feed/@nadialefebvredev in JSON...
*/
