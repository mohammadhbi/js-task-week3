const input = [1, [2, [3, [4]], 5]] 
function flatten(arr){
arr.flat(Infinity);
console.log(arr.flat(Infinity))
}
console.log(input);//before

console.log(flatten(input)) //after