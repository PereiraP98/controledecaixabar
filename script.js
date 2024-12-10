/* Estilo global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

/* Tela de Carregamento */
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #000;
}

.loading-container {
  position: relative;
  width: 150px;
  height: 150px;
}

.loading-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.loading-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation: fadeIn 1s ease-out; /* Animação inicial de fade */
}

.loading-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffcc00;
  transform: translateY(100%);
  animation: fillEffect 2.5s ease-out forwards; /* Animação de preenchimento */
  clip-path: circle(50% at center); /* Garante o preenchimento apenas dentro da imagem */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes fillEffect {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

/* Página de Login */
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.login-section {
  width: 40%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
  position: relative;
  box-shadow: 8px 8px 30px rgba(0, 0, 0, 0.9);
}

.login-section h1 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.login-section h1 span {
  color: #ffcc00;
}

.login-section form {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 8px;
}

.input-group input {
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  transition: 0.3s;
}

.input-group input:focus {
  border-color: #ffcc00;
  outline: none;
  box-shadow: 0 0 8px #ffcc00;
}

.btn-login {
  padding: 10px 30px;
  background: linear-gradient(to right, #d88c24, #e3a617);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  transition: 0.3s;
}

.btn-login:hover {
  opacity: 0.9;
}

.background-section {
  width: 60%;
  background: url('https://github.com/PereiraP98/controledecaixabar/raw/refs/heads/main/assets/fundologin.webp') no-repeat center center/cover;
}
