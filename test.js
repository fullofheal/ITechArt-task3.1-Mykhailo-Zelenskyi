import './lib.js';

const isEqual = (a = [], b = []) => {
    if (Array.isArray(a)) {
        return a.length === b.length && a.every((v, i) => typeof v === 'object' ? JSON.stringify(v) === JSON.stringify(b[i]) : v === b[i]);
    } else if (typeof a === 'object') {
        return JSON.stringify(a) === JSON.stringify(b);
    } else {
        return a === b;
    }
};




const testMap = (input, callback, expected) => {
    const actual = mykhailoLib.map(input, callback);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[map]: Testing started');
testMap([1, 2, 3, 4], v => v * 2, [2, 4, 6, 8]);
testMap([1, 2, 3, 4], v => v + 2, [3, 4, 5, 6]);
testMap([1, 2, 3, 4], v => v, [1, 2, 3, 4]);
console.log('[map]: Testing done');




const testReduce = (input, callback, initialValue, expected) => {
    const actual = mykhailoLib.reduce(input, callback, initialValue);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[reduce]: Testing started');
testReduce([1,2,3,4], (acc, cur, i) => {acc[i] = cur + 2; return acc}, [], [3, 4, 5, 6]);
testReduce([1,2,3,4], (acc, cur, i) => {acc[i] = acc[i] * cur; return acc}, [2, 4, 6, 8], [2, 8, 18, 32]);
testReduce(['1', '2', '3', '4'], (acc, cur, i) => {acc[i] = acc[i] + cur; return acc}, ['a', 'b', 'c', 'd'], ['a1', 'b2', 'c3', 'd4']);
console.log('[reduce]: Testing done');




const testFilter = (input, callback, expected) => {
    const actual = mykhailoLib.filter(input, callback);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[filter]: Testing started');
testFilter([1, 2, 3, 4], v => v > 2, [3, 4]);
testFilter([1, 2, 3, 4], v => v < 3, [1, 2]);
testFilter(['a', 'aaa', 'ddddd', 'ffffffff'], v => v.length > 5, ['ffffffff']);
console.log('[filter]: Testing done');




const testForeach = (input, callback, expected) => {

    const actual = mykhailoLib.foreach(input, callback);
    
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[foreach]: Testing started');
testForeach([1, 2, 3, 4], (i) => i, undefined);
testForeach([1, 2, 3, 4], (v, i) => console.log(v + i), undefined);
testForeach([1, 2, 3, 4], (v) => console.log(v * 2), undefined);
console.log('[foreach]: Testing done');




const testTake = (input, n, expected) => {
    const actual = mykhailoLib.take(input, n);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[take]: Testing started');
testTake([1, 2, 3, 4], 2, [1, 2]);
testTake([1, 2, 3, 4], 0, []);
testTake([1, 2, 3, 4], 4, [1, 2, 3, 4]);
console.log('[take]: Testing done');




const testSkip = (input, n, expected) => {
    const actual = mykhailoLib.skip(input, n);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[skip]: Testing started');
testSkip([1, 2, 3, 4], 2, [3, 4]);
testSkip([1, 2, 3, 4], 0, [1, 2, 3, 4]);
testSkip([1, 2, 3, 4], 4, []);
console.log('[skip]: Testing done');




const testSome = (input, callback, expected) => {
        const actual = mykhailoLib.some(input, callback);
        console.log(`
        Inputs: ${input}
        Actual: ${actual}
        Expected: ${expected}
        Assess: ${isEqual(actual, expected)}
      `);
    }
    
    console.log('[some]: Testing started');
    testSome([1, 2, 3, 4], v => v > 2, true);
    testSome([1, 2, 3, 4], v => v < 1, false);
    testSome([1, '2', 3, 4], v => typeof v === 'string', true);
    console.log('[some]: Testing done');




const testEvery = (input, callback, expected) => {
        const actual = mykhailoLib.every(input, callback);
        console.log(`
        Inputs: ${input}
        Actual: ${actual}
        Expected: ${expected}
        Assess: ${isEqual(actual, expected)}
      `);
    }
    
    console.log('[every]: Testing started');
    testEvery([1, 2, 3, 4], v => v > 2, false);
    testEvery([1, 2, 3, 4], v => v >= 1, true);
    testEvery([1, '2', 3, 4], v => typeof v === 'number', false);
    console.log('[every]: Testing done');




const testMax = (input, expected) => {
        const actual = mykhailoLib.max(input);
        console.log(`
        Inputs: ${input}
        Actual: ${actual}
        Expected: ${expected}
        Assess: ${isEqual(actual, expected)}
      `);
    }
    
    console.log('[max]: Testing started');
    testMax([1, 2, 3, 4], 4);
    testMax([-5, 0, -3, -1], 0);
    testMax([1, 'asd', 3, 'd'], 3);
    console.log('[max]: Testing done');




const testMin = (input, expected) => {
    const actual = mykhailoLib.min(input);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
    `);
}

console.log('[min]: Testing started');
testMin([1, 2, 3, 4], 1);
testMin([-5, 0, -3, -1], -5);
testMin([1, 'asd', 3, 'd'], 1);
console.log('[min]: Testing done');




const testKeys = (input, expected) => {
    const actual = mykhailoLib.keys(input);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[keys]: Testing started');
testKeys({a: 1, b: 'asd', c: {d: 3, f: 4}}, ['a', 'b', 'c']);
testKeys({1: 1, 2: 'asd', 3: {d: 3, f: 4}}, ['1', '2', '3']);
testKeys({'asd': 1, 'sss': 'asd', 'ddd': {d: 3, f: 4}}, ['asd', 'sss', 'ddd']);

console.log('[keys]: Testing done');




const testValues = (input, expected) => {
    const actual = mykhailoLib.values(input);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[values]: Testing started');
testValues({a: 1, b: 'green', c: 3}, [1, 'green', 3]);
testValues({a: true, b: false, c: 'string'}, [true, false, 'string']);
testValues({a: undefined, b: {d: 3, f: 4}, c: [1, 2, 3]}, [undefined, {d: 3, f: 4}, [1, 2, 3]]);
console.log('[values]: Testing done');




const testPairs = (input, expected) => {
    const actual = mykhailoLib.pairs(input);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[pairs]: Testing started');
testPairs({a: 1, b: 'green', c: 3}, [['a', 1], ['b', 'green'], ['c', 3]]);
testPairs({a: true, b: false, c: 'string'}, [['a', true], ['b', false], ['c', 'string']]);
testPairs({a: undefined, b: {d: 3, f: 4}, c: [1, 2, 3]}, [['a', undefined], ['b', {d: 3, f: 4}], ['c', [1, 2, 3]]]);
console.log('[pairs]: Testing done');




const testFromPairs = (input, expected) => {
    const actual = mykhailoLib.fromPairs(input);
    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[fromPairs]: Testing started');
testFromPairs([['a', 1], ['b', 'green'], ['c', 3]], {a: 1, b: 'green', c: 3});
testFromPairs([['a', true], ['b', false], ['c', 'string']], {a: true, b: false, c: 'string'});
testFromPairs([['a', undefined], ['b', {d: 3, f: 4}], ['c', [1, 2, 3]]], {a: undefined, b: {d: 3, f: 4}, c: [1, 2, 3]});
console.log('[fromPairs]: Testing done');




const testChain = (input, executions, expected) => {
    let actual = mykhailoLib.chain(input);
	mykhailoLib.foreach(executions, execution => {
		const {method, args} = execution;

		actual = actual[method](...args);
	})

	actual = actual.value();

    console.log(`
    Inputs: ${input}
    Actual: ${actual}
    Expected: ${expected}
    Assess: ${isEqual(actual, expected)}
  `);
}

console.log('[chain]: Testing started');
testChain([1, 2, 3, 4], [{method: 'map', args: [i => i * 2]}, {method: 'reduce', args: [(acc, cur) => acc + cur, 0]}], 20);
testChain([1, 2, 3, 4], [{method: 'some', args: [i => i > 2]}], true);
testChain([1, 2, 3, 4], [{method: 'map', args: [i => i * 2]}, {method: 'take', args: [2]}], [2, 4]);

console.log('[chain]: Testing done');
