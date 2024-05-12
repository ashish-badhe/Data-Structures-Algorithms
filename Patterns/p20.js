

const printPattern = (n) => {


    let row = n;

    while(row >= 1){

        let line = "";

        let col = n;

        while(col >= 1){

            if(col >= row){
                line = line + col + " ";
            }else{
                line = line + row + " ";
            }


            col--;
        }

        col = 2;

        while(col <= n){

            if(col >= row){
                line = line + col + " ";
            }else{
                line = line + row + " ";
            }


            col++;
        }

        row--;
        console.log(line);

    }


    row = 2;

    while(row <= n){

        let col = n;

        line = "";

        while(col >= 1){

            if(col >= row){
                line = line + col + " ";
            }else{
                line = line + row + " ";
            }

            col--;
        }

        col = 2;

        while(col <= n){

            if(col >= row){
                line = line + col + " ";
            }else{
                line = line + row + " ";
            }

            col++;
        }


        row++;
        console.log(line);
    }
}

printPattern(9);