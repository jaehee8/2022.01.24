const concatArrayOne = [1, 2, 3, 4, 5, 6, 7, 8];
const concatArrayTwo = [
  "하나",
  "둘",
  "셋",
  "넷",
  "다섯",
  "여섯",
  "일곱",
  "여덟",
];
const concatArray = concatArrayOne.concat(concatArrayTwo);
console.log(concatArray);
// ? forEach(콜백함수(값));
// * 배열을 loop 순회하고 싶을때 사용
const forEachArray = [1, 2, 3, 4, 5, 6, 7, 8];
forEachArray.forEach((value, index) => {
  console.log(`${value} 는 : ${index} 인덱스`);
});
// * for()문과 forEach()문을 '필요에 따라' 사용하는 경향이 있으며 발생하는 선택지는
// * for()문의 경우 조건식을 정할 수 있기 때문에 조건식 값이 변하는 경우 등에 활용하는 편이며
// * forEach()문은 '배열에 대한' loop 목적일때 사용하는 편이다.
// ? map(콜백함수(값))
// * 배열에 있는 원소하나하나마다 순회하는 방식처럼 콜백함수를 적용시키며 콜백함수에서 나온 결과값을 '다른배열'의 '원소'로 복사한다.
// * 배열 메서드 중 콜백함수를 통해 '필요한 결과값'을 '배열'형태로 복사할 수 있는 이점 때문에
// * 굉장히 애용하는 편이며, 사용 및 활용법을 숙지하는 것을 권장한다.