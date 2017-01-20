import LineUtility from './line_utility.js';

class CollisionChecker {

  walls(snake, canvas) {

    var c_width = canvas.state.width, c_height = canvas.state.height;
    var x = snake.head.x, y = snake.head.y;

    // return true if snake head is at (or outside) canvas bounds

    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  tail(snake) {

    var head = snake.head.copy();

    for (var i = 0, j = 1; j < snake.verticies.length; i++, j++) {

      var line_start = snake.verticies[i], line_end = snake.verticies[j];
      var collision = this.checkCollisionWithLine(head.x, head.y, line_start, line_end);

      if (collision) return true;
      
    }


    return false;

  }

  checkCollisionWithLine(head_x, head_y, line_start, line_end) {

    var util = new LineUtility();
    var lower_bound_x = util.getLowerBoundX(line_start, line_end);
    var upper_bound_x = util.getUpperBoundX(line_start, line_end);
    var lower_bound_y = util.getLowerBoundY(line_start, line_end);
    var upper_bound_y = util.getUpperBoundY(line_start, line_end);

    var x_in_range = util.valueInRange(head_x, lower_bound_x, upper_bound_x)
    var y_in_range = util.valueInRange(head_y, lower_bound_y, upper_bound_y)

    if (x_in_range && y_in_range) return true;

  }

  checkHorizontal(start, end) {

    return (start.y === end.y) ? true : false;

  }

  horizontalLineLength(start, end) {

    if (start.y > end.y) {
      return start.y - end.y
    } else {
      return end.y - start.y
    }

  }

  verticalLineLength(start, end) {

    if (start.x > end.x) {
      return start.x - end.x
    } else {
      return end.x - start.x
    }

  }

  candy(snake, candy) {

    var sx = snake.head.x, sy = snake.head.y;
    var cx = candy.location[0], cy = candy.location[1];
    var size = candy.size;

    var xtrue, ytrue;
    (sx >= cx && sx <= cx + size) ? (xtrue = true) : (xtrue = false);
    (sy >= cy && sy <= cy + size) ? (ytrue = true) : (ytrue = false);

    // return true if the snake head within the candy dimensions

    return (xtrue && ytrue);

  }

}

export default CollisionChecker;