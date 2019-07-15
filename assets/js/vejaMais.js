const button = document.getElementById("see-more");
const list = document.getElementById("cursos");
let contadorTimeOut;
let tempoTimeOut;
//veja mais depende de jsonCursosRequest

function vejaMais() {
    for (element in list.children) {
        if (element < 3 || isNaN(element)) continue;
        list.children[element].classList.add("hidden-list");
        list.children[element].classList.add("opacityNone");
    }

    let aparecendo = false;

    button.addEventListener("click", function () {
        contadorTimeOut = 0;
        tempoTimeOut = 0;
        animarLista();
    });

    function animarLista() {
        setTimeout(function () {
            if (contadorTimeOut > 2) {
                if (aparecendo) {
                    list.children[contadorTimeOut].classList.add("hidden-list");
                    list.children[contadorTimeOut].classList.add("opacityNone");
                    button.textContent = "Veja mais";
                } else {
                    list.children[contadorTimeOut].classList.remove("hidden-list");
                    list.children[contadorTimeOut].classList.remove("opacityNone");
                    button.textContent = "Veja menos";
                }
            }
            if (contadorTimeOut < list.children.length - 1) {
                contadorTimeOut++;
                tempoTimeOut = 25;
                animarLista()
            } else {
                aparecendo = !aparecendo;
            }
        }, tempoTimeOut);
    }
}