$(document).ready(function() {
	 $('#opcion2 a').click(function(event) {
	 event.preventDefault();
	 $('#contenido').load('resultados.html');
	 
	 });
});