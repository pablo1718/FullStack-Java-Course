// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){
    EmailUsuario = localStorage.email;
    document.querySelector('#txt-email-usuario').outerHTML = EmailUsuario;
}

function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    }
}

async function cargarUsuarios(){
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const usuarios = await request.json();
  let listadoHTML = '';
  for (let usuario of usuarios){
    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+ usuario.id +')" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></a>';
    let usuarioHTML = '<tr>'+
                           '<td>'+ usuario.id +'</td>' +
                           '<td>'+ usuario.nombre +'</td>' +
                           '<td>'+ usuario.email +'</td>' +
                           '<td>'+ usuario.telefono +'</td>' +
                           '<td>'+ botonEliminar +'</td>'+
                      '</tr>'
    listadoHTML += usuarioHTML;
  }
  document.querySelector('#usuarios tbody').outerHTML = listadoHTML;
}

async function eliminarUsuario(id){
    if(!confirm('¿Desea eliminar este usuario?')){
        return;
    }
    const request = await fetch('api/usuarios/'+ id, {
        method: 'DELETE',
        headers: getHeaders()
    });
    location.reload();
}
