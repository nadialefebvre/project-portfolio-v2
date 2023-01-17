import { shortName, longNameInTitleCase } from "utils/project-name"

describe("shortName function", () => {
  test("should return `movie releases`", () => {
    expect(shortName("project-movie-releases")).toEqual("movie releases")
  })
})

describe("longNameInTitleCase function", () => {
  test("should return `Project Movie Releases`", () => {
    expect(longNameInTitleCase("project-movie-releases")).toEqual(
      "Project Movie Releases"
    )
  })
})
