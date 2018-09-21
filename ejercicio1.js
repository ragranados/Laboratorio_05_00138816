var isPalindrome= function(cad) {
    var cont = 0;
    var aux1 = cad.split("");
    console.log(aux1);
    var aux2 = aux1.reverse();
    return aux2.join("") == cad;
}