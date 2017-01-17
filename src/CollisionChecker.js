class CollisionChecker {

  walls(snake, canvas) {

    var c_width = canvas.state.width, c_height = canvas.state.height;
    var x = snake.head.x, y = snake.head.y;

    // return true if snake head is at (or outside) canvas bounds

    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  tail(snake) {

    var x1 = snake.head.x, y1 = snake.head.y;
    var x2 = snake.verticies[0].x, y2 = snake.verticies[0].y;

    // check if the current line has crossed any previous lines

    // criteria for two lines crossing:
    // * the current line is on a different plane than the previous line (horizontal vs. vertical)
    //  * if current line is horizontal (and the previous line is vertical): 
    //    * the previous line falls within the x coords of the current line
    //    * the current line falls within the y coords of the previous line
    //  * if the current line is vertical (and the previous line is horizontal):
    //    * the previous line falls within the y coords of the current line
    //    * the current line falls within the x coords of the previous line

    return false;

  }

  candy(snake, candy) {

    var sx = snake.head.x, sy = snake.head.y;
    var cx = candy.location[0], cy = candy.location[1];
    var size = candy.size;

    var xtrue, ytrue;
    (sx >= cx && sx <= cx + size) ? (xtrue = true) : (xtrue = false);
    (sy >= cy && sy <= cy + size) ? (ytrue = true) : (ytrue = false);

    return (xtrue && ytrue);

  }

}

export default CollisionChecker;