// Atividade 07 - 01

/*

    Crie uma variável para ler a idade de um motorista. Caso o
    motorista tenha idade maior ou igual a 18 anos imprime no console
    “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

*/

let idade = 16;

if (idade >= 18) {
    console.log('Pode dirigir');
} else {
    console.log('Não pode dirigir');
}



// Atividade 07 - 02

/* 

    Para o mesmo exercício acima insira mais uma variável a
    condicional, além de saber se o motorista tem 18 anos ou mais,
    temos que saber também se ele é habilitado para dirigir. Caso ele
    tenha idade maior ou igual a 18 anos e possua habilitação, insira no
    html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

    let idade = 22
    let habilitado = true

    let idadeMotorista = parseInt(prompt("Informe a idade do motorista:"));

      if (idadeMotorista >= 18) {
        console.log("Pode dirigir");
      } else {
        console.log("Não pode dirigir");
      }

      let idadeMotorista = parseInt(prompt("Informe a idade do motorista:"));
      let possuiHabilitacao = confirm("O motorista possui habilitação?");

      if (idadeMotorista >= 18) {
        if (possuiHabilitacao) {
          console.log("Pode dirigir");
        } else {
          console.log("Não pode dirigir, pois não possui habilitação");
        }
      } else {
        console.log("Não pode dirigir, pois não possui idade mínima");
      }

*/

// let idadeMotorista = parseInt(prompt("Informe a idade do motorista:"));

// if (idadeMotorista >= 18) {
//   console.log("Pode dirigir");
// } else {
//   console.log("Não pode dirigir");
// }

let idadeMotorista = parseInt(prompt("Informe a idade do motorista:"));
let possuiHabilitacao = confirm("O motorista possui habilitação?");

if (idadeMotorista >= 18) {
  if (possuiHabilitacao) {
        document.write("Pode dirigir");
    } else {
        document.write("Não pode dirigir, pois não possui habilitação");
    }
} else {
        document.write("Não pode dirigir, pois não possui idade mínima");
}



// Atividade 07 - 03

/*

    Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
    número de 1 a 7 e imprimir no console o dia da Semana. Para este
    exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
    por diante. Caso o número recebido não esteja neste intervalo
    imprimir “Dia não reconhecido”.

    let dia = parseInt(prompt("Informe o número referente ao dia:"));
    // let contador = 1

    if (dia == 1) {
        console.log('Domingo');
    } else if (dia == 2) {
        console.log('Segunda-feira');
    } else if (dia == 3) {
        console.log('Terça-feira');
    } else if (dia == 4) {
        console.log('Quarta-feira');
    } else if (dia == 5) {
        console.log('Quinta-feira');
    } else if (dia == 6) {
        console.log('Sexta-feira');
    } else if (dia == 7) {
        console.log('Sábado');
    } else {
        console.log('Dia inválido);
    }

*/

let dia = parseInt(prompt("Informe o número referente ao dia:"));

if (dia == 1) {
    console.log('Domingo');
} else if (dia == 2) {
    console.log('Segunda-feira');
} else if (dia == 3) {
    console.log('Terça-feira');
} else if (dia == 4) {
    console.log('Quarta-feira');
} else if (dia == 5) {
    console.log('Quinta-feira');
} else if (dia == 6) {
    console.log('Sexta-feira');
} else if (dia == 7) {
    console.log('Sábado');
} else {
    console.log('Dia inválido')
}


// Atividade 07 - 04

/*

    Reescreva o exercício 3, utilizando apenas o SWITCH.

    let diaSemana = Number(prompt("Informe o número referente ao dia:"));

    switch (diaSemana){
        case 1:
            console.log();
            break;
        case 2:
            console.log();
            break;
        case 3:
            console.log();
            break;
        case 4:
            console.log();
            break;
        case 5:
            console.log();
            break;
        case 6:
            console.log();
            break;
        case 7:
            console.log();
            break;

        default:
            console.log();
            break;
    }

*/

let diaSemana = Number (prompt("Informe o número referente ao dia:"));

switch (diaSemana){
    case 1:
        console.log(' 1 - Domingo');
        break;
    case 2:
        console.log(' 2 - Segunda-feira');
        break;
    case 3:
        console.log(' 3 - Terça-feira');
        break;
    case 4:
        console.log(' 4 - Quarta-feira');
        break;
    case 5:
        console.log(' 5 - Quinta-feira');
        break;
    case 6:
        console.log(' 6 - Sexta-feira');
        break;
    case 7:
        console.log(' 7 - Sábado');
        break;

    default:
        console.log('Dia inválido');
        break;
}



    // Atividade 07 - 05

    /* 
    
        Utilizando FOR, percorra os números de 1 a 10 e imprima no console
        os números pares.

    */
  
