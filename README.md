# roland-checksum [![Build Status](https://travis-ci.org/moriczgergo/roland-checksum.svg?branch=master)](https://travis-ci.org/moriczgergo/roland-checksum)
A lightweight module for calculating the Roland Checksum.

 * [x] No dependencies
 * [x] 100% code coverage
 * 6 lines of code

## Installation
`npm install roland-checksum` or `yarn add roland-checksum`

## Usage

```js
var RolandChecksum = require('roland-checksum');

var myNumberArray = [0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74];
var myNumber = 0x20;
var myString = "abcdef";

var myNumberArrayChecksum = RolandChecksum(myNumberArray); //returns 0x20
var myNumberChecksum = RolandChecksum(myNumber); //returns 0x60
var myStringChecksum = RolandChecksum(myString); //returns NaN, since strings can't be checksummed
```

## Tests

You can run the tests by running `npm test` or `yarn test`.

We also have `istanbul`: run `npm coverage` or `yarn coverage`.

## Calculation

*NOTE: This is not the actual code in the module, but it's a simple snippet of code that can help you understand **how** the calculation works.*

```js
var myNumberArray = [0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74];
var checksum = 0x00;

myNumberArray.forEach(function(number){
	checksum += number;
});

checksum %= 128;
checksum = 128 - checksum;
```