/*

E 
D E 
C D E 
B C D E 
A B C D E

*/

function outerFunction(n) {
  return function () {
    for (let row = 1; row <= n; row++) {
      let line = "";
      let ascii = 65 + n - row;

      for (let col = 1; col <= row; col++) {
        line = line + String.fromCharCode(ascii) + " ";
        ascii++;
      }

      console.log(line);
    }
  };
}

outerFunction(5)();
