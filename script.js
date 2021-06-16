const button = document.getElementById('button');

function login() {
  const login2 = document.getElementById('login');
  const senha = document.getElementById('senha');

  if (login2.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', login);