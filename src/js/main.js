  $("#email").validEmail({on:"blur", success:function(event){
      $(this).removeClass("error");
      $('.email-validation p').empty();
    }, failure:function(){
      // console.log('2');
      $(this).addClass("error");
      $('.email-validation p').text('Invalid Email Id');
      // event.preventDefault();
      
    }});

$( ".btn-container a" ).focus(function(){
    console.log('focus');
    $( ".btn-container .subscribe-btn" ).css( "background-color", "#ffc52f" );
  });
$( ".btn-container a" ).blur(function(){
    console.log('blur');
    $( ".btn-container .subscribe-btn" ).css( "background-color", "#FFDE8D" );
  });
$(".subscribe-btn").click(function(event){
  var emailValue = $(".email-text");
  if(emailValue.val().length === 0){
     $("#email").addClass("error");
     $('.email-validation p').text('Enter Valid Email Address');
     event.preventDefault();
  }else{
    if($("#email").hasClass("error")){
      event.preventDefault();
    }      
  }
})

