// login.js
// Se añade la parte de logeo requerido por la clase de Desarrollo de Aplicaciones en Red
// Constante loginForm, se saca del DOM a partir de la selección del formulario con el id "login-form"
const loginForm = document.querySelector("#login-form");
// Se añade un event listener al formulario para escuchar el evento "submit"
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
// Se obtienen los valores de los campos de usuario y contraseña, se eliminan los espacios en blanco al inicio y al final del nombre de usuario
  const username = document.querySelector("#login-username").value.trim();
  const password = document.querySelector("#login-password").value;
  const message = document.querySelector("#login-message");
// Se comprueba si el nombre de usuario y la contraseña son correctos
// Es una simulación, las credenciales deben ser más complejas
// Para el ejemplo, se comprueba si el nombre de usuario es "administrador" y la contraseña es "administrador"
  if (username === "administrador" && password === "administrador") {
    message.className = "alert alert-success mt-3";
    // Se muestra un mensaje de que el usuario y contraseña son correctos y se redirige a la página de administración
    message.textContent = "Inicio de sesión de administrador correcto, entrando a la página de administración...";
    return;
  }

  message.className = "alert alert-danger mt-3";
  // Cualquier otro caso mostrara el mensaje de usuario o contraseña incorrectos
  message.textContent = "Usuario o contraseña incorrectos.";
});
