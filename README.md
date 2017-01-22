# React Snake

> An implementation of the classic arcarde game using React and Node. 

React Snake is an exercise for getting acquainted with the React framework. It was initialized using the `create-react-app` boilerplate, which is available [here](https://github.com/facebookincubator/create-react-app). 

## Contents

- [React Snake](#react-snake)
- [Contents](#contents)
- [Demo](#demo)
- [Challenges](#challenges)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demo

The app is available at two locations:

* https://shcallaway.github.io/react-snake
* https://react-snake.herokuapp.com/

## Challenges

The most difficult part of building React Snake was dealing with the clearing and re-drawing of the HTML5 canvas in an efficient manner. At first, the "snake" was implemented as a series of points; This taxed the browser as the snake grew over the lifetime of a game. So I reimagined the snake as a series of verticies, stored each vertex, and drew lines between them. The vertex-based approached proved a much more efficient way of using HTML5 Canvas, but added significant complexity to the calculation of collisions. 

Another difficult part involved checking for tail collisions with a vertex-based snake. I could not just iterate over every coordinate in the snake body and check it against the snake head, as I could with a point-based snake. I had to devise some logic for determining whether the head vertex fell upon a given line. To do so, I captured the upper and lower x and y bounds of the line. (Of course, since the lines are always either perfectly horizontal or perfectly vertical, one of these dimensions will be fixed so that, in the case of a horizontal line, for example, the lower and upper y bound will be the same.) After capturing the x and y bounds of the line, I check whether the x and y of the snake head falls within them. If so, a collision has occured. 

## Dependencies

1. nodejs v7.3.0
2. npm v3.10.10
3. react v15.4.1
4. react-dom v15.4.1

## Installation

1. Clone the repository.
2. Run `npm install` from the root directory to install the necessary packages.

## Usage

1. Run `npm start` to start the development server.
2. Open `localhost:3000` in your browser (if it doesn't happen automatically).
3. Enjoy! :)

## License

[GNU General Public License](https://github.com/shcallaway/react-snake/blob/master/LICENSE.md)

## Todo

* DRY things up (see handleHorizontalShrinkage, handleVerticalShrinkage)
* Create user interface controls for adjusting constants
* Fix canvas bug where trailing line is drawn thinner
* Add persistent back end with top ten high scores
* Make it prettier :)