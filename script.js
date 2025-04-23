let vit = "";
let derr = "";
let result = "";
let ranking = "";

function calcular() {
    vit = document.getElementById("vitorias").value;
    derr = document.getElementById("derrotas").value;

result = vit - derr;

if ( result <= 10) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de FERRO";
} else if ( result >= 11 && result <= 20) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de BRONZE";
} else if ( result >= 21 && result <= 50) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de PRATA";
} else if ( result >= 51 && result <= 80) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de OURO";
} else if ( result >= 81 && result <= 90) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de DIAMANTE";
} else if ( result >= 91 && result <= 100) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de LENDARIO";
} else if ( result >= 101) {
    ranking = "O Heroi tem de saldo " + result + " esta no nível de IMORTAL";
}

document.getElementById("result").innerHTML = ranking;

}