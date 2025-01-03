// Função para simular o carregamento
window.onload = function () {
  const loadingScreen = document.getElementById('loading-screen');
  const loginPage = document.getElementById('login-page');

  // Espera 3 segundos para simular o carregamento
  setTimeout(() => {
    loadingScreen.style.display = 'none'; // Esconde a tela de carregamento
    loginPage.style.display = 'flex'; // Mostra a página de login
  }, 5000); 
};
