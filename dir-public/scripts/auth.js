document.addEventListener('DOMContentLoaded', () => {

  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK não foi carregado corretamente.');
    document.getElementById('mensagem-login').textContent = 'Erro: SDK do Firebase não carregado.';
    return;
  } else {
    console.log('Firebase SDK carregado.');
    if (typeof firebase.auth === 'undefined') {
        console.error('Firebase Auth SDK não foi carregado.');
        document.getElementById('mensagem-login').textContent = 'Erro: SDK de autenticação não carregado.';
        return;
    }
    console.log('Firebase Auth SDK carregado.');
  }

  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const mensagemLoginPara = document.getElementById('mensagem-login');

  // --- 2. Gerenciar o estado de autenticação (Verificar se já está logado ao carregar a página) ---
  // Este listener é executado quando o estado de autenticação muda E ao carregar a página
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Usuário está logado!
      console.log("Usuário já logado:", user.email);
      window.location.href = 'teste.html'; 
    } else {
      // Usuário NÃO está logado. Permanece na página de login.
      console.log("Nenhum usuário logado. Mostrando formulário de login.");
      // Você pode adicionar lógica aqui se precisar esconder/mostrar algo
      // que dependa do estado de login inicial, mas no seu HTML atual,
      // o formulário já está visível por padrão.
    }

  });


  // --- 3. Implementar a lógica de Login no Submit do Formulário ---
  // Adiciona um evento 'submit' ao formulário de login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página padrão do formulário

        const email = emailInput.value; // Pega o email digitado
        const password = passwordInput.value; // Pega a senha digitada

        // Limpa mensagens de erro/sucesso anteriores
        mensagemLoginPara.textContent = '';

        // Validação básica (opcional, o Firebase também valida)
        if (!email || !password) {
            mensagemLoginPara.textContent = 'Por favor, preencha email e senha.';
            return;
        }

        // Usa a função do Firebase para fazer login com email e senha
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Login bem-sucedido!
            const user = userCredential.user;
            console.log("Usuário logado com sucesso:", user.email);
            // Mostra uma mensagem de sucesso (opcional, já que vai redirecionar)
            mensagemLoginPara.textContent = 'Login bem-sucedido! Redirecionando...';
        });
    });
});
