const basicArray = ["1", "2", "3", "4", "5", "6"];
// ? : push()
// * push는 배열 맨 뒤에 원소를 추가할 때 사용하는 메서드
basicArray.push(basicArray[0]);
console.log(basicArray);
// ? pop()
// * pop은 배열의 맨 뒷 원소값을 '삭제'할 때 사용하는 메서드
basicArray.pop("박재희");
console.log(basicArray);
// ? unshift
// * unshift는 배열 맨 앞에 원소를 삽입하는 메서드
basicArray.unshift("0");
console.log(basicArray);
// ? sfift
// * 배열 맨 앞에 원소를 '삭제'하는 메서드
basicArray.shift("0");
console.log(basicArray);
