$('#boton').on("click", function() {
  var url = 'https://jsonplaceholder.typicode.com';

  var id = parseInt(Math.random() * 100);

  $.ajax({
    url: url + '/posts/' + id,
    method: 'GET'
  }).then(function(data) {
      $('#tabla').append('<tr> <td>' + data.id + '</td><td>' + data.title + '</td><td>' + data.body + '</td></tr>')
    });
});
