import React, { useEffect } from "react"

import { Loader } from "components"
import { Error } from "components"
import { Section } from "components"
import { FeaturedThought, OtherThought } from "components/Thoughts"
import { fetchStories } from "thunks/stories"
import { useAppDispatch } from "store/customHooks"
import {
  useStoriesState,
  useIsLoadingState,
  useErrorState,
} from "selectors/stories"

const Thoughts: React.FC = () => {
  const dispatch = useAppDispatch()

  const stories = useStoriesState()
  const isLoading = useIsLoadingState()
  const error = useErrorState()

  useEffect(() => {
    dispatch(fetchStories())
  }, [dispatch])

  if (isLoading) {
    return <Loader title="My thoughts" extraTitle=" about code" />
  }

  if (error !== "") {
    return (
      <Error
        text="There's an issue with the API fetching the thoughts."
        error={error}
        title="My thoughts"
        extraTitle=" about code"
      />
    )
  }

  return (
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
