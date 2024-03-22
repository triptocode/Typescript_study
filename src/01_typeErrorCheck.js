"use strict";
// js 에서 ':타입종류' 만 추가된 형태
// 예) const text = "ABC"; 라는 js 형태에서  하단처럼 ': string' 만 변수명 text 뒤에 적어줌 
// 하단 코드 작성후 yarn run tsc 입력시--> .js 파일이 생성되고--> 해당파일을 node js파일명으로 실행가능 
const text = "ABC";
const num1 = 123;
// const num2: number = '123'; // 타입체크 오류를 코드실행전 부터 파악할수있게 표시된다. = TS 장점
const ArrText = ['a', 'b', 'c'];
const ArrNum = [1, 2, 3];
// ArrNum.push('4'); // 타입 에러 체크
ArrNum.push(4);
console.log(ArrNum); // [ 1, 2, 3, 4 ]
// | 는  or 의미, 복수의 타입중 하나에 해당하면 된다. 
let mightBeUndefined = undefined;
let nullableNumber = null;
// 복수개의 '리터럴' 타입중 하나에 해당하는 문자열이면 된다.
let rainbowColor1 = 'red';
// let rainbowColor2: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white' | 'purple' = 'black';  // 오류 'black' 은 복수개의 리터럴 타입 해당x
rainbowColor1 = 'blue';
// ----------------------------------함수-------------------------------------
function returnNo() {
    console.log('return이 없을때 반환타입은 안적거나 void로 지정');
    return '123';
}
returnNo();
function sum(x, y) {
    return x + y;
}
let result = sum(20, 30);
console.log(result);
// 1. 함수 타입 오류예시 : 함수의 결과인 return도 number라고 타입지정을 해둔상태, 
// function sum2 (x: number, y:number): number { //  파라미터 괄호() 바로 뒤, 즉 마지막 :number 가 함수의 결과값 반환타입 
//     return x+y+'12'; // 에러! x+y 숫자와 '12'는 문자가 합쳐지면 return 결과값은 문자!!, 즉 반환타입 number와 상이해서 타입오류를 알려줌
// }
// let result2 = sum2(20,30);
// console.log(result2);
// 2. 함수 타입 정상 예시 : 함수의 결과값 return은 string 타입으로 지정을 해둔상태,
function sum3(x, y) {
    return x + y + '12'; // 숫자+문자열 = 문자열 , 즉 '5012' 이라는 string으로, 위에 지정된 반환타입 string 타입에 해당하여 정상작동
}
let result3 = sum3(20, 30);
console.log(result3);
