
// bài 1
function repeatString(str) {
    return str.repeat(10);
  }
  console.log(repeatString("a"));
  // bài 2
  function repeatString2(str2) {
    const str=  str2.repeat(10)+"-";
    const st = str.split('').join('-');
      return st;
  }
  console.log(repeatString2("a"));
  // bài 3
  let str3="a";
  let n=5;
  function repeatString3(str3,n){
    let kq="";
    for(let i=0;i<n;i++){
        kq=kq+str3;
        if(i<n-1){
            kq=kq+"-";
        }
    }
    return kq;
  }
  let kq=repeatString3(str3,n);
  console.log(kq);
// bài 4
 function sumfDivisibleByFind(){
    let sum=0;
    for(let i=0;i<100;i++){
        if(i%5==0){
            sum+=i;
        }
    }
    return sum;

 }
 console.log(sumfDivisibleByFind());
// bài 5
function volumeOfSphere(r) {
    let pi = Math.PI;
    return (4/3) * pi * Math.pow(r, 3);
  }
  
  console.log(volumeOfSphere(5))
  // bài 6
  function sumBetween(a,b){
    let sum=0;
    for(let i=Math.min(a,b)+1;i<Math.max(a,b);i++){
        sum+=i;

    }
    return sum;
  }
  console.log(sumBetween(3, 8)); 
  console.log(sumBetween(8, 3));
  // bài 7
  function checkPrimeNumber(n){
    if(n<2) return false;
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
  }
  console.log(checkPrimeNumber(7));
  // bài 9
  function sumOfDivison(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            sum=sum+i;
        }
    }
    return sum;
  }
  console.log(sumOfDivison(10)); 
 

  