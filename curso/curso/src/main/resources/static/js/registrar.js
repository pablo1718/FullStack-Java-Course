// Call the dataTables jQuery plugin
$(document).ready(function() {
});

async function registrarUsuarios(){
  let datos = {};
  datos.nombre = document.getElementById("Nombre").value;
  datos.apellido = document.getElementById("Apellido").value;
  datos.email = document.getElementById("Email").value;
  datos.password = document.getElementById("Password").value;
  datos.telefono = document.getElementById("Telefono").value;
  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La cuenta fue creada con exito");
  window.location.href = "login.html";
}