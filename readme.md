# Task #2. JS
## Pre-requirements
- Participating lecture;
- Basic JS knowledge;
- ES6 Features Knowledge.
## Explanation
In this task you will need to create JS utile library to work with arrays and objects.


The library should provide the following functionality.
```
Array methods:
map(array, callback)
reduce(array, callback, initialValue)
filter(array, callback)
foreach(array, callback)
take(array, n)
skip(array, n)
some(array, callback)
every(array, callback)
max(array)
min(array)

Object methods:
keys(obj)
values(obj)
pairs(obj)
fromPairs(array)
```
Here is an example of calling.
```
libName.take([1, 2, 3, 4], 2) // will return`[1, 2]
```
The rest of the functions work the same way.
```
libName.map([1, 2, 3], a => a * 2 ) // will return [2, 4, 6]
```

After finishing the implementation of these methods, you should implement new `chain` and `value` functions, which will allow using the library in the following way.
```
libName.chain([1, 2, 3]).take(2).skip(1).value(); // will return [2]
```
## Tests
Separate `test.js` should be filled in with a bunch of examples of usages of your library. Add at least 3 example of calls for each of your methods. No need to use any actual testing frameworks.

Example:
```
// This function already exists. Feel free to use.
const isEqual = (a = [], b = []) => a.length === b.length && a.every((v, i) => v === b[i]);

...

const testMap = (input, callback, expected) => {
  const actual = libName.map(input, callback);
  console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
};

console.log('[map]: Testing started');
testMap([1,2,3,4], v => v * 2, [2,4,6,8]);
testMap([1,2,3,4], v => v + 2, [3,4,5,6]);
testMap([1,2,3,4], v => v, [1,2,3,4]);
console.log('[map]: Testing done');

```

## Rating criterias
- 5 – Task is completed, solution is clean, readable and reliable. Module can be imported in NodeJS project, React project and used in plain JS-script. All tests are passing;
- 4 – Task is completed, minor edge-cases missed, code is readable and reliable in most cases. Module can be imported in at least one environment. All tests are passing;
- 3 – Task is completed, edge cases missing, code is readable, but has huge gaps in reliability;
- 2 – Partial completion of the tasks, functionality doesn’t fully work or fail on some usual cases;
- 1 – Partial completion of the tasks, unable to run, test;
- 0 – No completion or no submission.

