/*

A 
B B 
C C C 
D D D D 
E E E E E 

*/

const printPattern = (n) => {

    for(let row = 65 ; row <= (64 + n) ; row++){

        let line = "";

        for(let col = 65 ; col <= row ; col++){
            line = line + String.fromCharCode(row) + " ";
        }

        console.log(line);
    }

}

printPattern(5);