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

  const markedQueens: any[] = [];

  const markQueen = (row: number, column: number) =>
  {
    const queenPosition =
    {
      row,
      column
    };
    markedQueens.push(queenPosition);
  };

  const clearMarkedQueens = () => markedQueens.splice(0);
  // const result: string[];

  const isQueenAllowedTobePlaced = (currentRow: number, currentColumn: number): boolean =>
  {
    // mark column
    for(let index = 0; index < columnLimit; index++)
    {
       if(visited[currentRow][index] === 'Q') return false;
    }
    
    // mark row
    for(let index = 0; index < rowLimit; index++)
    {
       if(visited[index][currentColumn] === 'Q') return false;
    }

    let diagonalRow = currentRow;
    let diagonalColumn = currentColumn;

    while(diagonalRow < rowLimit && diagonalColumn < columnLimit)
    {
     if(visited[diagonalRow][diagonalColumn] === 'Q') return false;
      diagonalRow++
      diagonalColumn++;
    }
   
    diagonalRow = currentRow;
    diagonalColumn = currentColumn;

    while(diagonalRow >= 0 && diagonalColumn >= 0)
    {
     if(visited[diagonalRow][diagonalColumn] === 'Q') return false;
      diagonalRow--
      diagonalColumn--;
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
       if(isQueenAllowedTobePlaced(row, index))
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
  ['E', 'E', 'E'],
  ['E', 'E', 'E'],
  ['E', 'E', 'E']
];

solveNQueenPuzzle(board, 2, 3, 3);

/**
 * E - Empty
 * Q - Queen
 * R - Red Zone
 */
