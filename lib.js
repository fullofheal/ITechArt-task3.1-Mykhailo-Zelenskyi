
function map(array, callback) {

    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i], i, array);
    }

    return newArr;
}

function reduce(array, callback, initialValue) {

    let accumulatedValue = array[0]; 
    let skipFirst = true; // if initialValue is not provided, first element of array is used instead, and iteration should start from the next element

    if (arguments.length > 2) {
        accumulatedValue = initialValue;
        skipFirst = false; // if initialValue is provided, we need to start from the first element array[0]
    }

    for (let i = 0; i < array.length; i++) {
        if (skipFirst && i === 0) {
            continue;
        }
        accumulatedValue = callback(accumulatedValue, array[i], i, array);
    }

    return accumulatedValue;
}

function filter(array, callback) {

    const filteredArr = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArr.push(array[i]);
        }
    }

    return filteredArr;
}

function foreach(array, callback) {

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function take(array, n) {

    const newArr = [];

    for (let i = 0; i < n && i < array.length; i++) {
        newArr.push(array[i]);
    }

    return newArr;
}

function skip(array, n) {

    const newArr = [];

    for (let i = n; i < array.length; i++) {
        newArr.push(array[i]);
    }

    return newArr;
}

function some(array, callback) {

    return filter(array, callback).length ? true : false;
}

function every(array, callback) {
    
    return filter(array, callback).length === array.length ? true : false;
}

function max(array) {

    let numArr = filter(array, i => typeof(i) === "number");
    let maxNum = -Infinity;

    for (let i = 0; i < numArr.length; i++) {
        
        if (numArr[i] > maxNum) {
            maxNum = numArr[i];
        }
    }

    return numArr.length ? maxNum : 'array contains 0 numbers';
}

function min(array) {

    let numArr = filter(array, i => typeof(i) === "number");
    let minNum = Infinity;

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < minNum) {
            minNum = numArr[i];
        }
    }

    return numArr.length ? minNum : 'array contains 0 numbers';
}

function keys(obj) {

    const arr = [];

    for (let key in obj) {
        arr.push(key);
    }
    return arr;
}

function values(obj) {

    const arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
    }

    return arr;
}

function pairs(obj) {

    const arr = [];

    for (let key in obj) {
        arr.push([key, obj[key]]);
    }

    return arr;
}

function fromPairs(array) {

    const newObj = {};

    for (let pair of array) {
        newObj[pair[0]] = pair[1];
    }

    return newObj;
}

function chain(input) {

    return {
        result: input,
        map: function(callback) {
            this.result = map(this.result, callback);
            return this;
        },
        reduce: function (callback, initialValue) {
            this.result = reduce(this.result, callback, initialValue);
            return this;
        },
        filter: function(callback) {
            this.result = filter(this.result, callback);
            return this;
        },
        foreach: function(callback) {
            this.result = foreach(this.result, callback);
            return this;
        },
        take: function(n) {
            this.result = take(this.result, n);
            return this;
        },
        skip: function(n) {
            this.result = skip(this.result, n);
            return this;
        },
        some: function(callback) {
            this.result = some(this.result, callback);
            return this;
        },
        every: function(callback) {
            this.result = every(this.result, callback);
            return this;
        },
        max: function() {
            this.result = max(this.result);
            return this;
        },
        min: function() {
            this.result = min(this.result);
            return this;
        },
        keys: function() {
            this.result = keys(this.result);
            return this;
        },
        values: function() {
            this.result = values(this.result);
            return this;
        },
        pairs: function() {
            this.result = pairs(this.result);
            return this;
        },
        fromPairs: function() {
            this.result = fromPairs(this.result);
            return this;
        },
        value: function() {
            return this.result;
        }
    }
}

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      const lib = {};
      factory(lib);
      global.mykhailoLib = lib.mykhailoLib;
    }
  })(typeof self !== 'undefined' ? self : this, function (lib) {
    "use strict";
  
    lib.mykhailoLib = {
        map,
        reduce,
        filter,
        foreach,
        take,
        skip,
        some,
        every,
        max,
        min,
        keys,
        values,
        pairs,
        fromPairs,
        chain
    };
  });