/**
 * 
 *      1 
 *      2 2 
 *      3 3 3
 *      4 4 4 4 
 *      5 5 5 5 5
 * 
 */


const printPattern = (num) => {

    for(let row = 1 ; row <= num ; row++){

        let line = "";

        for(let col = 1 ; col <= row ; col++){
            line = line + row + " ";
        }

        console.log(line);

    }
}

printPattern(5);