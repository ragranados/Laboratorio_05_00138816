var bisiesto = function(an) {
    if(an % 4 == 0){
        if(an%100 != 0){
            return true;
        } else {
            if(an % 400 != 0){
                return false;
            }else {
                return true;
            }
        }
    }else {
        return false;
    }
}