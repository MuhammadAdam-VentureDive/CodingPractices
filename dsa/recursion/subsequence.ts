const printSubsets = (str: string) => 
{
   const process = (str: string, outputStr: string = '') : string[] =>
   {
      const result = [];
      if(!str) return [outputStr];
      const newOutputStr = outputStr + str[0];
      result.push(...process(str.slice(1, str.length), newOutputStr));
      result.push(...process(str.slice(1, str.length), outputStr));
      return result;
   }

   const processIteratively = (str: string): string[] =>
   {
     const result: string[] = [''];
     
     for(let index = 0; index < str.length; index++)
     {
        const newSets = result.map(x => `${x}${str[index]}`);
        result.push(...newSets)
     }
     return result; 
   };
   console.log(processIteratively(str));
   // console.log(process(str));
};



printSubsets('123');
