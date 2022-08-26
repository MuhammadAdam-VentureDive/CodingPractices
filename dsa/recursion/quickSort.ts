const quickSort = (arr: number[]) =>
{
  const sort = (arr: number[], startIndex: number, endIndex: number) =>
  {
       if(startIndex === endIndex) return;
       const pivotIndex = Math.ceil((startIndex + endIndex) / 2) - 1;
       partition(arr, pivotIndex);
       sort(arr, startIndex, pivotIndex);
       sort(arr, pivotIndex + 1, endIndex);
  }

  const partition = (arr: number[], pivotPosition: number) =>
  {
    const pivot = arr[pivotPosition];
    let pivotIndex = pivotPosition;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex)
    {
      if(leftIndex < pivotIndex)
      {
       if(arr[leftIndex] > pivot)
        {
          const temp = arr[leftIndex];
          arr[leftIndex] = pivot;
          arr[pivotIndex] = temp;
          pivotIndex = leftIndex;
        }
        else leftIndex++;
      }

      if(pivotIndex < rightIndex)
      {
       if(pivot > arr[rightIndex])
       {
          const temp = arr[rightIndex];
          arr[rightIndex] = pivot;
          arr[pivotIndex] = temp;
          pivotIndex = rightIndex;
       }
       else rightIndex--;
      }
    }
  }

  sort(arr, 0, arr.length - 1);
}


const arr = [4, 2, 8, 3, 1, 5, 7, 11, 6];
quickSort(arr);
console.log(arr);
