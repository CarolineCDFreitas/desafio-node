global.nome = "desafio de node";
//variável global é como se fosse escrito com var;

let nome2 = "variável de escopo reatribuível e não redeclarável";

const nome3 = "variável de escopo não reatribuível e não redeclarável";

//console.log(nome, nome2, nome3)

const teste = () => {
  
  let nome = "teste";

  console.log(nome);
  console.log(global.nome)
};

teste();
