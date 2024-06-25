/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var ans = [] ;
    
    while(arr.length > 0){
        ans.push(arr.splice(0 , size)) ;
    }

    return ans ;
};
