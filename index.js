var 회원들 = { member1: 'kim', member2: 'park' };
// 타입지정은 굳이 안해줘도 된다
// 자동으로 지정된다
var 회원 = 123;
//number 또는 string이 들어 올 수 있다
var 회원님들 = [1, '2', 3];
var 오브젝트 = { a: 123 };
// let 이름 :any;
//any에는 모든 자료형 허용해준다
//타입실드 해제 문법이다
//버그 못잡아줌
// 이름 = 123;
// 이름 =[];
var 이름;
이름 = 123;
이름 = [];
//any와 비슷하지만 더 안전하다
// let 변수1 : string = 이름; --> any tpye일 때 오류
// 타입스크립트는 간단한 수학연산도 타입이 맞아야 한다
var 나이;
// 나이 + 1; 오류 why? 문자 또는 숫자에 다 +가 가능함 그래서 union 타입에서는 허용 X
var 나이1 = 1;
// 나이1 -1; 오류 why? 타입스크립트는 엄격하다 숫자타입이어야 숫자처럼 연산해줌
var 나이2 = 2;
나이2 + 2;
//숙제1 다음 변수 4개에 타입을 지정해보자
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//숙제2 학교라는 변수에 타입 지정해주지
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
