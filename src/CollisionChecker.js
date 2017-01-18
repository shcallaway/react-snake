class CollisionChecker {

  walls(snake, canvas) {

    var c_width = canvas.state.width, c_height = canvas.state.height;
    var x = snake.head.x, y = snake.head.y;

    // return true if snake head is at (or outside) canvas bounds

    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  tail(snake) {

    // IDEA:

    // get coordinates of the head
    // interate over each line (aka pair of coordinates) including line between head  and first vertex
    // build an array of the the coordinates that make up the line (one dimension should be constant)
    // compare head coordinates to every coordinate pair in the array
    // if match, collision occured ... return true
    // if no match, continue until the array is empty
    // repeat for the next line

    // if no matches at all, return false

    return false;

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