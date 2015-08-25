// var domains = ['hotmail.com', 'gmail.com', 'aol.com'];
//     var topLevelDomains = ["com", "net", "org"];

//     $('#email').on('blur', function(event) {
//       console.log("event ", event);
//       console.log("this ", $(this));
//       $(this).mailcheck({
//         domains: domains,                       // optional
//         topLevelDomains: topLevelDomains,       // optional
//         suggested: function(element, suggestion) {
//           // callback code
//           console.log("suggestion ", suggestion.full);
//           $('#suggestion').html("Did you mean <b><i>" + suggestion.full + "</b></i>?");
//         },
//         empty: function(element) {
//           // callback code
//           $('#suggestion').html('No Suggestions :(');
//         }
//       });
//     });



    $("#email").validEmail({on:"blur", success:function(){
      $(this).removeClass("error");
      $('.email-validation p').empty();
    }, failure:function(){
      // console.log('2');
      $(this).addClass("error");
      $('.email-validation p').text('Invalid Email Id');
    }});