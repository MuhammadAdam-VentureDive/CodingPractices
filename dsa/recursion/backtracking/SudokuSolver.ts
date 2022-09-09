class SoduKuSolver
{
  private readonly ROW_LIMIT: number;
  private readonly COLUMN_LIMIT: number;
  private readonly numbers: number[];
  private _boardRef: string[][];
  private _representingCharacterForEmptyCell: string;
  private _solved: boolean;
  
  constructor()
  {
    this.ROW_LIMIT = 9;
    this.COLUMN_LIMIT = 9;
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this._boardRef = [];
    this._solved = false;
    this._representingCharacterForEmptyCell = '.';
  }

  public solve(board: string[][]): void
  {
     this._boardRef = board;
     this._solve();
     this._solved = false;
  }

  private _solve(): void
  {
     let found = false;
     let emptyCell_row = -1;
     let emptyCell_column = -1;

     for(let row = 0; row < this.ROW_LIMIT; row++)
     {
      for(let column = 0; column < this.COLUMN_LIMIT; column++)
      {
        if(this._boardRef[row][column] === this._representingCharacterForEmptyCell)
        {
          emptyCell_row = row;
          emptyCell_column = column;
          found = true;
          break;
        }
      }
      if(found) break;
     }

     if(!found)
     {
       this._solved = true;
       return;
     }
    
     for(let num of this.numbers)
     {
       if(this._isSafeToBePlaced(num, emptyCell_row, emptyCell_column))
       {
          this._boardRef[emptyCell_row][emptyCell_column] = num.toString();
          this._solve();
          if(this._solved) return;
          this._boardRef[emptyCell_row][emptyCell_column] = this._representingCharacterForEmptyCell;
       }
     }

   
  }

  private _isSafeToBePlaced(num: number, currentRow: number, currentColumn: number): boolean
  {
    for(let column = 0; column < this.COLUMN_LIMIT; column++)
    {
      if(this._boardRef[currentRow][column] === num.toString()) return false;
    }

    for(let row = 0; row < this.ROW_LIMIT; row++)
    {
      if(this._boardRef[row][currentColumn] === num.toString()) return false;
    }

    let block_row_start = currentRow - currentRow % 3;
    let block_column_start = currentColumn - currentColumn % 3;
    let block_row_end = block_row_start + 3;
    let block_column_end = block_column_start + 3;

    for(let row = block_row_start; row < block_row_end; row++)
    {
      for(let column = block_column_start; column < block_column_end; column++)
      {
        if(this._boardRef[row][column] === num.toString()) return false;
      }
    }

    return true;
  }
}

const board = 
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const solver = new SoduKuSolver();
solver.solve(board);
console.log(board);

/*
const currentRow = 4;
const currentColumn = 4;
let block_row = currentRow - currentRow % 3;
let block_column = currentColumn - currentColumn % 3;

console.log(`${block_row},${block_column}`)
*/
