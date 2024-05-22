


const countDigitsUsingLoop = (n) => {

    let count = 0;

    while(n > 0){
        count++;
        n = Math.trunc(n / 10);
    }

    return count;
}

const countDigitsLog = (n) => {
    return Math.trunc(Math.log10(n) + 1);
}

// console.log(countDigitsUsingLoop(7789));

console.log(countDigitsLog(7789222));