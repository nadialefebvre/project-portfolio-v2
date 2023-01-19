import data from "mapping-data/user.json"
import { RepoInterface } from "components/Projects"

// need to fix function: code commented out won't give the expected result
export const mockedProject: RepoInterface = {
  id: "123",
  name: "project-mocked",
  description: "This is a mocked project",
  url: `https://github.com/${data.infos.usernameGitHub}/mocked-project`,
  homepageUrl: "https://mocked-project.com",
  // repositoryTopics: {
  //   nodes: [
  //     {
  //       topic: {
  //         name: "css",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "express",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "html",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "javascript",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "mongodb",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "nodejs",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "react",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "react-router",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "redux",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "materialui",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "backend",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "frontend",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "fullstack",
  //       },
  //     },
  //     {
  //       topic: {
  //         name: "api",
  //       },
  //     },
  //   ],
  // },
  repositoryTopics: {
    nodes: [
      {
        topic: {
          name: "css",
        },
      },
      {
        topic: {
          name: "express",
        },
      },
      {
        topic: {
          name: "html",
        },
      },
      {
        topic: {
          name: "javascript",
        },
      },
      {
        topic: {
          name: "mongodb",
        },
      },
      {
        topic: {
          name: "nodejs",
        },
      },
      {
        topic: {
          name: "react",
        },
      },
      {
        topic: {
          name: "redux",
        },
      },
      {
        topic: {
          name: "fullstack",
        },
      },
      {
        topic: {
          name: "materialui",
        },
      },
      {
        topic: {
          name: "api",
        },
      },
      {
        topic: {
          name: "backend",
        },
      },
      {
        topic: {
          name: "frontend",
        },
      },
    ],
  },
  createdAt: "2023-01-15T15:41:48Z",
  defaultBranchRef: {
    name: "master",
  },
}
