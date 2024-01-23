# LocalCast Weather

> Learn Angular, Angular Material, RxJS, and Signal fundamentals with LocalCast Weather using the Kanban method.
>
>  Discover stage management with NgRx and SignalStore.

> View live demo: [https://local-weather-app-duluca.vercel.app](https://www.localcastweather.app/)

> See [Changes](#changes) section for important or breaking changes made to the project.

![Angular Version](https://img.shields.io/badge/angular-v17-326839)
[![CircleCI](https://circleci.com/gh/duluca/local-weather-app/tree/main.svg?style=svg)](https://circleci.com/gh/duluca/local-weather-app/tree/main)
[![DeepScan grade](https://deepscan.io/api/teams/1906/projects/5034/branches/39254/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1906&pid=5034&bid=39254)
[![Coverage Status](https://coveralls.io/repos/github/duluca/local-weather-app/badge.svg?branch=main)](https://coveralls.io/github/duluca/local-weather-app?branch=main)
[![Kanban Board](https://img.shields.io/badge/Kanban-View%20Project%20Status-blue)](https://github.com/duluca/local-weather-app/projects/1)

![mat-style4](https://github.com/duluca/local-weather-app/assets/822159/b0ea8b3e-144e-4033-94d8-d3fad597c3da)

> Chapter specific examples within `projects` have been renamed, from a `ch` format to `stage`. e.g. `projects/ch2` would now be located under `projects/stage2`.

## Get the book

LocalCast Weather has been developed to support my book _Angular for Enterprise Applications_. You can get the book at any major bookstore or find the links at https://AngularForEnterprise.com.

Watch the talk on `Architecture for Scalable Angular Apps` on [Pluralsight](https://www.pluralsight.com/courses/angular-denver-2019-session-28).

Check out the slides for `Architecture for Scalable Angular Apps` _free_ at [Slides.com](https://slides.com/doguhanuluca/architecture-for-scalable-angular-apps#).

Check out **LemonMart**, an Angular Grocery Store LOB App implemented with a Router-first architecture with common recipes and patterns at https://github.com/duluca/lemon-mart. You can also use **LemonMart** as a template project to start your own app.

Build, debug and publish Docker images with [**npm Scripts for Docker**](bit.ly/npmScriptsForDocker) and achieve Blue-Green deployments on AWS Fargate with [**npm Scripts for AWS**](bit.ly/npmScriptsForAWS).

## Build

- `npm run build:prod` is used to build a production-optimized version of the app.
- `npm run docker:debug` to run tests and build a containerized version of the app.

## Developers

This app was developed to demonstrate Angular fundamentals, unit testing, and different techniques for building Angular apps using reactive patterns. The app is a good blueprint if you intend to build a largely single-screen app experience. Questions? Consider creating an issue on this repo and buying my book at https://AngularForEnterprise.com.

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
- To fit your needs, you may modify `profile.component.ts` and `view-user.component.ts` under the `user` folder.
- Edit `lemonmart-theme.scss` to match your desired color scheme.
- Now you may begin implementing your own feature modules.
  - Questions? Consider creating an issue on this repo and buying my book at http://AngularForEnterprise.com.

### During Development

- Run `npm start` for a development web server.
- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `npm run e2e` to execute the end-to-end tests via [Cypress](https://cypress.io).

### Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Further help with Angular CLI

> To get more help on the Angular CLI, use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Full-Stack Setup with Docker Compose and Deploying to AWS

See the example project here https://github.com/duluca/lemon-mart-server

# Changes

Changes are inevitable to keep the project up-to-date with libraries, tools, patterns and practices. Below are some notable changes that differ from the 1st, 2nd, and 3rd edition of my book.

## Angular 17

- Moved to control flow syntax
- Implemented a nearly observable and subscribe-free version using SignalStore in `projects/signal-store`

## Angular 16

- Renamed `projects` from `ch2` format to `stage2`, so they make sense in the 3rd edition.
- Replaced tslint with eslint
- Replaced protractor with cypress for e2e, added tests
- Moved to Standalone configuration
- Plan to add @ngrx/component-store example

## Angular 13-15

- Updated `dev-norms.md`
- Introduced `ngx-mock` to supplement `angular-unit-test-helper` for mocking components
- Replaced `@angular/flex-layout` with `@ngbracket/ngx-layout`
- Removed `jsbeautify` and `import-sort` in prep for migration to eslint
- Disabled code coverage in prep for migration to Jest
- Updated `style` and `lint` scripts
- Updated `config.yml` for CircleCI updates

## Angular 12 configuration changes

- Enabled bundle budgets
- Introduction `development` configuration
- Made `production` configuration the default one
- Added `npm run watch` command
- Strict settings on by default

## Augury

- `Augury` extension is deprecated. Get to use `Angular DevTools` instead: https://angular.io/guide/devtools.

## Renamed `master` branch to `main`

If you already have a `master` branch locally, then execute the following commands:

```
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```

## _Now_

- `now` package has been replaced with `vercel`.
- CircleCI variable renamed from `$NOW_TOKEN` to `$VERCEL_TOKEN`.
- `npm run now:publish` renamed to `npm run vercel:publish`.
- `now` v1 configuration with docker deployment is removed.

## _Waffle.io_

Sadly Waffle.io no longer exists. I recommend using GitHub Projects as a free replacement.

## _Using Zeit Now with Docker_

Unfortunately, Zeit Now no longer allows the publication of arbitrary `Dockerfile` images. Using Zeit v2 you can publish the output of your `dist` folder and still be able to host your application for free.

~~A replacement for publishing arbitrary Docker images would be a new service called [Google Cloud Run](https://cloud.google.com/run/). A sample command would look like `gcloud beta run deploy --image localcast-weather`.~~

## _Using Google Cloud Run with Docker_
As of January 2024, Cloud Run has deprecated private container repositories, which breaks its integration with the `docker` command. This seemingly subtle change moves Cloud Run from an easy-to-use to a complicated-cloud-service category. For this reason, it has been removed from the book.
