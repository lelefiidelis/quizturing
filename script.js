let perguntaAtual = 0;
let pontuacao = 0;

function navegarPergunta(direcao) {
  const perguntas = document.querySelectorAll('.pergunta');
  const opcaoSelecionada = document.querySelector(`input[name="q${perguntaAtual + 1}"]:checked`);

  if (!opcaoSelecionada) {
    alert("Por favor, selecione uma resposta primeiro!");
    return;
  }

  const estaCorreto = opcaoSelecionada.value === "true";
  if (estaCorreto){
    alert("Você acertou!");
    pontuacao++;
  }
  else{
    alert("Você errou!")
  }

  perguntas[perguntaAtual].style.display = 'none';
  perguntaAtual += direcao;

  esconderBotao();
  alternarBotaoFinal();

  if (perguntaAtual < perguntas.length - 1) {
    perguntas[perguntaAtual].style.display = 'block';
  } else {
    exibirResultadoFinal();
  }
}

function alternarBotaoFinal() {
  const botaoFinalSpan = document.getElementById("btn-final");
  const btnProximo = document.getElementById("btn-proximo");

  if (perguntaAtual === 7) {
    botaoFinalSpan.style.display = "block";
    btnProximo.style.display = "none"; 
  } else {
    botaoFinalSpan.style.display = "none";
    btnProximo.style.display = "block"; 
  }
}

function exibirResultadoFinal() {
  const perguntas = document.querySelectorAll('.pergunta');
  const perguntaResultado = perguntas[perguntas.length - 1];
  perguntaResultado.style.display = 'block';

  const pontuacaoSpan = document.getElementById('pontuacao');
  if (pontuacaoSpan) {
    pontuacaoSpan.textContent = pontuacao;
  }

  const btnProximo = document.getElementById('btn-proximo');
  btnProximo.style.display = 'none';
  const btnRetornar = document.getElementById('btn-retorno');
  btnRetornar.style.display = 'none';
  const btnFinal = document.getElementById('btn-final');
  btnFinal.style.display = 'none';
}

function esconderBotao() {
  const botaoFinal = document.getElementById('btn-final');
  
  if (perguntaAtual === 7) {
    botaoFinal.style.display = 'block';
  } else {
    botaoFinal.style.display = 'none';
  }
}