for (let pares = 1; pares <= 10; pares++) {
    if (pares % 2 === 0) {
        console.log(`Números: ${pares}`);
    }
}



// Atividade 07 - 06

/* 

    Insira no html 30 ( trinta ) números ímpares.

*/

for (let impares = 1; impares <= 62; impares++) {
    if (impares % 2 != 0) {
        console.log(impares);
    }
}



// Atividade 07 - 07

/* 

    Utilizando do...while, imprima na tela a soma de todos os números
    entre 10 e 100.

*/

let numbs = 10;
let soma = 0;

do{ 
    soma += numbs;
    numbs++;
} while (numbs <= 100);
    console.log(soma);



// Atividade 07 - 08

/*

    Crie uma variável para armazenar o salário do usuário e atribua um
    valor a essa variável. Crie a validação necessária:

        - Caso o salário seja MENOR que R$ 1.903,98, insira no html
            "ISENTO DE IR";
        - caso contrário insira "TRIBUTADO NO IR".

*/

let salario = 1999;
let minimoParaIR = 1903.98;

if (salario <= minimoParaIR) {
    console.log("ISENTO DE IR");
} else{
    console.log("TRIBUTADO NO IR");
}



// Atividade 07 - 09

/*

    Informe um valor a uma variável e imprima no console se o número
    é primo.

*/

let numValor = 22;
let primo = true;

