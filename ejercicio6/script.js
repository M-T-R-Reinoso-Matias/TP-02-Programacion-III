document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const email = document.getElementById("email").value.trim();

  let errores = [];
  if (!nombre || nombre.length > 50) errores.push("Nombre incorrecto");
  if (!apellido || apellido.length > 50) errores.push("Apellido incorrecto");
  if (isNaN(edad) || edad < 18) errores.push("Debe ser mayor de edad");
  if (isNaN(altura) || altura <= 0 || altura > 230) errores.push("Altura incorrecta");
  if (!email.includes("@")) errores.push("Email incorrecto");

  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = errores.length ? errores.join(", ") : "Todos los datos son válidos";
  mensaje.style.color = errores.length ? "red" : "green";
});