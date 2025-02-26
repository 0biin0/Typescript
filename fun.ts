function 함수(x :number):number {
    return x*2
}
//함수('6') 오류 number로 설정해서 

//return이 없을 경우 void 사용
function 함수1(x :number):void {
    1+1
}

// 파라미터가 옵션일 경우 파라미터변수?:타입
//? == undifined
//x:number | undifined 랑 같은 뜻
function 함수2(x? :number):void {
  
}

//숙제 1이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 
function 숙제1(x? :string){
    if (x){
        console.log('안녕하세요' + x)
    } else {
        console.log('이름이 없습니다')
    }
    
}

//숙제 2 함수에 숫자 또는 문자를 집어 넣으면 자릿수를 세어 출력해주는 함수 만들기
function 숙제2(y:number | string) {
    return y.toString.length;
}

//숙제 3 결혼 가능 확률을 알려주는 함수 만들기
// 조건 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수('상','중','하')를 입력할 수 있어야한다
// 조건 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산
// 조건 3. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산
function 결혼(money :number, house: boolean, charm : string) : string |  void {
    let score :number = 0;
    score += money;
    if(house == true) {
        score += 500
    }
    if(charm == '상') {
        score +=100
    }
    if(score >= 600) {
        return '결혼가능'
    }
}
console.log(결혼(100, true, '상'))