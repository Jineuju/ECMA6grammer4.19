let fruits = ["melon", "apple", "banana"];

console.log(fruits.length); //3
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[5]);

//배열과 반복문
for (let el of fruits) {
    //fruits라는 배열의 각각의 요소를 변수로 담아서
    //반복시켜달라는 의미
    console.log(el);
}
//기본for문으로 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//배열에 아주 특화된 반복문
// forEach, map 반복문

//forEach는 유사배열과 배열모두에 사용이 가능합니다
fruits.forEach(function (el, index) {
    console.log(el);
    console.log(index);
});

//map 은 오직 배열만 받을수있는 반복문입니다
fruits.map(function (el, index) {
    console.log(el);
    console.log(index);
})

//메소드
fruits.push("oragne");
//배열의 가장 마지막에 "값"을 추가합니다

fruits.pop();
//배열의 가장 마지막을 제거합니다

fruits.unshift("orange");
//배열의 가장 앞에 값을 추가합니다

fruits.shift();
//배열의 가장 앞에 값을 제거합니다

fruits.splice(1, 0, "orange");
//splice("값을 넣을 인덱스", "삭제갯수", "삽입요소")

let newFruits = ["strawberry", "blueberry"];

let fruits2 = fruits.concat(newFruits);
//배열을 합치는 매서드
// 합친결과의 변수 = 기준배열.concat(합쳐질배열);
console.log(fruits2);

console.log(fruits.indexOf("apple"));
//indexOf  해당 값을 배열에서 찾아서 인덱스를 반환
//인덱스를 찾는데 한번찾고 종료합니다
//lastIndexOf도 존재합니다 쓰임은 문자열매소드와 같습니다

console.log(fruits.includes("apple")); //true
console.log(fruits.includes("abc")); //false
//배열에서 값이 포함되어있으면 true, 없으면 false



// console.log(fruits);

