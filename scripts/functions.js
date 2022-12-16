let x;
let list = [];
let total = 78;

function ShuffleDice(){
    let z = 0;
    let interval = setInterval(function (){
        
        x = Math.floor((Math.random() * 6) + 1);
        $("#dice1").attr("src", "pics/dice"+ x +".png");
        x = Math.floor((Math.random() * 6) + 1);
        $("#dice2").attr("src", "pics/dice"+ x +".png");
        if(++z ===10){
            window.clearInterval(interval);
        }
    
        }, 75);
}

function RollDice(){
    x = Math.floor((Math.random() * 6) + 1);
    $("#dice1").attr("src", "pics/dice"+ x +".png");
    x = Math.floor((Math.random() * 6) + 1);
    $("#dice2").attr("src", "pics/dice"+ x +".png");
}

function FlipCard(y){
    let counter=0;
    for (i=0;i<list.length;i++){
        if(list[i] == y){
            counter++;
        }
    }
    // now, if counter is odd, we know the card is face down, and needs to be flipped up
    // else, card is face up, and needs to be flipped over.

    if(counter%2 == 1){
        $("#" + y).attr("src", "pics/" + y + "S.png");
        UpdateTotal(-y);
    } else{
    $("#" + y).attr("src", "pics/red_back.png");
    UpdateTotal(y);
    }
    
    list.push(y);
}

function Reset(){
    list=[];
    $("#dice1").attr("src", "pics/dice.png");
    $("#dice2").attr("src", "pics/dice.png");
    for(i=1;i<13;i++){
        $("#" + i).attr("src", "pics/" + i + "S.png");
    }
    total=78;
    $("#total").text(total);
}


function Verify(){
    let valid = true;

    var name = $("#name").val();
    var score = $("#score").val();
    if (name == "" && score == ""){
        valid = false;
        alert("Please enter a name and score");
    } else if (score == ""){
        valid= false;
        alert("Please enter a score");
    } else if (name == ""){
        valid= false;
        alert("Please enter a name");
    }

    if(valid){
        $("#name").val("");
        $("#score").val("");
        AddResult(name, score);
    } 
}

function AddResult(name, score){
    var table = document.getElementById('results').getElementsByTagName('tbody')[0];
    let row = table.insertRow(-1);

    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = score;
    
}

function UpdateTotal(x){
    total-=x;
    $("#total").text(total);

}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
    end = new Date().getTime();
    }
}

function RollThirdDice(){
    d = Math.floor((Math.random() * 6) + 1);
    alert("First, take a huge drink.")
    alert("I said a HUGE drink.")
    alert("You rolled a " + d + ". You can either ADD or MINUS this from your original roll. For example if you have a 9, and roll a 5 here, you can either take a 4, or a 14.")
}