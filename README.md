# LocalCast Weather

> Learn Angular, Angular Material, RxJS fundementals with LocalCast Weather using the Kanban method.

> View live demo: https://localcast-weather.duluca.now.sh/

[![CircleCI](https://circleci.com/gh/duluca/local-weather-app/tree/master.svg?style=svg)](https://circleci.com/gh/duluca/local-weather-app/tree/master)
[![DeepScan grade](https://deepscan.io/api/teams/1906/projects/5034/branches/39254/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1906&pid=5034&bid=39254)
[![Coverage Status](https://coveralls.io/repos/github/duluca/local-weather-app/badge.svg?branch=master)](https://coveralls.io/github/duluca/local-weather-app?branch=master)
[![Kanban Board](https://img.shields.io/badge/Kanban-View%20Project%20Status-blue)](https://github.com/duluca/local-weather-app/projects/1)

![mat-style4](https://user-images.githubusercontent.com/822159/56008986-210ad880-5cac-11e9-812f-6514b2dc0f97.PNG)

## Get the book

LocalCast Weather has been developed in support of my book _Angular for Enterprise-Ready Web Applications_. You can get the book at any major bookstore or find the links at http://AngularForEnterprise.com.

Watch the talk on `Architecture for Scalable Angular Apps` on [Pluralsight](https://www.pluralsight.com/courses/angular-denver-2019-session-28).

Check out the slides for `Architecture for Scalable Angular Apps` _free_ at [Slides.com](https://slides.com/doguhanuluca/architecture-for-scalable-angular-apps#).

Check out **LemonMart**, an Angular Grocery Store LOB App implemented with a Router-first architecture with common recipes and patterns at https://github.com/duluca/lemon-mart. You can also use **LemonMart** as a template project to start your own app.

Build, debug and publish Docker images with [**npm Scripts for Docker**](bit.ly/npmScriptsForDocker) and achieve Blue-Green deployments on AWS Fargate with [**npm Scripts for AWS**](bit.ly/npmScriptsForAWS).

## Build

- `npm run build:prod` to build a production optimized version of the app.
- `npm run docker:debug` to run tests and build a containerized version of the app.

## Developers

This app was developed to demonstrate Angular fundementals, unit testing, and different techniques for building Angular apps using reactive patterns. The app is a good blueprint if you intend to build largely a single screen app experience. Questions? Consider creating an issue on this repo and buying my book at http://AngularForEnterprise.com.

### Pre-requisites

- Do NOT install `@angular/cli` or `typescript` globally to avoid version mismatch issues across multiple projects.
  - Note: When creating new projects in the future, execute `npx @angular/cli new app-name --routing` to create a new Angular app with basic routing wired.
  - If you have trouble with this command, try `npx -p @angular/cli new app-name --routing`
- To run `ng` commands from within the project directory, preprend `npx` to commands, like `npx ng build`.
- To continue using `ng` without having to prepend `npx`, configure shell autofallback as described here: https://www.npmjs.com/package/npx#shell-auto-fallback.

### Adapting the template

- Fork and clone this repo.
- Rename the repo on GitHub to match the name of your project.
- Search and replace references to `lemon-mart` with your project name and git repo.
- Remove `manager`, `pos`, and `inventory` folders and references to them from `app-routing.module.ts`.
- You may modify `profile.component.ts` and `view-user.component.ts` under the `user` folder to fit your needs.
- Edit `lemonmart-theme.scss` to match your desired color scheme.
- Now you may begin implementing your own feature modules.
  - Questions? Consider creating an issue on this repo and buying my book at http://AngularForEnterprise.com.

### During Development

- Run `npm start` for a developmenet web server.
- Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.
  - Note that the port is different than the default Angular port of `4200` intentionally, so you can run test projects or proof of concepts side-by-side without the hassle of specifiying a new port.
- Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Further help with Angular CLI

> To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Full-Stack Setup with Docker Compose and Deploying to AWS

See the example project here https://github.com/duluca/lemon-mart-server

## Deprecations

### _Waffle.io_

Sadly Waffle.io no longer exists. I recommend using GitHub Projects as a free replacement.

### _Using Zeit Now with Docker_

Unfortunately Zeit Now no longer allows publication of arbitrary `Dockerfile` images. Using Zeit v2 you can publish the output of your `dist` folder and still be able to host your application for free.

A replacement for publishing arbitrary Docker images would be a new service called [Google Cloud Run](https://cloud.google.com/run/). A sample command would look like `gcloud beta run deploy --image localcast-weather`.
