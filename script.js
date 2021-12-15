// Armazenamento;

const STATE_INICIAL = {
  nome: '',
  sobrenome: '',
  email: '',
  casa: 'Gitnória',
  familia: '',
  materias: [],
  avaliacao: '',
  obs: '',
};

// elementos principais;
const button = document.getElementById('button');
const checkbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const casa = document.getElementById('house');
const email = document.getElementById('input-email');
const family = document.getElementsByName('family');
const avaliacao = document.getElementsByName('rate');
const materias = document.getElementsByName('learn');
const buttonVerificação = document.getElementById('submit-btn');
const segunda = document.getElementById('segunda');

// verifica senha e login
function login() {
  const login2 = document.getElementById('login');
  const senha = document.getElementById('senha');

  if (login2.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// Verifica se o total está selecionado para liberar o botao;
function buttonSelecinado() {
  const submit = document.getElementById('submit-btn');
  if (checkbox.checked) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disabled');
  }
}

// Função muda o numero 500 e adiciona no armazenamento as escritas;
function textoEscrevendoDoTextArea({ target }) {
  const pAlterado = document.getElementById('counter');
  const texto = target.value;
  STATE_INICIAL.obs = texto;
  const numero1 = 500;
  const numero2 = texto.length;
  const numeroTotal = numero1 - numero2;
  pAlterado.innerHTML = numeroTotal;
}

// adicona o nome
function adicionarNomeDoEstato({ target }) {
  const nomeEscrito = target.value;
  STATE_INICIAL.nome = nomeEscrito;
}

// adcionar sobrenome
function adicionarSobrenomeDoEstado({ target }) {
  const sobrenomeEscrito = target.value;
  STATE_INICIAL.sobrenome = sobrenomeEscrito;
}

// adicionar Casa
function adicionarCasaDoEstado({ target }) {
  const casaClicada = target.value;
  STATE_INICIAL.casa = casaClicada;
}

// adicionar Email
function adicionarEmailDoEstado({ target }) {
  const emailEscrito = target.value;
  STATE_INICIAL.email = emailEscrito;
}

// adicionar FamiliaDoEstado
function adicionarFamiliaDoEstado({ target }) {
  const familiaClicada = target.value;
  STATE_INICIAL.familia = familiaClicada;
}

// adicionar avaliacao
function adicionarAvaliacaoDoEstado({ target }) {
  const avaliacaoEscolida = target.value;
  STATE_INICIAL.avaliacao = avaliacaoEscolida;
}

// adicionar Materia Do Estado
function adicionarMateriaDoEstado() {
  const arrayNew = [];
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked === true) {
      arrayNew.push(materias[index].value);
    }
  }
  STATE_INICIAL.materias = arrayNew;
}

function adicionarTodoEventoDaFamilia() {
  const numero = family.length;
  for (let index = 0; index < numero; index += 1) {
    family[index].addEventListener('click', adicionarFamiliaDoEstado);
  }
}

function adicionarTodoEventoDoAvaliacao() {
  const numero = avaliacao.length;
  for (let index = 0; index < numero; index += 1) {
    avaliacao[index].addEventListener('click', adicionarAvaliacaoDoEstado);
  }
}

function adicionarTodoEventoDoMaterial() {
  const numero = materias.length;
  for (let index = 0; index < numero; index += 1) {
    materias[index].addEventListener('click', adicionarMateriaDoEstado);
  }
}

function passarInformaçãoParaOPai(p1, p2, p3, p4) {
  segunda.appendChild(p1);
  segunda.appendChild(p2);
  segunda.appendChild(p3);
  segunda.appendChild(p4);
}

// Adicionado Dados Apos apagar os dados
function adicionandoInformações() {
  const criarP1 = document.createElement('p');
  criarP1.innerHTML = `Nome: ${STATE_INICIAL.nome} ${STATE_INICIAL.sobrenome}`;
  segunda.appendChild(criarP1);
  const criarP2 = document.createElement('p');
  criarP2.innerHTML = `Email: ${STATE_INICIAL.email}`;
  segunda.appendChild(criarP2);
  const criarP3 = document.createElement('p');
  criarP3.innerHTML = `Casa: Casa ${STATE_INICIAL.casa}`;
  segunda.appendChild(criarP3);
  const criarP4 = document.createElement('p');
  criarP4.innerHTML = `Família: Família ${STATE_INICIAL.familia}`;
  const criarP5 = document.createElement('p');
  criarP5.innerHTML = `Matérias: ${STATE_INICIAL.materias.toString()}`;
  const criarP6 = document.createElement('p');
  criarP6.innerHTML = `Avaliação: ${STATE_INICIAL.avaliacao}`;
  const criarP7 = document.createElement('p');
  criarP7.innerHTML = `Observações: ${STATE_INICIAL.obs}`;
  passarInformaçãoParaOPai(criarP4, criarP5, criarP6, criarP7);
}

// Criar Uma Pagina De Html para todos os dados escritos
function adicionarnovasInformações() {
  const todoFormulario = document.getElementById('evaluation-form');
  todoFormulario.remove();
  segunda.classList.add('informação');
  adicionandoInformações();
}

button.addEventListener('click', login);
checkbox.addEventListener('click', buttonSelecinado);
textarea.addEventListener('keyup', textoEscrevendoDoTextArea);
nome.addEventListener('keyup', adicionarNomeDoEstato);
sobrenome.addEventListener('keyup', adicionarSobrenomeDoEstado);
casa.addEventListener('click', adicionarCasaDoEstado);
email.addEventListener('keyup', adicionarEmailDoEstado);
buttonVerificação.addEventListener('click', adicionarnovasInformações);
adicionarTodoEventoDaFamilia();
adicionarTodoEventoDoAvaliacao();
adicionarTodoEventoDoMaterial();
