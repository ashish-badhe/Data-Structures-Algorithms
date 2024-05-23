
const checkPrime = (n) => {

    let count = 1;

    if(n === 1) return false;

    for(let i = 1; i * i <= n ; i++){
        if(n % i === 0){
            count++;
        }
    }

    if(count > 2){
        return false;
    }

    return true;
}

console.log(checkPrime(13));

