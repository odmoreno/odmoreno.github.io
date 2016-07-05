var emailvalido="oscarmoreno@gmail.com";
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

	if( email == emailvalido && password == passvalida){
		console.log("cuenta  valida");
		//$(document).load('paciente.html');
		window.open('paciente.html');
		//
		//$('.container').load('paciente.html');

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