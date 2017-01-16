# React Snake

> An implementation of the classic arcarde game using React and Node. 

React Snake is an exercise for getting acquainted with the React framework. It was initialized using the `create-react-app` boilerplate, which is available [here](https://github.com/facebookincubator/create-react-app). 

The most difficult part of building React Snake was dealing with the clearing and re-drawing of the HTML5 canvas in an efficient manner. At first, the "snake" was implemented as a series of points; Unfortunately this became taxing on the browser as the snake grew over the lifetime of a game. To handle this I reimagined the snake as a series of verticies, stored each vertex, and drew lines between them. This proved a much more efficient way of using the canvas, but added significant complexity to the calculation of collisions — tail collisions in particular. 

## Table of Contents

- [React Snake](#react-snake)
- [Table of Contents](#table-of-contents)
- [Live Demo](#live-demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demonstration

https://react-snake.herokuapp.com/

## Dependencies

1. Node v7.3.0
2. npm (Node Package Manager) v3.10.10

... to be continued

## Installation

1. Clone the repository.
2. Run `npm install` from the root directory to install the necessary packages.

## Usage

1. Run `npm start` to start the development server.
2. Open `localhost:3000` in your browser (if it doesn't happen automatically).
3. Enjoy! :)

## License
