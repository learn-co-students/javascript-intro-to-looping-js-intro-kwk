/*for([initialization], [condition], [iteration]) {
  [loopBody]
}
use for when you know how many times you want to loop*/

function forLoop(array) {
  for (let i = 0; i < 25 ; i++) {
    if ( i === 1 ) {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

/*while ([condition]) {
  [loopBody]
}
continues until false*/

function whileLoop(n) {
  while( n > 0) {
    console.log(--n)
  }
  return "done"
}

/*do {
  [loopBody];
} while ([condition]);
body is executed at least once before the condition is tested ie. (x < 0)*/

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    return "false"
  } while (array.length > 0 && maybeTrue())
  return array
}
