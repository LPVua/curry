/**
 * Tiny function which returns curried equivalent of provided function
 * 
 * @param {Function} fn - Function to curry
 * @param {number} [arity=null] - Optional arity number when provided function has any number of arguments
 * 
 * @return {Function} - A new, curried function.
 * 
 * @example
 * 
 *  const sum = (a, b, c) => a + b + c;
 *  const curriedSum = curry(sum)
 *  curriedSum(2)(2, 3) => 7
 *  curriedSum(2, 2, 3) => 7
 *  curriedSum(2, 2)(3) => 7
 *  curriedSum(2)(2)(3) => 7
 * 
 *  const sumN = (...args) => args.reduce((a, b) => a + b)
 *  const curriedSumN = curry(sumN, 3)
 *  curriedSumN(2)(2, 3) => 7
 *  curriedSumN(2, 2, 3) => 7
 *  curriedSumN(2, 2)(3) => 7
 *  curriedSumN(2)(2)(3) => 7
 */
const curry = (fn, arity = null) => {
  const curriedFn = (...args) => ((fn.length || arity) <= args.length) ?
    fn(...args) :
    (...otherArgs) => curriedFn(...args, ...otherArgs);

  return curriedFn;
};

export default curry
