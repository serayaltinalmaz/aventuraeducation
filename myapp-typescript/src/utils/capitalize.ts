export const capitalize = (string:string) => {
    const stringSplit = string.split(" ");
    let capitalizeString= stringSplit.map(string => string[0].toUpperCase() + string.slice(1,)).join(" ");
    return capitalizeString
}

//let capitalizeString = string[0].toUpperCase() + string.slice(1)


//export const capitalize = (string:string) => {let stringArray= string.split(" ").map(string => string[0].toUpperCase() + string.slice(1,)).join(" "); 
//console.log(stringArray); return stringArray }