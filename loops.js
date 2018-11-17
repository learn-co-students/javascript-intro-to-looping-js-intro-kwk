function forLoop(arrayIn){
  for (let i = 0; i < 25; i++) {
    if(i==1){
      arrayIn.push("I am 1 strange loop.")
    } else {
      arrayIn.push("I am " + i + " strange loops.")
  }
}
return arrayIn
}

function whileLoop(numberIn){
  while (numberIn > 0) {
    console.log(--numberIn)
  }
  return('done')
}
function maybeTrue() {
  return Math.random() >= 0.5
}

 function doWhileLoop(arrayIn){
   do {
  arrayIn.pop()
} while (arrayIn.length > 0 && maybeTrue());
return arrayIn
 }
