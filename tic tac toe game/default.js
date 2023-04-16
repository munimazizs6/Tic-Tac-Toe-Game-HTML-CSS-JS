var player = true;
function tictactoe(bttn){
    if(player == true){
        document.getElementById(bttn).innerHTML = "X";
        document.getElementById(bttn).disabled = true;
        document.getElementById("turn").innerHTML = "Player 2";
        player = false;
    }
    else{
        document.getElementById(bttn).innerHTML = "O";
        document.getElementById(bttn).disabled = true;
        document.getElementById("turn").innerHTML = "Player 1";
        player = true;
    }
    check();
}

var p1 = 0;
var p2 = 0;

function check(){
    var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;
    btn1 = document.getElementById(1).innerHTML;
    btn2 = document.getElementById(2).innerHTML;
    btn3 = document.getElementById(3).innerHTML;
    btn4 = document.getElementById(4).innerHTML;
    btn5 = document.getElementById(5).innerHTML;
    btn6 = document.getElementById(6).innerHTML;
    btn7 = document.getElementById(7).innerHTML;
    btn8 = document.getElementById(8).innerHTML;
    btn9 = document.getElementById(9).innerHTML;
    if(btn1 == "X" && btn5 == "X" && btn9 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn3 == "X" && btn5 == "X" && btn7 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn1 == "X" && btn2 == "X" && btn3 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn4 == "X" && btn5 == "X" && btn6 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn7 == "X" && btn8 == "X" && btn9 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn1 == "X" && btn4 == "X" && btn7 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn2 == "X" && btn5 == "X" && btn8 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }
    if(btn3 == "X" && btn6 == "X" && btn9 == "X" ){
        window.alert("Player 1 Won!");
        p1 += 1;
        document.getElementById("p1").innerHTML = p1;
    }


    if(btn1 == "O" && btn5 == "O" && btn9 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn3 == "O" && btn5 == "O" && btn7 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn1 == "O" && btn2 == "O" && btn3 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn4 == "O" && btn5 == "O" && btn6 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn7 == "O" && btn8 == "O" && btn9 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn1 == "O" && btn4 == "O" && btn7 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn2 == "O" && btn5 == "O" && btn8 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
    if(btn3 == "O" && btn6 == "O" && btn9 == "O" ){
        window.alert("Player 2 Won!");
        p2 += 1;
        document.getElementById("p2").innerHTML = p2;
    }
}
function again(){
    document.getElementById("1").innerHTML = "?";
    document.getElementById("1").disabled = false;
    document.getElementById("2").innerHTML = "?";
    document.getElementById("2").disabled = false;
    document.getElementById("3").innerHTML = "?";
    document.getElementById("3").disabled = false;
    document.getElementById("4").innerHTML = "?";
    document.getElementById("4").disabled = false;
    document.getElementById("5").innerHTML = "?";
    document.getElementById("5").disabled = false;
    document.getElementById("6").innerHTML = "?";
    document.getElementById("6").disabled = false;
    document.getElementById("7").innerHTML = "?";
    document.getElementById("7").disabled = false;
    document.getElementById("8").innerHTML = "?";
    document.getElementById("8").disabled = false;
    document.getElementById("9").innerHTML = "?";
    document.getElementById("9").disabled = false;
}