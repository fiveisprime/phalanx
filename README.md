Phalanx
=======

Express error management made easy.

[![NPM](https://nodei.co/npm/phalanx.png)](https://nodei.co/npm/phalanx/)

# Usage

Send an error with the correct status code:

```js
var phalanx = require('phalanx');

// Your express routes..

// Catch-all 404 route.
app.get('*', function(req, res) {
  phalanx.notFound('Failed to load resource.').send(res);
});
```

or render a view

```js
var phalanx = require('phalanx');

// Your express routes..

// Catch-all 404 route.
app.get('*', function(req, res) {
  phalanx.notFound('Failed to load resource.').render(res, '404');
});
```

# License
The MIT License (MIT)

Copyright (c) 2013 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
