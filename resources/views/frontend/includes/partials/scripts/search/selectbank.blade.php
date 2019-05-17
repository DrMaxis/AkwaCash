<script>
    // Button Dropdown
        (function($) {
            
            const getListOfBanksUrl = "{{route('frontend.user.bank.list')}}";
            $(document).on("click", ".dropdown-menu.show a.dropdown-item", function(e) {
            e.preventDefault();
            var text = $(this).find('.bank-country-button-text').html();
            $('.bank-country-button').text(text); 
            var countryButton = $('.bank-country-button');
            var country = $('.bank-country-button').text();
  
             console.log(country);
           
            $.ajax({
                type: "GET",
                url: getListOfBanksUrl,
                data: {country: country},
                success: function(json) {
                   console.log(json);
                    var $el = $(".bank-selector");

                    $el.empty(); // remove old options
                    $el.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
                    $.each(json, function(x) {
                        $el.append($("<option></option>")
                                .attr({"id": "bank"+json[x].code, "code": json[x].code, "value": json[x].name, "bank-name": json[x].name }).text(json[x].name));
                    });														
                },
            })
            });
        })(jQuery);

</script>

<script>
    $('.bank-selector').on('change', function(e) {
        $('#bankInfoDataInput').remove();
               var bankName = this.value;
               var bankOptionElement = $('.bank-selector option').filter(function(){
                   return this.value == bankName;
                   });
               console.log(bankName, bankOptionElement);
        var code = bankOptionElement.attr('code');
        var country = $('.bank-country-button').text();

switch(country) {
    case "GH": 
    var currency = 'GHS';
    break;
    case 'NG':
    var currency = 'NGN';
    break;
    case 'KE':
    var currency = 'KES';
    break;
    case 'TZ':
    var currency = 'TZS';
    break;
    case 'UG': 
    var currency = 'UGX';
    break;
    default:
     var currency = 'UGX';
}
  $('.bank-name').text(bankName);
  var dataInput = $('<input>').attr({ type: 'hidden', bank_code: code, bank_name: bankName, currency: currency, country: country, id: 'bankInfoDataInput'}).appendTo('.bank');
 $('.bank-logo').attr("src", "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028.jpg?s=80&d=mm&r=g");
});

</script>

<script>
 



 const saveBankUrl = "{{route('frontend.user.bank.save')}}"; 
const saveButton = $('#send-money')



saveButton.click(function(e) {

e.preventDefault();
var accountNumber = $('#bankaccountnumber-input').val();
var bankName = $('#bankInfoDataInput').attr('bank_name');
var bankCode = $('#bankInfoDataInput').attr('bank_code');
var bankCurrency = $('#bankInfoDataInput').attr('currency');
var bankCoutnry = $('#bankInfoDataInput').attr('country');
var token = '{{Session::token()}}';

console.log(accountNumber, bankName, bankCode);




$.ajax({

                type: "POST",
                url: saveBankUrl,
                data: {account_number: accountNumber, bank_name: bankName, bank_code: bankCode, bank_currency: bankCurrency, bank_country: bankCoutnry, _token: token },
                success: function(s) {
                    console.log(s);
                    console.log('show loader');
                },


}).done(function(w) { 
        console.log('hide loader here');
        console.log(w);
    });

});





</script>

