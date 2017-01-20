class LineUtility {

  getLowerBoundX(start, end) {

    return (start.x > end.x ? end.x : start.x)

  }

  getUpperBoundX(start, end) {

    return (start.x > end.x ? start.x : end.x)

  }

  getLowerBoundY(start, end) {

    return (start.y > end.y ? end.y : start.y)

  }

  getUpperBoundY(start, end) {

    return (start.y > end.y ? start.y : end.y)

  }

  valueInRange(value, lower_bound, upper_bound) {

    return (value >= lower_bound && value <= upper_bound ? true : false) 

  }

}

export default LineUtility;