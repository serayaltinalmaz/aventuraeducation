export const multiplicationTable = (start:number,finish:number) => {
    if(start>finish){
        let tempStart = start;
        let tempFinish = finish;
        start = tempFinish;
        finish = tempStart;
    }
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