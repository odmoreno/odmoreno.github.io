var emailvalido="cmanosalvas95@gmail.com"
var passvalida="daw123"
function submit(){
	$("#ingresoSesion").effect("shake");
	console.log("hola")
	var email = $("inputEmail").val(); // Store E-mail input value in the variable email.
	var password = $("inputPassword").val(); // Store Password input value in the variable password.
	/* Check if email=formget@gmail.com and password=fugo then,Show the message Account Validated!!! in the Div having id message.*/
	if (email == emailvalido && password == passvalida) {
		$("#message").html("Account Validated!!!");
		
		bootstrap_alert = function() {}
		bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
        }

		$('#botonIng').on('click', function() {
            bootstrap_alert.warning('Account Validated!!!');
		});
	}
	/* If E-mail and Password do not match then shake Div having id maindiv and show the message "***Invalid email or password***" in the div having id message.*/
	else {
		console.log("hola")
		$("#ingresoSesion").effect("shake");
		$("inputEmail").val("");
		$("inputPassword").val("");
	}
}