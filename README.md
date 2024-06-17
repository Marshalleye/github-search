<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/Marshalleye/github-search">
    <img src="/assets/images/github-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GitHub Repo Search</h3>

  <p align="center">
    A React Native/Expo application to search for GitHub repositories using the GitHub API.
    <br />
    ·
    <a href="https://github.com/Marshalleye/github-search/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Marshalleye/github-search/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#code-structure">Code Structure</a></li>
    <li><a href="#contact">Contact</a></li>
    </ol>
</details>

## About The Project

![App Screenshot](/screenshot.jpg)

GitHub Repo Search is a React Native/Expo application that allows users to search for GitHub repositories using the GitHub API. The app
includes features like debounced search input, repository details view, infinite scrolling for search results, and a floating button to open
repository links in an in-app browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

1. Get a free API Key at [https://github.com](https://github.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Marshalleye/github-search.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```js
   EXPO_PUBLIC_GITHUB_ACCESS_TOKEN = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Search for Repositories:

- Enter a repository name in the search input field.
- The search results will be displayed as you type, with a debounce delay of 500ms.

2. View Repository Details:

- Tap on a repository from the search results to view detailed information.

3. Infinite Scrolling:

- Scroll to the bottom of the search results to load more repositories.

4. Open Repository in Browser:

- Tap the floating button to open the selected repository in an in-app browser.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Code Structure

- **'/components'**: Contains reusable components like **'SearchInput'**, **'RepoList'**, **'GradientBackground'**, etc.
- **'/screens'**: Contains screen components for different views like **'SearchScreen'**, **'DetailsScreen'**.
- **'/hooks'**: Contains custom hooks like **'useDebounce'**.
- **'/assets'**: Contains static assets like images and icons.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Nazar Kapushchak

Project Link: [https://github.com/Marshalleye/github-search](https://github.com/Marshalleye/github-search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
