import {
  fixProjectTopic,
  sortTopics,
  topicsListFeatured,
  topicsListOther,
  projectType,
} from "utils/project-topics"
import { mockedProject } from "mocks/mockedProject"
import { mockedTopics } from "mocks/mockedTopics"

describe("fixProjectTopic function", () => {
  test("should return `JavaScript` for this string in dictionary", () => {
    expect(fixProjectTopic("javascript")).toEqual("JavaScript")
  })

  test("should return `Python` for this string not in dictionary", () => {
    expect(fixProjectTopic("python")).toEqual("Python")
  })

  test("should return `C++` for this string not in dictionary", () => {
    expect(fixProjectTopic("c++")).toEqual("C++")
  })
})

describe("sortTopics function", () => {
  test("should return the expected array", () => {
    expect(sortTopics(mockedTopics)).toEqual([
      "fullstack",
      "frontend",
      "javascript",
      "css",
      "c#",
    ])
  })
})

describe("topicsListFeatured function", () => {
  test("should return the expected array", () => {
    expect(topicsListFeatured(mockedProject)).toEqual([
      "javascript",
      "react",
      "redux",
      "nodejs",
      "express",
      "mongodb",
      "html",
      "css",
      "materialui",
      "api",
    ])
  })
})

describe("topicsListOther function", () => {
  test("should return the expected array", () => {
    expect(topicsListOther(mockedProject)).toEqual([
      "fullstack",
      "javascript",
      "react",
      "redux",
      "nodejs",
      "express",
      "mongodb",
      "html",
      "css",
      "materialui",
      "api",
    ])
  })
})

describe("projectType function", () => {
  test("should return the expected string", () => {
    expect(projectType(mockedProject)).toEqual("Fullstack web app")
  })
})
