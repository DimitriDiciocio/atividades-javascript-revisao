function nomeExibir() {
    let nome = prompt('Insira seu nome')
    console.log(nome)
}

function somaDeDois() {
    let a = 1
    let b = 2
    let soma = a + b
    console.log(soma)
}

function deMaior() {
    let idade = parseInt(prompt('Insira sua idade'))
    if (idade > 18) {
        console.log('Você é maior de idade')
    } else if (idade == 18) {
        console.log('Igual a 18')
    } else {
        console.log('vc não nasceu')
    }
}

function quadradoDeUmNumero() {
    let numero = parseInt(prompt('Insira sua idade'))
    let quadrado = numero**2
    console.log(quadrado)
}

function celsiusParaFahrenheit() {
    let celcius = parseFloat(prompt('Insira os graus celcius'))
    let fahrenheit = (celcius * 1.8) + 32
    console.log(fahrenheit)
}

function parOuImpar() {
    numero = parseInt(prompt('Insira um numero'))
    if (numero % 2 == 0) {
        let parOuImpar = 'Par'
        console.log(parOuImpar)
    } else {
        let parOuImpar = 'Impar'
        console.log(parOuImpar)
    }
}

function numeroParaAbsoluto() {
    function abs(numero) {
        let absoluto = Math.abs(numero)
        return absoluto
    }
    let numero = parseFloat(prompt('Insira um numero'))
    let absoluto = abs(numero)
    console.log(absoluto)
}

function negativoPositivoOuZero() {
    numero = parseInt(prompt('Insira um numero'))
    let negativoPositivoOuZero = 'Zero'
    if (numero > 0) {
        negativoPositivoOuZero = 'Positivo'
    } else if (numero < 0) {
        negativoPositivoOuZero = 'Negativo'
    }
}

function olaNome() {
    let nome = prompt('Insira seu nome')
    if (nome != '') {
        console.log('Olá, ', nome)
    } else {
        console.log('Você não tem nome')
    }
}

function mediaDeTresNumeros() {
    let soma = 0
    for (let i = 1; i<3; i++) {
        let numero = parseFloat(prompt('Insira um numero'))
        soma += numero
    }
    let media = soma/3
    console.log(media)
}

function anoBissexto() {
    let ano = parseInt(prompt('Insira o ano'))
    let bissexto = 'Não é Bissexto'
    if (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0) {
        bissexto = 'Bissexto'
    }
    console.log(bissexto)
}

function cAAI() {
    let idade = parseInt(prompt('Insira sua idade'))
    let eta = 'vc não nasceu'
    if (idade < 13) {
        eta = 'Criança'
    } else if (idade > 12) {
        eta = 'Adolescente'
    } else if (idade > 17) {
        eta = 'Adulto'
    } else if (idade > 59) {
        eta = 'Idoso'
    } else if (idade < 0) {
        eta = 'vc n nasceu'
    }
}

function vogalOuConsoante() {
    let letra = prompt('Insira UMA letra')
    if ('AEIOU'.includes(letra.toUpperCase)) {
        let vogalOuConsoante = 'Vogal'
        console.log(vogalOuConsoante)
    } else {
        let vogalOuConsoante = 'Consoante'
        console.log(vogalOuConsoante)
    }
}

function maiorDeDois() {
    numero1 = parseFloat(prompt('Insira um numero'))
    numero2 = parseFloat(prompt('Insira um numero'))
    let maior = function (numero1, numero2) {
        if (numero1 > numero2) {
            return numero1
        } else if (numero2 > numero1) {
            return numero2
        } else {
            return numero1 + ', ' + numero2
        }
    }
    console.log(maior)
}

function contemJavaScript() {
    let string = prompt('Insira uma frase')
    let contem = 'Não'
    if (string.includes('javascript')) {
        contem = 'Sim'
    }
    console.log(contem)
}

function classificarNota() {
    let nota = parseInt(prompt('Insira sua nota'))
    if (nota >= 9 && nota <= 10) {
        console.log('A')
    } else if (nota >= 7 && nota < 9) {
        console.log('B')
    } else if (nota >= 5 && nota < 7) {
        console.log('C')
    } else if (nota >= 3 && nota < 5) {
        console.log('D')
    } else if (nota >= 0 && nota < 3) {
        console.log('E')
    }
}

function multiplo3ou5() {
    let numero = parseInt(prompt('Insira um numero'))
    let multiplo3 = false
    let multiplo5 = false
    if (numero % 3 == 0) {
        multiplo3 = true
    }
    if (numero % 5 == 0) {
        multiplo5 = true
    }
    console.log('Multiplo de 3: ' + multiplo3 + '\nMultiplo de 5: ' + multiplo5)
}

function menorDeTres() {
    numero1 = parseFloat(prompt('Insira um numero'))
    numero2 = parseFloat(prompt('Insira um numero'))
    numero3 = parseFloat(prompt('Insira um numero'))
    let menor = function (numero1, numero2, numero3) {
        let menor = numero1
        if (menor < numero2) {
            menor = numero2
        } else if (menor < numero3) {
            menor = numero3
        }
        return menor
    }
    console.log(menor)
}

function senha() {
    let senha = prompt('Insira uma senha')
    let caracteres = ''
    if (senha.length > 7) {
        caracteres = 'Sua senha tem pelo menos 8 caracteres'
    } else if (senha.length < 8) {
        caracteres = 'Sua senha tem menos de 8 caracteres'
    }
    console.log(caracteres)
}

function tanointervalo() {
    numero = parseInt(prompt('Insira um numero'))
    if (numero > 9 && numero < 21) {
        console.log('Está entre 10 e 20')
    } else {
        console.log('Não está entre 10 e 20')
    }
}

