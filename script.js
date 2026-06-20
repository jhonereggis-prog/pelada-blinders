let fila = [];
let timeA = [];
let timeB = [];

function atualizar() {
    document.getElementById("fila").innerHTML =
        fila.map((j, i) => `<li>${i + 1}. ${j}</li>`).join("");

    document.getElementById("timeA").innerHTML =
        timeA.map(j => `<li>${j}</li>`).join("");

    document.getElementById("timeB").innerHTML =
        timeB.map(j => `<li>${j}</li>`).join("");
}

function entrar() {
    let nome = document.getElementById("nome").value;
    if (!nome) return;

    fila.push(nome);
    document.getElementById("nome").value = "";

    montarTimes();
    atualizar();
}

function montarTimes() {
    timeA = [];
    timeB = [];

    let jogadores = [...fila];

    for (let i = 0; i < jogadores.length; i++) {
        if (timeA.length < 5) {
            timeA.push(jogadores[i]);
        } else if (timeB.length < 5) {
            timeB.push(jogadores[i]);
        }
    }
}

function resultado(vencedor) {
    let perdedor = vencedor === "A" ? timeB : timeA;
    let vencedorTime = vencedor === "A" ? timeA : timeB;

    // remove perdedores da fila
    fila = fila.filter(j => !perdedor.includes(j));

    // reposiciona vencedor no final (simula rotação leve)
    fila = [...fila, ...perdedor];

    montarTimes();
    atualizar();
}

// inicia
atualizar();