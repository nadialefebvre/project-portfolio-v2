import React, { useState } from "react"

import data from "data/user.json"

import { FeaturedThought } from "./FeaturedThought"
import { OtherThought } from "./OtherThought"

import { Article } from "./Thoughts.types"

import { Section } from "components/Section"

// maybe add a JSON file with data here as backup if api isn't working???

// solution if no thumbnail?

// Medium feed has only the last 10 articles: what should I do with that?
// add link to all stories on Medium? no way to find how many articles have been published...
const Thoughts = () => {
  const [articles, setArticles] = useState<Article[]>()

  if (articles === undefined) {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${data.infos.usernameMedium}`
    )
      .then((res) => res.json())
      .then((res) => setArticles(res.items))
      .catch((err) => console.log(err))
  } else {
    // console.log("articles=", articles)
  }

  // maybe try to find a way to fix the fact that it's updating very slowly compared to API...
  return (
    <Section
      title="My thoughts"
      extraTitle=" about code"
      featured={
        articles !== undefined &&
        articles
          .slice(0, 2)
          .map((article: Article) => (
            <FeaturedThought thought={article} key={article.guid} />
          ))
      }
      subtitle="More thoughts"
      other={
        articles !== undefined &&
        articles
          .slice(2)
          .map((article: Article) => (
            <OtherThought thought={article} key={article.guid} />
          ))
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
