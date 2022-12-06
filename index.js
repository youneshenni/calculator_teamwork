function sub (a,b){
    let a=prompt("premier chifre")
    let b= prompt("deuxieme chiffre")
    let c=a-b
    console.log(c);
    alert(c)
    return c
}
function modulo(a,b){

    try {
        if(b===0){
            throw error;
        }
        alert('le reste de division est'(a%b)) 
    } catch (error) {
        console.log("on peut pas diviser sur 0 !")
    }
     
}