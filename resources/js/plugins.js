/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
    $('[data-method]').append(function () {
        if (!$(this).find('form').length > 0) {
            return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" +
                "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" +
                "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" +
                '</form>\n';
        } else { return '' }
    })
        .attr('href', '#')
        .attr('style', 'cursor:pointer;')
        .attr('onclick', '$(this).find("form").submit();');
}

/**
 * Place any jQuery/helper plugins in here.
 */
$(function () {
    /**
     * Add the data-method="delete" forms to all delete links
     */
    addDeleteForms();

    /**
     * Disable all submit buttons once clicked
     */
    $('form').submit(function () {
        $(this).find('input[type="submit"]').attr('disabled', true);
        $(this).find('button[type="submit"]').attr('disabled', true);
        return true;
    });

    /**
     * Generic confirm form delete using Sweet Alert
     */
    $('body').on('submit', 'form[name=delete_item]', function (e) {
        e.preventDefault();

        const form = this;
        const link = $('a[data-method="delete"]');
        const cancel = (link.attr('data-trans-button-cancel')) ? link.attr('data-trans-button-cancel') : 'Cancel';
        const confirm = (link.attr('data-trans-button-confirm')) ? link.attr('data-trans-button-confirm') : 'Yes, delete';
        const title = (link.attr('data-trans-title')) ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';

        Swal.fire({
            title: title,
            showCancelButton: true,
            confirmButtonText: confirm,
            cancelButtonText: cancel,
            type: 'warning'
        }).then((result) => {
            result.value && form.submit();
        });
    }).on('click', 'a[name=confirm_item]', function (e) {
        /**
         * Generic 'are you sure' confirm box
         */
        e.preventDefault();

        const link = $(this);
        const title = (link.attr('data-trans-title')) ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
        const cancel = (link.attr('data-trans-button-cancel')) ? link.attr('data-trans-button-cancel') : 'Cancel';
        const confirm = (link.attr('data-trans-button-confirm')) ? link.attr('data-trans-button-confirm') : 'Continue';

        Swal.fire({
            title: title,
            showCancelButton: true,
            confirmButtonText: confirm,
            cancelButtonText: cancel,
            type: 'info'
        }).then((result) => {
            result.value && window.location.assign(link.attr('href'));
        });
    });


 /* hide loader if 3sec or more time */
 setTimeout(function () {
    $(".loader-logo").fadeOut();
}, 3000);

/* left sidebar open */
$('#left-menu').on('click', function () {
    $('body').toggleClass('sidebar-left-close');
});
$('.sidebar-left + div.backdrop').on('click', function () {
    $('body').addClass('sidebar-left-close');
});






    /* left sidebar accordion menu */
    /* url  navigation active */
    var url = window.location;

    function menuitems() {
        var element = $('.sidebar .nav .nav-item a').filter(function () {
            return this.href == url;
            console.log(url)
        }).addClass('active').parent("li").addClass('active').closest('.nav').slideDown().addClass('in').prev().addClass('active').parent().addClass('show').closest('.nav').slideDown().addClass('in').parent().addClass('show');
    }
    menuitems();

    $('.sidebar .nav .nav-item .dropdwown-toggle').on('click', function () {
        if ($(this).hasClass('active') != true) {
            $('.sidebar .nav .nav-item .dropdwown-toggle').removeClass('active').next().slideUp();
            $(this).addClass('active').next().slideDown();
        } else {
            $(this).removeClass('active').next().slideUp();
        }
    });

   



    /* sidebar hide below 1100px resolution  */
    if ($(window).width() <= 1100) {
        $('body').addClass('sidebar-left-close');
    }


    $(window).on('load', function () {
        /* hide loader  */
        $('.loader').hide();
        $('.animatejack').addClass('jackInTheBox');
        $('.wrapper').css('padding-bottom', $('body > footer').outerHeight() );
        $('body > footer').css('margin-top', -( $('body > footer').outerHeight() ));
    });











});




    // Jquery Dependency

/* $("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
}); */
$("input[data-type='currency']").on({
    change: function() {
      formatCurrency($(this));
    },
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    } 
});
var count = 0;

$(".digit").click(function() {

	  var num= $(this).attr('data-number');
	  $("#currency-field").val(function() {
      
      return this.value + num;
    });
     formatCurrency($("#currency-field"));
    
	});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);

  console.log(input_val);

  /* var modal = document.querySelector('#test');
  modal.innerHTML = input_val; 
 
  */
document.getElementById("payment-amount").innerHTML = input_val.replace(/[$]/,"");
document.getElementById("sending-amount").innerHTML = input_val.replace(/[$]/,"");


}


(function($) {
	$(document).on("click", ".dropdown-menu.show a.dropdown-item", function() {
    var text = $(this).find('.funding-button-text').html();
    $('.funding-button').text(text);
		console.log(text);
	});
})(jQuery);


$(function() {

    if($('#payment-method').text() == "Select") {
        $('#payment-method').text('Please Select A Payment Option');
    } else if($('#payment-method').text() == 'Cash Balance') {
        $('#payment-method').attr('data-paymentMethodType', 'Balance');
    }
})