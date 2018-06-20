# ELI Internship Project 2018

### Goals
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

## Creating an app with React

```sh
sudo port install yarn
yarn create react-app my-app
cd my-app
yarn start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

#### Gitflow Workflow ####

## Getting your environment ready ##
```
git checkout master
git pull origin master
```

## Creating a feature branch ##
```
git checkout develop
git checkout -b feature-branch
```

## Ready for code review ##
```
git commit -am "[INITIALS] module-name"
git push origin feature-branch
```

Go to Github to create a pull request on the `develop` repository from your `feature-branch`. Remember to name your pull request the same as your latest commit. The next day, start the same process over again.