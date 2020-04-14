
(function () {
    
const amountData = $('#sending-amount');

var currencyData = $('#sending-currency');
const sendButton = $('.send-money');
var sendMoneyContainer = $('.sendmoney-container');
var amount = 0.00;
var recipient = '';
var currency = '';



sendButton.click(function(event) {

var recipientData = document.querySelector("#send-recipient-name").innerText;
var recipientPhoneNumber = $("#recipient-phone-number").attr('data-recipientPhoneNumber');

event.preventDefault();
var ttype = $('.payment-option*[data-selected="true"]').attr('data-paymentType');
var dataAmountInput = $('<input>').attr({type: 'hidden', currency: currencyData.text(), transaction_type: ttype, id: 'sendMoneyAmountInput', name: 'amount', value: amountData.text()}).appendTo(sendMoneyContainer);
var dataRecipientInput = $('<input>').attr({type: 'hidden', id: 'sendMoneyRecipientInput', name: 'recipient', value: recipientPhoneNumber}).appendTo(sendMoneyContainer);
transaction_type =  dataAmountInput.attr('transaction_type');
amount = dataAmountInput.attr('value');
recipient = dataRecipientInput.attr('value');
currency = dataAmountInput.attr('currency');
console.log(transaction_type, amount, recipient,currency);
console.log('show loader here');

$('.transaction-loader').removeClass('off');
$('.sendmoney').remove();
$.ajax({
  method: 'POST',
  url: sendMoneyUrl,
  data: {amount: parseFloat(amount).toFixed(2), recipient: recipient, currency:currency, transaction_type: transaction_type, _token: token},
  success: function(e) {
            console.log(e);   
       $('.transaction-loader').addClass('off');
       $('.transaction-complete').removeClass('off');   
}
    }).done(function(w) { 
        console.log('hide loader here');
       $('.transaction-complete').addClass('off');
       $('.modal.fade.show').addClass('off');
        console.log(w);

        $.notify({
            wrapper: 'body',
            message: amount + currency + ' was successfully sent to' + recipient,
            type: 'success',
            position: 8,
            dir: 'ltr',
            autoClose: true,
            duration: 4000,
            onOpen: null,
            onClose: null
            });
    });

});
})();

