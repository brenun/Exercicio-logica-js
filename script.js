function calcularAreaQuadrado() {
  let lado = document.getElementById('lado').value;
  let area = lado * lado;
  document.getElementById('resultado').innerText = `A área do quadrado é: ${area}`;
}

function calcularProdutoSoma() {
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;
  let valor3 = document.getElementById('valor3').value;
  let valor4 = document.getElementById('valor4').value;

  let produto1 = valor1 * valor2;
  let produto2 = valor3 * valor4;
  let resultado = produto1 + produto2;

  document.getElementById('resultado2').innerText = `O resultado é: ${resultado}`;
}

function calcularDesconto() {
   let valordobem = document.getElementById('valordobem').value; 
   let percentualdesconto = 10;

   let desconto = (valordobem * percentualdesconto) / 100
   let valorFinal = valordobem - desconto;

   document.getElementById('resultadoDesconto').innerText = `Q valor com desconto é: R$ ${valorFinal.toFixed(2)}`;
}

function calcularDesconto2() {
  let valordoproduto = document.getElementById('valordoproduto').value;
  let valordodesconto = document.getElementById('valordodesconto').value;

  let desconto = (valordoproduto * valordodesconto) / 100
  let valorFinal = valordoproduto - desconto;

  document.getElementById('resultadoDesconto2').innerText = `O valor com desconto é: R$ ${valorFinal.toFixed(2)}`;
}

function inverterNumero() {
  let numeroA = document.getElementById('numeroA').value;
  let numeroB = document.getElementById('numeroB').value;

  let valorA = numeroB
  let valorB = numeroA
  let resultadoA = valorA
  let resultadoB = valorB

  document.getElementById('resultadoDaInversao').innerText = `O valor de A é: ${resultadoA} e do valor de B é: ${resultadoB}`;
}

function calcularSaldoDevedor() {
  let totalParcelas = document.getElementById('parcelas').value;
  let parcelasPagas = document.getElementById('parcelas_pagas').value;
  let valorParcelas = document.getElementById('valor_das_parcelas').value;

  let valorTotal = totalParcelas * valorParcelas;
  let saldoDevedor = valorTotal - (parcelasPagas * valorParcelas);

  document.getElementById('resultadoTotal').innerText = `Valor total da divida: R$ ${valorTotal.toFixed(2)}\nSaldo devedor: R$ ${saldoDevedor.toFixed(2)}`;
}

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      document.getElementById('resultadoDaMedia').innerText = 'Por favor, insira todas as notas.';
      return;
  }
  
  const media = (nota1 + nota2 + nota3) / 3;
  document.getElementById('resultadoDaMedia').innerText = `Média: ${media.toFixed(1)}`;
}