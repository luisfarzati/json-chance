# json-chance 

[![NPM version](https://badge.fury.io/js/json-chance.png)](http://badge.fury.io/js/json-chance) [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Build Status](https://secure.travis-ci.org/luisfarzati/json-chance.png)](http://travis-ci.org/luisfarzati/json-chance) [![Dependency Status](https://gemnasium.com/luisfarzati/json-chance.svg)](https://gemnasium.com/luisfarzati/json-chance) [![Donations](http://img.shields.io/gratipay/luisfarzati.svg)](https://www.gratipay.com/luisfarzati)

Create random JSON objects using [json-spawn](https://github.com/luisfarzati/json-spawn) and [Chance.js](http://chancejs.com/).

### Node
```js
var jsonChance = require('json-chance')

jsonChance('guid,name,profile(url,twitter,fbid)')

// returns
//	{
//	 "guid": "55585f1d-aedf-50ef-9436-3cbeb3e76afc",
//	 "name": "William McCoy",
//	 "profile": {
//	  "url": "http://bim.gov/du",
//	  "twitter": "@nijgu",
//	  "fbid": 1000053597266623
//	 }
//	}

```

### CLI
```bash
$ jsonchance 'guid,name,profile(url,twitter,fbid)'

{
  "guid": "55585f1d-aedf-50ef-9436-3cbeb3e76afc",
  "name": "William McCoy",
  "profile": {
	  "url": "http://bim.gov/du",
      "twitter": "@nijgu",
      "fbid": 1000053597266623
	}
}
```

## Installation

```bash
$ npm install json-chance
```

## Tests

```bash
$ npm test
$ npm run coverage
```

## License

[MIT](LICENSE)

[npm-downloads-image]: https://img.shields.io/npm/dm/json-chance.svg
[npm-downloads-url]: https://npmjs.org/package/json-chance
