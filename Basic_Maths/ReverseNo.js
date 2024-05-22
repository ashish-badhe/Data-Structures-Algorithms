var reverse = function(x) {

    let revNo = 0;
    let isNegative = false;

    if(x < 0){
        isNegative = true;
        x = x * -1;
    }

    while(x > 0){
        revNo = revNo * 10 + x % 10;
        x = Math.trunc(x / 10);
    }

    let low = -(2 ** 31);
    let high = (2 ** 31) - 1;

    if(isNegative){
        revNo = revNo * -1;
    }

    if(revNo >= low && revNo <= high){
        return revNo;
    }

    return 0;
};

console.log(reverse(-123));