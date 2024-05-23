$(function(){

    $("#workSelectButton").on("click", function(){
        if($('#workSelectCard').hasClass('shadow')) {
            $('#workSelectCard').removeClass('shadow');
            $('#workSelectCard').removeClass('bg-light');
        }
        else {
            $('#workSelectCard').addClass('shadow');
            $('#workSelectCard').addClass('bg-light');
        }
      });

      $("#schoolSelectButton").on("click", function(){
        if($('#schoolSelectCard').hasClass('shadow')) {
            $('#schoolSelectCard').removeClass('shadow');
            $('#schoolSelectCard').removeClass('bg-light');
        }
        else {
            $('#schoolSelectCard').addClass('shadow');
            $('#schoolSelectCard').addClass('bg-light');
        }
      });

      $("#appointmentSelectButton").on("click", function(){
        if($('#appointmentSelectCard').hasClass('shadow')) {
            $('#appointmentSelectCard').removeClass('shadow');
            $('#appointmentSelectCard').removeClass('bg-light');
        }
        else {
            $('#appointmentSelectCard').addClass('shadow');
            $('#appointmentSelectCard').addClass('bg-light');
        }
      });

      $("#otherSelectButton").on("click", function(){
        if($('#otherSelectCard').hasClass('shadow')) {
            $('#otherSelectCard').removeClass('shadow');
            $('#otherSelectCard').removeClass('bg-light');
        }
        else {
            $('#otherSelectCard').addClass('shadow');
            $('#otherSelectCard').addClass('bg-light');
        }
      });

  });