# Task #3.1. Task #3.1. Library publishing

## Functionality
The library provides the following functionality:

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
mykhailoLib.take([1, 2, 3, 4], 2) // will return`[1, 2]
```
The rest of the functions work the same way.
```
mykhailoLib.map([1, 2, 3], a => a * 2 ) // will return [2, 4, 6]
```
```
mykhailoLib.chain([1, 2, 3]).take(2).skip(1).value(); // will return [2]
```

## Installation

- To install from npmjs:
```
npm install mykhailolib
```
In your .js file use:
```
import './node_modules/mykhailolib/lib.js';
```
- To install from GitHub:
```
npm install @fullofheal/mykhailolib@1.0.0
```
In your .js file use:
```
import './node_modules/@fullofheal/mykhailolib/lib.js';
```


