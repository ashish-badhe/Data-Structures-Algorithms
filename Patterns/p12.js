/*

A 
A B 
A B C 
A B C D 
A B C D E 

*/

const printPattern = (n) => {

    for(let row = 1 ; row <= n ; row++){

        let line = "";
        let acsii = 65;

        for(let col = 1 ; col <= row ; col++){
            line = line + String.fromCharCode(acsii) + " ";
            acsii++;
        }

        console.log(line);
    }
}

printPattern(5);