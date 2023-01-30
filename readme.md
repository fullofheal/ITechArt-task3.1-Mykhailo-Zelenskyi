# Task #3.1. Task #3.1. Library publishing
## Pre-requirements
- Participating lecture;
- Basic JS knowledge;
- ES6 Features Knowledge.
## functionality
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
npm i mykhailolib
```
- To install from GitHub Packages:
from the command line:
```
npm install @fullofheal/mykhailolib@1.0.0
```
via package.json
```
"@fullofheal/mykhailolib": "1.0.0"
```


