let requestHabilidadesURL = "https://raw.githubusercontent.com/Gabriel-Venturoso/portfolio/master/assets/JSON/habilidades.json";
let hrequest = new XMLHttpRequest();
hrequest.open('GET', requestHabilidadesURL);
hrequest.responseType = 'json';
hrequest.send();

hrequest.onload = function() {
    let habilidades = hrequest.response;

    let ul = document.getElementById("habilidades");
    criarLiHabilidade(ul, habilidades);
}

function criarLiHabilidade(ul, habilidades){
    for(habilidade of habilidades){
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.textContent = habilidade["habilidade"];
        
        criarEstrelasHabilidade(li, habilidade["nota"]);
        li.appendChild(div);
        
        ul.appendChild(li);
    }
}

function criarEstrelasHabilidade(li, nota){
    for(j = 1; j <= 5; j++){
        let i = document.createElement("i");
        if(nota >= 1){
            i.classList.add("fas");
            i.classList.add("fa-star");
            nota--;
        }else if(nota > 0){
            i.classList.add("fas");
            i.classList.add("fa-star-half-alt");
            nota=0;
        }else{
            i.classList.add("fa-star");
            i.classList.add("far");
        }
        li.appendChild(i);
    }
}