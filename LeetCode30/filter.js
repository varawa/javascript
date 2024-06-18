/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filtrate = [] ;
    for(item of arr){
        if(fn(item , arr.indexOf(item)))
            filtrate.push(item) ;
    }
    return filtrate ;
};