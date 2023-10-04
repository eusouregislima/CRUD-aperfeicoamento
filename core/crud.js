const fs = require("fs")
const DB_FILE_PATH = "./core/db"

console.log("[CRUD]")

function create(content) {
  // salvar o content no sistema com o fs
  fs.writeFileSync(DB_FILE_PATH, content)
  // Aqui estou criando um banco de dados dentro de um arquivo na aplicação
  // o arquivo db foi criado
  return content
}

// [SIMULATION]
console.log(create("Apenas tentando a função!"))
