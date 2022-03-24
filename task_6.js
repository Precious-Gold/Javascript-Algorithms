const customSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  };
  const customSplice = (arr, first, second) => {
    let tempArr = [];
    for (let i = 0; i < second; i++) {
      tempArr[i] = arr[first];
      first++;
    }
    return tempArr;
  };
  
  const checkTheSumOfThreeNumbers = (arr, num) => {
    let checkArr;
    let sortArr;
  
    sortArr = arr.sort((a,b)=>a-b);

    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i] >= num) {
        checkArr = customSplice(sortArr, 0, sortArr[i] - 1);

      } else {
        checkArr = sortArr;

      }
    }
    for (let x = 0; x < checkArr.length; x++) {

      for (let y = x + 1; y < checkArr.length; y++) {
        for (let z = y + 1; z < checkArr.length; z++) {
          if (checkArr[x] + checkArr[y] + checkArr[z] == num) {
            return console.log(
              JSON.stringify([checkArr[x], checkArr[y], checkArr[z]])
            );
          }
        }
      }
    }
  
    return console.log(-1);
  };
  
  checkTheSumOfThreeNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 4], 5);
  