class CollisionChecker {

  walls(snake, canvas) {

    var c_width = canvas.state.width, c_height = canvas.state.height;
    var x = snake.body[0][0], y = snake.body[0][1];
    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  tail(snake) {

    var x = snake.body[0][0], y = snake.body[0][1];

    // start at index 1 to skip the first coordinate pair (aka the "head")
    for (var i = 1; i < snake.body.length; i++) {
      var tx = snake.body[i][0], ty = snake.body[i][1];
      if (x === tx && y === ty) {
        return true;
      }
    }

    return false;

  }

  candy(snake, candy) {

    var x = snake.body[0][0], y = snake.body[0][1];
    var cx = candy.location[0], cy = candy.location[1];
    return (x === cx && y === cy);

  }

}

export default CollisionChecker;