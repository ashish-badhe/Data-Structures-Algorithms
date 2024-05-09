/**
 * 
 *     * * * * * * * * *
 *       * * * * * * *
 *         * * * * *
 *           * * *
 *             *
 */


const printPattern = (n) => {

    for(let row = n ; row >= 1 ; row--){

        let start = 2 * row - 1;

        let space = n - row;

        let line = "";

        for(let i = 1 ; i <= space ; i++){
            line = line + "  ";
        }

        for(let j = 0 ; j < start ; j++){
            line = line + "* ";
        }

        for(let i = 1 ; i <= space ; i++){
            line = line + "  ";
        }

        console.log(line);
    }
}

printPattern(5);