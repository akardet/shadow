# Joblytics UI

This projects serves as the Frontend for Joblytics. It is built using [NextJS](https://nextjs.org/docs). 

## Installation

Clone the repo locally

```bash
git clone https://github.com/joblytics/joblytics-ui.git
```

Install dependencies and start the dev app
```bash
yarn && yarn dev
```

## File Stucture
You will find most of the code that you are looking for within the `./src` directory

### `./src/components`
This is where you will find the various components that compose the landing page. For simplicity I just broke up each of the differen sections into its own component for you to find easily. 

### `./src/pages`
This is how Nextjs builds different endpoints for your site. We only have a landing page right now so there aren't any other pages. You will find an `/api` folder. This is how Next creates headless APIs that you can call. You will find the MailChimp `/subscribe` api there for reference.

### `./src/styles`
This is where you will find global styles and styles such as Typography and Colors

### `./src/queries`
This was the start of implementing GraphQL. 