
let num = Number (prompt("Enter any number."));

console.log("Given number is ",num);

let resulta =parseInt (num/5000);

let a ;

console.log("5000 note are = ", resulta );

a = num-(resulta*5000);

let result1 = num - (resulta*5000);
 let resultb = parseInt(result1 /1000);
console.log("1000 note are = " , resultb);





let result2 = result1 - (resultb * 1000);
let resultC = parseInt(result2 / 500);
console.log("500 note are = ", resultC);





let result3 = result2 - (resultC * 500);
let resultD = parseInt(result3 / 100);
console.log("100 note are = ", resultD);




let result4 = result3 - (resultD*100);
let resultE = parseInt(result4/50);
console.log("50 note are = ", resultE);


let result5 = result4 - (resultE*50);
let resultF = parseInt(result5/20);
console.log("20 note are = ", resultF);



let result6 = result5-(resultF*20);
let resultG = parseInt(result6/10);
console.log("10 note are = ", resultG);



let result7 = result6-(resultG*10);
let resultH = parseInt(result7/5) ;
console.log("5 coins are = ", resultH);



let result8 = result7-(resultH*5);
let resultI = parseInt(result8/2);
console.log("2 coin are = ", resultI);


let result9 = result8-(resultI*2);
let resultJ = parseInt(result9/1);
console.log("1 coin are = ", resultJ);
