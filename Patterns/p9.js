/*

1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 

**/

const printPattern = (n) => {


    for(let i = 1 ; i <= n ; i++){

        let line = "";

        let startCount = 1;

        if(i % 2 === 0){

            startCount = 0

            for(let col = 1 ; col <= i ; col++){
                line = line + startCount + " ";

                startCount = startCount === 0 ? 1 : 0 ;
            }

            console.log(line);

        }else{

            for(let col = 1 ; col <= i ; col++){
                line = line + startCount + " ";

                startCount = startCount === 0 ? 1 : 0 ;
            }

            console.log(line);
        }
    }

}

printPattern(5);