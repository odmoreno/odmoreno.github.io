$(document).ready( function cargarDatos(){
	var xhttp= new XMLHttpRequest();
	console.log("hola");
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				
				var i;
				var tabla=document.getElementById("tableBody");
				var json = JSON.parse(xhttp.responseText);
				
				json.forEach(function(dato){
					console.log(auto);
					var tr= document.createElement("tr");
					var td1= document.createElement("td");
					var td2= document.createElement("td");
					var td3= document.createElement("td");
					var td4= document.createElement("td");
					var td5= document.createElement("td");
					
					
					td1.textContent=dato.numero;
					td2.textContent=dato.paciente;
					td3.textContent=dato.centro;
					/*
					td4.textContent=dato.examenes;
					*/
					td5.textContent=dato.lab;
				
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					tr.appendChild(td5);
				
					tabla.appendChild(tr);
				});
				
			}
		};
	xhttp.open("GET","json/datosOperario.json", true);
	xhttp.send();
});

/*
<div class="dropdown">
					<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Examenes
						<span class="caret"></span></button>
						<ul class="dropdown-menu">
							<li><a href="#">Sangre</a></li>
							<li><a href="#">Orine</a></li>
							<li><a href="#">Hepático</a></li>
							</ul>
						</div>
						*/