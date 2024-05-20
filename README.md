# @avanzu/kernel quickstart (basic)
This repository offers a minimal setup for building scalable (micro-)services with the [@avanzu/kernel](https://www.npmjs.com/package/@avanzu/kernel) package.

It includes an organized folder structure, Jest for unit testing, Nodemon for auto-reloading during development, and a preconfigured Dockerfile for containerization.

Designed as a quickstart template, it allows developers to fork and clone the repository, enabling rapid project setup with best practices and essential tools integrated.

## How to use

### Project setup

Clone this repository:
```bash
git clone https://github.com/avanzu/kernel-basic.git myproject
```
Enter your project folder:
```bash
cd myproject
```
Add the origin as upstream:
```bash
git remote add upstream https://github.com/avanzu/kernel-basic.git
```
Set the new origin remote URL:
```bash
git remote set-url origin https://github.com/your-username/your-new-repo.git
```
Install/update dependencies:
```bash
npm install
```
Update the `package.json` to your liking and commit changes:
```bash
git commit -am "Updated package.json, package-lock.json"
```
Push your project to origin:
```bash
git push
```
Now you're all set to start developing. See [Working with the project](#working-with-the-project) for details.

### Setting up your own base project

Clone this repository:
```bash
git clone https://github.com/avanzu/kernel-basic.git my-template
```
Enter your template folder:
```bash
cd my-template
```
Add the origin as upstream:
```bash
git remote add upstream https://github.com/avanzu/kernel-basic.git
```
Set the new origin remote URL:
```bash
git remote set-url origin https://github.com/your-username/my-template.git
```
Make adjustments to your template as needed and commit them:
```bash
git commit -am "adjusts template"
```
Push your changes to your remote
```bash
git push
```
To use your own template to setup a new project, follow the steps from [Project setup](#project-setup) but instead of using `https://github.com/avanzu/kernel-basic.git` take your own base project url.

### Working with the project
The project comes with some premade scripts.

 - `npm run build` - Transpiles the project into the `./dist` folder
 -  `npm start` - Runs the transpiled project normally without debugger or auto-reload
 - `npm test` - Runs unit (`*.test.ts`) and integration (`*.spec.ts`) tests using jest
 - `npm run test:unit` - Runs unit tests using jest
 - `npm run test:unit:watch` - Runs unit tests in watch mode without coverage reports
 - `npm run dev` - Runs the project via nodemon to enable auto reloading on code changes
 - `npm run debug` - Same as `npm run dev` with debugger enabled. <br/>The debug port can be controlled using a DEBUG_PORT environment variable or replaced with a static one, if you prefer.

