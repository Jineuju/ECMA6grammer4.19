//기존 es5에서의 배열합치기
let a = [1, 2, 3];
let b = [3, 4, 5];
const ab = a.concat(b);
console.log(ab); //[1,2,3,3,4,5]

//배열의 중복값을 제거하고 싶을때

const numberss = [1, 1, 2, 2, 3, 4, 5];

const newNember = numberss.filter((el, index) => {
  // 필터에의해서 밑에있는 return numberss.indexOf(el) === index;을 true값으로
  //반환되는 값만 모아서 새로운 배열을
  return numberss.indexOf(el) === index;
});
console.log(newNember); // [1,2,3,4,5]

/*
filter(); 메소드는 주어진 배여르이 값들을 순차적으로 접근하여 콜백함수를 통해서
ture값을 반환하는 요소들을 기준으로 신규 배열을 만들어 반환합니다
map(); 메소드(내장함수 메소드) = 콜백함수를 순차적으로 모든 요소에 적용합니다(반복문)
reduce(); 
배열의 각요소를 순차적으로 접근해서 콜백함수의 실행값을 누적해서 결과를 도출합니다
map()은 5개의 요소를 판단한다면 결과로 5개의 결과값이 도출됩니다
반면 reduce()는 5개의 요소를 판단한다면 결과로 5개이하의 값을 도출합니다
도출하는 갯수는 콜백함수의 내용에 따라서 달라집니다
이 세 메소드는 기본적으로 순차적으로 해당 값에 접근하는 방식으로 일을 처리합니다
*/
const dup = [1, 2, 2, 3];
const dup2 = dup.reduce(
  (arr, cur) => (arr.includes(cur) ? arr : [...arr, cur]),
  []
);
console.log(dup2);
// arr = []
// cur = 1
// arr[1]
// arr[1]
// cur = 2
// arr[1, 2]
// arr = [1, 2]
// cur = 2
// arr = [1, 2]
// 2는 탈락
// arr = [1, 2]
// arr = [1, 2]
// cur = 3
// arr = [1, 2, 3]
