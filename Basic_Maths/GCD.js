

const findGcd = (n1, n2) => {

    if(n1 === 1|| n2 === 1){
        return 1;
    }

    let minNo = n1 < n2 ? n1 : n2;

    let ans = 0;

    for(let i = 1; i <= minNo ; i++){
        if(n1 % i === 0 && n2 % i === 0){
            ans = i;
        }
    }

    return ans;

}

console.log(findGcd(20,15));