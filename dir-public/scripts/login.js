        document.addEventListener('DOMContentLoaded', function() {
            // 1. Pegar referências dos elementos HTML
            const loginForm = document.getElementById('loginForm');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const mensagemLogin = document.getElementById('mensagem-login');

            // 2. Adicionar um "escutador" de evento para o envio do formulário
            loginForm.addEventListener('submit', function(event) {
                // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
                event.preventDefault();

                // 3. Pegar os valores digitados pelo usuário
                const username = usernameInput.value;
                const password = passwordInput.value;

                // 4. Lógica de verificação (exemplo simples)
                if (username === 'admin' && password === '123') {
                    mensagemLogin.textContent = 'Login bem-sucedido! Bem-vindo(a).';
                    mensagemLogin.className = 'sucesso'; // Adiciona classe CSS para sucesso
                    mensagemLogin.style.display = 'block'; // Mostra a mensagem
                    // Em um cenário real, você redirecionaria o usuário ou faria algo mais aqui
                    alert('Login OK!');
                } else {
                    mensagemLogin.textContent = 'Usuário ou senha incorretos. Tente novamente.';
                    mensagemLogin.className = 'erro'; // Adiciona classe CSS para erro
                    mensagemLogin.style.display = 'block'; // Mostra a mensagem
                }
            });
        });