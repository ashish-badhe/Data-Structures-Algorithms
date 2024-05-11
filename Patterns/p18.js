/*

*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * 

*/

const printPattern = (n) => {

    for(let i = 1 ; i <= n ; i++){

        let line = "";
        for(let j = 1 ; j <= i ; j++){
            line = line + "* ";
        }

        for(let k = 1 ; k <= n - i ; k++){
            line = line + "  ";
        }

        for(let k = 1 ; k <= n - i ; k++){
            line = line + "  ";
        }

        for(let j = 1 ; j <= i ; j++){
            line = line + "* ";
        }
        console.log(line);
    }

    for(let i = 1 ; i <= n - 1 ; i++){

        let line = "";
        for(let j = 1 ; j <= n - i ; j++){
            line = line + "* ";
        }

        for(let k = 1 ; k <= i ; k++){
            line = line + "  ";
        }

        for(let k = 1 ; k <= i ; k++){
            line = line + "  ";
        }

        for(let j = 1 ; j <= n - i ; j++){
            line = line + "* ";
        }
        console.log(line);
    }
}

printPattern(5);