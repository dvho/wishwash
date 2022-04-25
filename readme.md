# Wishwash
[_Wishwash_](https://www.npmjs.com/package/wishwash) takes 4 arguments: a value (usually an iterator), a min, a max, and an inclusive qualifier, and counts back and forth between the min and max to your value. [_Wishwash_](https://www.npmjs.com/package/wishwash) can be likened to the modulus operator but instead of being used as a single direction counter restarting at the beginning once reaching the max, [_Wishwash_](https://www.npmjs.com/package/wishwash) counts backwards once reaching the max, forwards again once reaching the min, and continues as such until reaching the value. This has various UI applications, including color animations and various motion demonstrations which otherwise wouldn't be possible without such an algorithm.

<img src="https://user-images.githubusercontent.com/45696445/65821097-1a8eff80-e1ff-11e9-919a-8d330702dad6.gif">

_________________________
## API
### wishwash(`number, number, number, boolean`)
```js
var wishwash = require('wishwash');

```
&nbsp;
_________________________
#### -- Example 1 --
```js
for (i = 0; i < 30; i++) {
    console.log(wishwash(i, 6, 14, true))
}
```
> Output will be:
```
6
7
8
9
10
11
12
13
14
13
12
11
10
9
8
7
6
7
8
9
10
11
12
13
14
13
12
11
10
9
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 2 --
```js
for (i = 0; i < 18; i++) {
    console.log(wishwash(i, 23, 28, false))
}
```
> Output will be:
```
24
25
26
27
26
25
24
25
26
27
26
25
24
25
26
27
26
25
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 3 --
```js
randomArray = [...Array(90).keys()]
console.log(randomArray.map(i => wishwash(i, 134, 157, true)))
```
> Output will be:
```
[134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137]
```
_________________________
&nbsp;
## Notes
[_Wishwash_](https://www.npmjs.com/package/wishwash) takes 4 arguments: a value (usually an iterator), a min, a max, and an inclusive qualifier, and counts back and forth between the min and max to your value. [_Wishwash_](https://www.npmjs.com/package/wishwash) can be likened to the modulus operator but instead of being used as a single direction counter restarting at the beginning once reaching the max, [_Wishwash_](https://www.npmjs.com/package/wishwash) counts backwards once reaching the max, forwards again once reaching the min, and continues as such until reaching the value. This has various UI applications, including color animations and various motion demonstrations which otherwise wouldn't be possible without such an algorithm.

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install wishwash
```

## License
(MIT)

Copyright (c) 2019 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
