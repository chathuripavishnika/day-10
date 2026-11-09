let randomNumber;
randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Random Number: " + randomNumber);


function refreshGame() {

    
    document.getElementById("userNumber").value = "";

    // document.getElementById("result").innerHTML = "Enter Your Number";

    Swal.fire({
        title: "New Game Started!",
        text: "Guess a number between 1 and 10",
        icon: "success"
    });

}


function checkNumber() {

    let input = document.getElementById("userNumber").value;

    if (input === "") {

        Swal.fire("Please Enter Your Number!", "", "warning");
        return;

    }

    let Num = Number(input);

    console.log("Your Number: " + Num);

    if (Num > randomNumber) {

        console.log("Too High");

        document.getElementById("result").innerHTML = "Too High!";

        Swal.fire({
            title: "Too High!",
            text: "Your number is greater than Random Number.",
            icon: "warning"
        });

    }

    else if (Num < randomNumber) {

        console.log("Too Low");

        document.getElementById("result").innerHTML = "Too Low!";

        Swal.fire({
            title: "Too Low!",
            text: "Your number is less than Random Number.",
            icon: "warning"
        });

    }

    else {

        console.log("Same Number!");

        document.getElementById("result").innerHTML = "Correct Number!";

        Swal.fire({
            title: "Congratulations!",
            text: "Your number is correct!",
            icon: "success"
        });

    }

}

