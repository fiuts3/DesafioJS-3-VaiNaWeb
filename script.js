// Crie um array que receba 5 itens e exiba no console.
let Exercicio1 = ["Celular","Tesoura","Boneco","Caderno","Sapato"]
console.log(Exercicio1)

// Utilize um método para adicionar um nome ao inicio do array.
Exercicio1.unshift("Computador")
console.log(Exercicio1)

// Utilize um método para remover o último nome do array.
Exercicio1.pop()
console.log(Exercicio1)

// Utilize um método para adicionar dois nomes ao fim do array.
Exercicio1.splice(4,2,"Marcos","Jessica")
console.log(Exercicio1)

// Utilize um método para remover o primeiro nome do array.
Exercicio1.splice(0,1)
console.log(Exercicio1)  
  
// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort(function(a,b){
    return a-b
})

console.log(numbers)

//- Crie um objeto que receba ao menos três propriedades sobre você.

let meuObjeto = {
    nome: 'Marcos Vinicius',
    idade: 25,
    cidade:'Japeri-RJ'
}


console.log(meuObjeto)

//- Adicione uma nova propriedade sem alterar seu objeto inicial.

meuObjeto.trabalho = 'Analista QA'

console.log(meuObjeto)
//- Remova uma propriedade desse objeto.

delete meuObjeto.cidade


//- Mostre no console todas as propriedades desse objeto.
console.log(meuObjeto)

/*- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
Na propriedade amigos, adicione ao menos 4 itens.*/
let Cadastro = [
    {
    
        nome: "Jorge",
        idade: 22, 
        telefone: "(21) 98256-7074", 
        amigos: ["Marcos", "Pedro", "Tunico", "Joao"]
    
    },
    {
        nome: "Marcio",
        idade: 25, 
        telefone: "(24) 98226-3366", 
        amigos: ["Joao", "Monica", "Jonas", "Malaquias"]
    },
    {
        nome: "Jessica",
        idade: 28, 
        telefone: "(24) 99395-6324", 
        amigos: ["Matheus", "Raiane", "Yorrane", "Marlon"]
    },
    {
        nome: "Rafael",
        idade: 30, 
        telefone: "(22) 92367-8634", 
        amigos: ["Jackson", "Princila", "Michele", "Luciano"]
    },
    {
        nome: "Jonathan",
        idade: 18, 
        telefone: "(21) 93478-9966", 
        amigos: ["Flavio", "Thomaz", "Nicolas", "Francine"]
    }
]
console.log(Cadastro)

 //- Mostre no console o nome de um amigo de cada lista.


    let cadastro = Cadastro.find(cadastro => Cadastro.amigos === "Thomaz")

 console.log(cadastro)