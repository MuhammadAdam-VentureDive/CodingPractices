const printPermutation = (str: string): string[] =>
{
  let result: string[] = [];

  const process = (processedStr: string = '', unProcessedStr: string) =>
  {
    if(unProcessedStr === '')
    {
      result.push(processedStr);
      return;
    }

    const character = unProcessedStr[0];
    const remainingUnprocessedStr = unProcessedStr.substring(1, unProcessedStr.length);
    const newProcessedStrs = getDifferentTextArrangements(processedStr, character);
    for(let index = 0; index < newProcessedStrs.length; index++)
    {
      process(newProcessedStrs[index], remainingUnprocessedStr);
    }
  };

  const getDifferentTextArrangements = (text: string = '', character: string) : string[] =>
  {
     const result: string[] = [];
     if(text === '')
     {
       result.push(character);
       return result;
     }
     
     let index = 0;
     const numberOfWaysTobeArranged = text.length;
     while(index <= numberOfWaysTobeArranged)
     {
       if(index === 0) result.push(`${character}${text}`);
       else if(index === numberOfWaysTobeArranged) result.push(`${text}${character}`);
       else result.push(`${text.substring(0, index)}${character}${text.substring(index, text.length)}`)
       index++;
     }
     return result;
  };

  process('', str);
  // result = getDifferentTextArrangements('abc', "d");
  return result;
};

console.log(printPermutation("1234"));

//console.log("".substring(0, -1))

