/**
 * 
 *      * * * * *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 * 
 */


const printPattern = (num) => {

    for(let i = 0 ; i < num ; i++){
        let line = "";
        for(let j = 0 ; j < num ; j++){
            line = line + "* "
        }

        console.log(line);
    }
}

printPattern(5);