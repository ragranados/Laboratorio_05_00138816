var fibonacci = function(n){
    var array;
    if(n == 0){
        array = [0];
    } else if(n == 1){
        array = [0,1];
    } else {
        array = [0,1];
        for(i = 2 ; i < n-1 ; i++){
            array[i] = array[i-1] + array[i-2];
        }
    }
    return array;
}