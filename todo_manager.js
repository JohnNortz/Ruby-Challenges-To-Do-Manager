$(function(){
    $( "#todo_form" ).submit(function( event ) {
      event.preventDefault();
        var item = $( "input:first" ).val();
        $("#my_toDo > tbody").append("<tr><td>" + item + '</td><td><input type="button" 		value="Task Completed" class="delete" /></td></tr>');
    });
    
   $("#my_toDo").on('click','.delete',function(){
        $(this).parent().parent().remove();
    });

});