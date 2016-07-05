$(document).ready(function() {
	 $('#opcion2 a').click(function(event) {
	 event.preventDefault();
	 $('#contenido').load('examenes.html');
	 alert('Loaded!');
	 });
});