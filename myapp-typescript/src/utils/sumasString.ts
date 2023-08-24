export const sumasString = (number1:string, number2:string) => {
    let array1 = number1.split("");
    let array2 = number2.split("");
    let maxLength = Math.max(array1.length, array2.length);
    while (array1.length < maxLength) {
        array1.unshift("0");
    }
    while (array2.length < maxLength) {
        array2.unshift("0");
    }
    console.log("sayı 1",array1,"sayı 2",array2)
    let sum = []; 
    let kalan = 0;
    let i = array1.length-1;
    for (i; i >= 0; i--){
        let sum2 = Number(array1[i]) + Number(array2[i]) + kalan;
        console.log(sum2)
        if (sum2 > 9){
            kalan=1;
            sum.push(sum2 - 10);
        }else {
            kalan = 0;
            sum.push(sum2);
        }
    } 
    console.log(sum);
}

// export const sumasStringdeneme = (number1:string, number2:string) => {
//     let array1 = number1.split("");
//     let array2 = number2.split("");
//     if(array1.length<array2.length){
//         array1 = number2.split("");
//         array2 = number1.split("");
//     }
//     console.log(array1, array2)
//     let fazlalik:any = [];
//     if (array1.length != array2.length){
//         let fazlasayi = array1.length - array2.length;
//         fazlalik= array1.slice(0,fazlasayi)
//         array1 = array1.slice(fazlasayi,array1.length)
//         console.log("fazlalık",fazlalik,"array1",array1)
//     }
//     let i = array1.length-1;
//     let j = array2.length-1;
//     let kalan = 0;
//     let toplam:any = [];
//     for (i ; i >= 0; i--) {
//         //console.log("iiiiii",array1[i])
//         for (j ; j >= 0; j--) {
//             //console.log("jjjjjjjjjjj",array2[i])
//             let sum = Number(array1[i]) + Number(array2[i]);
//             if(kalan!=0){
//                 sum=sum+kalan;
//                 kalan=0;
//             }
//             let ayirici = String(sum);
//             let split = ayirici.split("");
//             //console.log("sum",sum)
//             if (sum>9 && i==0 && fazlalik.length!=0){
//                 console.log("hele hele split",split)
//                 console.log("dfghjklkjhgfd",fazlalik)
//                 console.log("summmmmmm",sum)
//                 toplam.push(split[1]);
//             }
//             if (sum>9){
//                 let convertToNumber = Number(split[1]) + kalan;
//                 kalan= Number(split[0])
//                 toplam.push(String(convertToNumber))
//             }
//             else {
//                 toplam.push(split[0]);
//             }
//             console.log("kalande",kalan)
//             console.log("topde",toplam)
//             break;
//         }
//     }
//     if (fazlalik.length > 0 ){
//         let z = fazlalik.length-1;
//         for(z ; z >= 0; z--){
//             toplam.push(String(Number(fazlalik[z])+kalan))
//             console.log(fazlalik[z])
//         }
//     }
// }