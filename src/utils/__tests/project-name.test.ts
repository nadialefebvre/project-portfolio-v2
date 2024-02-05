import { longNameInTitleCase, shortName } from "utils/project-name"

describe("shortName function", () => {
  test("should remove `project-` and replace all `-` with space in the name", () => {
    expect(shortName("project-movie-releases")).toEqual("movie releases")
  })
})

describe("longNameInTitleCase function", () => {
  test("should convert the name to title case", () => {
    expect(longNameInTitleCase("project-movie-releases")).toEqual(
      "Project Movie Releases"
    )
  })

  test("should handle names with numbers", () => {
    expect(longNameInTitleCase("project-react-2")).toEqual("Project React 2")
  })
})