if (numValor < 2) {
    console.log(`O número ${numValor} não é primo.`);
} else {
    for (let index = 2; index < numValor; index++) {
        if (numValor % index === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log(`O número ${numValor} é primo.`);
} else {
    console.log(`O número ${numValor} não é primo.`);
}



// Atividade 07 - 10

/*

    Tendo como entrada a altura e o sexo (codificado da seguinte
    forma: 1 para sexo feminino e 2 para sexo masculino) de uma
    pessoa, construa um programa que calcule e mostre seu peso ideal,
    utilizando as seguintes fórmulas:

        - para homens: (72.7 * Altura) – 58
        - para mulheres: (62.1 * Altura) – 44.7

*/

let sexo, altura, pesoIdeal;

altura = parseFloat(prompt('Informe sua altura (em metros):'));
sexo = parseInt(prompt('Informe seu sexo sendo 1 para sexo feminino e 2 para sexo masculino.'));

if (sexo === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;    
} else if (sexo === 2) {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    console.log('informação de sexo inválida');
}

console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)}`);



// Atividade 07 - 11

/*

    Utilizando Switch, faça um programa que pergunte em que turno
    você estuda. Peça para digitar “M” para matutino ou “V” para
    vespertino ou “N” para noturno. Mostre um alerta com a mensagem
    “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
    conforme o caso.

*/

let turno = prompt('Informe seu turno (Sendo M para Matutino, V para Vespertino e N para Noturno):');

switch (turno) {
    case 'M':
        alert('Bom dia!');
        break;
    case 'V':
        alert('Boa tarde!');
        break;
    case 'N':
        alert('Boa noite!');
        break;
    default:
        alert('Valor inválido. Insira um valor correspondente: Sendo M para Matutino, V para Vespertino e N para Noturno.');
        break;
}



// Atividade 07 - 12

/* 

    Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
    programa que armazene a idade de uma pessoa e diga se ela pode
    doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
    (&&).

*/

let idadeDoar = 28;

if (idadeDoar >= 18 && idadeDoar <= 67) {
    console.log('Pode doar sangue.');
} else {
    console.log('Não pode doar sangue.');
}



// Atividade 07 - 13

/* 

    Faça um algoritmo que armazene um número e imprima os
    números ímpares entre 1 e o número armazenado.

*/

let numArmaz = 12;

for (let imparesArmaz = 1; imparesArmaz <= numArmaz; imparesArmaz++) {
    if (imparesArmaz % 2 != 0) {
        console.log(imparesArmaz);
    }
}



// Atividade 07 - 14

/* 

    Leia um número, utilizando WHILE multiplique este número por 3
    enquanto a soma seja menor que 500 e no final mostre qual o
    último valor

*/

let numInf = Number(prompt('Informe um número:'));
let soma14 = 0;

while (soma14 < 500) {
    soma14 = numInf * 3;
    numInf = soma14;
}

console.log(`O último valor é: ${numInf}` 
);



// Atividade 07 - 15

/* 

    Crie um algoritmo que armazene três valores, para cada um dos
    lados de um triângulo: A, B e C. Verifique se os lados fornecidos
    formam realmente um triângulo. Se formar, deve mostrar no console
    o tipo de triângulo: isósceles, escaleno ou equilátero.

        a. Para verificar se os lados fornecidos formam um triângulo: 
            A < B + C e B < A + C e C < A + B.

        b. Triângulo isósceles: possui dois lados iguais 
            (A=B ou A=C ou B=C);

        c. Triângulo escaleno: possui todos os lados diferentes 
            (A<>B e B<>C e A<>C);

        d. Triângulo equilátero: possui todos os lados iguais 
            (A=B e B=C);

*/

let a = Number (prompt('Informe o lado A do triângulo.'));
let b = Number (prompt('Informe o lado B do triângulo.'));
let c = Number (prompt('Informe o lado C do triângulo.'));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log('Triângulo equilátero');
    } else if (a === b || a === c || b === c) {
        console.log('Triângulo isóceles');
    } else {
        console.log('Triângulo escaleno');
    }
} else {
    console.log('Os valores informados não correspondem a um triângulo');
}



// Atividade 07 - 16

/*

    Escreva um algoritmo que armazene o ano atual e o ano de
    nascimento de uma pessoa. Escrever uma mensagem no console
    que diga se ela poderá ou não votar este ano (não é necessário
    considerar o mês em que a pessoa nasceu).

*/

let anoAtual = 2023;
let nascimentoAno = prompt('Informe o ano do seu nascimento.');

if ((anoAtual - nascimentoAno) >= 16) {
    console.log('Pode votar!');
} else {
    console.log('Não pode votar!');
}



// Atividade 07 - 17

/* 

    Escreva um algoritmo que armazene o número total de eleitores de
    um município, o número de votos brancos, nulos e válidos. Calcular
    e escrever o percentual que cada um representa em relação ao
    total de eleitores. O algoritmo deve fazer uma validação para que as
    porcentagens dos votos armazenados (brancos, nulos e válidos)
    respeitem o limite do número total de eleitores, ou seja, garantir que
    a soma dos votos brancos, nulos e válidos não seja maior que o
    número total de eleitores.

*/

let votosBrancos = 2598;
let votosNulos = 2158;
let votosValidos = 35756;
let totalEleitores = (votosBrancos + votosNulos + votosValidos);

console.log(`O número total de eleitores é de ${totalEleitores}`);

let porcVotosBrancos = (votosBrancos/totalEleitores) * 100;
let porcVotosNulos = (votosNulos/totalEleitores) * 100;
let porcVotosValidos = (votosValidos/totalEleitores) * 100;

console.log(`A porcentagem de votos brancos é: ${(porcVotosBrancos).toFixed(2)} %`);
console.log(`A porcentagem de votos nulos é: ${(porcVotosNulos).toFixed(2)} %`);
console.log(`A porcentagem de votos válidos é: ${(porcVotosValidos).toFixed(2)} %`);



// Atividade 07 - 18

/* 

    Uma loja de eletrodomésticos estabeleceu as seguintes
    modalidades de pagamento para a venda de suas mercadorias:

    À vista .................... desconto de 2,5% sobre o preço de tabela
    De 2 a 5 vezes.............. preço de tabela, sem desconto e sem acréscimo
    De 6 a 10 vezes............. juros de 6% sobre o preço de tabela
    De 11 até 15 vezes.......... juros de 13% sobre o preço de tabela

    Escreva um algoritmo que armazene o preço de tabela e o número
    de vezes em que o pagamento será feito. Calcule o valor de cada
    parcela e o preço total da compra e imprima no console.

*/

let precoTabela = Number (prompt('Informe o valor do produto:'));
let parcelamento = Number (prompt('Informe o valor de parcelas desejadas: (Sendo 1 para à vista)'));

if (parcelamento === 1) {
    let precoTotal = precoTabela - (precoTabela * 2.5)/100;
    console.log(`O valor do produto à vista é: R$ ${precoTotal}.`);

} else if (parcelamento >= 2 && parcelamento <= 5) {
    let valorParcela = (precoTabela / parcelamento);
    console.log(`O valor total do produto nas condições selecionadas é de R$ ${precoTabela}.`);
    console.log(`O valor da parcela sem juros é de R$ ${valorParcela.toFixed(2)}.`);
}
 else if (parcelamento >= 6 && parcelamento <= 10) {
    let precoTotal = precoTabela + ((precoTabela * 6) / 100);
    let valorParcela = (precoTotal / parcelamento);
    console.log(`O valor total do produto nas condições selecionadas é de R$ ${precoTotal}.`);
    console.log(`O valor da parcela do produto é de R$ ${valorParcela.toFixed(2)}.`);

} else if (parcelamento >= 11 && parcelamento <= 15) {
    let precoTotal = precoTabela + ((precoTabela * 13) / 100);
    let valorParcela = (precoTotal / parcelamento);
    console.log(`O valor total do produto nas condições selecionadas é de R$ ${precoTotal}.`);
    console.log(`O valor da parcela do produto é de R$ ${valorParcela.toFixed(2)};`);

} else {
    console.log('O número de parcelas solicitado não é válido!');
}
