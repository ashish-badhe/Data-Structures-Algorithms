/**
 * 
 *             *
 *           * * *
 *         * * * * *
 *       * * * * * * *
 *     * * * * * * * * *
 * 
 */

const printPattern1 = (num) => {

    let start = num;
    let end = num;

    for(let row = 1 ; row <= num ; row++){

        let line = "";

        for(let col = 1 ; col <= end ; col++){

            if(col >= start && col <= end){
                line = line + "* ";
            }else{
                line = line + "  ";
            }
        }

        start--;
        end++;
        console.log(line);
    }
}

// printPattern1(9);

const printPattern2 = (num) => {

    for(let i = 0 ; i < num ; i++){

        let line = "";

        for(let j = 1 ; j <= num-i-1 ; j++){
            line = line + "  ";
        }

        for(let k = 1 ; k <= 2 * i + 1 ; k++){
            line = line + "* ";
        }

        for(let j = 1 ; j <= num - i - 1 ; j++){
            line = line + "  ";
        }

        console.log(line);

    }
} 

printPattern2(5);
