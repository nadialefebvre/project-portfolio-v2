import { shortName, longNameInTitleCase } from "utils/project-name"

describe("short project name", () => {
  it("shortName should return `movie releases`", () => {
    expect(shortName("project-movie-releases")).toEqual("movie releases")
  })
})

describe("long project name", () => {
  it("longNameInTitleCase should return `Project Movie Releases`", () => {
    expect(longNameInTitleCase("project-movie-releases")).toEqual(
      "Project Movie Releases"
    )
  })
})

