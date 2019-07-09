let requestURL = "https://raw.githubusercontent.com/Gabriel-Venturoso/portfolio/master/assets/JSON/cursos.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let totalHoras = 0;
let totalCursos = 0;

request.onload = function() {
    let cursos = request.response;
    ul = criarUl(cursos);
    document.getElementById("cursos").appendChild(ul);
}

function criarUl(cursos){
    let ul = document.createElement("ul");
    for(curso of cursos){
        adicionarHoraEQuantidade(curso);
        let li = criarLi(ul, curso);
        ul.appendChild(li);
    }
    atualizarHoraEQuantidade();
    return ul;
}

function criarLi(ul, curso){
    let li = document.createElement("li");
    let a = document.createElement("a");

    let link = document.createAttribute("href");
    link.value = curso["link"];

    let target = document.createAttribute("target");
    target.value = "_blank";

    a.setAttributeNode(link);
    a.setAttributeNode(target);
    a.textContent = `${curso["nome"]} | ${curso["escola"]} | ${curso["ano"]} | ${curso["horas"]} horas`;
    
    li.appendChild(a);
    return li;
}

function adicionarHoraEQuantidade(curso){
    totalCursos++;
    totalHoras += curso["horas"];
}

function atualizarHoraEQuantidade(){
    document.getElementById("time").textContent = `${totalHoras} horas totais`;
    document.getElementById("quantity").textContent = `${totalCursos} cursos`;
}