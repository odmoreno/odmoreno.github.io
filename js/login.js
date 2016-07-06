var emailvalido=["oscarmoreno@gmail.com","cmanosalvas95@gmail.com", "lab@gmail.com"];
var passvalida= "daw123";

alert = function(){}
alert.warning = function(message){
	$('#alerta').html('<div class="alert alert-warning alert-dismissible" role="alert"><a class="close" data-dismiss="alert">×</a><span> <strong>Peligro!</strong> '+ message +'</span></div>');
}

function validarLogin(){
	$("#ingresoSesion").effect("shake");
	console.log("hola");
	var email = $('#inputEmail').val();
	console.log(email);
	var password = $('#inputPassword').val();
	console.log(password);

	if( email == emailvalido[0] || email == emailvalido[1] || email == emailvalido[2] && password == passvalida){
		console.log("cuenta  valida");
		//$(document).load('paciente.html');
		switch (email){
			case emailvalido[0]:
				window.open('paciente.html');
				//window.location.href = "odmoreno.github.io/paciente.html";
				break;
			case emailvalido[1]:
				window.open('operario.html');
				//window.location.href = "odmoreno.github.io/operario.html"
				break;
			case emailvalido[2]:
				window.open('laboratorista.html');
				//window.location.href = "odmoreno.github.io/laboratorista.html"
				break;
			
		//
		//$('.container').load('paciente.html');
		}
	}
	else{
		$("#ingresoSesion").effect("shake");
		$('#id').on('click', function(){
			alert.warning('Cuenta no valida');
		});
		$("#inputEmail").val("");
		$("#inputPassword").val("");
	}
}