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
					option.textContent=numMuestra
					muestras.appendChild(option);
				});
			}
		}
		xhttp.open("GET","json/datosOperario.json", true);
		xhttp.send();
		
		document.getElementById(id2show).style.visibility='visible';
		
	});
	$('#opcion3 a').click(function(event) {
		$('#datosOperario').load('estadisticas.html');
		var circle = d3.selectAll("circle")
		circle.style("fill", "steelblue");
		var contHeces=0;
		var contSangre=0;
		var contHepa=0;
		var contOrin=0;
		var xhttp= new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				console.log("entro");
				var json = JSON.parse(xhttp.responseText);
				json.forEach(function(dato){
					var examenes=dato.examenes;
					examenes.forEach(function(examen){
						if (examen=="Heces"){
							contHeces++;
						}
						else if (examen=="Sangre"){
							contSangre++;
						}
						else if (examen=="Orine"){
							contOrin++;
						}
						else if (examen=="Hepatico"){
							contHepa++;
						}
						
					});
					
				});
				circle.data([contHeces, contSangre, contOrin, contHepa])
				circle.attr("r", function(d) { return Math.sqrt(d); });
				d3.selectAll("p").style("color", function(d, i) {
					return i % 2 ? "#fff" : "#eee";
					});
				d3.selectAll("circle").transition()
				.duration(750)
				.delay(function(d, i) { return i * 10; })
				.attr("r", function(d) { return Math.sqrt(d * scale); });
				
				
			}
		}
		xhttp.open("GET","json/datosOperario.json", true);
		xhttp.send();
		circle.data([contHeces, contSangre, contOrin, contHepa])
		circle.attr("r", function(d) { return Math.sqrt(d); });
			d3.selectAll("p").style("color", function(d, i) {
				return i % 2 ? "#fff" : "#eee";
			});
		d3.selectAll("circle").transition()
		.duration(750)
		.delay(function(d, i) { return i * 10; })
		.attr("r", function(d) { return Math.sqrt(d * scale); });
		
	 });
	
});
function borrarRegistro(){

	
}