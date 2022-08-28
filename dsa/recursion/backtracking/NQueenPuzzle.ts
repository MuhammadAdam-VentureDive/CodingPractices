const solveNQueenPuzzle = (board: string[][], queens: number, rowLimit: number, columnLimit: number) =>
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

  const isQueenSafeTobePlaced = (currentRow: number, currentColumn: number): boolean =>
  {
    for(let row = 0; row < rowLimit; row++)
    {
      for(let column = 0; column < columnLimit; column++)
      {
        if(visited[row][column] === 'Q')
        {
          // check if the line is 180 degree means both x axis points are the same
          if(row - currentRow === 0) return false;

          // check if the line is 90 degree means both y axis points are the same
          if(column - currentColumn === 0) return false;

          // check if the line is 45 degree means both points are diagnoally alligned
          if(Math.abs((column - currentColumn) / (row - currentRow)) === 1) return false;
        }
      }
    }
    return true;
  };

  const solve = (remainingQueens: number, row: number) =>
  {
     if(remainingQueens === 0)
     {
       console.log(visited);
       return;
     }

     if(row >= rowLimit) return;
     for(let index = 0; index < columnLimit; index++)
     {
       if(isQueenSafeTobePlaced(row, index))
       {
          visited[row][index] = 'Q';
          solve(remainingQueens - 1, row + 1);
          visited[row][index] = 'E';
       }
     }
  };

  solve(queens, 0);

};

const board : string[][] = 
[
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']
];

solveNQueenPuzzle(board, 5, 5, 5);

/**
 * E - Empty
 * Q - Queen
 */
