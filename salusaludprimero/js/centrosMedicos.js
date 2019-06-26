$(document).ready( function cargarDatos(){
	var xhttp= new XMLHttpRequest();
	console.log("hola");
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				
				var i;
				var table=document.getElementById("tableBody");
				var json = JSON.parse(xhttp.responseText);
				
				json.forEach(function(dato){
					var tr= document.createElement("tr");
					var td1= document.createElement("td");
					var td2= document.createElement("td");
					var td3= document.createElement("td");
					var td4= document.createElement("td");
					
					td1.textContent=dato.nombre;
					td2.textContent=dato.direccion;
					td3.textContent=dato.descripcion;
					
					var examenes=dato.horarios;

					var dd=document.createElement("ul");
					examenes.forEach(function(examen){
						var li= document.createElement("li");
						
						
						li.textContent=examen;
						
						dd.appendChild(li);
						
					});

					/*td4.textContent=dato.examenes;*/
					
					td4.appendChild(dd);
				
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);

				
					table.appendChild(tr);
				});
				
			}
		};
	xhttp.open("GET","json/centros.json", true);
	xhttp.send();
});