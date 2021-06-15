console.log("안녕");
let arr = [];
// 공백에 배열추가하기
arr.push("길동홍");
arr.push("춘향성");
arr.push("몽룡리");
//전체 배열 확인
console.log(arr);
// 배열의 1번 확인하기
console.log(arr[1]);

let arrCopy = [...arr, "걱정임"];
console.log("arrCopy", arrCopy);
