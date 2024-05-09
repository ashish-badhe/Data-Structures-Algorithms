/*

ABCDE
ABCD
ABC
AB
A

*/

const printPattern = (n) => {

    for(let row = n ; row >= 1; row--){

        let line = "";
        let ascii = 65;

        for(let col = 1 ; col <= row ; col++){
            line = line + String.fromCharCode(ascii);
            ascii++;
        }

        console.log(line);
    }
}

printPattern(5);
