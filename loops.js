function forLoop(array) {
    for(let i = 0; i < 25; i++) {
      if (i == 1) {
        array.push(`I am 1 strange loop.`)
      } else {
        array.push('I am ${i} strange loops.')
      } // else if
    } // for loop
    return array
} // forLoop

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  } // while loop
  return 'done'
} // whileLoop

function doWhileLoop(array) {
    function maybeTrue() {
      return Math.random() >= 0.5
    } // maybeTrue

    do {
      array.pop()
    } while (array.length > 0 && maybeTrue());

    return array
} // doWhileLoop
