document.getElementById("calcular").onclick = () => {
  let B = parseFloat(document.getElementById("B").value);
  let b = parseFloat(document.getElementById("b").value);
  let h1 = parseFloat(document.getElementById("h1").value);
  let h2 = parseFloat(document.getElementById("h2").value);
  if ([B, b, h1, h2].some(x => isNaN(x) || x <= 0)) {
    alert("Complete todos los campos con valores positivos");
    return;
  }
  const areaTrapecio = ((B + b) / 2) * h1;
  const areaRectangulo = b * h2;
  const areaTotal = areaTrapecio + areaRectangulo;
  document.getElementById("resultado").textContent = `Área total: ${areaTotal.toFixed(2)} m²`;
};