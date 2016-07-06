

$(document).ready(function() {

	 $('#opcion1 a').click(function(event) {
		 event.preventDefault();
		 $('#contenido').load('centrosMedicos.html');
		 var contador = 0;
		 $.getJSON('json/centros.json', function(data){
		 	//var select = $(#selectCM);
		 	$.each(data,function(entryIndex, entry){
		 		$('#selectCM').append('<option value='+ contador+ '>'+ entry.nombre + '</option>'); 		
		 	});	
		 }); 	
	});
});

