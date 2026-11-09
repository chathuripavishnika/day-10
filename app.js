
let randomNumber=(Math.floor(Math.random()*10+1));
console.log("randomNumber");

function number(){
    
    let Num=Number(document.getElementById("button").value);

    if(Num>randomNumber){
        document.getElementById("Result").innerHTML="Gretar than Randomnumbers";
        console.log("Gretar than Randomnumbers");   
   
    }else if(Num<randomNumber){
        document.getElementById("Result").innerHTML=" Less than  Randomnumber";
        console.log("Same as  Randomnumber");
   


    }else{
        document.getElementById("Result").innerHTML=" Same as Randomnumbers";

        console.log("Less than Randomnumbers");

    }
    

}

