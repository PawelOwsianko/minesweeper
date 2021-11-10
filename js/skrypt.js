var wymiar_planszy;
var plansza;
var ikona ='<img src="img/logo.png"/>'
var sekundy;
var czasuplywa;
var czasomierz;
var funkcje;
function rozmiar_planszy(){
    var wymiar_planszy = document.getElementById("rozmiar").value; 
    var field = document.querySelector(".field")
    var divy = document.createElement("div")
    field.append(divy)
}

function budowa_planszy(wymiar_planszy){
    for(var i =0; i<wymiar_planszy * wymiar_planszy; i++){
        plansza.push
    }
}

function losowa(wymiar_planszy){
    var losowa = math.floor(math.random()*wymiar_planszy * wymiar_planszy);
    if(plansza[losowa] === "B"){
        while(plansza[losowa] === "B"){
            losowa = math.floor(math.random()* wymiar_planszy * wymiar_planszy);
        }
    }
    return losowa;
}





