let num1 = "34353455t4ret4"; // 문자열
let num2 = num1; // 그 자료값을 복사한 것

console.log(num1);
console.log(num2);
// 복사대상과 복사된 값이 모두 잘 적용되어있습니다
// 정말 잘 적용되었는지 확인하려면
num1 = "231414";
//num1을 재정의하고 콘솔을 찍어보면 num1만 바뀌어 있는것을 확인할 수 있습니다
// 이로 미루어보아 num2는 완전한 복사가 이루어진것으로 볼 수 있습니다.

console.log(num1);
console.log(num2);

let arr1 = [1, 2, 3]; //배열로 된 자료값
let arr2 = arr1; // 그 자료값을 복사한 것

console.log(arr1);
console.log(arr2);

arr1[0] = 0;

console.log(arr1);
console.log(arr2);
// arr2가 arr1과 같이 똑같이 복사됩니다

/*
자료의 형태는 원시형과 참조형이 있습니다.
원시형 = 문자열, 참조형 = 배열
참조형의 자료값은 단순복사로은 온전하게 복사할 수가 없습니다
참조형의 자료는 주소의 값만 복사가 되기 때문에 원본이 변하면 복사된 값도 변하게 됩니다

따라서 다른 복사방법이 필요합니다

중요!!
불변성 : 기존자료가 복사, 변형, 이동 등이 변화가 있을 때 변화이전과 변화이후의 자료가
서로 영향을 미치지 않는 성질 (독립적인 객체가 되어야한다는 의미)

DOM이란? body안의 내용이 브라우저에 의해서 해석되어져서 구현되는 내용
DOM에는 2가지 종류 : 리얼돔과 가상돔
리얼돔 : 진짜 존재하는 돔, html에 작성함으로 구현된 돔, js로 만들어질 돔
가상돔 : js가 메모리상에서 가상으로 작성하는 돔

js에서는 이런 자료의 복사와 이동이 빈번하게 발생합니다
따라서 이 과정에서 이전 자료의 불변성은 매우 중요한 개념이 됩니다

결국 복사는 깊이있는 복사가 필요합니다
*/

let arr3 = [1, 2, 3];
let arr4 = [...arr3];

console.log(arr3);
console.log(arr4);

arr3[0] = 0;
console.log(arr3);
console.log(arr4);

let arr5 = [...arr3, 7];
console.log(arr5);

let arr6 = [...arr5, ...arr4];
console.log(arr6);

/*
배열이란 기존의 값이 패키징되어있는 상태
전개연산자로 배열을 쓰게 되면 패키징이 되어있는 값을 바로 사용할 수 있도록
패키징으로부터 꺼내 펼쳐놓음을 의미합니다. 하지만 전개연산자 자체로는 값을 바로
사용할 수 있는 형태는 아니고 새롭게 옮겨 담을 패키징을 한 뒤에 사용할 수 있습니다
*/

console.log(arr1); //[0,2,3]
console.log(...arr1); // 0 2 3

// 전개연산자로 객체값을 추가해보자
const obj = {
  name: "Ostin",
  age: 31,
};

const newobj = { ...obj, address: "bucheon" };
console.log(newobj);
