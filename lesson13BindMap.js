// Реализация bind

function bind(func, context) {

    let bindArgs = [].slice.call(arguments,2);
    return function () {
        let funcArgs = [].slice.call(arguments);
        return func.apply(context, bindArgs.concat(funcArgs));
   };
}
let sum = function() {
    return [].reduce.call(arguments, function(result, current) {
        return result + current;
    }, this.sum);
};
let getSum = bind(sum, {sum: 10}, 20, 20);
console.log(getSum(50, 50, 30));

let str = function (...args) {
    return this.str + args;
};

let getStr = bind(str, {str:'Hello world'});
console.log(getStr(' and bind'));

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
