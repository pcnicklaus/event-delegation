// add scripts

$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var toDo = $('input').val();
    $('#all-todos').prepend('<li><h2>'+toDo+
      '&nbsp;<button class="btn btn-danger btn-sm">X</button></h2></li>');
    $('input:text').val('');
  });

  $("#all-todos").on('click', '.btn', function(event) {
    $(this).parent().parent().remove();
  });
});
