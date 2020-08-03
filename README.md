# Overview

This site is build with the [11ty](https://www.11ty.io/) static site generator.

# How to run and develop locally

After installing the dependencies, source files can be edited in the `site/` folder and viewed on http://localhost:8080

```shell
npm install
npm run build:dev
npm run dev
```

# How to update the live production site

Any push to the master branch on Github will notify Netlify and trigger the `npm run build:prod` script. Simply make changes to the files under `site/`, commit them to master, and push to Github.

The `npm run build:prod` command can also be run locally to check if everything looks and works as expected before pushing to master.
