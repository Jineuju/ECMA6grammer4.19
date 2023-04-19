let btnPlus = document.querySelector(".btnPlus");
let btnMinus = document.querySelector(".btnMinus");
let text = document.querySelector("h1");
let num = 0;

btnPlus.addEventListener("click", function (e) {
    e.preventDefault();
    //num++;
    num += 2;
    text.innerText = num;
})

btnMinus.addEventListener("click", function (e) {
    e.preventDefault();
    num--;
    text.innerText = num;
})

//__________________///

//문자열안에 변수를 삽입하는 방법

let name = "홍길동";
console.log("안녕하세요 " + name + "님");

//에크마 6문법 , 템플릿 문자열 
// 백틱과 ${}을 사용해서 문자열안에 변수를 삽입하는 방법입니다
//문자를 감쌀때 , 문자열로 인식하도록 할때 사용하는 방법은
//'', "" 두가지는 구분을 하지 않습니다
//에크마6에서 새로운 방법으로 ``이 있습니다 
console.log(`안녕하세요 ${name}님`);


let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let box = document.querySelector("#box");
let num1 = 0;
let deg = 45;

btnLeft.addEventListener("click", function (e) {
    e.preventDefault();
    num1--;
    // box.style.transform = "rotate(-45deg)";
    box.style.transform = `rotate(${num1 * deg}deg)`
});