function div(nominateur,quotion){
    try {
        if(quotion===0){
            throw error;
        }
        return nominateur/quotion
    } catch (error) {
        console.log("on peut pas diviser sur 0 !")
    }

}

console.log(div(10,0))