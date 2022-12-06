
function sub (a,b){
    return a - b;
}
function modulo(a,b){

    try {
        if(b===0){
            throw new Error("Division par zero");
        }
        else {
            return a%b
        }
       
    } catch (error) {
        console.log(error.message)
    }
  }
     


function pow(x, n) {
    return x = Math.pow(x, n)

}


function multiAmine(a, b) {
    return a * b;
}


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
    
    const [x, operator, y] = process.argv.slice(2);
    const a = parseFloat(x);
    const b = parseFloat(y);
    
    switch(operator) {
      case '+':
        console.log(add(a,b))
        break;
      case '-':
        console.log(sub(a,b))
        break;
      case '*':
        console.log(multiAmine(a,b))
        break;
      case '/':
        console.log(div(a,b))
        break;
      case '%':
        console.log(modulo(a,b))
        break;
      case '^':
        console.log(pow(a,b))
        break;
      case 'sqrt':
        console.log(root(a))
        break;
      case 'fact':
        console.log(fact(a))
        break;
      default:
        console.log('Invalid operator');
        break;
    
    }