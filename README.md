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


```


## Related

- [find-min](https://github.com/smondal/find-min) - Find minimum mumber
