function calculateFactorial(n){
    let sum =1;
    for(let i=1;i<=n;i++){
        sum=sum*i;
    }
    return sum;
}
console.log(calculateFactorial(5));
// bài 2
function reverseString(str){
    let kq="";
    for(let i=str.length-1;i>=0;i--){
        kq=kq+str[i];
    }
    return kq;
}
console.log(reverseString("hello"));
// bài 3
function bai3(message){
    switch(message){
        case "VN":
            return "Xin Chào";
        case "US":
            return "Hello"; 
        case "TQ":
            return "你好"  ;    
        default:
             return "Không tồn tại";
}
}
console.log(bai3("TQ"));
// bài 4
 function cutString(str){
    if(str.length>15){
        return str.slice(0,10)+"...";
    }else{
        return str;
    }
 }
 console.log(cutString("xinchaocacbandenvoiTechmaster"));
