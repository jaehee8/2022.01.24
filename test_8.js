// ? sort()
// * 배열의 원소값을 콜백함수에 알고리즘에 규합하는 순서로 정리하는 메서드
const randomArray = [1, 1023, 3, 6, 4, 7, 39];
console.log(
  // * 오름차순 정렬
  randomArray.sort((a, b) => {
    return a - b;
  })
);
console.log(
  // * 내림차순 정렬
  randomArray.sort((a, b) => {
    return b - a;
  })
);