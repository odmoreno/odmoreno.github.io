$(document).ready(function() {
	 $('#opcion3 a').click(function(event) {
	 event.preventDefault();
	 $.getJSON('json/paciente.json', function(data){
	 	var html = '';
	 	$.each(data,function(entryIndex, entry){
	 		html += '<form>';

	 		html += '<form class="form-inline">';
	 		html += '<div class="form-group">';
	 		html += '	<label for="nameUser1"> Nombres: </label>';
	 		html += '	<input type="text" class="form-control" id="nombre1" placeholder="Primer Nombre" value = '+  entry.primerNombre + '>';
	 		html += '</div>'; //fin del div form 1
	 		html += '<div class="form-group">';
	 		html += '	<label class="sr-only" for="exampleInputName2">Nombres:</label>';
	 		html += '	<input type="text" class="form-control" id="nombre2" placeholder="Segundo Nombre" value = '+  entry.segundoNombre + '>';
	 		html += '</div>'; //fin del div form 2
	 		html += '</form>'; // fin del form inline 1

	 		html += '<form class="form-inline">';
	 		html += '<div class="form-group">';
	 		html += '	<label for="apellido1">Apellidos:</label>';
	 		html += '	<input type="text" class="form-control" id="apellido1" placeholder="Primer Apellido" value = '+  entry.primerApellido + '>';
	 		html += '</div>'; //fin del div form 1
	 		html += '<div class="form-group">';
	 		html += '	<label class="sr-only" for="apellido2">Apellido:</label>';
	 		html += '	<input type="text" class="form-control" id="apellido2" placeholder="Segundo Apellido" value = '+  entry.segundoApellido + '>';
	 		html += '</div>'; //fin del div form 2
	 		html += '</form>'; // fin del form inline 2

	 		html += '<div class="form-group">';
	 		html += '	<label for="dir">Dirección:</label>';
	 		html += '	<input type="text" class="form-control" id="direccion" placeholder="Alborada 8va etapa mz 937 v1" value = '+ entry.direccion+'>';
	 		html += '</div>';

	 		html += '<div class="form-group">';
	 		html += '	<label for="telf">Telefono:</label>';
	 		html += '	<input type="text" class="form-control" id="telefono" placeholder="0939181823" value = '+ entry.telefono+'>';
	 		html += '</div>';

	 		html += '<div class="form-group">';
	 		html += '	<label for="Email">Email:</label>';
	 		html += '	<div class="input-group">';
	 		html += '		<input type="text" class="form-control" placeholder="Email" aria-describedby="basic-addon2" value = '+ entry.email+'>';
	 		html += '   	<span class="input-group-addon" id="basic-addon2">@example.com</span>';
	 		html += '	</div>';
	 		html += '</div>';

	 		html += '<div class="row">';
	 		html += '<div class="col-xs-12 col-md-8">'; 
	 		html += '<div class="form-group">';
	 		html += '	<label for="imagen">Imagen:</label>';
	 		html += '	<input type="file" id="imagen">';
	 		html += '	<p class="help-block">Example block-level help text here.</p>';
	 		html += '</div>';

	 		html += '<div class="checkbox">';
	 		html += '	<label>';
	 		html += '		<input type="checkbox"> Check me out';
	 		html += '	</label>';
	 		html += '</div>';

	 		html += '<button type="submit" class="btn btn-default">Guardar</button>';
	 		
	 		html += '</div>';
	 		
	 		html += '<div class="col-xs-6 col-md-4">';
	 		html += '<img src=' + entry.imagen+ '  class="img-responsive" alt="Responsive image" width= 50% >'
	 		html += '</div>';
	 		html += '</div>';
	 		//html += '';  para copiar..


	 		html += '</form>'; //fin del form final


	 	});
	 	$('#contenido').html(html);
	 });

	 });
});