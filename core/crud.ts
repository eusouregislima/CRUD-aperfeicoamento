import fs from 'fs' //ES6 - Forma atual

// const fs = require("fs") - CommonJS - Forma antiga
const DB_FILE_PATH = "./core/db"

console.log("[CRUD]") // Cabeçalho

interface Todo { //inteface typescript do todo
  date: string;
  content: string;
  done: boolean;
}

function create(content: string) { // criando um objeto com chave todo
  const todo: Todo = {
    date: new Date().toISOString(), // passando a data para ISO
    content: content, // conteúdo string recebido
    done: false, // status boolean
  }

  const todos: Array<Todo> = [ // Criando um array com as todo
    ...read(), // pegando os dados já existentes e esparramando
    todo, // adicionando a nova ou novas todo
  ]

  // salvar o content no sistema com o fs
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(
    {
      todos,
      dogs: [] // exemplo de criação de um novo array
    }, null, 2))
  // Aqui estou criando um banco de dados dentro de um arquivo na aplicação
  // o arquivo db foi criado
  return content
}

function read(): Array<Todo> { // lendo o array de todo
  const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8")
  // lendo e aguardando o dado no formato utf-8
  const db = JSON.parse(dbString || "{}")
  // Retransformando o dado de string para js ou deixa vazio
  if (!db.todos) { // Fail Fast Validations - Garantindo que tenho o dado o mais rápido possível
    return [];
  }
  return db.todos // retornando apenas os todos
}

// função para limpar a base para não ficar repetindo dado
function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, "")
}

// [SIMULATION]
CLEAR_DB()
create("Primeira TODO")
create("Segunda TODO")
console.log(read())