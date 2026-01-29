/*

// MÉTODOS
const animal = {
    nome: "Beethoven",
    latir: function(){
        console.log("Au au")
    }
}

console.log(animal.nome)

animal.latir()

// MÉTODOS ++
const pessoa = {
    nome: "Rafael",
    getNome: function() {
        return this.nome
    },
    setNome: function(novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Letícia")
console.log(pessoa.getNome())

// PROTOTYPES
const teste = "Teste"
console.log(Object.getPrototypeOf(teste))


// PROTOTYPES ++
const firstObject = {
    id: 12345
}

console.log(Object.getPrototypeOf(firstObject))

const secondObject = Object.create(firstObject)
console.log(secondObject)
console.log(secondObject.id)
console.log(Object.getPrototypeOf(secondObject) === firstObject)


/*
// CLASSES
const cachorro = {
  raca: null
}
console.log(cachorro)

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemão"
console.log(pastorAlemao)

const americanBully = Object.create(cachorro)
americanBully.raca = "American Bully"
console.log(americanBully)


// FUNÇÕES CONSTRUTORAS (FUNÇÃO COMO CLASSE)
function criarCachorro(nome, raca) {
  const cachorro = Object.create({})

  cachorro.nome = nome
  cachorro.raca = raca

  return cachorro
}

const baby = criarCachorro("Baby", "Chihuahua")
console.log(baby)

const nina = criarCachorro("Nina", "Golden Retriever")
console.log(nina)

console.log(Object.getPrototypeOf(baby))

// CLASSES BASEADAS EM FUNÇÕES (NEW)
function Cachorro (nome, raca) {
  this.nome = nome
  this.raca = raca
}

const bulldog = new Cachorro ("Fofão", "Bulldog")

console.log(bulldog)

//  MÉTODOS NA FUNÇÃO CONSTRUTORAS
Cachorro.prototype.latir = function () {
  console.log("Au Au") 
}

console.log(Cachorro)
console.log(Cachorro.prototype)

bulldog.latir()

// CLASSES EM JAVASCRIPT (ES6)
class Cachorro {
  constructor(nome, raca) {
    this.nome = nome
    this.raca = raca
  }  
}

const goku = new Cachorro("Goku", "Akita Inu")
console.log(goku)
console.log(Object.getPrototypeOf(goku))


// MAIS SOBRE CLASSES
class Caminhao {
  
  constructor (eixos, cor) {
    this.eixos = eixos
    this.cor = cor
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
  }

}

const scania = new Caminhao(6, "Azul")
console.log(scania)
scania.descreverCaminhao()



// OVERRIDE DE PROPRIEDADES VIA PROTOTYPE
class Humano {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const rafael = new Humano("Rafael", 31)
console.log("Rafael", 31)

Humano.prototype.idade = "Não definida"
console.log(rafael.idade)
console.log(Humano.prototype.idade)


//SYMBOL COM CLASSES (PROPRIEDADE COM VALOR ÚNICO)
class Aviao {
    constructor (marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
Aviao.prototype[asas] = 2

const boeing = new Aviao ("Boeing", 10)
console.log(boeing)
console.log(boeing[asas])

// GETTERS E SETTERS (EXIBIR X ALTERAR)
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post ("Título 1", "É um post sobre programação")
console.log(myPost)
console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programação, javascript, js"
console.log(myPost)



//HERANÇA
class Mamifero {
    constructor(patas, nome) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome    
    }
}

const adam = new Lobo(4, "Adam")
console.log(adam)


// INSTANCE OF ()
console.log(adam instanceof Lobo)
console.log(Lobo instanceof Mamifero)
console.log(new Lobo(4, "Wolf") instanceof Mamifero)

*/









