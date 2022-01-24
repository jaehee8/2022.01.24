// ? concat() 배열과 배열을 합치고 싶을때
// * 여러개의 배열을 한개의 배열로 합치고자 할때 concat() 메서드를 활용한다.
// * slice 처럼 합친배열은 새로운 배열로 복사하는 것이 특징
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