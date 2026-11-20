
<h1 align="center">Simple Homepage - Alarado | devChallenges</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/simple-hompage-alarado" target="_blank">Simple Homepage - Alarado </a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://developwebadnan.github.io/simple-homepage-master/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/DevelopWebAdnan/simple-homepage-master">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/simple-hompage-alarado">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)
<!-- - [Contact](#contact) -->
<!-- - [Acknowledgements](#acknowledgements) -->

<!-- OVERVIEW -->

## Overview

![screenshot](https://i.ibb.co.com/ZR8ZYtsG/screencapture-developwebadnan-github-io-2026-11-21-00-47-53.png)

<!--
Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- What have you learned/improved?
- Your wisdom? :)
-->
- I think I have improved my skills in DOM manipulation.
### What I learned

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge. -->
- I learned many things during this project starting from DOM manipulation. I knew about DOM manipulation, but never created complex designs like theme toggle or side navigation for DOM manipulation. So, these were very challenging phases during my creation of the site.
- I also learned while building side navigation for mobile devices that we may need to recreate an element to manipulate the element with DOM. This is because we cannot (at least I cannot) modify the style rules that we use in the style tag of our site with our js script, but can overwrite those when needed. For example, we may use themeToggle at the navbar of our site. We want to replace it with a hamburger-menu by using:
  - themeToggle.classList.add('hidden')
at our .js file to make the themeToggle disappear on smaller screens. But what if we want to make that same themeToggle reappear in a side navigation when we press on the hamburger-menu. Instead of using
  - themeToggle.classList.remove('hidden')
to make the themeToggler reappear when someone clicks on the hamburger-menu, I chose to recreate the same themeToggle. Because using
  - themeToggle.classList.remove('hidden')
will make the themeToggle reappear at the navbar, where it was designed by HTML code initially. We cannot (at least I cannot) change the position or in this case, layout of our website by DOM manipulation. This is the time when recreating the same themeToggle comes into play- just build the same themeToggle at the side navigation by HTML code. But we have remember to use different ids at the recreated element (themeToggle) that we have used when we created the element (the themeToggle) or else we won't be able to target the elements with getElementById when we want to, for the recreated element. Another thing to keep in mind is that using the above code samples will not work if we do not create a class with the classname hidden at our style tag in our html file. This is because the above code samples are used to add or remove the classname hidden from the themeToggle DOM element. So, creating a style like:
  - .hidden {display: hidden};
will be a great idea.
### Useful resources

<!--
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.
-->
- [Solution Editor | devchallenges.io | devChallenges](https://devchallenges.io/editor/solution/70265) - This helped me build the entire site by providing the necessary designs and resources. The needed colors, the pages of light-dark theme and side navigation were also helpful to create the site according to the provided designs.
### Built with

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.
- The features of the site include the following:
  - It is a simple homepage containing only the header section, which contains a navbar and a banner section.
  - The homepage is responsive on mobile, laptop and desktop devices.
  - Contains theme toggle feature at the navbar
  - Contains toggle side navigation feature at the navbar for small or mobile devices.
<!-- ## Acknowledgements -->

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

## Author

- Website [My Portfolio](https://developwebadnan.github.io/web-dev-portfolio/)
- GitHub [@DevelopWebAdnan](https://github.com/DevelopWebAdnan)
