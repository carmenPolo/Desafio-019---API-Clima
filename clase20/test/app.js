$(function(){

	// var dailyIndicators = data;
	// var url = 'https://mindicador.cl/api'
	// var uf = url + dailyIndicators.uf.valor
	//
	// $("<p/>", {
	// 	html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
	// }).done(function(data){
	//
	// 	console.log(data);
	// })


	// $.getJSON('https://mindicador.cl/api', function(data) {
	//     var dailyIndicators = data;
	//     $("<p/>", {
	//         html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
	//     }).appendTo("body");
	// 		console.log(data);
	// }).fail(function() {
	//     console.log('Error al consumir la API!');
	// });

var dollar = dailyIndicators.dolar.valor;

	$(document).on('submit',function(event){
			event.preventDefault();
		var hola = $("#inputpeso").val();
		alert(dollar);
		// console.log($('#inputpeso').val());
	});

	$.getJSON('https://mindicador.cl/api', function(data) {
			var dailyIndicators = data;
		$('#dollar').append('$ ' + dailyIndicators.dolar.valor + ' pesos');
		$('#euro').append('$ ' + dailyIndicators.euro.valor + ' pesos');
		$('#uf').append('$ ' + dailyIndicators.uf.valor + ' pesos');
		$('#utm').append('$ ' + dailyIndicators.utm.valor + ' pesos');

			console.log(data);
	}).fail(function() {
			console.log('Error al consumir la API!');
	});


}); //document.ready
