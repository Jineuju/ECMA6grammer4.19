// Destructure assignment

// 기존의 배열, 객체는 존재한 상태여야 합니다
const arr = ["red", "green", "blue", "white"];

// 기존의 방법으로 배열, 객체에서 해당 값을 뽑아내어 변수로 담고자 한다면
// 하나하나의 값을 변수로 선언하고 배열, 객체에서 탐색해서 할당해야 했습니다.
const red = arr[0];
const green = arr[1];
const blue = arr[2];
const white = arr[3];

// 비구조화할당, 구조분해할당

const [a, b, c, d] = arr;
// 오리지널 배열이 존재하는 상태에서 변수명을 배열형태로 받고 배열이름을 대입해서
// 배열값을 담기만 합니다. 이때 배열의 순서에 맞춰서 구조를 오프하고 할당하는 것에 주의

// 배열의 탐색은 인덱스로 하기 때문에 순ㅇ서에 맞춰서 작성하면 되었지만
// 객체는 탐색을 키값으로 하기 때문에 배열은 변수를 개발자 임의대로 지정이 가능했지만
// 객체는 키값을 그대로 사용해야합니다

// const student = {
//   name: "Kim kia",
//   age: 24,
//   address: "seoul",
// };

// const { name, age, address } = student;

// 비구조화할당의 이득, 변수할당을 반복한 필요없이 한곳에 선언되기 때문에 코드의 단축과
// 한곳에 모여있는 변수이기 때문에 가독성이 뛰어나다 => 유지보수력도 훌륭하다
// + 디폴트파라미터로 설정이 가능하기때문에 실무에서 자주 사용합니다
// 또한 js라이브러리인 리액트, 뷰 등의 문법체계에서는 기본적으로 사용되는 문법이기 때문에
// 프론트앤드에서는 잘 알아야합니다

// [{}, {}, {}] = 객체배열 => js에서는 자료들을 저장하는 방식 json 입니다

const studentInfo = [
  {
    name: "Hwang Dae in",
    age: 40,
    isMale: true,
  },
  {
    name: "Kim do young",
    age: 20,
    isMale: true,
  },
  {
    name: "Jung hae young",
    age: 30,
    isMale: true,
  },
];

// 객체배열에서 자료를 탐색할 때
const name1 = studentInfo[0].name;
console.log(name1);

// 배열의 구조분해할당의 방법과 객체의 구조분해할당이 다르다는것

const [info1] = studentInfo;
console.log(info1);
const [in1, in2, in3] = studentInfo;

const { name } = in1;
console.log(name);

// //중첩된 객체의 깊은 비구조화 할당

// const styles = {
//     size: {
//         width: 300,
//         height: 200,
//     },
//     color: {
//         fontColor: 'red',
//         bgColor: "blue"
//     }
// }

// const { size: { width, height }, color: { fontColor, bgColor } } = styles;

// const myInfo = (name, age, job, hobby) =>
//   `제 이름은 ${name}이고 나이는 ${age}이며 직업은 ${job}입니다
//   그리고 ${hobby}를 좋아합니다`;
// // {}안에 ``으로 사용하게되면 {}때문에 ``이 무시됩니다
// // ``을 {}로 묶으면 인수안에 인수를 넣는 꼴이 되버려서 언디파인드(오류)가 됩니다
// console.log(myInfo("진의주", "24", "학생", "게임"));
// 실무에서 가장 중요한 건 협업입니다. 협업에서 걸림돌이 되는 것은 무조건 지양해야합니다.

// obj란 함수를 호출하는 곳에서 인수를 객체로 넣어주는데, 그 넣는 인수 객체를 받아주는
// 매개변수라고 할 수 있습니다.
// obj는 변수이고 변수안의 각각의 키값으로 넣어져있는 값들을 끄집어서 각 해당하는 부분에
// name, age, job 등이 들어가져야 하므로 각각의 값에 obj.name과 같이 객체안의 값을 불러 와야합니다.

// const myInfo = (
//   obj
// ) => `제 이름은 ${obj.name}이고 나이는 ${obj.age}이며 직업은 ${obj.job}입니다
//  그리고 ${obj.hobby}를 좋아합니다`;

// console.log(
//   myInfo({
//     name: "진의주",
//     age: 24,
//     job: "학생",
//     hobby: "축구",
//   })
// );

// 단점 : 코드의 가독성이 떨어지고, 디폴트파라미터를 넣을 수 없다.

const myInfo = ({
  name,
  age,
  job = "무직",
  hobby,
}) => `제 이름은 ${name}이고 나이는 ${age}이며 직업은 ${job}입니다
  그리고 ${hobby}를 좋아합니다`;

console.log(
  myInfo({
    name: "진의주",
    age: 24,
    // job: "학생",
    hobby: "축구",
  })
);

/*
코드의 가족성을 높이기 위해서 obj의 객체를 구조분해할당으로 매개변수자리에 넣어줌으로써
바로 해당 키값을 알 수 있고 값을 넣는 구간에도 obj.name처럼 어렵게가 아닌 직관적인 값을
넣어 줄 수 있다. 또한 구조분해할당으로 넣는 매개변수자리에 디폴트파라미터를 넣어줄 수도 있다.
*/
