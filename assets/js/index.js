'use strict'
function capitalize(string) {   
let arr = string.split(' ');
let newArr = arr.map(function (item) {
    return `${item[0].toUpperCase()}${item.slice(1)}`
})
    let stringUp = newArr.join(' ');
    return stringUp;

}
console.log(capitalize('здесь заглавные буквы будут немного другие'))

