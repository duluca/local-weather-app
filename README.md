# LocalCast Weather
> Learn Angular, Angular Material, RxJS fundementals with LocalCast Weather using the Kanban method.

[![CircleCI](https://circleci.com/gh/duluca/local-weather-app.svg?style=svg)](https://circleci.com/gh/duluca/local-weather-app)
[![DeepScan grade](https://deepscan.io/api/teams/1906/projects/5034/branches/39254/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1906&pid=5034&bid=39254)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/duluca/local-weather-app.svg?columns=all)](https://waffle.io/duluca/local-weather-app)

![mat-style4](https://user-images.githubusercontent.com/822159/56008986-210ad880-5cac-11e9-812f-6514b2dc0f97.PNG)

## Get the book
LocalCast Weather has been developed in support of my book _Angular 6 for Enterprise-Ready Web Applications_. You can get the book on http://AngularForEnterprise.com.

Check out **LemonMart**, an Angular 6 Grocery Store LOB App implemented with a Router-first architecture, at https://github.com/duluca/lemon-mart.

Build, debug and publish Docker images with [**npm Scripts for Docker**](bit.ly/npmScriptsForDocker) and achieve Blue-Green deployments on AWS Fargate with [**npm Scripts for AWS**](bit.ly/npmScriptsForAWS).

## Build
- `npm run build:prod` to build a production optimized version of the app.
- `npm run docker:debug` to run tests and build a containerized version of the app.

## Developers
### Pre-requisites
- Do NOT install `@angular/cli` or `typescript` globally to avoid version mismatch issues across multiple projects.
- Run `npx @angular/cli new app-name --routing` to create a new Angular app with basic routing wired.
  - If you have trouble with this command, try `npx -p @angular/cli new app-name --routing`
- To run `ng` commands from within the project directory, preprend `npx` to commands, like `npx ng build`.
- To continue using `ng` without having to prepend `npx`, configure shell autofallback as described here: https://www.npmjs.com/package/npx#shell-auto-fallback.
### During Development
- Run `npm start` for a developmenet server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.
- Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
### Code scaffolding
- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
### Further help with Angular CLI
> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
### Full-Stack Setup with Docker Compose and Deploying to AWS
See my example project here https://github.com/excellalabs/minimal-mean
