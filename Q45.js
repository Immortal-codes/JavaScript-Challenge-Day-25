//. Write a JavaScript program to split values into two groups, if an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.


//#Source https://bit.ly/2neWfJ2 
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));
