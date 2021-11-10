function przewiniecie(){
    window.scrollTo(1000, 0)
}

function rozmiar_planszy(){
    var field_size = document.getElementById("rozmiar").value; 
    var field = document.querySelector(".field")
    var divy = document.createElement("div")
    field.append(divy)
    if(field.append(divy)){
        do(field.append(divy)*field_size)
    }
}


