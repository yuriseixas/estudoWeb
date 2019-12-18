var timerId = null; //variavel que armazena a chamada da funcao timeout

function iniciaJogo() {
    //alert('Jogo iniciado');

    var nivel_jogo = window.location.search.replace("?", "");

    //alert(nivel_jogo);

    var tempo_segundos = 0;

    if (nivel_jogo == 1) {
        tempo_segundos = 120;
    } else if (nivel_jogo == 2) {
        tempo_segundos = 60;
    } else {
        tempo_segundos = 30;
    }

    //Inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;

    //Quantidade de balões
    var qtde_baloes = 50;

    cria_baloes(qtde_baloes);

    //Imprimir qtde baloes inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;

    //Imprimir qtde baloes estourados
    document.getElementById('baloes_estourados').innerHTML = 0;

    contagem_tempo(tempo_segundos + 1);
}


function contagem_tempo(segundos) {

    segundos = segundos - 1;

    if (segundos == -1) {
        clearTimeout(timerId);
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;

    timerId = setTimeout("contagem_tempo(" + segundos + ")", 1000);


}





function cria_baloes(qtde_baloes) {
    for (var i = 1; i <= qtde_baloes; i++) {
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';

        document.getElementById('cenario').appendChild(balao);
    }
}