iniciar;
var inputA = document.querySelector('#numeroA');

function iniciar() {
  soma();
  subtracaoAB();
  subtracaoBA();
  multiplicacao();
  divisaoAB();
  divisaoBA();
  potenciaAB();
  potenciaBA();
  raizA();
  raizB();
  porcentagemAB();
  porcentagemBA();
  media();
  fatorialA();
  fatorialB();
}

function soma() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#resultadoSoma');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var soma = A + B;

  resultado.textContent = soma;
}

function subtracaoAB() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#resultadoSubAB');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var sub = A - B;

  resultado.textContent = sub;
}

function subtracaoBA() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#resultadoSubBA');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var sub = B - A;

  resultado.textContent = sub;
}

function multiplicacao() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#resultadoMulti');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var multi = B * A;

  resultado.textContent = multi;
}

function divisaoAB() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#resultadoDivAB');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = A / B;

  resultado.textContent = result;
}

function divisaoBA() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#resultadoDivBA');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = B / A;

  resultado.textContent = result;
}

function potenciaAB() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#potenciaAB');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = A ** B;

  resultado.textContent = result;
}

function potenciaBA() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#potenciaBA');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = B ** A;

  resultado.textContent = result;
}

function raizA() {
  var inputA = document.querySelector('#numeroA');

  var resultado = document.querySelector('#raizA');

  var A = Number(inputA.value);

  var result = Math.sqrt(A);

  resultado.textContent = result;
}

function raizB() {
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#raizB');

  var B = Number(inputB.value);
  var result = Math.sqrt(B);

  resultado.textContent = result;
}

function fatorialA() {
  var inputA = document.querySelector('#numeroA');
  var resultado = document.querySelector('#fatorialA');

  var A = Number(inputA.value);

  var result = fatoriais(A);

  resultado.textContent = result;
}

function fatorialB() {
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#fatorialB');

  var B = Number(inputB.value);

  var result = fatoriais(B);

  resultado.textContent = result;
}

function porcentagemAB() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#porcentagemAB');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = (B * 100) / A;

  resultado.textContent = result;
}

function porcentagemBA() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#porcentagemBA');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = (A * 100) / B;

  resultado.textContent = result;
}

function media() {
  var inputA = document.querySelector('#numeroA');
  var inputB = document.querySelector('#numeroB');
  var resultado = document.querySelector('#media');

  var A = Number(inputA.value);
  var B = Number(inputB.value);
  var result = (A + B) / 2;

  resultado.textContent = result;
}

function fatoriais(N) {
  if (N === 0) {
    return (result = 1);
  } else if (N >= 1) {
    var result = 1;
    var i = 1;
    for (var i = 1; i <= N; i++) {
      result = result * i;
    }
    return result;
  } else {
    return undefined;
  }
}
