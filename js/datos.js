$(document).ready(function() {
	 $('#opcion3 a').click(function(event) {
	 event.preventDefault();
	 $('#datosUsuario').load('datosUsuario.html');
	 });
});