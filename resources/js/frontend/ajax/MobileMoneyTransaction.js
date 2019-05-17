
(function () {
    
const amountElement = $('#currency-input');
var recipiantElement = $('.send-recipiant-name');
var currencyElement = $('.send-currency-button');
const sendButton = $('.send-money');
var amount = 0.00;
var recipiant = '';
var currency = '';
var ttype = amountElement.attr('data-transactionType');
var transaction_type = '';


sendButton.click(function(event) {



event.preventDefault();
var dataAmountInput = $('<input>').attr({type: 'hidden', currency: currencyElement.text(), transaction_type: ttype, id: 'sendMoneyAmountInput', name: 'amount', value: amountElement.val()}).appendTo(amountElement);
var dataRecipiantInput = $('<input>').attr({type: 'hidden', id: 'sendMoneyRecipiantInput', name: 'recipiant', value: recipiantElement.text()}).appendTo(recipiantElement);
transaction_type =  dataAmountInput.attr('transaction_type');
amount = dataAmountInput.attr('value');
recipiant = dataRecipiantInput.attr('value');
currency = dataAmountInput.attr('currency');

console.log('show loader here');

$('.transaction-loader').removeClass('off');
$('.sendmoney').remove();
$.ajax({
  method: 'POST',
  url: sendMoneyUrl,
  data: {amount: parseInt(amount), recipiant: recipiant, currency:currency, transaction_type: transaction_type, _token: token},
  success: function(e) {
            console.log(e);   
       $('.transaction-loader').addClass('off');
       $('.transaction-complete').removeClass('off');   
}
    }).done(function(w) { 
        console.log('hide loader here');
       $('.transaction-complete').addClass('off');
       $('.modal.fade.show #').addClass('off');
        console.log(w);
    });

});
})();

