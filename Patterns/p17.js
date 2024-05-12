/*

* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 * 
*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * 

*/

const printPattern = (n) => {
  for (let row = n; row >= 1; row--) {
    let line = "";

    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        line = line + "* ";
      } else {
        line = line + "  ";
      }
    }

    let space = n - row;
    for (let col = 1; col <= n; col++) {
      if (col <= space) {
        line = line + "  ";
      } else {
        line = line + "* ";
      }
    }

    console.log(line);
  }

  for(let row = 1 ; row <= n ; row++){

    let line = "";

    for(let col = 1 ; col <= n ; col++){

        if(col > row){
            line = line + "  ";
        }else{
            line = line + "* ";
        }
    }

    let space = n - row;
    while(space){
        line = line + "  ";
        space--;
    }

    for(let col = 1 ; col <= row ; col++){
        line = line + "* ";
    }

    console.log(line);

  }
};

printPattern(1);
