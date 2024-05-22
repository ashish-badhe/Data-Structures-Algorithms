
const isArmstrong = (n) => {

    let dup = n;

    let digitCount = Math.trunc(Math.log10(n)) + 1;

    let sum = 0;

    while(dup > 0){
        sum = sum + ((dup % 10) ** digitCount);
        dup = Math.trunc(dup / 10);
    }

    if(sum === n){
        return true;
    }

    return false;
}

console.log(isArmstrong(9475));