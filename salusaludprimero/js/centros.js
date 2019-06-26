$(document).ready(function() {
	 $('#opcion1 a').click(function(event) {
	 event.preventDefault();
	 var html = '';

	 $.getJSON('json/centros.json', function(data){
	 	$.each(data,function(entryIndex, entry){
	 		

	 		html += '<tr>';
	 		html += '	<td>'+ entry.nombre+'<td>';
	 		html += '	<td>'+ entry.direccion+'<td>';
	 		html += '	<td>'+ entry.descripcion+'<td>';

	 		html += '	<td><ul>';

	 		$.each(entry.horarios, function(lineIndex, line) {
				html += '<li>' + line + '</li>';
			});

	 		html += '	</ul></td>';
	 		html += '</tr>';
	 	});
	 	$('#tableBody').html(html);
	 });

	 });
});