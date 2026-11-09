
let randomNumber=(Math.floor(Math.random()*5+1));
function number(){
    
    let Num=number(document.getElementById("button").Value);

    if(number>randomNumber){
        document.getElementById("Result").innerHTML="Gretar than 5 numbers";
        
    }else if(number==randomNumber){
        document.getElementById("Result").innerHTML=" Same as 5 number";
    
    }else{
        document.getElementById("Result").innerHTML=" Less than 5 numbers";

    }
}

