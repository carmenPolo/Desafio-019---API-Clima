$(function() {
var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
var key = '495c4f6dc995a1ce84b8e3b4a8d15383';
var coords = {
  scl:'-33.4377968,-70.6504451',
  ptov:'-41.3178431,-72.9827187'
};
var queryparams=['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto'];
var image = {
  'clear-day':'http://icons.wxug.com/i/c/v4/clear.svg',
  'rain': 'http://icons.wxug.com/i/c/v4/rain.svg'
}


$('select').on('change',function(){

  $.ajax({
  url: url + key + '/' + coords[$(this).val()] + '?' + queryparams[0]+ '&' + queryparams[1] + '&' + queryparams[2],
  method:'GET'

}).done(function(data){
    console.log(data);
    $('#resumen').text(parseInt(data.currently.temperature) + 'º ' + data.currently.summary);
    $('#sensacion').text(data.currently.apparentTemperature + 'º');
    $('#probabilidad').text(data.currently.precipProbability * 100 + '%');
    $('#humedad').text(data.currently.humidity * 100 + '%');
    $('.img-responsive').attr('src', image[data.currently.icon])

});// select on change

});// done

}); // document.ready
