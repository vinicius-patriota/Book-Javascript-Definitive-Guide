// Em adicao as operacoes aritmeticas basicas
// o javascript da suporte a operacoes mais complexas usando o objeto Math
console.log(Math.pow(5, 2));  // 5 a potencia 2
console.log(Math.round(0.6)); // arredonda para o inteiro mais proximo
console.log(Math.ceil(0.4));  // arredonda para cima
console.log(Math.floor(0.6));  // arredonda para baixo
console.log(Math.abs(-5));  // retorna o valor absoluto
console.log(Math.max(1, 5, 10));  // retorna o maior numero
console.log(Math.min(1, 5, 10));  // retorna o menor numero
console.log(Math.random()); // retorna um valor aleatorio de 0 <= x < 1
console.log(Math.PI);   // retorna o valor pi
console.log(Math.E);  // retorna a base natural do logaritmo
console.log(Math.sqrt(9));  // retorna o valor pi

// aritmetica no javascript nao levanta erros
console.log(1/0) // retorna infinity
console.log(-1/0) // retorna -infinity
console.log(0/0) // retorna NaN
console.log(Infinity/Infinity) // retorna NaN

// NaN ( not a number ) nao se compara igual com nenhum outro valor, inclusive ele mesmo
console.log(NaN == NaN) // false
console.log(NaN != NaN) // true
console.log(isNaN(NaN)) // Object que checa

// Erros de arredondamento acontecem em numeros decimais 
console.log(0.6 - 0.2 === 0.5 - 0.1) // false


// Date
let data1 = new Date(2010, 0 ,1);
console.log(data1); // 2010-01-01    ano-dia-mes

let now = new Date();
let tempoPassado = now - data1;
console.log(tempoPassado) // em milisegundos
console.log(tempoPassado / 1000 / 60 / 60 / 24) // dias

console.log(data1.getFullYear()); // 2010
console.log(data1.getMonth());  // 0 janeiro
console.log(data1.getDate());  // 1 dia
console.log(data1.getDay()); // 5 - dia da semana 0 e domingo 5 e sexta
console.log(data1.getHours()); // 0 - 0am
console.log(data1.getUTCHours()); // 2
console.log(data1.toString()); // Fri Jan 01 2010 00:00:00 GMT-0200 (Brasilia Summer Time)
console.log(data1.toUTCString()); // Fri, 01 Jan 2010 02:00:00 GMT
console.log(data1.toLocaleDateString()); // 1/1/2010
console.log(data1.toLocaleTimeString()); // 12:00:00 AM
console.log(data1.toISOString()); // 2010-01-01T02:00:00.000Z

// string
console.log('two\nlines');
console.log('one\
 line');
console.log('string'.charAt(0)); // char no index 0 - s
console.log('string'.slice(1,3)); // string do index == 1 ao < 3 - tr
console.log('string'.slice(-3)); // tres ultimos - ing
console.log('string'.indexOf('n')); // posicao do primeiro char n - 4
console.log('string str'.split(' ')) // separa com base no argumento - ['string', 'str']
console.log('string'.replace('s', 'S')); // substitui todas instancias - String
console.log('string'.toUpperCase()); // STRING
// strings sao imutaveis. metodos como replace e toUpperCase retornam novas strings

// RegExp
const htmlRegExp = /^HTML/;  // combina as letra H T M L no inicio de uma string
const numbersRegExp = /[1-9][0-9]*/; // combina um numero nao 0 seguido por qualquer quantia de numeros
const javascriptRegExp = /\bjavascript\b/i // combina javascript como uma palavra case-insensitive

console.log(htmlRegExp.test('HTML234234')); // retorna true or false
console.log('alo 54333 zzz'.search(numbersRegExp)); // retorna index do primeiro match
console.log('alo 24234 zzz'.match(numbersRegExp)); // retorna array de todos matches 


// Booleanos
// undefined , null, 0, -0, '', NaN sao valores falsos
// null e um objeto que representa "no object"
console.log(typeof null);
// O valor undefined e retornado por variaveis nao inicializadas,
let naoInicializada;
console.log(naoInicializada); // undefined
// por funcoes sem valor de retorno e parametros de funcoes cujo nenhum argumento e fornecido
function funcaoSemRetorno() { };
console.log(funcaoSemRetorno()); // undefined

// Global Object
// When the Javascript interpreter starts ( or whenever a web browser loads a new page)
// it creates a new global object and gives it an initial set of properties that define:
// Propriedades globais como undefined, Nan, Infinity
// Funcoes globais como isNaN(), parseInt() e eval()
// Funcoes construtoras como Date(), RedExp(), String(), Object() e Array();
// Objetos globais como Math e JSON

// E Possivel se referir ao objeto global no top-level code usando this
const global = this;
console.log(global)


// Wrapper Objects - sao objetos temporarios
// Quando um metodo e chamado numa string ou num number
// o javscript converte a string num objeto como se chamasse new String(str)
// esse objeto herda metodos de string e resolve a referencia a propriedade
// apos isso o objeto e discartado 
let s = 'str';
s.prop = 4;
console.log(s.prop); // undefined