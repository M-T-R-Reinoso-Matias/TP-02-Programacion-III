document.getElementById("calcular").onclick = () => {
  let peso = parseFloat(document.getElementById("peso").value);
  let est = parseFloat(document.getElementById("estatura").value);

  if (isNaN(peso) || peso <= 0) {
    alert("Ingrese un peso válido en kilogramos.");
    return;
  }

  if (isNaN(est) || est <= 0 || est > 2.5) {
    alert("Ingrese una estatura válida en metros (por ejemplo: 1.75). No use centímetros.");
    return;
  }

  const imc = peso / (est * est);
  alert("IMC: " + imc.toFixed(2));
};