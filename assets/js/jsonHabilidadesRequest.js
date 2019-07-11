let requestURL = "https://raw.githubusercontent.com/Gabriel-Venturoso/portfolio/master/assets/JSON/habilidades.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let habilidades = request.response;

    let ul = document.getElementById("habilidades");
    criarLiHabilidade(ul, habilidades);
}

function criarLiHabilidade(ul, habilidades){
    for(habilidade of habilidades){
        let li = document.createElement("li");
        li.textContent = habilidade[habilidade];

        criarEstrelasHabilidade(li, habilidade[nota]);

        ul.appendChild(li);
    }
}

function criarEstrelasHabilidade(li, nota){
    for(j = 1; j <= 5; j++){
        let i = document.createElement("i");
        if(nota >= 1){
            i.classList.add("fas fa-star");
            nota--;
        }else if(nota > 0){
            i.classList.add("fas fa-star-half-alt");
            nota=0;
        }else{
            i.classList.add("far fa-star");
        }
        li.appendChild(i);
    }
}