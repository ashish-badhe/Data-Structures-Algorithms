/*

        A 
      A B A 
    A B C B A 
  A B C D C B A 
A B C D E D C B A 

*/

function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    let line = "";
    let ascii = 65;

    for (let j = 1; j <= n; j++) {
      if (j >= i) {
        line = line + String.fromCharCode(ascii) + " ";
        ascii++;
      } else {
        line = line + "  ";
      }
    }

    ascii = ascii - 2;
    while (ascii >= 65) {
      line = line + String.fromCharCode(ascii) + " ";
      ascii--;
    }

    console.log(line);
  }
}

printPattern(7);
