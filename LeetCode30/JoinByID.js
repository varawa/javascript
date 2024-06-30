/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    
    var res = {} ;

    for(let i = 0 ; i < arr1.length ; i++){
        res[arr1[i].id] = arr1[i] ;
    }
    
    arr2.forEach((item) => {
        const { id } = item ;

        res[id] = {...res[id] , ...item} ;
    });
    return Object.values(res) ;
};