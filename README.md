curry
=

Tiny function which returns curried equivalent of provided function

## Installation
```bash
$ npm install @lpvua/curry
```
Or add it into HTML
```HTML
  <script type="text/javascript" src="https://unpkg.com/@lpvua/curry"></script>
```
API
=

curry(fn, arity)
-
Creates curried function
### Properties
 - `fn` - Function to curry
 - `arity` - (optional) arity number. Is needed when provided function has any number of arguments

## example

```javascript
  import curry from '@lpvua/curry'

  const sum = (a, b, c) => a + b + c
  const curriedSum = curry(sum)
  curriedSum(2)(2, 3) // 7
  curriedSum(2, 2, 3) // 7
  curriedSum(2, 2)(3) // 7
  curriedSum(2)(2)(3) // 7
 
  const sumN = (...args) => args.reduce((a, b) => a + b)
  const curriedSumN = curry(sumN, 3)
  curriedSumN(2)(2, 3) // 7
  curriedSumN(2, 2, 3) // 7
  curriedSumN(2, 2)(3) // 7
  curriedSumN(2)(2)(3) // 7
```
