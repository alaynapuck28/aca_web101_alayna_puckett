jQuery(document).ready(function($){

    $('.black-button').on({
         'click': function(){
             $('#change-image').attr('src','/wp-content/uploads/2018/09/black.jpg');
         }
     });
     
    $('.red-button').on({
         'click': function(){
             $('#change-image').attr('src','/wp-content/uploads/2018/09/red.jpg');
         }
     });
     
    $('.blue-button').on({
         'click': function(){
             $('#change-image').attr('src','/wp-content/uploads/2018/09/blue.jpg');
         }
     });
     
    $('.yellow-button').on({
         'click': function(){
             $('#change-image').attr('src','/wp-content/uploads/2018/09/yellow.jpg');
         }
     });
    });