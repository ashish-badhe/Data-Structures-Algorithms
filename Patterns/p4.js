/**
 * 
 *      * * * * *
 *      * * * * 
 *      * * * 
 *      * * 
 *      * 
 * 
 *      OR 
 * 
 *      1 2 3 4 5
 *      1 2 3 4 
 *      1 2 3 
 *      1 2 
 *      1 
 */


const printPattern = (num) => {


    for(let row = num ; row >= 1 ; row--){

        let line = "";

        for(let col = 1 ; col <= row ; col++){
            line = line + col + "" // line = line + "* ";
        }

        console.log(line);
    }
}

printPattern(5);