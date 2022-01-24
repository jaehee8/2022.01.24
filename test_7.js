// ? reduce()
// * 일차적으로 떠올리는 형식은 배열의 원소를 모두 더해주는 누적값 덧셈메서드로 생각하며
// * 매개변수 옵션을 통해 복합적으로도 활용할 수 있다.
// ? reduce(콜백함수(accumulator(누적값), crrentValue(현재값), initialValue(시작값)))
// * 콜백함수(저장할공간, 현재순회중인값, 시작값(필요하다면));
const reduceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceReturnArray = reduceArray.reduce((accumulator, currentValue) => {
  // * 누적값 + 현재값 -> 배열의 모든 숫자를 다 더한 값을 리턴하도록 했다.
  return accumulator + currentValue;
});
console.log(reduceReturnArray);
// TODO : reduce() 메서드의 경우 여러가지 디자인패턴이 다양하게 존재하며, 활용성이 매우 높아 원리를 짚을 것