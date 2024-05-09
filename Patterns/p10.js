/*

1             1 
1 2         2 1 
1 2 3     3 2 1 
1 2 3 4 4 3 2 1 

**/

const printPattern = (n) => {

    for(let row = 1 ; row <= n ; row++){

        let line = "";

        for(let col = 1 ; col <= n ; col++){

            if(col <= row){
                line = line + col + " ";
            }else{
                line = line + "  ";
            }
        }

        for(let col = n ; col >= 1 ; col--){

            if(col <= row){
                line = line + col + " ";
            }else{
                line = line + "  ";
            }

        }

        console.log(line);

    }

}

printPattern(4);