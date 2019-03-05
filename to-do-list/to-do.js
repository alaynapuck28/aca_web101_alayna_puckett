console.log("program start");
function addListItem(){
  let text= $('#new-text').val();
  $("#list").append('<li><input type="checkbox">'+ text + '<button class="delete">Delete</button></li>');
  $('#new-text').val('');
}
function deleteListItem(){
  $(this).parent().remove();
}

$(function(){
  $("#add").on('click', addListItem);
  $(".delete").on('click', deleteListItem);
  $(document).on('click', ".delete", deleteListItem);  
});

