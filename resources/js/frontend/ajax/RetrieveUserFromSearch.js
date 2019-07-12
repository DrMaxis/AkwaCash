
  
var input = $('#livesearch-send');
input.change(function() {
  var value = input.val();
  console.log(value);
    $.ajax ({
        method : 'GET',
        url : getUserUrl,
        data : {username: value},
         success: function(e) {
           
    } 
    }).done(function(w) { 
     $('#send-recipient-name').text(w.full_name);
          $('.recipient-avi').attr("src", w.avatar_location);
          $('#sending-currency').text(w.default_currency);

    }); 
    $('.recipient-avi').attr("src", "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028.jpg?s=80&d=mm&r=g");
  })
