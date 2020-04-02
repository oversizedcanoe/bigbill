let x;
let list = [];
let cards= ["A",2,3,4,5,6,7,8,9,10,"J","Q"];

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
    } else{
    $("#" + y).attr("src", "pics/red_back.png");
    }

    list.push(y);
}


function Reset(){
    list=[];
    $("#dice1").attr("src", "pics/dice.png");
    $("#dice2").attr("src", "pics/dice.png");
    for(i=0;i<cards.length;i++){
        $("#" + cards[i]).attr("src", "pics/" + cards[i] + "S.png");
    }

}