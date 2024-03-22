// js 에서 ':타입종류' 만 추가된 형태
// 예) const text = "ABC"; 라는 js 형태에서  하단처럼 ': string' 만 변수명 text 뒤에 적어줌 

// 하단 코드 작성후 yarn run tsc 입력시--> .js 파일이 생성되고--> 해당파일을 node js파일명으로 실행가능 


const text: string = "ABC";
const num1: number = 123;
// const num2: number = '123'; // 타입체크 오류를 코드실행전 부터 파악할수있게 표시된다. = TS 장점


const ArrText: string[] = ['a','b','c'];
const ArrNum: number[] = [1, 2, 3]; 

// ArrNum.push('4'); // 타입 에러 체크
ArrNum.push(4);
console.log(ArrNum); // [ 1, 2, 3, 4 ]

// | 는  or 의미, 복수의 타입중 하나에 해당하면 된다. 
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

// 복수개의 '리터럴' 타입중 하나에 해당하는 문자열이면 된다.
let rainbowColor1: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white' | 'purple' = 'red';
// let rainbowColor2: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'white' | 'purple' = 'black';  // 오류 'black' 은 복수개의 리터럴 타입 해당x
rainbowColor1 =  'blue';


// ----------------------------------함수-------------------------------------


// 1. 함수 리턴타입을 안적으면 , 타입추론을 한다. 메서드 호출부분에서 마우스를 올리면 추론된 타입의 변화를 확인가능
function a ()  { }
a () // void 로 타입추론됨 (메서드 호출구문에 마우스 올려보기)
     
function b ()  { return 123 } 
b () // number 로 타입추론됨 (메서드 호출구문에 마우스 올려보기)

// 2-1. 리턴 타입으로 :void 를 적으면 return 을 넣지 않는다.  
function d () : void  {  }  // 정상작동
// function c () : void  { return 123 }  // 리턴 넣어서 오류발생

// 2-2. 함수 리턴타입으로 :void 를 적으면 undefined 는 허용을 하지만 두개가 같은것은 아니다. 
// 2-3. 함수 리턴타입으로 :void 를 적으면 null 은 불가지만, tsconfig.json에서 "strictNullChecks": false 로 변경해주면 허용됨


// 3. 함수 리턴타입 number 와 string 
function sum (x: number, y:number): number{
    return x+y;
}
let result = sum(20,30);
console.log(result);


// 1. 함수 타입 오류예시 : 함수의 결과인 return도 number라고 타입지정을 해둔상태, 
// function sum2 (x: number, y:number): number { //  파라미터 괄호() 바로 뒤, 즉 마지막 :number 가 함수의 결과값 반환타입 
//     return x+y+'12'; // 에러! x+y 숫자와 '12'는 문자가 합쳐지면 return 결과값은 문자!!, 즉 반환타입 number와 상이해서 타입오류를 알려줌
// }

// let result2 = sum2(20,30);
// console.log(result2);


// 2. 함수 타입 정상 예시 : 함수의 결과값 return은 string 타입으로 지정을 해둔상태,
function sum3 (x: number, y:number): string { //  파라미터 괄호() 바로 뒤, 즉 마지막 :string 이 함수의 결과값 반환 타입 
    return x+y+'12'; // 숫자+문자열 = 문자열 , 즉 '5012' 이라는 string으로, 위에 지정된 반환타입 string 타입에 해당하여 정상작동
}

let result3 = sum3(20,30);
console.log(result3);






