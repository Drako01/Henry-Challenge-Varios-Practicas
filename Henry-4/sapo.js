let arr = [2,32,6,85,9,2,4,34,5,76]

console.log(arr);

for(let e of arr) {
    if (e === 2) {
        console.log(e);
    } else {
        console.log('No se encuentra el numero pedido'); 
    }
}
