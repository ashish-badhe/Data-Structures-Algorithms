/*

1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 

**/




const printPattern = (n) => {

    let no = 1;

    for(let row = 1 ; row <= n ; row++){

        let line = "";

        for(let col = 1 ; col <= row ; col++){
            line = line + no + " ";
            no++;
        }

        console.log(line);
    }

}

printPattern(5);