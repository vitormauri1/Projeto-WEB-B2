

  // Medindo o tempo do algoritmo com repetições
  console.time('Algoritmo com repetições');
  gerarNumerosComRepeticao(quantidade);
  console.timeEnd('Algoritmo com repetições');

  // Medindo o tempo do algoritmo otimizado
  console.time('Algoritmo otimizado');
  gerarNumerosUnicos(quantidade);
  console.timeEnd('Algoritmo otimizado');

  // Calculando o ganho percentual (caso a execução seja medida em milissegundos)
  const tempoComRepeticoes = performance.now() - performance.timing.navigationStart;
  const tempoOtimizado = performance.now() - performance.timing.navigationStart;

  const ganhoPercentual = ((tempoComRepeticoes - tempoOtimizado) / tempoComRepeticoes) * 100;
  console.log(`Ganho de tempo percentual: ${ganhoPercentual.toFixed(2)}%`);
}
