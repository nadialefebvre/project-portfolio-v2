import { shortName, longNameInTitleCase } from "utils/project-name"

describe("project-name", () => {
  it("shortName should return `movie releases`", () => {
    expect(shortName("project-movie-releases")).toEqual("movie releases")
  })

  it("longNameInTitleCase should return `Project Movie Releases`", () => {
    expect(longNameInTitleCase("project-movie-releases")).toEqual(
      "Project Movie Releases"
    )
  })
})
