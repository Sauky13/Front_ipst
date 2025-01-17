interface Results {
    [key: number]: number;  
  }
  
  function getOptimalBillsBreakdown(N: number): Results { 
      const denominations = [100, 50, 10, 5, 2, 1];
      let result: Results = {};
      
      for (let denomination of denominations) {
          const numberOfBills = Math.floor(N / denomination);
          
          if (numberOfBills > 0) {
              result[denomination] = numberOfBills;  
              N -= numberOfBills * denomination;  
          }
          if (N === 0) break; 
      }
      
      return result; 
  }
  
  const sum = 125;
  console.log(getOptimalBillsBreakdown(sum));  
  