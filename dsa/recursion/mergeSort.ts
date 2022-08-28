const mergeSort = (arr: number[]) =>
{
   const sort = (arr: number[], startIndex: number, endIndex: number) =>
   {
        if(startIndex === endIndex) return; 
        const middleIndex = Math.ceil((startIndex + endIndex) / 2) - 1;
        sort(arr, startIndex, middleIndex);
        sort(arr, middleIndex + 1, endIndex);
        mergeInPlace(arr, startIndex, middleIndex, endIndex);
   };

   const merge = (left: number[], right: number[]): number[] =>
   {
       const result = [];
       let leftIndex = 0;
       let rightIndex = 0;

       while(true)
       {
          if(leftIndex >= left.length)
          {
             result.push(...right.slice(rightIndex, right.length));
             break;
          }

          if(rightIndex >= right.length)
          {
             result.push(...left.slice(leftIndex, left.length));
             break;
          }

          if(left[leftIndex] < right[rightIndex])
          {
             result.push(left[leftIndex]);
             leftIndex++;
          }
          else
          {
             result.push(right[rightIndex]);
             rightIndex++;
          }
       }
       return result;
   }

   const mergeInPlace = (arr: number[], startIndex: number, middleIndex: number, endIndex: number) =>
   {
      let leftIndex = startIndex;
      
      while(leftIndex <= middleIndex)
      {
         const leftValue = arr[leftIndex];
         let rightIndex = middleIndex + 1;
         let i = leftIndex;
         while(rightIndex <= endIndex && leftValue > arr[rightIndex])
         {
            const temp = arr[i];
            arr[i] = arr[rightIndex];
            arr[rightIndex] = temp;
            i = rightIndex;
            rightIndex++;
         }
         leftIndex++;
    }
   }

   sort(arr, 0, arr.length - 1);
};


const arr = [3,5,1,12,14];
mergeSort(arr);
console.log(arr);

/*
const mergeInPlace = (arr: number[], startIndex: number, middleIndex: number, endIndex: number) =>
{
    let leftIndex = 0;
   
    while(leftIndex <= middleIndex)
    {
       const leftValue = arr[leftIndex];
       let rightIndex = middleIndex + 1;
       let i = leftIndex;
       while(rightIndex <= endIndex && leftValue > arr[rightIndex])
       {
          const temp = arr[i];
          arr[i] = arr[rightIndex];
          arr[rightIndex] = temp;
          i = rightIndex;
          rightIndex++;
       }
       leftIndex++;
    }
}
const arr = [3,5,1,12,14];
const middleIndex = Math.ceil((0 + 4) / 2) - 1;
mergeInPlace(arr,0, middleIndex, 4);
console.log(arr);*/
