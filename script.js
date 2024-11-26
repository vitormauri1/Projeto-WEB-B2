function gerarNumerosUnicos(quantidade) {
  // Gerar todos os números possíveis (por exemplo, 1 a 60 para Mega-Sena)
  const numeros = [];
  for (let i = 1; i <= 60; i++) {
    numeros.push(i);
  }

  // Embaralhar os números aleatoriamente
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];  // Troca os elementos
  }

  // Retornar apenas a quantidade solicitada de números
  return numeros.slice(0, quantidade);
}

// Exemplo de uso: Gerar 6 números aleatórios para a Mega-Sena
const numerosGerados = gerarNumerosUnicos(6);
console.log(numerosGerados);
