// !문서에 있는 값이 배열이기만 하면된다.
const data = [1,2,3];

let count = 0;
let timer = setInterval(function() {
  if(count < data.length) {
    console.log(count);
    count++;
  } else {
    count = 0;
    console.log(count);
    clearInterval(timer);
  }
}, 1000);