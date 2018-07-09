![mern-genesis](static/img/MernLogo1.jpg)

# Project Genesis
[![HitCount](http://hits.dwyl.com/{L-Figgins13}/{Genesis}.svg)](http://hits.dwyl.com/{L-Figgins13}/{Genesis})
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![Node version](https://img.shields.io/node/v/[NPM-MODULE-NAME].svg?style=flat)](http://nodejs.org/download/)
[![Build Status](https://travis-ci.org/{L-Figgins13}/{Genesis}.png?branch=master)](https://travis-ci.org/{L-Figgins13}/{Genesis})

Genesis is a scaffolding tool which aims to create a starting point for developing isometric JavaScript applications using the MERN technology stack (MongoDB, Express, React, Node). In addition to MERN, this scaffolding project also includes several other technologies to ease development time such as Socket.io for real time events, Material UI for quick design templating, and Redux for state management. 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

[Website] (www.mern-genesis.github.io)

[Documentation] (www.mern-genesis.github.io)

[Discussions] (www.mern-genesis.github.io)

### Prerequisites
For the project to work properly you will need:

-[**MongoDB & (Optional) Mongoose**] (https://www.mongodb.com/)
-[**NodeJS (v8.11 or higher)**] (https://nodejs.org/en/)


### Installing
A step by step series of examples that tell you how to get a development environment running

```
npm install -g mern-genesis

genesis init my_app_name

cd my_app_name

npm install

npm run watch-server

npm run watch

npm start
```
**Note :** Please make sure your MongoDB is running. For MongoDB installation guide see [this] (https://docs.mongodb.org/v3.0/installation/).

### Available Commands

```
   - **npm run watch-server** -  will start the server with nodemon watching for changes
   - **npm run watch** - will start the frontend watch for changes
   - **npm start** - starts the development application at localhost:3000 and the server at localhost:8000.
```

## Running the tests
Coming Soon


### File Structure
#Webpack Configs
MERN uses Webpack for bundling modules. There are four types of Webpack configs provided:
 - **webpack.config.dev.js** for development
 - **webpack.config.prod.js** for production
 - **webpack.config.server.js** for bundling server in production
 - **webpack.config.babel.js** for babel-plugin-webpack-loaders for server rendering of assets included through webpack.

The Webpack configuration is minimal and beginner-friendly. You can customise and add more features to it for production builds if you would like.

#Server
MERN uses express web framework. Our app sits in server.js where we check for NODE_ENV.
If NODE_ENV is development, we apply Webpack middlewares for bundling and Hot Module Replacement.

### FrontEnd Technologies
This scaffolding uses material UI for rapid design prototyping and styled components for modern web component styling. More information on this will be added shortly.

## Deployment
Add additional notes about how to deploy this on a live system

## Built With
* [MongoDB]( https://www.mongodb.com/) � NoSQL Database
* [Express]( https://expressjs.com/) � Server Middleware
* [React](https://reactjs.org/) � FrontEnd Web Technology
* [NodeJS]( https://nodejs.org/en/) � npm and general project structure

## Contributing
## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors
* **Logan Figgins** - *Initial work* - [MERN-GENESIS](https://github.com/L-Figgins13/Genesis/blob/master/README.md)
* **Zack Watkins** - *Initial work* - [MERN-GENESIS](https://github.com/L-Figgins13/Genesis/blob/master/README.md)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Coming Soon