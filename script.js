let isWorkSelected = false;
let isSchoolSelected = false;
let isAppointmentSelected = false;
let isOtherSelected = false;
let scheduleItems = [];
let workItem = {title:"null", hour:0, minute:0};
let schoolItem = {title:"null", hour:0, minute:0};
let appointmentItem = {title:"null", hour:0, minute:0};
let otherItem = {title:"null", hour:0, minute:0};


$(function(){

    $("#workSelectButton").on("click", function(){
        if($('#workSelectCard').hasClass('shadow')) {
            isWorkSelected = false;
            $('#workSelectCard').removeClass('shadow');
            $('#workSelectCard').removeClass('bg-light');
        }
        else {
            isWorkSelected = true;
            $('#workSelectCard').addClass('shadow');
            $('#workSelectCard').addClass('bg-light');
        }
      });

      $("#schoolSelectButton").on("click", function(){
        if($('#schoolSelectCard').hasClass('shadow')) {
            isSchoolSelected = false;
            $('#schoolSelectCard').removeClass('shadow');
            $('#schoolSelectCard').removeClass('bg-light');
        }
        else {
            isSchoolSelected = true;
            $('#schoolSelectCard').addClass('shadow');
            $('#schoolSelectCard').addClass('bg-light');
        }
      });

      $("#appointmentSelectButton").on("click", function(){
        if($('#appointmentSelectCard').hasClass('shadow')) {
            isAppointmentSelected = false;
            $('#appointmentSelectCard').removeClass('shadow');
            $('#appointmentSelectCard').removeClass('bg-light');
        }
        else {
            isAppointmentSelected = true;
            $('#appointmentSelectCard').addClass('shadow');
            $('#appointmentSelectCard').addClass('bg-light');
        }
      });

      $("#otherSelectButton").on("click", function(){
        if($('#otherSelectCard').hasClass('shadow')) {
            isOtherSelected = false;
            $('#otherSelectCard').removeClass('shadow');
            $('#otherSelectCard').removeClass('bg-light');
        }
        else {
            isOtherSelected = true;
            $('#otherSelectCard').addClass('shadow');
            $('#otherSelectCard').addClass('bg-light');
        }
      });

      $("#step1continueButton").on("click", function(){
        if(isWorkSelected = true) {
        }
      });

});

