const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somar(parcela1, parcela2) {
  return parcela1 + parcela2;
}

function subtrair(minuendo, subtraendo) {
  return minuendo - subtraendo;
}

function multiplicar(fator1, fator2) {
  return fator1 * fator2;
}

function dividir(dividendo, divisor) {
  if (divisor === 0) {
    return 'Erro: Divisão por zero';
  }
  return dividendo / divisor;
}

rl.question('Digite o primeiro valor: ', (input1) => {
  rl.question('Digite o segundo valor: ', (input2) => {
    rl.question('Escolha a operação (+, -, *, /): ', (operacao) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      let resultado;

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Por favor, insira valores numéricos válidos.');
        rl.close();
        return;
      }

      switch (operacao) {
        case '+':
          resultado = somar(num1, num2);
          break;
        case '-':
          resultado = subtrair(num1, num2);
          break;
        case '*':
          resultado = multiplicar(num1, num2);
          break;
        case '/':
          resultado = dividir(num1, num2);
          break;
        default:
          console.log('Operação matemática inválida!');
          rl.close();
          return;
      }

      console.log(`Resultado: ${num1} ${operacao} ${num2} = ${resultado}`);
      rl.close();
    });
  });
});
