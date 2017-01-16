# React Snake

> An implementation of the classic arcarde game using React and Node. 

React Snake is an exercise for getting acquainted with the React framework. It was initialized using the `create-react-app` boilerplate, which is available [here](https://github.com/facebookincubator/create-react-app). 

The most difficult part of building React Snake was dealing with the clearing and re-drawing of the HTML5 canvas in an efficient manner. At first, the "snake" was implemented as a series of points; This taxed the browser as the snake grew over the lifetime of a game. So I reimagined the snake as a series of verticies, stored each vertex, and drew lines between them. The vertex-based approached proved a much more efficient way of using HTML5 Canvas, but added significant complexity to the calculation of collisions.

## Table of Contents

- [React Snake](#react-snake)
- [Table of Contents](#table-of-contents)
- [Demonstration](#demonstration)
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
