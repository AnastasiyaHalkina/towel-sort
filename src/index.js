
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined ||
        matrix.length < 1) {
            return [];
        }
    
    let resultArr = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            resultArr.push( ...matrix[i] );
        } else {
            resultArr.push( ...matrix[i].reverse() );
        }
    }
    return resultArr;
}
