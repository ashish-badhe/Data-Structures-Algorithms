/*

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 

*/
const printPattern = (n) => {

    let i = 1;

    for(i = 1 ; i <= n ; i++){

        let line = "";

        for(let j = 1 ; j <= i ; j++){
            line = line + "* ";
        }

        console.log(line);
    }

    i = i - 1;

    for(let j = i ; j >= 1 ; j--){

        let line = "";

        for(let k = 1 ; k < j ; k++){
            line = line + "* ";
        }

        console.log(line);
    }
}

printPattern(5);