// Declaração da função que será chamada quando o botão de cálculo for clicado
function calcularNotas() {

  // Definição das notas disponíveis em um array
  const notasDisponiveis = [200, 100, 50, 20, 10, 5, 2, 1];

  // Obtenção do valor do saque informado pelo usuário na página HTML
  const valorSaque = document.getElementById("valorSaque").value;

  // Criação da variável que armazenará o valor restante a ser sacado
  let valorRestante = valorSaque;

  // Utilização do método map para percorrer cada nota disponível e obter a 
  //quantidade de notas necessárias para o saque
  const quantidadeNotas = notasDisponiveis.map((nota) => {
  
    // Cálculo da quantidade de notas necessárias para a nota atual
    const quantidade = Math.floor(valorRestante / nota);

    // Atualização do valor restante a ser sacado após utilizar as notas da 
    //nota atual
    valorRestante -= quantidade * nota;

    // Retorno da quantidade de notas necessárias para a nota atual
    return quantidade;
  });

  // Obtenção do elemento HTML onde será exibido o resultado do cálculo
  const resultado = document.getElementById("resultado");

  // Atualização do conteúdo do elemento HTML com a quantidade de notas 
  //necessárias para o saque informado
  resultado.innerHTML = `Quantidade de notas necessárias: ${quantidadeNotas}`;
  console = notasDisponiveis;
}
