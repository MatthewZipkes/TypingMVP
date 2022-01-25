# Typing Game

<br />
<br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contributor">Contributor</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#module-break-down">Module Break Down</a></li>
    <li><a href="#next-goals">Next Goals</a></li>
  </ol>
</details>
<br>

<!-- CONTACT -->

# Contributor

### Matthew Zipkes - matthewzipkes@gmail.com

<a href="https://imgur.com/tegDTCR"><img src="https://i.imgur.com/tegDTCR.jpg" height='200px' title="source: imgur.com" /></a>

[![linkedin-shield]][matthew-linkedin]
[![github-shield]][matthew-github]
<br>

<br>

<!-- ABOUT THE PROJECT -->

# About The Project

<br>
<div align="center">
<a href="https://gyazo.com/96d9a0b99d4b58717b6206ca889b051d"><img src="https://i.gyazo.com/96d9a0b99d4b58717b6206ca889b051d.gif" alt="Image from Gyazo" width="1280"/></a>
</div><br><br>

Typing Game was a two-day challenge to create a Minimum Viable Product from an empty repo to a a Full Stack Application. Emphasis was placed on learning one new technology and to incorporate that into the project. I had planned on use websockets to create a live room experience to play against other users, but as the timeline approached I had to pivot and focus on making it a single player game. I used React Router as my new Technology to create a better UI experience when switching between pages. Typing Game is a web-application project that will continue to grow and develop towards a polished product.

<br>

# Overview

<br>
<br>
> "This project became a dream of mine when I was a college student first assessing incoming beginner band students. My hand was cramped from hours of writing notes on a student's sheet and I yearned to assess students more appropriately without the guilt of writing down a 1 out of 5 on their dream instrument. This thought remained with me into my official career as a band director and the process of assessing incoming beginners had not been improved. Band programs use an outdated system that requires families to register their students through a third-party application, require instrument assessors to use pencil and paper for student scores, and a final checkout process on a band program management application that the director must manually fill in the student's registered information and lastly their assessed scores. With this project, I aim to support hard-working directors by providing a modernized solution to this yearly process and relieving them greatly of the stress of this process. Allowing more time for the excitement and joy of placing a student on their very first band instrument."
<br>

### Tech Stack

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Express](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [Mongo](https://www.mongodb.com/)

<br>

<!-- GETTING STARTED -->

# Getting Started

To explore the project, follow the instructions below.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```
- MongoDB 
  ```sh
  Select your oporating system and follow the instructions to download https://docs.mongodb.com/manual/administration/install-community/
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/TypingMVP.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Compile Webpack
   ```sh
    npm run build
   ```
4. Run express server on port: 3030
   ```sh
    npm run server
   ```
5. Navigate to `localhost:3000` in your browser

<br><br>

# Module Break Down

> ## Page Navigation
>
> React Router

<br>
<div align="center">
<a href="https://gyazo.com/737d0db8bf950e3aba31724dd40e5495"><img src="https://i.gyazo.com/737d0db8bf950e3aba31724dd40e5495.gif" alt="Image from Gyazo" width="1280"/></a>
</div><br><br>

React Router was implemented to create a seamless UI experience for users.
<br>
> ## Typing Prompt
>
> [quotable](https://github.com/lukePeavey/quotable)

<br>
<div align="center">
<a href="https://gyazo.com/6d7a59f8cf046207fd50ffdbfc26a0c1"><img src="https://i.gyazo.com/6d7a59f8cf046207fd50ffdbfc26a0c1.gif" alt="Image from Gyazo" width="1280"/></a>
</div><br><br>

I used a third party API to generate the qoutes due to time constraint and it allowed me to specify how many characters I want in each qoute which was nice for the MVP of this project.
<br>

# Landing Page

This page provides a space for the user to read what the application is about and to subscribe to the web application so that when there are updates to it, they will get an email notifying them.
<br><br>

<div align="center">
<a href="https://gyazo.com/e3462dd73529d303b724dd15275abecc"><img src="https://i.gyazo.com/e3462dd73529d303b724dd15275abecc.gif" alt="Image from Gyazo" width="1280"/></a>
</div><br><br>

## Next Goals
- Google Firebase User Authentication
- Persist User Log In Through Local Storage
- Create rooms for users to play aginst eachother
- Create my own Prompts so I am not calling to a third party API
- Store users username, high score, and average score
- Create a leaderboard to incentivize users to keep playing

<!-- Contributor Links -->

[matthew-linkedin]: https://www.linkedin.com/in/matthewzipkes/
[matthew-github]: hhttps://github.com/MatthewZipkes
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github
