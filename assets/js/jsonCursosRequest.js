let requestCursosURL = "https://raw.githubusercontent.com/Gabriel-Venturoso/portfolio/master/assets/JSON/cursos.json";
let crequest = new XMLHttpRequest();
crequest.open('GET', requestCursosURL);
crequest.responseType = 'json';
crequest.send();

let totalHoras = 0;
let totalCursos = 0;

crequest.onload = function() {
    let cursos = crequest.response;
    ul = document.getElementById("cursos");;
    criarUl(cursos, ul);
}

function criarUl(cursos, ul){
    for(curso of cursos){
        adicionarHoraEQuantidade(curso);
        let li = criarLiCurso(ul, curso);
        ul.appendChild(li);
    }
    atualizarHoraEQuantidade();
    vejaMais();
}

function criarLiCurso(ul, curso){
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