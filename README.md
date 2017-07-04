# roland-checksum
A lightweight module for calculating the Roland Checksum.

 * [x] No dependencies
 * [x] 100% code coverage
 * 27 lines of code

## Installation
`npm install roland-checksum` or `yarn add roland-checksum`

## Usage

```js
var RolandChecksum = require('roland-checksum');

var myNumberArray = [0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74];
var myNumber = 0x20;

var myNumberArrayChecksum = RolandChecksum(myNumberArray); //returns 0x20
var myNumberChecksum = RolandChecksum(myNumber); //returns 0x60
```

## Tests

You can run the tests by running `npm test` or `yarn test`.

We also have `istanbul`: run `npm coverage` or `yarn coverage`.

## Calculation

```js
var myNumberArray = [0x20, 0x00, 0x00, 0x74, 0x65, 0x73, 0x74];
var checksum = 0x00;

myNumberArray.forEach(function(number){
	checksum += number;
});

checksum %= 128;
checksum = 128 - checksum;
```

## What to Improve

 * [Make `checksum = 128 - checksum` shorter.](https://github.com/moriczgergo/roland-checksum/blob/master/index.js#L28)
 * [Make parameter type filtering shorter.](https://github.com/moriczgergo/roland-checksum/blob/master/index.js#L8-L26)
 * [Make adding together the array shorter.](https://github.com/moriczgergo/roland-checksum/blob/master/index.js#L9-L11)
