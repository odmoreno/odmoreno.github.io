$(document).ready(function() {
	 $('#opcion3 a').click(function(event) {
	 event.preventDefault();
	 $('#contenido').load('datosUsuario.html');
	 
	 });
});