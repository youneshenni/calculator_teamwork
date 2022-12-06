
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



function add(x, y) {
  return y + x;
}

function fact(nbr){
    let i;
    let f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   
    }  
    return f;
  }
  function root (nbr){
    return Math.sqrt(nbr)
    }
