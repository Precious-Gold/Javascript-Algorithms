const num = 40;
let resultArr = []
for (let l = 0; l < num; l++) {
    for (let m = 0; m < l.toString().length; m++) {
        if (l.toString()[m] == '3') {
            resultArr.push(l)
        }
    }

}
console.log(resultArr)