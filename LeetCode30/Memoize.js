/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = new Map() ;
    return function(...args) {
        var key = args.toString() ;
        if(cache.has(key)){
            return cache.get(key) ;
        }else{
            let ans = fn(...args) ;
            cache.set(key , ans) ;
            return ans ;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */