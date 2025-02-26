function 내함수(x :number|string){
    if(typeof x === 'string'){ //x의 타입이 string이면
        return x + '1'
    }else {
        return x + 1
    }
}
내함수(123);

function 내함수1(x :number|string){
       let array :number[] =[];
       if(typeof x === 'number'){
        array[0] = x;
       }
    // Narrowing 문법
    // typeof 변수 : 변수의 타입(자료형) 확인 ex (typeof x === "string")
    // 속성명 in 오브젝트자료 : 객체에 해당 속성이 존재하는지 확인 ex ("name" in obj)
    // 인스턴스 instanceof 부모 : 객체가 특정 클래스(부모)의 인스턴스인지 확인 ex (obj instanceof ParentClass)
}

function 내함수2(x :number|string) {
    let array :number[] =[];
    array[0] = x as number;
    // assertion 문법 타입 덮어쓰기 왼쪽에 있는 변수를 타입으로 덮어씌어주세여
   
    // assertion 용도1
    // Narrowing 할 때 사용
    // let 이름 :string = 'kim';
    // 이름 as number; --> 타입을 a에서 b로 바꾸는건 안돼요
    
     // assertion 용도
     // 무슨 타입이 들어올지 100% 확실할 때 쓴다 --> 그래서 구딩 쓸 이유가 없다   
}

// 숙제 1
function 숫자(a :(number|string)[]) {
    let x : number[] = [];

    a.forEach((y) => {
        if(typeof y === 'string') {
            x.push(parseInt(y))
        } else {
            x.push(y)
        }
    })
    return 숫자
}
// 배열.forEach((요소, 인덱스, 배열) => {
//     // 실행할 코드
// });
