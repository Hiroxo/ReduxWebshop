# ELI Internship Project 2018

## Goals ##
* Learn how to build a single page application using React

## Acceptance criteria ##
* A page with a few different products.
* The ability to add a product to the cart (can use local storage).
* The ability to checkout using one of three pre-determined number combinations

   4242-4242-4242-4242  

   5555-5555-5555-4444  

   3782-822463-10005  

* Confirmation that the order was accepted.
* Must be built with React and CSS modules

## Gitflow Workflow ##

### Getting your environment ready ###
Navigate to the directory on your machine where you want to have your app in your terminal.

```
git clone https://github.com/eROI/intern-project-2018.git
cd your-folder-name
```

Add your app to your personal folder in the project.

### Creating a feature branch ###
```
git checkout develop
git checkout -b feature-branch
```

### Ready for code review ###
```
git commit -am "[INITIALS] module-name"
git push origin feature-branch
```

Go to Github to create a pull request on the `develop` repository from your `feature-branch`. Remember to name your pull request the same as your latest commit. The next day, start the same process over again.

## Creating an app with React ##

```sh
brew install yarn
yarn create react-app my-app
cd my-app
yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

### Further reading: ###
* [React Docs](https://reactjs.org/docs/hello-world.html)
* [Create React App repo](https://github.com/facebook/create-react-app)

## CSS Modules ##

To get started with CSS Modules, review this three-part series on CSS-Tricks:

1. [What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/)
2. [Getting Started with CSS Modules](https://css-tricks.com/css-modules-part-2-getting-started/)
3. [CSS Modules and React](https://css-tricks.com/css-modules-part-3-react/)