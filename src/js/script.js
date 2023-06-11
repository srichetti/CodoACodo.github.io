function calcularTotal(cantidad, categoria) {
  var cantidad = document.getElementById("cantidad").value;
  var categoria = document.getElementById("categoria").value;
  var valorTicket = 200;

  if (categoria !== "Seleccionar" && cantidad !== "") {
    switch (categoria) {
      case "Estudiante":
        return 0.80
      case "Trainee":
        return 0.50
      case "Junior":
        return 0.15
    }
    var total = cantidad * valorTicket * categoria;
    document.getElementById("tot_Pagar").value = "Total a Pagar: $ " + total;
  } else {
    document.getElementById("tot_Pagar").value = "";
  }
}

function checkInput() {
  var inputField = document.getElementById('inputField');
  var submitButton = document.getElementById('submitButton');

  if (inputField.value.trim() !== '') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}