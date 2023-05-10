[![Netlify Status](https://api.netlify.com/api/v1/badges/3e7bc5d3-cc48-41fb-addb-201bc636f43f/deploy-status)](https://app.netlify.com/sites/nadialefebvredev/deploys) [![Tests](https://github.com/nadialefebvre/project-portfolio-v2/actions/workflows/tests.yml/badge.svg)](https://github.com/nadialefebvre/project-portfolio-v2/actions/workflows/tests.yml) [![Lint](https://github.com/nadialefebvre/project-portfolio-v2/actions/workflows/lint.yml/badge.svg)](https://github.com/nadialefebvre/project-portfolio-v2/actions/workflows/lint.yml)

# Project Portfolio v2

Personal project to showcase all my projects and thoughts about code. (January 2023) This is a makeover of a previous project, [Portfolio v1](https://github.com/nadialefebvre/project-portfolio-v1), which was made purely with HTML and CSS.

I decided to make a second version so the project itself shows my frontend development skills and my ability to learn what's necessary for a project.

## Tech stack

- **React**

  - I built it with **React** 18.

- **TypeScript**

  - I used **TypeScript** to practice more, having learned JavaScript before.

- **Redux**

  - Even if it is a simple webpage, I decided to use **Redux** to store data received from APIs.

- **API**

  - I had to fetch data from two sources: Medium and GitHub. Medium doesn't provide an API but I used a RSStoJSON converter to get an **API** endpoint I could use as for the `fetch`.

- **GraphQL API**

  - GitHub has a REST API but it's a bit limited: there's not way to fetch specifically the pinned repositories. I decided to use GitHub's **GraphQL API** because it made it possible, but also because it's possible with GraphQL to query only the data needed, and it was a good opportunity to use new tech I never used before.

- **Apollo Client**

  - I used **Apollo Client**'s library to manage my request with GraphQL.

- **Styled components**

  - I chose to use **Styled components** for the styling part.

- **Figma**

  - I wanted to make it look the closest possible to the original (Portolio v1) based on a **Figma** design.

- **Jest**

  - I added unit tests with **Jest** for most of my code.

- **GitHub Actions**
  - I built a basic workflow in **GitHub Actions** to check if all tests pass when I push my code.

## Comments

Relying on APIs instead of storing static data in some local file made it necessary to handle possible waiting time and error, so I added `Loader` and `Error` components.

I made sure that all other data, for example the list of skills or all user-related data (email, name, etc.) was not directly in the code but in `.json` files for mapping or in `.ts` files for reference.

I broke down my code in simple and small but meaningful units so the code should be easier to read while staying easy to browse in.

I practiced refactoring my code to make it better. Having unit tests helped with that because it would catch it issues in refactored code.

I tried to read about the best practices and apply them along the way, even if opinions are very diverse about what's best to do.

For handling of potential errors, I used `try`/`catch` method for my requests but I also added an `ErrorBoundary` component to catch errors at runtime that could crash the whole page. An error message is instead displayed. I used it for the two components relying on external data (projects and thoughts).

## View it live

Project deployed here: [Nadia Lefebvre | Portfolio](https://nadialefebvre.dev/)

<div align="center">
  <img src="screenshot.jpg" />
</div>

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.

#### `npm test`

Launches the test runner in the interactive watch mode.
