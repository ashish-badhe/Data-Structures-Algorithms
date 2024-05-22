var isPalindrome = function(x) {

    if(x < 0){
        return false;
    }

    let revNo = 0;
    let copyNo = x;
    while(copyNo > 0){
        revNo = revNo * 10 + copyNo % 10;
        copyNo = Math.trunc(copyNo / 10);
    }

    if(revNo === x) return true;

    return false;
};

console.log(isPalindrome(121));