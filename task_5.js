let word = 'This is a boy';
let wordArr = word.split('')
let returnWord = '';
for(let k = 0;k<wordArr.length;k++){
    if(wordArr[k] == ' '){
        wordArr[k] = "%"

    
    }
    returnWord+= wordArr[k]
}
console.log(returnWord)