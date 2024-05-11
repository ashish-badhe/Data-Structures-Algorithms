

const printPattern = (n) => {

    for(let i = 1 ; i <= n ; i++){
       
        let line = "";

        if(i === 1 || i === n){
            for(let j = 1 ; j <= n ; j++){
                line = line + "* ";
            }
        }else{

            for(let k = 1 ; k <= n ; k++){
                if(k === 1 || k === n){
                    line = line + "* ";
                }else{
                    line = line + "  ";
                }
                
            }
        }

        console.log(line);
    }

}

printPattern(10);