function umADez() {
    for (let i = 1; i >= 10; i++) {
        console.log(i)
    }
}

function tabuadaDo5() {
    for (let i = 1; i <= 10; i++ ) {
        console.log(5*i)
    }
}

function somaDe100() {
    let soma = 0
    for(let i = 1; i <= 100; i++) {
        soma += i
    }
    console.log(soma)
}

function pares() {
    for (i = 2; i <= 50; i += 2) {
        console.log(i)
    }
}

function fibonacci() {
    n = parseInt(prompt('o tamanho da sequencia de fibonacci'))
    let sequencia = [1,1]
    if (n > 2) {
        for (let i = 1; i <= n -2; i++) {
            sequencia.push(sequencia[i] + sequencia[i-1])
        }
        console.log(sequencia)
    } else if (n == 1) {
        console.log(sequencia[0])
    } else if (n == 2) {
        console.log(sequencia)
    }
}

function inverterString() {
    let palavra = prompt('Insira uma string')
    let arr = []
    for (let key of palavra) {
        arr.push(key)
    }
    arr.reverse()
    palavra = ''
    for (let i of arr) {
        palavra += i
    }
    console.log(palavra)
}

function apenasPares() {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,151,16,171,8]
    let sstring = ''
    for (let i of arr) {
        if (i % 2 == 0) {
            sstring += i + ', '
        }
    }
    console.log(sstring)
}

function maiorArray() {
    let arr = [1,2,3,4,5,6,7,8,1000,2,30000,4560,23456]
    let maior = 0
    for (i of arr) {
        if (maior < i) {
            maior = i
        }
    }
    console.log(maior)
}

function isPrimo() {
    eprimo = false
    numero = parseInt(prompt('Insira um numero primo'))
    for (let i = 1; i < numero; i++) {
        if (numero % i == 0 && numero != i && i != 1) {
            eprimo = false
            break
        } else {
            eprimo = true
        }
    }
    if (eprimo == true) {
        console.log('O numero ' + numero + ' é primo')
    } else {
        console.log('O numero ' + numero + ' não é primo')
    }
}

function javascriptDezVezes() {
    for (let i = 0; i < 10; i++) {
        console.log('JavaScript')
    }
}

function arraySomaNumeros() {
    let arr = [1,2,34,45,6,7,8,9]
    soma = 0
    for (let i of arr) {
        soma += i
    }
    console.log(soma)
}

function elementePresente() {
    arr = [1,2,3,4,5,6,7,111,20,321,323,333]
    coisa = parseInt(prompt('verifique se o numero está presente'))
    if (arr.includes(coisa)) {
        console.log(coisa + ' está presente no array')
    } else {
        console.log(coisa + ' não está presente no array')
    }
}

function inverteArray() {
    let arr = [1,2,3,4,5,'Dimitri', [12334.2,2345,'sim']]
    arr.reverse()
    console.log(arr)
}

function removerDuplicado() {
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3]
    let arrUnico = [...new Set(arr)]
    console.log(arrUnico)
}

function unirArrays() {
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    let uniao = arr1.concat(arr2)
    console.log(uniao)
}

function encontrarIndice() {
    let arr = [10, 20, 30, 40, 50]
    let valor = 30
    let indice = arr.indexOf(valor)
    console.log(indice)
}

function segundoMaior() {
    let arr = [10, 20, 30, 40, 50]
    arr.sort((a, b) => b - a)
    console.log(arr[1])
}

function concatenarArray() {
    let arr = ['Eu', 'amo', 'JavaScript']
    let resultado = arr.join(' ')
    console.log(resultado)
}

function maiusculas() {
    let arr = ['banana', 'maçã', 'laranja']
    let arrMaiusculo = arr.map(item => item.toUpperCase())
    console.log(arrMaiusculo)
}

function contarImpares() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let impares = arr.filter(num => num % 2 !== 0).length
    console.log(impares)
}

function criarPessoa() {
    let pessoa = {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    }
    console.log(pessoa)
}

function adicionarEmail() {
    let pessoa = {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    }
    pessoa.email = 'joao@example.com'
    console.log(pessoa)
}

function exibirPropriedades(obj) {
    for (let chave in obj) {
        console.log(chave + ': ' + obj[chave])
    }
}

function verificarPropriedade() {
    let pessoa = {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    }
    let existe = 'idade' in pessoa
    console.log(existe ? 'Propriedade existe' : 'Propriedade não existe')
}

function mediaIdades() {
    let pessoas = [
        { nome: 'João', idade: 25 },
        { nome: 'Maria', idade: 30 },
        { nome: 'Carlos', idade: 35 }
    ]
    let somaIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0)
    let media = somaIdades / pessoas.length
    console.log(media)
}

function somarValores() {
    let obj = {
        a: 10,
        b: 20,
        c: 30
    }
    let soma = Object.values(obj).reduce((acc, val) => acc + val, 0)
    console.log(soma)
}

function criarLivro() {
    let livro = {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954
    }
    console.log(`O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado em ${livro.ano}.`)
}

function removerPropriedade() {
    let pessoa = {
        nome: 'João',
        idade: 25,
        cidade: 'São Paulo'
    }
    delete pessoa.cidade
    console.log(pessoa)
}

function podeDirigir() {
    let idade = parseInt(prompt('Qual é a sua idade?'))
    if (idade >= 18) {
        console.log('Você pode dirigir.')
    } else {
        console.log('Você não pode dirigir.')
    }
}

function formatarProduto() {
    let produto = {
        nome: 'Camiseta',
        preco: 49.99
    }
    console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`)
}