/*
문자열 : 하나의 자료를 구성하기위해서 일련의 
문자들의 집합으로 구성된 정보
문자만으로 이루어진 배열
*/

let txt = "Hello World World";
//문자열.length : 문자열의 갯수를 반환합니다
// let result = txt.length; 
//17 띄어쓰기 빈칸도 문자열로 인식합니다

//let result = txt.indexOf("Wo"); //6
//문자열.indexOf("특정문자열") 특정문자열을 찾고
//찾은 지점의인덱스를 반환합니다처음찾는 것만 찾고 종료

// let result = txt.indexOf("Wo", 8); //12
//문자열.indexOf("특정문자열","시작인덱스")
//시작인텍스로 부터 특정문자열을 찾고 찾으면 종료

// let result = txt.lastIndexOf("Wo"); //12
//문자열.lastIndexOf("특정문자열") 
//문자열에서 가장 마지막에 있는 특정문자열을 찾습니다
//찾고 인덱스를 반환하고 종료

let txt1 = "banana, apple, melon";
//let result = txt1.slice(8, 13); //apple
//문자열.slice(시작인덱스,종료인덱스) 
//시작인덱스이상부터 종료인덱스미만까지

// let result = txt1.substring(8, 13);//apple
//문자열.substring(시작인덱스,종료인덱스) 
//시작인덱스이상부터 종료인덱스미만까지

// let result = txt1.substr(8, 5);//apple
//문자열.substr(시작인덱스,가져올갯수);

// let result = txt.replace("World", "Everyone");
//문자열.replace("원래문자","대체할문자")
//특정문자열을 대체하는데 처음 찾은 한곳만 대체합니다

//문자열.toUpperCase() 문자열모두 대문자로 변경
//문자열.toLowerCase() 문자열모두 소문자로 변경
//대부분 css text-transform을 사용합니다
// let result = txt.toUpperCase();

let txt2 = "안녕하세요";
let name = "홍길동님";

// let result = txt2.concat(" ", name);
//문자열.concat(문자열2) 문자열을 연결합니다
//만약 문자열과 문자열2사이에 특정값을 넣고싶으면
//문자열.concat("특정값",문자열2) 이렇게 인수를 추가합니다

let fruits = "bananaTappleTmelon";

let result = fruits.split("T");
//문자열.split("구분할요소") 
//구분할요소를 기준으로 문자열을 분리해서
// '배열'로 반환합니다 <== 이렇기 때문에 자주 사용합니다


console.log(result);