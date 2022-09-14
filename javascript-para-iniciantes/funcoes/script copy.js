function areaQuadrado (lado) {
    return lado * lado;
}

areaQuadrado (2);



function imc (peso, altura) {
    var imc = peso / (altura **2);
    return imc;
}

console.log(imc(80, 1.80));
console.log(imc(60, 1.70))


function corFavorita (cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu.';
    } else if (cor === 'verde') {
        return 'Eu gosto de florestas.';
    } else {
        return 'Não tenho cor favorita;'
    }
}

function terceiraIdade (idade) {
    if(typeof idade !== 'number') {
        return 'Por favor, preencha com números.';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade ())