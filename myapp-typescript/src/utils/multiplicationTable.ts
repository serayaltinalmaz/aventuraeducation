export const multiplicationTable = (start:number,finish:number) => {
    let array1:any= [];
    for(let z = start; z<=finish; z++ ){
        array1.push(z)
    }
    let array2= array1;
    console.log(array1,array2)
    for(let i=0; i <= array1.length-1 ; i++){
        for (let j=0; j <= array1.length-1; j++){
        let multi = array1[i] * array2[j]  
        console.log(array1[i],"*",array2[j],"=",multi)
        }
    }
}


// export const multiplicationTable = () => {
//     let array1= [1,2,3,4,5,6,7,8,9];
//     let array2= array1;
//     for(let i=0; i <= 8; i++){
//         for (let j=0; j <= 8; j++){
//         let multi = array1[i] * array2[j]  
//         console.log("array1[i]",array1[i],"*","array2",array2[j],"=","multiiii",multi)
//         }
//     }
// }