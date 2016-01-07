$(document).ready(function() {
  $('#add-item').click(function() {
  	var item = $('#item-to-add').val();
  	if (item == '') {
  		alert("Add an item to the list")
  	}else {

  	$('#list').append('<li class="tobuy"><button class="item">Check</button>' + item + '</li>');
  }
  });
  $('ul').on('click', '.item', function() {
		$(this).closest('li').toggleClass('done');
		$(this).remove();
	});
});