import React from "react"

import { render, screen } from "@testing-library/react"

import FeaturedThought from "./FeaturedThought"
import { formattedDate } from "utils/formattedDate"
import { StoryInterface } from "components/Thoughts"

const thought: StoryInterface = {
  title: "I wrote a mocked story",
  pubDate: "2023-01-09 15:27:24",
  link: "https://nadialefebvredev.medium.com/i-wrote-a-mocked-story-123?source=rss-4a366fcaabd4------2",
  guid: "https://medium.com/p/123",
  author: "Nadia Lefebvre",
  thumbnail: "https://cdn-images-1.medium.com/max/1024/0*MWZNUI_GoDUfvANG",
  description:
    '\n<figure><img alt="Rock art photo by Rabah Al Shammary on Unsplash" src="https://cdn-images-1.medium.com/max/1024/0*MWZNUI_GoDUfvANG"></figure><p>This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=620c998688fe" width="1" height="1" alt="">\n',
  content:
    '\n<figure><img alt="Rock art photo by Rabah Al Shammary on Unsplash" src="https://cdn-images-1.medium.com/max/1024/0*MWZNUI_GoDUfvANG"></figure><p>This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me. This is a mocked story written by me.</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=620c998688fe" width="1" height="1" alt="">\n',
  enclosure: {},
  categories: ["topic-one", "topic-two", "topic-three"],
}

describe("FeaturedThought component", () => {
  test("should render the thought image, title, text and tags", () => {
    render(<FeaturedThought thought={thought} />)
    const image = screen.getByAltText(thought.title)
    const date = screen.getByText(formattedDate(thought.pubDate))
    const title = screen.getByText(thought.title)
    const text = screen.getByText(/^This is a mocked story/i)
    const tags = screen.getAllByText(/topic/i)
    expect(image).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(tags.length).toBe(3)
  })
})
