/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    if (obj === null) return null;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;

    const comp = {} ;

    for(const key in obj){
        let value = compactObject(obj[key]) ;
        if(Boolean(value) !== false)
            comp[key] = value ;
    }

    return comp ;
};