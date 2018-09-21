var sortMio = function(array) {
    var aux1;
    for(i = 0;i < array.length-1 ; i++){
        for(j = 1; j < array.length ; j++){
            if(array[i] > array[j]){
                aux1 = array[j];
                array[j] = array[i];
                array[i] = aux1;
            }
        }
    }
    return array;
}