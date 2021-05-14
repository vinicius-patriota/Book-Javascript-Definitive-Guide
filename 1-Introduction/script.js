let numero = 1.1;
let linha = 'a';
let naoDefinido;
let nulo = null;
let booleano = true;
console.log(typeof numero); //Existe uma categoria para numero que incorpora integers e floats
console.log(typeof linha); //O tipo string pode ser definido com "" e ''
console.log(typeof naoDefinido); // Uma variavel criada sem valor atribuido vai ser indefined
console.log(typeof nulo); // Null representa ausencia de valor
console.log(typeof booleano); // Tipo boolean definido com valores true ou false
console.log(naoDefinido == nulo); // comparacao 
console.log(naoDefinido === nulo); // comparacao 

console.log("\n");

let objeto = {                    // Inicializacao de um type object com duas propriedades
    propriedade1: "valor-1",
    propriedade2: "valor-2",
}
console.log(objeto.propriedade1);     // Duas formas de se acessar uma propriedade de um objeto
console.log(objeto["propriedade1"]);

objeto.propriedade1 = "valor-1-modificado";  // Alterando um valor de uma propriedade
console.log(objeto.propriedade1);

objeto.propriedade3 = {};  // Criando uma nova propriedade do tipo object
objeto["propriedade4"] = { nome1: "valor" }; // Criando uma nova propriedade do tipo object
console.log(typeof objeto.propriedade3);
console.log(objeto["propriedade4"]["nome1"]); // Acessando uma propriedade dentro de uma propriedade

console.table(objeto); // Representacao do objeto numa tabela

console.log("\n");

let array = [0, 1, 2, 3];  // Uma array e uma lista indexada numericamente

console.log(typeof array);
console.log(array.length); // .length e um metodo da array que retorna o numero de elementos
// Propriedade e uma associacao entre um nome e um valor que e parte de um objeto
// Metodo e uma funcao que e o valor de uma propriedade
// Quando uma função é chamada como um método de um objeto, o objeto é passado para a função como seu valor

console.log("\n");

let arrayDeObjeto = [
    {
        primeiroObjeto1: "valor-1",
        primeiroObjeto2: "valor-2",
    },
    {
        segundoObjeto1: "valor-1",
        segundoObjeto2: "valor-2",
    },
];

let objetoDeArray = {
    arr1: [[1, 2], [3, 4]],
    arr2: [[5, 6], [7, 8]],
}

console.log(arrayDeObjeto[0].primeiroObjeto1); // Uma array que contem objetos
console.log(objetoDeArray.arr1[0]); // Um objeto que contem arrays

console.log("\n");

// Operadores de Incremento ++ adiciona 1 ao seu operando
// Operadores de Decremento -- subtrai 1 ao seu operando
let operando = 2;

console.log(operando++); // Quando o operador vem depois do operando o valor vai ser retornado antes de incrementar/decrementar
console.log(operando);

console.log(--operando); // Quando o operador vem antes do operando o valor e alterado antes de retornar
console.log(operando);


// Se as frases sao expressions(computam um valor) entao as sentencas inteiras(terminadas em ;) sao statements(alteram o estado do programa).

console.log("\n")

// Funcoes sao blocos parametrizados de codigo javascript que podemos definir uma vez e invocar sempre que necessario
function plus1(parametro1) {  // Define uma funcao chamada plus1 com um parametro chamado parametro1
    return parametro1 + 1;    // Retorna o valor passado somado a 1 
}                             // Fim da funcao

let square = function (prmtr) {  // Funcoes sao valores e podem ser atribuidos a variaveis
    return prmtr * prmtr;
}

let variavel = 5;

console.log(plus1(variavel));
console.log(square(plus1(variavel)));  // Invocando duas funcoes na mesma sentenca

// Algumas funcoes atribuidas a propriedades de objetos

let a = [];
a.push(1, 2, 3);  // Adiciona elementos no fim da array
console.log(a);
a.reverse();     // Inverte a ordem dos elementos
console.log(a);

console.log("\n");

let points = [
    {
        x: 0,
        y: 0,
    },
    {
        x: 1,
        y: 1,
    },
];

points.distancia = function () {  // Criando um metodo para a array points
    let p1 = this[0];             // this e uma referencia ao proprio objeto
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
}

console.log(points.distancia());

console.log("\n");

// Criando um construtor
function Point (x, y) {           // Por convencao construtores comecam com letra maiuscula
    this.x = x;                   // Novo objeto sendo inicializado
    this.y = y;                   // Guarda os parametros da funcao como propriedades do objeto
}                                 // Nenhum return e necessario

let p = new Point (1, 1);         // Usa a palavra chave "new" para criar instacias

Point.prototype.r = function () { // Defina um metodo para o objeto atribuindo ele ao prototype
    return Math.sqrt(this.x * this.x + this.y * this.y); // this e o objeto na qual o metodo foi chamada
}

// Agora o Point p (e todos os outros objetos Point futuros) herdam o metodo r()
console.log(p.r());