var pessoa = {
    nome: 'Raphael',
    idade: 30,
    profissao: 'Engenheiro',
    possuiFaculdade: true,
}

var quadrado = {
    lados: 4,

    area: function(lado) {
        return lado * lado;
    },

    perimetro: function(lado) {
        return this.lados * lado;
    },
}