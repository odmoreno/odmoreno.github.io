$(document).ready(function() {
	 $('#opcion1 a').click(function(event) {
	 event.preventDefault();
	 $('#contenido').load('centrosMedicos.html');
	 alert('Loaded!');
	 });
});