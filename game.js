
alert("Welcome to Guess the Number Game");
var ran = Math.floor(Math.random() * 10) + 1;
console.log(ran)
var number = parseInt(prompt("Guess a Number b/w 1-10 : 1st Try "));
if(number !== ran ){
    if(number >ran){
        var hint = ("Hint! Guess the Lower Number")
    }
    else{
        var hint = ("Hint! Guess the Greater Number")
    }
    number = parseInt(prompt("Wrong Answer: 2nd Try" + "\n" + hint ));
    if(number !== ran){ 
        if(number >ran){
            var hint = ("Hint! Guess the Lower Number")
    }
    else{
        var hint = ("Hint! Guess the Greater Number")
    }
        number = parseInt(prompt("Wrong Answer: 3rd & last Try" + "\n" + hint ));
        if(number !== ran){ 
            document.write("<center>You Lose! Correct Answer is " + ran + " <\center> ");
        }
        else{
            document.write("<center>Congrats You Guess the Correct Number You Win<\center>");
        }
    }
    else{
        document.write("<center>Congrats You Guess the Correct Number You Win<\center>");
    }
}
else{
    document.write("<center>Congrats You Guess the Correct Number You Win<\center>");
}