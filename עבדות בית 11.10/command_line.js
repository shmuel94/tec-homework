// const arrayOfNums = [12,7,9,2,-8,-44]
// function checkValue(value) {
//     return value == Number(process.argv[2]) ;
// }  
// const result = arrayOfNums.find(checkValue);
// if(result == undefined){
//     console.log("not exsit");
// }
// else{
//     for (let i = 0; i < arrayOfNums.length; i++) {
//         if(arrayOfNums[i] == Number(process.argv[2])){
//             console.log([i],arrayOfNums[i]);
//         }
//     }
// }
///////////////////////////////////////////////////////////

// const arrayOfNums2 = [1,8,9,4,-5]
// function checkString(){
//     let min = arrayOfNums2[0];
//     let max = arrayOfNums2[0];
//     let sum = 0;
//     let avg = 0;
//     arrayOfNums2.forEach(element => {
//         sum+= element;
//         if (max < element){
//             max = element;
//         }
//         if(min > element){
//             min = element;
//         }
//     })
//     avg = sum / arrayOfNums2.length;
//     if(process.argv[2] == "max"){
//         console.log(max);
//     }
//     if(process.argv[2] == "min"){
//         console.log(min);
//     }
//     if(process.argv[2] == "sum"){
//         console.log(sum);
//     }
//     if(process.argv[2] == "avg"){
//         console.log(avg);
//     }
// }
// checkString()
//////////////////////////////////////////////////

// const arrayOfNums2 = [1,8,9,4,-5]
// function checkString2(){
//         let min = arrayOfNums2[0];
//     let max = arrayOfNums2[0];
//     let sum = 0;
//     let avg = 0;
//     arrayOfNums2.forEach(element => {
//         sum+= element;
//         if (max < element){
//             max = element;
//         }
//         if(min > element){
//             min = element;
//         }
//     })
//     avg = sum / arrayOfNums2.length;
//     switch (process.argv[2]){
//         case "max":
//             console.log(max);
//             break;
//         case "min":
//             console.log(min);
//             break;
//         case "sum":
//             console.log(sum);
//         case "avg":
//             console.log(avg);    
//             break;
//         default:
//             break;            
//     }
// };
// checkString2()
////////////////////////////////////////////////////////////