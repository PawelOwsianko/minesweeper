var bombs = "💣";
var flaga = "🚩";
//pojawianie sie planszy oraz znikanie przycisku start
function pole(){
    var przyciski = document.querySelector('.poczatek');
    przyciski.classList.add('unvisable');
    var plansza = document.querySelector('.field');
        plansza.classList.add('visable');
        console.log("plansza jest widoczna");
    }
console.log("elko")
