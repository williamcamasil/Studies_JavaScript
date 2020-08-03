//alert('Hello World')
//document.getElementById('nome').value = 'Oi'

/*var value1 = parseInt(10)
var value2 = parseFloat(15)

var result = (value1 <= value2) ? 'Small value' : 'Big value'
document.write(`Valor: ${result}`)*/

//-------------------------

/*CHALLENGE*/

/*
var name = prompt('Write your first name')
var height = parseFloat(prompt('Write your height in centimeters'))
var weight = parseInt(prompt('Write your weight'))

var realHeight = height / 100;
var M = weight / (realHeight * realHeight)
var classificacao = null

if (M < 16)
    classificacao = 'Baixo peso muito grave'
else if ((M >= 16) && (M <= 16.99))
    classificacao = 'Baixo peso grave'
else if ((M >= 17) && (M <= 18.49))
    classificacao = 'Baixo peso'
else if ((M >= 18.50) && (M <= 24.99))
    classificacao = 'Peso normal'
else if ((M >= 25) && (M <= 29.99))
    classificacao = 'Sobrepeso'
else if ((M >= 30) && (M <= 34.99))
    classificacao = 'Obesidade grau I'
else if ((M >= 35) && (M <= 39.99))
    classificacao = 'Obesidade grau II'
else if (M > 40)
classificacao = 'Obesidade grau III'
else 
    classificacao = 'Não foi identificado nenhum peso'

document.write(`${name} possui índice de massa corporal igual a ${M}, sendo classificado como: ${classificacao}`)
*/


//-------------------------

//FUNÇÕES
/*function somarValores(value1, value2) {
    return value1 + value2
}

document.write(somarValores(10, 2))
*/

//FUNÇÕES ANONIMAS
/*var exibirSaudacao = function (nome) {
    document.write(`Olá ${nome}, tudo bem?`)
}

exibirSaudacao('William')*/

//--------------------------------------
/*
//FUNÇÕES DE CALLBACK - Função de função
function exibirArtigo(id, callbackSucesso, callbackErro) {
    //lógica: recuperar o id requisição http
    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas.....')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

//Com essa função temos a estrutura que será impresso o valor da função exibir artigo
var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr />')
    document.write('<p>' + descricao + '</p>')
}

//Função anonima dentro de uma variável
var callbackErro = function (erro) {
    document.write('<p><b>Erro: </b>' + erro + '</p>')
}

//Função anonima passada como parametro
exibirArtigo(1, callbackSucesso, callbackErro)
*/

//--------------------------------------
//--------------------------------------

/*var num1 = parseFloat(prompt("Write a first value"))
var op = prompt("Write a which operations do you want to use (plus / less)")
var num2 = parseFloat(prompt("Write a second value"))

function calculateValues(number1, number2, operation) {
    var result = 0
    switch (operation) {
        case 'plus':
            result = number1 + number2
            break;
    
        case 'less':
            result = number1 - number2
            break;
        
        default:
            result = -1
            break;
    }

    return result
}

document.write(`The result is ${calculateValues(num1, num2, op)}`)*/

