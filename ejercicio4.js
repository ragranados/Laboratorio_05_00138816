var binario = function(num) {
    let z = num;
    let aux = "";
    while(num>=2){
        aux = (num%2) + aux;
        num = Math.trunc(num/2);
    }
    aux = num + aux;
    return aux;
}