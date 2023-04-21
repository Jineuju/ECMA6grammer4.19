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
