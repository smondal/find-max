# find-max [![Build Status](https://api.travis-ci.com/smondal/find-max.svg?branch=master)](https://travis-ci.com/smondal/find-max) [![Coverage Status](https://coveralls.io/repos/github/smondal/find-max/badge.svg?branch=master)](https://coveralls.io/github/smondal/find-max?branch=master)


## Install

```
$ npm install @sandipmo/find-max
```


## Usage

```js
const findMax = require('find-max');

//Handle normal arguments
var max = findMax(1, 2, 3, 4)  // 4

var max = findMax([1, 2, 3, 4]) //4

//Handle array of array
var max = findMax([1, 2, 3, 4, [6, 12], [9, 10], [2], 8]) // 12

var max = findMax({1: 2, 2: 4, 4: 5})  //'4'

var max = findMax({a: 2, b: 4, c: 5}) //'c'

```
## API

### findMax(Arguments)

Arguments would be comma separated value. If you not pass any argument it will return you `undefined`

### findMax(Array)
Type: `Array`

You can pass single array or array or array. If you pass array of array it will first apply `flatten` method to produce single array. Then return the maximum value from array.

If you pass empty array it will return `undefined`.

### findMax(Object)

Type: `Object`

Compare the value of each key and return the maximum value from Object.



## Related

- [find-min](https://github.com/smondal/find-min) - Find minimum mumber
