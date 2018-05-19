$("li").click(function(){
	//Quita y pone la clase que va como parametro
	$("li").toggleClass("active");
	$("section").toggleClass("hidden");
});
//se evita que se recargue la pagina
$("form").submit(function(evento){
	evento.preventDefault();
	var contacto={
		"nombre" : $("#nombre").val(),
		"apellido" : $("#apellido").val(),
		"telefono" : $("#telefono").val(),
		"email" : $("#email").val()
	};

	guardar(contacto);
	console.log(contacto);
	$("form")[0].reset();
	$("nombre").focus();

});

function guardar(c){
	var filas = "<tr><td>"+c.nombre+"</td><td>"+c.apellido+"</td><td>"+c.telefono+"</td><td>"+c.email+"</td><td><button title='Modificar' class='btn btn-success'><span class='glyphicon glyphicon-pencil'></span></button><button  title='Eliminar' class='btn btn-danger'><span class='glyphicon glyphicon-erase'></span></button></td></tr>"

	$("tbody").append(filas);
}