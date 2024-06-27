/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {} ;
    
    for(item of this){
        const key = fn(item) ;
        if(obj[key] === undefined){
            obj[key] = [] ;
        }
        obj[key].push(item) ;
    }
    return obj ;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */