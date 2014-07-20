# ES6 `RegExp.prototype.search` polyfill [![Build status](https://travis-ci.org/mathiasbynens/RegExp.prototype.search.svg?branch=master)](https://travis-ci.org/mathiasbynens/RegExp.prototype.search) [![Code coverage status](http://img.shields.io/coveralls/mathiasbynens/RegExp.prototype.search/master.svg)](https://coveralls.io/r/mathiasbynens/RegExp.prototype.search)

A robust & optimized ES3-compatible polyfill for [the `RegExp.prototype.search` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-regexp.prototype.search).

## Installation

In a browser:

```html
<script src="regex-prototype-search.js"></script>
```

Via [npm](http://npmjs.org/):

```bash
npm install regexp.prototype.search
```

Then, in [Node.js](http://nodejs.org/):

```js
require('regexp.prototype.search');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('RegExp.prototype.search');
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
