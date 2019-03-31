$(function() {

var url = 'https://mindicador.cl/api'
var queryparams = ['exclude=[ivp, dolar_intercambio, ipc, imacec, tpm, libra_cobre, tasa_desempleo, bitcoin]'];
var dollar = $('#dollar');
var euro = $('#euro');
var uf = $('#uf');
var utm = $('#utm');


  $.ajax({
  url: url + '?' + queryparams[0],
  method:'GET'

}).done(function(data){
    //console.log(data);
    dollar.text('$ ' + data.dolar.valor);
    euro.text('$ ' + data.euro.valor);
    uf.text('$ ' + data.uf.valor);
    utm.text('$ ' + data.utm.valor);

  $('#inputClp').on("submit", function(event){
    event.preventDefault();

    var clp = $ ('#inputpeso').val();
        clp = parseInt(clp);
    var resultado1 = $('#resultado1').text('US$ ' + clp % data.dolar.valor);
    //console.log(clp);
  })

$('#inputUs').on("submit", function(event){
  event.preventDefault();

  var clp = $ ('#inputdolar').val();
      clp = parseInt(clp);
  var resultado2 = $('#resultado2').text('CLP $ ' + clp*data.dolar.valor);
  //console.log(clp);
  $("#inputdolar").focus();
})



}); //done

}); // document.ready
