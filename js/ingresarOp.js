$(document).ready(function() {
	 $('#opcion1 a').click(function(event) {
	 event.preventDefault();
	 $('#datosOperario').load('registrar.html');
	 });
});