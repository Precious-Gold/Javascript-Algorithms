let numArr = [1,2,3,4,5,6,7,8,9];
let sumOfEven = 0;
let sumOfOdd = 0;
let evenArray = [];
let oddArray = []

for(let x = 0;x<numArr.length;x++){
if(numArr[x]%2==0){
    evenArray.push(numArr[x])
    sumOfEven+=numArr[x]
}
else{
    oddArray.push(numArr[x])
    sumOfOdd+=numArr[x]

}
}
console.log(`The sum of the even array ${evenArray} and the odd array ${oddArray} is ${sumOfEven} and ${sumOfOdd} respectively`)