(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/MobileMoneyTransaction"],{

/***/ "./resources/js/frontend/ajax/MobileMoneyTransaction.js":
/*!**************************************************************!*\
  !*** ./resources/js/frontend/ajax/MobileMoneyTransaction.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var amountData = $('#sending-amount');
  var currencyData = $('#sending-currency');
  var sendButton = $('.send-money');
  var sendMoneyContainer = $('.sendmoney-container');
  var amount = 0.00;
  var recipient = '';
  var currency = '';
  sendButton.click(function (event) {
    var recipientData = document.querySelector("#send-recipient-name").innerText;
    var recipientPhoneNumber = $("#recipient-phone-number").attr('data-recipientPhoneNumber');
    event.preventDefault();
    var ttype = $('.payment-option*[data-selected="true"]').attr('data-paymentType');
    var dataAmountInput = $('<input>').attr({
      type: 'hidden',
      currency: currencyData.text(),
      transaction_type: ttype,
      id: 'sendMoneyAmountInput',
      name: 'amount',
      value: amountData.text()
    }).appendTo(sendMoneyContainer);
    var dataRecipientInput = $('<input>').attr({
      type: 'hidden',
      id: 'sendMoneyRecipientInput',
      name: 'recipient',
      value: recipientPhoneNumber
    }).appendTo(sendMoneyContainer);
    transaction_type = dataAmountInput.attr('transaction_type');
    amount = dataAmountInput.attr('value');
    recipient = dataRecipientInput.attr('value');
    currency = dataAmountInput.attr('currency');
    console.log(transaction_type, amount, recipient, currency);
    console.log('show loader here');
    $('.transaction-loader').removeClass('off');
    $('.sendmoney').remove();
    $.ajax({
      method: 'POST',
      url: sendMoneyUrl,
      data: {
        amount: parseFloat(amount).toFixed(2),
        recipient: recipient,
        currency: currency,
        transaction_type: transaction_type,
        _token: token
      },
      success: function success(e) {
        console.log(e);
        $('.transaction-loader').addClass('off');
        $('.transaction-complete').removeClass('off');
      }
    }).done(function (w) {
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

/***/ }),

/***/ 1:
/*!********************************************************************!*\
  !*** multi ./resources/js/frontend/ajax/MobileMoneyTransaction.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\frontend\ajax\MobileMoneyTransaction.js */"./resources/js/frontend/ajax/MobileMoneyTransaction.js");


