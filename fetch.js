// using fetch and see what hap
console.log('I am first')
console.log('I am second')
// setTimeout(present1,1000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('I am third')
console.log('I am fourth')