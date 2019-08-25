// Реализация bind

function bind(func, context) {
    return function () {
        return func.call(context);
   };
}

function getName() {
    return this.name;
}

let newName = bind(getName, {name: 'John'});
console.log(newName());

// Реализация map
function map(arr, callback, thisContext) {
    let i;
    let arrLength = arr.length;
    let result = [];
    for (let i = 0; i<arrLength; i = i+1){
        result.push(callback.call(thisContext, arr[i], i, arr))
    }
    return result;
    
}

function callbackStr(str) {
    return str.substr(0,4);
}

let modifiedStr = map(['blueberry', 'strawberry', 'cherry'], callbackStr);

let pows = map([2,4,8], Math.pow);
let sqrt = map([2,4,8], Math.sqrt);
console.log(modifiedStr);
console.log(pows);
console.log(sqrt);
