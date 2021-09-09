// clear interval 
let i = 0;
console.log('I am first')
console.log('I am second')
const interval = setInterval(() => {
    i++
    console.log(i)
    if (i >= 15) {
        clearInterval(interval)
    }
}, 1000);
console.log('I am third')
console.log('I am fourth')