/***/ })

},[[1,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9Nb2JpbGVNb25leVRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbImFtb3VudERhdGEiLCIkIiwiY3VycmVuY3lEYXRhIiwic2VuZEJ1dHRvbiIsInNlbmRNb25leUNvbnRhaW5lciIsImFtb3VudCIsInJlY2lwaWVudCIsImN1cnJlbmN5IiwiY2xpY2siLCJldmVudCIsInJlY2lwaWVudERhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJyZWNpcGllbnRQaG9uZU51bWJlciIsImF0dHIiLCJwcmV2ZW50RGVmYXVsdCIsInR0eXBlIiwiZGF0YUFtb3VudElucHV0IiwidHlwZSIsInRleHQiLCJ0cmFuc2FjdGlvbl90eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJhcHBlbmRUbyIsImRhdGFSZWNpcGllbnRJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzZW5kTW9uZXlVcmwiLCJkYXRhIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJfdG9rZW4iLCJ0b2tlbiIsInN1Y2Nlc3MiLCJlIiwiYWRkQ2xhc3MiLCJkb25lIiwidyIsIm5vdGlmeSIsIndyYXBwZXIiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJkaXIiLCJhdXRvQ2xvc2UiLCJkdXJhdGlvbiIsIm9uT3BlbiIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLENBQUMsWUFBWTtBQUViLE1BQU1BLFVBQVUsR0FBR0MsQ0FBQyxDQUFDLGlCQUFELENBQXBCO0FBRUEsTUFBSUMsWUFBWSxHQUFHRCxDQUFDLENBQUMsbUJBQUQsQ0FBcEI7QUFDQSxNQUFNRSxVQUFVLEdBQUdGLENBQUMsQ0FBQyxhQUFELENBQXBCO0FBQ0EsTUFBSUcsa0JBQWtCLEdBQUdILENBQUMsQ0FBQyxzQkFBRCxDQUExQjtBQUNBLE1BQUlJ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UUFBM0IsQ0FBb0MsS0FBcEM7QUFDQXpDLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCeUMsUUFBdEIsQ0FBK0IsS0FBL0I7QUFDQ2YsYUFBTyxDQUFDQyxHQUFSLENBQVlnQixDQUFaO0FBRUEzQyxPQUFDLENBQUM0QyxNQUFGLENBQVM7QUFDTEMsZUFBTyxFQUFFLE1BREo7QUFFTEMsZUFBTyxFQUFFMUMsTUFBTSxHQUFHRSxRQUFULEdBQW9CLDJCQUFwQixHQUFrREQsU0FGdEQ7QUFHTGEsWUFBSSxFQUFFLFNBSEQ7QUFJTDZCLGdCQUFRLEVBQUUsQ0FKTDtBQUtMQyxXQUFHLEVBQUUsS0FMQTtBQU1MQyxpQkFBUyxFQUFFLElBTk47QUFPTEMsZ0JBQVEsRUFBRSxJQVBMO0FBUUxDLGNBQU0sRUFBRSxJQVJIO0FBU0xDLGVBQU8sRUFBRTtBQVRKLE9BQVQ7QUFXSCxLQTFCTDtBQTRCQyxHQTlDRDtBQStDQyxDQTVERCxJIiwiZmlsZSI6Ii9qcy9Nb2JpbGVNb25leVRyYW5zYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuY29uc3QgYW1vdW50RGF0YSA9ICQoJyNzZW5kaW5nLWFtb3VudCcpO1xyXG5cclxudmFyIGN1cnJlbmN5RGF0YSA9ICQoJyNzZW5kaW5nLWN1cnJlbmN5Jyk7XHJcbmNvbnN0IHNlbmRCdXR0b24gPSAkKCcuc2VuZC1tb25leScpO1xyXG52YXIgc2VuZE1vbmV5Q29udGFpbmVyID0gJCgnLnNlbmRtb25leS1jb250YWluZXInKTtcclxudmFyIGFtb3VudCA9IDAuMDA7XHJcbnZhciByZWNpcGllbnQgPSAnJztcclxudmFyIGN1cnJlbmN5ID0gJyc7XHJcblxyXG5cclxuXHJcbnNlbmRCdXR0b24uY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbnZhciByZWNpcGllbnREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZW5kLXJlY2lwaWVudC1uYW1lXCIpLmlubmVyVGV4dDtcclxudmFyIHJlY2lwaWVudFBob25lTnVtYmVyID0gJChcIiNyZWNpcGllbnQtcGhvbmUtbnVtYmVyXCIpLmF0dHIoJ2RhdGEtcmVjaXBpZW50UGhvbmVOdW1iZXInKTtcclxuXHJcbmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbnZhciB0dHlwZSA9ICQoJy5wYXltZW50LW9wdGlvbipbZGF0YS1zZWxlY3RlZD1cInRydWVcIl0nKS5hdHRyKCdkYXRhLXBheW1lbnRUeXBlJyk7XHJcbnZhciBkYXRhQW1vdW50SW5wdXQgPSAkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2hpZGRlbicsIGN1cnJlbmN5OiBjdXJyZW5jeURhdGEudGV4dCgpLCB0cmFuc2FjdGlvbl90eXBlOiB0dHlwZSwgaWQ6ICdzZW5kTW9uZXlBbW91bnRJbnB1dCcsIG5hbWU6ICdhbW91bnQnLCB2YWx1ZTogYW1vdW50RGF0YS50ZXh0KCl9KS5hcHBlbmRUbyhzZW5kTW9uZXlDb250YWluZXIpO1xyXG52YXIgZGF0YVJlY2lwaWVudElucHV0ID0gJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdoaWRkZW4nLCBpZDogJ3NlbmRNb25leVJlY2lwaWVudElucHV0JywgbmFtZTogJ3JlY2lwaWVudCcsIHZhbHVlOiByZWNpcGllbnRQaG9uZU51bWJlcn0pLmFwcGVuZFRvKHNlbmRNb25leUNvbnRhaW5lcik7XHJcbnRyYW5zYWN0aW9uX3R5cGUgPSAgZGF0YUFtb3VudElucHV0LmF0dHIoJ3RyYW5zYWN0aW9uX3R5cGUnKTtcclxuYW1vdW50ID0gZGF0YUFtb3VudElucHV0LmF0dHIoJ3ZhbHVlJyk7XHJcbnJlY2lwaWVudCA9IGRhdGFSZWNpcGllbnRJbnB1dC5hdHRyKCd2YWx1ZScpO1xyXG5jdXJyZW5jeSA9IGRhdGFBbW91bnRJbnB1dC5hdHRyKCdjdXJyZW5jeScpO1xyXG5jb25zb2xlLmxvZyh0cmFuc2FjdGlvbl90eXBlLCBhbW91bnQsIHJlY2lwaWVudCxjdXJyZW5jeSk7XHJcbmNvbnNvbGUubG9nKCdzaG93IGxvYWRlciBoZXJlJyk7XHJcblxyXG4kKCcudHJhbnNhY3Rpb24tbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ29mZicpO1xyXG4kKCcuc2VuZG1vbmV5JykucmVtb3ZlKCk7XHJcbiQuYWpheCh7XHJcbiAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgdXJsOiBzZW5kTW9uZXlVcmwsXHJcbiAgZGF0YToge2Ftb3VudDogcGFyc2VGbG9hdChhbW91bnQpLnRvRml4ZWQoMiksIHJlY2lwaWVudDogcmVjaXBpZW50LCBjdXJyZW5jeTpjdXJyZW5jeSwgdHJhbnNhY3Rpb25fdHlwZTogdHJhbnNhY3Rpb25fdHlwZSwgX3Rva2VuOiB0b2tlbn0sXHJcbiAgc3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTsgICBcclxuICAgICAgICQoJy50cmFuc2FjdGlvbi1sb2FkZXInKS5hZGRDbGFzcygnb2ZmJyk7XHJcbiAgICAgICAkKCcudHJhbnNhY3Rpb24tY29tcGxldGUnKS5yZW1vdmVDbGFzcygnb2ZmJyk7ICAgXHJcbn1cclxuICAgIH0pLmRvbmUoZnVuY3Rpb24odykgeyBcclxuICAgICAgICBjb25zb2xlLmxvZygnaGlkZSBsb2FkZXIgaGVyZScpO1xyXG4gICAgICAgJCgnLnRyYW5zYWN0aW9uLWNvbXBsZXRlJykuYWRkQ2xhc3MoJ29mZicpO1xyXG4gICAgICAgJCgnLm1vZGFsLmZhZGUuc2hvdycpLmFkZENsYXNzKCdvZmYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3KTtcclxuXHJcbiAgICAgICAgJC5ub3RpZnkoe1xyXG4gICAgICAgICAgICB3cmFwcGVyOiAnYm9keScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGFtb3VudCArIGN1cnJlbmN5ICsgJyB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQgdG8nICsgcmVjaXBpZW50LFxyXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiA4LFxyXG4gICAgICAgICAgICBkaXI6ICdsdHInLFxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICAgICAgICBvbk9wZW46IG51bGwsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG59KSgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==