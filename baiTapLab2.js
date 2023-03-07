let mark=50;
function checkMark(mark){
    if(mark>=85){
        console.log("A");
    }else if(70 <= mark && mark < 85){
        console.log("B");
    }else if(40 <= mark && mark <70){
        console.log("C")
    }else{
        console.log("D")
    }

}
// bài 2
let a=3;
let b=8;
function print(a,b){
    if(a>b){
        console.log("a");
    }else{
        console.log("b")
    }
}
// bài 3
let a1=7;
function checkNumber(a1){
    if(a1>0){
        console.log("số dương")
    }else if(a1<0){
        console.log("số âm")
    }else{
        console.log("số 0")
    }
}
// bài 4
let number=4;
function checkEvenOrOdd(number) {
    if (number % 2 == 0) {
      console.log("Số chẵn");
    } else {
      console.log("Số lẻ");
    }
  }
  // bài 5
  let number2=15;
  function checkSo(number2) {
    if (number2 % 3 == 0 && number2 % 5 == 0) {
      console.log("Chia hết cho 3 và 5");
    } else {
      console.log("Không chia hết cho 3 và 5");
    }
  }
  // bài 6
  let a3=7;
  let b3=8;
  let c3=6;
  function checkSumEqualC(a3, b3, c3) {
    if (c3 == a3 + b3) {
      console.log("C bằng tổng của a và b");
    } else {
      console.log("C không bằng tổng của a và b");
    }
  }
