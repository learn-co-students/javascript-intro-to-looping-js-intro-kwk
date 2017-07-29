function forLoop(array){
  for(i = 1; i <= 25; i++){
    array.push(`I am ${i} strange loop`)
  }
  return array
}
function whileLoop(n){
  while(n > 0){
    console.log(n)
    n--
  }
  return "done"
}
function doWhileLoop(array){
  function maybeTrue(){
    return Math.random() >= .05
  }
  do {
    array.pop()
  } while(array.length > 0 && maybeTrue())
  return array
}
