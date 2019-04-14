const babylon = require('@babel/parser')
const code = `
function add() {
    return 'hello'
}`


console.log(babylon.parse(code))