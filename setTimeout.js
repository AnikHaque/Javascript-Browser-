// normal console log. it will work synchronously 
console.log('I am first')
console.log('I am second')
console.log('I am third')
console.log('I am fourth')

// Taking all console.log in a function 
const all = () => {
    console.log('I am first')
    console.log('I am second')
    console.log('I am third')
    console.log('I am fourth')
}
all()

// using setTimeout and see what happens 
const present = () => {
console.log('Hello! i am your special one')
}
console.log('I am first')
console.log('I am second')
setTimeout(present,1000)
console.log('I am third')
console.log('I am fourth')