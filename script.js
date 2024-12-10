// Função para simular o carregamento
window.onload = function () {
  const loadingScreen = document.getElementById('loading-screen');
  const loginPage = document.getElementById('login-page');

  // Espera a animação do carregamento terminar
  setTimeout(() => {
    loadingScreen.style.display = 'none'; // Esconde a tela de carregamento
    loginPage.style.display = 'flex'; // Mostra a página de login
  }, 2500); // 2.5 segundos para o efeito de preenchimento
};
