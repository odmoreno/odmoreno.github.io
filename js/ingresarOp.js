$(document).ready(function() {
	 $('#opcion1 a').click(function(event) {
		event.preventDefault();
		$('#datosOperario').load('registrar.html');
	 });
	 $('#opcion2 a').click(function(event) {
		event.preventDefault();
		$('#datosOperario').load('eliminarMod.html');
		var xhttp= new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				
				var muestras=document.getElementById("muestras");
				var json = JSON.parse(xhttp.responseText);
				json.forEach(function(dato){
					var option= document.createElement("option");
					var numMuestra=dato.numero;
					option.textContent(numMuestra);
					muestras.appendChild(option);
				});
			}
		}
		xhttp.open("GET","json/datosOperario.json", true);
	xhttp.send();
	});
});