// ? map(콜백함수(값))
// * 배열에 있는 원소하나하나마다 순회하는 방식처럼 콜백함수를 적용시키며 콜백함수에서 나온 결과값을 '다른배열'의 '원소'로 복사한다.
// * 배열 메서드 중 콜백함수를 통해 '필요한 결과값'을 '배열'형태로 복사할 수 있는 이점 때문에
// * 굉장히 애용하는 편이며, 사용 및 활용법을 숙지하는 것을 권장한다.
const mapArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapReturnArray = mapArray.map((value) => {
  // * map메서드를 통해 mapArray의 숫자가 2로 나누어 떨어지면 짝수, 나누어 떨어지지 않는다면 홀수를 리턴
  return value % 2 === 0;
  // * 리턴한 값들을 mapReturnArray 라는 배열의 '원소'로 새롭게 생성되었다.
});
console.log(mapReturnArray);

// ? filter(콜백함수(값))
// * map과 매우 유사하며 특징은 콜백함수의 리턴이 불리언타입이어야하고, true인 원소만 새로 재배열하여 복사한다.
const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterReturnArray = filterArray.filter((value) => {
  return value % 2 === 0;
});
console.log(filterReturnArray);
// * 결과가 참인 원소들만 새로운 배열로 복사된 것을 확인 할 수 있다.