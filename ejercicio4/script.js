document.getElementById("calcular").onclick = () => {
  let peso = parseFloat(document.getElementById("peso").value);
  let est = parseFloat(document.getElementById("estatura").value);
  if (!peso || !est) {
    alert("Faltan datos válidos");
    return;
  }
  const imc = peso / (est * est);
  alert("IMC: " + imc.toFixed(2));
};