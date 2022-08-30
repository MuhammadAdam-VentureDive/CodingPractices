const solveNKnightsPuzzle = (board: string[][], knights: number, rowLimit: number, columnLimit: number) =>
{
  const initialize2DArray = function<T>(row: number, column: number, initialValue: T): T[][]
  {
     let result: T[][] = [];
     for(let index = 0; index < row; index++)
     {
         result.push(Array(column).fill(initialValue))
     }
     return result;
  };

  const visited = initialize2DArray<string>(rowLimit, columnLimit, 'E');
  let count = 0;

  const isKnightSafeTobePlaced = (currentRow: number, currentColumn: number): boolean =>
  {
    let rowIndex = currentRow - 1;
    let columnIndex = currentColumn - 2;

    if(rowIndex >= 0 && columnIndex >= 0 && visited[rowIndex][columnIndex] === 'K') return false;

    rowIndex = currentRow - 1;
    columnIndex = currentColumn + 2;

    if(rowIndex >= 0 && columnIndex < columnLimit && visited[rowIndex][columnIndex] === 'K') return false;

    rowIndex = currentRow - 2;
    columnIndex = currentColumn - 1;

    if(rowIndex >= 0 && columnIndex >= 0 && visited[rowIndex][columnIndex] === 'K') return false;

    rowIndex = currentRow - 2;
    columnIndex = currentColumn + 1;

    if(rowIndex >= 0 && columnIndex >= 0 && visited[rowIndex][columnIndex] === 'K') return false;

    return true;
  };

  const solve = (remainingKnights: number, row: number, column: number) =>
  {
     //console.log(`${row},${column}`)
     if(remainingKnights === 0)
     {
       console.log(visited);
       count++;
       return;
     }

     let rowIndex = row;
     let columnIndex = column;

     while(rowIndex < rowLimit)
     {
        while(columnIndex < columnLimit)
        {
          if(isKnightSafeTobePlaced(rowIndex, columnIndex))
          {
             visited[rowIndex][columnIndex] = 'K';
             solve(remainingKnights - 1, rowIndex, columnIndex + 1);
             visited[rowIndex][columnIndex] = 'E';
          }
          columnIndex++;
        }
        columnIndex = 0;
        rowIndex++;
     }
  };

  solve(knights, 0, 0);
  console.log(count);

};

const board : string[][] = 
[
  ['E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E']
];

solveNKnightsPuzzle(board, 2, 4, 4);

/**
 * E - Empty
 * K - Knight
 */
