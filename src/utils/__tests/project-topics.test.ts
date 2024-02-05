import { mockedProject } from "mocks/mockedProject"
import {
  fixSingleProjectTopic,
  setFeaturedProjectTopicsList,
  setOtherProjectTopicsList,
  setProjectTitle,
} from "utils/project-topics"

describe("fixSingleProjectTopic function", () => {
  test("should return `JavaScript` for this string in dictionary", () => {
    expect(fixSingleProjectTopic("javascript")).toEqual("JavaScript")
  })

  test("should return `Python` for this string not in dictionary", () => {
    expect(fixSingleProjectTopic("python")).toEqual("Python")
  })

  test("should return `C++` for this string not in dictionary", () => {
    expect(fixSingleProjectTopic("c++")).toEqual("C++")
  })
})

describe("setFeaturedProjectTopicsList function", () => {
  test("should return the expected array", () => {
    expect(setFeaturedProjectTopicsList(mockedProject)).toEqual([
      "javascript",
      "react",
      "redux",
      "react-router",
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

describe("setOtherProjectTopicsList function", () => {
  test("should return the expected array", () => {
    expect(setOtherProjectTopicsList(mockedProject)).toEqual([
      "fullstack",
      "javascript",
      "react",
      "redux",
      "react-router",
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

describe("setProjectTitle function", () => {
  test("should return the expected string", () => {
    expect(setProjectTitle(mockedProject)).toEqual("Fullstack web app")
  })
})
