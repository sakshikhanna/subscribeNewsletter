  $("#email").validEmail({on:"blur", success:function(){
      $(this).removeClass("error");
      $('.email-validation p').empty();
    }, failure:function(){
      // console.log('2');
      $(this).addClass("error");
      $('.email-validation p').text('Invalid Email Id');
      
    }});

$( ".btn-container a" ).focus(function(){
    console.log('focus');
    $( ".btn-container .subscribe-btn" ).css( "background-color", "#ffc52f" );
  });
$( ".btn-container a" ).blur(function(){
    console.log('blur');
    $( ".btn-container .subscribe-btn" ).css( "background-color", "#ffd15d" );
  });