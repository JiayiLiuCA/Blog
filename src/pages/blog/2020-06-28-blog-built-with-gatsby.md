---
templateKey: blog-post
title: Blog Built With Gatsby
date: 2020-06-28T02:28:01.881Z
description: Gatsby is a free and open source framework based on React that
  helps developers build blazing fast websites and apps. This blog shares some
  of the basics to start a Gatsby project. Learning the basics of React is
  recommended before reading.
tags:
  - gatsby
  - blog
---
## Why Gatsby?

I built a blog using [Hexo](https://hexo.io/) last year. There were various blog theme to choose from, and after trying a couple of them, I find it a bit difficult to personalize the layout and style. Basically anyone can build a beautiful blog from scratch, and deploy it within hours, which is great for most people. But when it comes to customization, either modify an existing theme or create their own one is not an easy job to do. Then I found Gatsby.

[Gatsby](https://www.gatsbyjs.org/) is a open source framework based on React. What I really like about Gatsby is the way it pulls data from any source like APIs, Databases, Markdown, etc. using GraphQL as default, and uses server-side rendering to create static websites. In addition, there is a thriving Gatsby community, and the plugin library also makes things a lot easier.

## Gatsby Starters

To make things easier, a [Gatsby Starter](https://www.gatsbyjs.org/starters/?v=2) is recommended. Modifying a starter is a great way to understand how Gatsby works. 

I used [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms) which comes with [Netlify CMS](https://www.netlifycms.org/) and [Netlify](https://www.netlify.com/) deployment configurations. Therefore the source code and data from my blogs can be stored in a Github repo, and I can write or modify blog posts using Netlify CMS in a browser with preview without doing anything locally.

## Gatsby Project Structure

Here I will introduce some basic structure/files in Gatsby to build a blog website. Full Gatsby Documentation is available [here](https://www.gatsbyjs.org/docs/).

- `/src/pages` folder contains pages that will be rendered into individual web pages. Each `.js` file (`404.js`, `index.js`) will be directly rendered into individual web page, while other files like Markdown will be queried using GraphQL, and rendered into pages through templates.
- `src/templates` stores the template files mentioned before.
- `src/components` is where the react components and 'css' files are.

- `/gatsby-config.js` is the configuration file for the project. Most times we modify this file is for plugins
- `/gatsby-node.js` is where we can use [Gatsby node APIs](https://www.gatsbyjs.org/docs/node-apis/) to create pages for Markdown files, or customize path for posts.

## 

