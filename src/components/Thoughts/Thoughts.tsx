import React, { useEffect } from "react"

import { fetchStories } from "thunks/stories"
import { Loader } from "components/Loader"
import { Error } from "components/Error"
import { Section } from "components/Section"
import { FeaturedThought } from "./FeaturedThought"
import { OtherThought } from "./OtherThought"
import { useAppDispatch } from "store/customHooks"
import {
  useStoriesState,
  useIsLoadingState,
  useErrorState,
} from "selectors/stories"

// maybe add a JSON file with data here as backup if api isn't working???

// solution if no thumbnail?

const Thoughts = () => {
  const dispatch = useAppDispatch()

  const stories = useStoriesState()
  const isLoading = useIsLoadingState()
  const error = useErrorState()

  useEffect(() => {
    dispatch(fetchStories())
  }, [dispatch])

  return isLoading || error !== "" ? (
    <Section title="My thoughts" extraTitle=" about code">
      {isLoading && <Loader />}
      {!isLoading && error !== "" && <Error item="thoughts" error={error} />}
    </Section>
  ) : (
    <Section
      title="My thoughts"
      extraTitle=" about code"
      featured={stories.slice(0, 2).map((story) => (
        <FeaturedThought thought={story} key={story.guid} />
      ))}
      subtitle="More thoughts"
      other={stories.slice(2).map((story) => (
        <OtherThought thought={story} key={story.guid} />
      ))}
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
