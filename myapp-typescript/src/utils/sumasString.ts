export const sumasString = (number1:string, number2:string) => {
    let array1 = number1.split("");
    let array2 = number2.split("");
    console.log(array1, array2)
    let i = array1.length-1;
    let j = array2.length-1;
    let kalan = 0;
    let toplam = [];
    for (i ; i >= 0; i--) {
        console.log("iiiiii",array1[i])
        for (j ; j >= 0; j--) {
            console.log("jjjjjjjjjjj",array2[i])
            let sum = Number(array1[i]) + Number(array2[i]);
            if(kalan!=0){
                sum=sum+kalan;
                kalan=0;
            }
            let ayirici = String(sum);
            let split = ayirici.split("");
            console.log("sum",sum)
            if (sum>9){
                let convertToNumber = Number(split[1]) + kalan;
                kalan= Number(split[0])
                toplam.push(String(convertToNumber))
            }
            else {
                toplam.push(split[0]);
            }
            console.log("kalande",kalan)
            console.log("topde",toplam)
            break;
        }
    }    
}