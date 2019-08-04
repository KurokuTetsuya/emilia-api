<h1 align="center">Emilia-Api.js</h1>

<p align="center">
  <a href="#">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/KurokuTetsuya/emilia-api.js.svg">
  </a>
  <a href='https://circleci.com/gh/KurokuTetsuya/emilia-api.js/'>
    <img src='https://circleci.com/gh/KurokuTetsuya/emilia-api.js/tree/master.svg?style=svg' alt='CircleCI Status' />
  </a>
  <a href='https://travis-ci.org/KurokuTetsuya/emilia-api.js'>
    <img alt="TravisCI Status" src="https://travis-ci.org/KurokuTetsuya/emilia-api.js.svg?branch=master">
  </a>
  <a href='https://github.com/KurokuTetsuya/emilia-api.js/blob/master/package.json'>
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/KurokuTetsuya/emilia-api.js.svg">
  </a>
</p>

Official API wrapper for [Emilia API](https://emilia-api.glitch.me)

## Getting started
Installing...
```bash
npm install emilia-api.js --save
``` 
Initializing...
```js
const EmiliaAPI = require("emilia-api.js");
const emiliaApi = new EmiliaAPI("Your token here");
``` 
Note: When you see a paremeter like this: `(value: DataType)` I am just defining the type of value it takes. That does not mean it's an object. If it has {} around it then it is an object.

## All functions

### Manipulation Images API
```js
emiliaApi.manipulationImages.pokemon3000Years(image: String<Url>);
```
```js
emiliaApi.manipulationImages.achievement(text: String);
```
```js
emiliaApi.manipulationImages.approved(image: String<Url>);
```
```js
emiliaApi.manipulationImages.beautiful(image: String<Url>);
```
```js
emiliaApi.manipulationImages.brazzers(image: String<Url>);
```
```js
emiliaApi.manipulationImages.challenger(image: String<Url>);
```
```js
emiliaApi.manipulationImages.demotivational(title: String, text: String, image: String<Url>);
```
```js
emiliaApi.manipulationImages.fire(image: String<Url>);
```
```js
emiliaApi.manipulationImages.fusion(baseImage: String<Url>, overlayImage: String<Url>);
```
```js
emiliaApi.manipulationImages.thugLife(image: String<Url>);
```
```js
emiliaApi.manipulationImages.toBeContinued(image: String<Url>);
```
```js
emiliaApi.manipulationImages.wanted(image: String<Url>);
```

### Random images API
```js
emiliaApi.randomImages.feed()
```
```js
emiliaApi.randomImages.hug()
```
```js
emiliaApi.randomImages.kiss()
```
```js
emiliaApi.randomImages.slap()
```

### Others API
```js
emiliaApi.others.hangman()
```
```js
emiliaApi.others.hangmanList()
```
```js
emiliaApi.randomAnime()
```
