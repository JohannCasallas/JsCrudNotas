function agregarNotas() {
  let nom = document.getElementById("nombre").value;
  let not1 = document.getElementById("nota1").value;
  let not2 = document.getElementById("nota2").value;
  let not3 = document.getElementById("nota3").value;

  //Validar el campo nombre
  if (nom === "") {
    swal("Nombre no ingresado", "Validar datos", "advertencia");
    return false;
  }
  // Validar las notas si estan vacias
  if (not1 === "" || not2 === "" || not3 === "") {
    swal("Nota no ingresada", "Espacios vacios", "advertencia");
    return false;
  }
  //Validar las notas, no mayor de 10 puntos, solo asta 10
  if (not1 >= 10.1 || not2 >= 10.1 || not3 >= 10.1) {
    alert("la nota no puede ser mayor a 10");
    return false;
  }

  //Promedio de las 3 notas dividido entre 3
  let prom = (parseFloat(not1) + parseFloat(not2) + parseFloat(not3)) / 3;

  //Variable
  let obs = 0;
  //Promedio menor o igual a 6.0 entonces reprovado, caso ocntrario aprobado
  if (prom >= 6.0) {
    obs = value = "APROBADO &#x2714";
  } else {
    obs = value = "DESAPROBADO &#x274c";
  }

  const tabla = document.getElementById("addtabla");

  const fila = document.createElement("tr");

  fila.innerHTML = `<td> ${nom} </td><td> ${not1} </td><td> ${not2} </td><td> ${not3}</td><td> ${prom.toFixed(
    1
  )} </td><td> ${obs} </td>`;

  tabla.appendChild(fila);

  if (prom >= 6.0) {
    document.querySelector(
      "r:last-child#addtabla t td:nth-child(5)"
    ).style.background = "#a0ffb0";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(5)"
    ).style.background = "#ff9090";
  }
  if (not1 > 6.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(2)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(2)"
    ).style.color = "red";
  }
  if (not2 > 6.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(3)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(3)"
    ).style.color = "red";
  }
  if (not3 > 6.0) {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(4)"
    ).style.color = "blue";
  } else {
    document.querySelector(
      "#addtabla tr:last-child td:nth-child(4)"
    ).style.color = "red";
  }

  document.getElementById("nombre").value = "";
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
}
