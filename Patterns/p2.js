/**
 * 
 *      * 
 *      * * 
 *      * * *
 *      * * * * 
 *      * * * * *
 * 
 * 
 *      OR 
 * 
 * 
 *      1 
 *      1 2 
 *      1 2 3
 *      1 2 3 4 
 *      1 2 3 4 5
 * 
 */

const printPattern = (num) => {

    for(let row = 1 ; row <= num ; row++){

        let line = "";

        for(let col = 1 ; col <= row ; col++){
            line = line + col + " " // line = line + "* ";
        }

        console.log(line);
    }

}

printPattern(5);