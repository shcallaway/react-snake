class CollisionChecker {

  walls(snake, canvas) {

    var c_width = canvas.state.width, c_height = canvas.state.height;
    var x = snake.head.x, y = snake.head.y;

    // return true if snake head is at (or outside) canvas bounds

    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  tail(snake) {

    // var x = snake.head.x, y = snake.head.y;

    // this will be complicated because...
    // you can no longer just check head against every coordinate in body
    // disable tail collisions for the time being

    return false;

  }

  candy(snake, candy) {

    var sx = snake.head.x, sy = snake.head.y;
    var cx = candy.location[0], cy = candy.location[1];

    // width and height of candy object is hardcoded for now (at 10)

    var xtrue, ytrue;
    (sx >= cx && sx <= cx + 10) ? (xtrue = true) : (xtrue = false);
    (sy >= cy && sy <= cy + 10) ? (ytrue = true) : (ytrue = false);

    return (xtrue && ytrue);

  }

}

export default CollisionChecker;