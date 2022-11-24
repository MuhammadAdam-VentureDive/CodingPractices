const matrix = [
    [1 ,4 ,7  ,11 ,15],
    [2 ,5 ,8  ,12 ,19],
    [3 ,6 ,9  ,16 ,22],
    [10,13,14 ,17 ,24],
    [18,21,23 ,26 ,30],
];

const m = 5, n = 5;

const search = (matrix, row, col, target) => {
    if(row > 4 || col < 0) return -1;
    console.log(`row: ${row} col ${col} value : ${matrix[row][col]}`);
    if(matrix[row][col] === target) return target;
    if(target > matrix[row][col]) 
    return search(matrix, row + 1, col, target);
    if(target < matrix[row][col])
    return search(matrix, row, col - 1, target);
}


console.log(search(matrix, 0, 4, 18));
