(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/MobileMoneyTransaction"],{

/***/ "./resources/js/frontend/ajax/MobileMoneyTransaction.js":
/*!**************************************************************!*\
  !*** ./resources/js/frontend/ajax/MobileMoneyTransaction.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var amountElement = $('#currency-input');
  var recipiantElement = $('.send-recipiant-name');
  var currencyElement = $('.send-currency-button');
  var sendButton = $('.send-money');
  var amount = 0.00;
  var recipiant = '';
  var currency = '';
  var ttype = amountElement.attr('data-transactionType');
  var transaction_type = '';
  sendButton.click(function (event) {
    event.preventDefault();
    var dataAmountInput = $('<input>').attr({
      type: 'hidden',
      currency: currencyElement.text(),
      transaction_type: ttype,
      id: 'sendMoneyAmountInput',
      name: 'amount',
      value: amountElement.val()
    }).appendTo(amountElement);
    var dataRecipiantInput = $('<input>').attr({
      type: 'hidden',
      id: 'sendMoneyRecipiantInput',
      name: 'recipiant',
      value: recipiantElement.text()
    }).appendTo(recipiantElement);
    transaction_type = dataAmountInput.attr('transaction_type');
    amount = dataAmountInput.attr('value');
    recipiant = dataRecipiantInput.attr('value');
    currency = dataAmountInput.attr('currency');
    console.log('show loader here');
    $('.transaction-loader').removeClass('off');
    $('.sendmoney').remove();
    $.ajax({
      method: 'POST',
      url: sendMoneyUrl,
      data: {
        amount: parseFloat(amount).toFixed(2),
        recipiant: recipiant,
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
      $('.modal.fade.show #').addClass('off');
      console.log(w);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9Nb2JpbGVNb25leVRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbImFtb3VudEVsZW1lbnQiLCIkIiwicmVjaXBpYW50RWxlbWVudCIsImN1cnJlbmN5RWxlbWVudCIsInNlbmRCdXR0b24iLCJhbW91bnQiLCJyZWNpcGlhbnQiLCJjdXJyZW5jeSIsInR0eXBlIiwiYXR0ciIsInRyYW5zYWN0aW9uX3R5cGUiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhQW1vdW50SW5wdXQiLCJ0eXBlIiwidGV4dCIsImlkIiwibmFtZSIsInZhbHVlIiwidmFsIiwiYXBwZW5kVG8iLCJkYXRhUmVjaXBpYW50SW5wdXQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJhamF4IiwibWV0aG9kIiwidXJsIiwic2VuZE1vbmV5VXJsIiwiZGF0YSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiX3Rva2VuIiwidG9rZW4iLCJzdWNjZXNzIiwiZSIsImFkZENsYXNzIiwiZG9uZSIsInciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLENBQUMsWUFBWTtBQUViLE1BQU1BLGFBQWEsR0FBR0MsQ0FBQyxDQUFDLGlCQUFELENBQXZCO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUdELENBQUMsQ0FBQyxzQkFBRCxDQUF4QjtBQUNBLE1BQUlFLGVBQWUsR0FBR0YsQ0FBQyxDQUFDLHVCQUFELENBQXZCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHSCxDQUFDLENBQUMsYUFBRCxDQUFwQjtBQUNBLE1BQUlJLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUdSLGFBQWEsQ0FBQ1MsSUFBZCxDQUFtQixzQkFBbkIsQ0FBWjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEVBQXZCO0FBR0FOLFlBQVUsQ0FBQ08sS0FBWCxDQUFpQixVQUFTQyxLQUFULEVBQWdCO0FBSWpDQSxTQUFLLENBQUNDLGNBQU47QUFDQSxRQUFJQyxlQUFlLEdBQUdiLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVEsSUFBYixDQUFrQjtBQUFDTSxVQUFJLEVBQUUsUUFBUDtBQUFpQlIsY0FBUSxFQUFFSixlQUFlLENBQUNhLElBQWhCLEVBQTNCO0FBQW1ETixzQkFBZ0IsRUFBRUYsS0FBckU7QUFBNEVTLFFBQUUsRUFBRSxzQkFBaEY7QUFBd0dDLFVBQUksRUFBRSxRQUE5RztBQUF3SEMsV0FBSyxFQUFFbkIsYUFBYSxDQUFDb0IsR0FBZDtBQUEvSCxLQUFsQixFQUF1S0MsUUFBdkssQ0FBZ0xyQixhQUFoTCxDQUF0QjtBQUNBLFFBQUlzQixrQkFBa0IsR0FBR3JCLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVEsSUFBYixDQUFrQjtBQUFDTSxVQUFJLEVBQUUsUUFBUDtBQUFpQkUsUUFBRSxFQUFFLHlCQUFyQjtBQUFnREMsVUFBSSxFQUFFLFdBQXREO0FBQW1FQyxXQUFLLEVBQUVqQixnQkFBZ0IsQ0FBQ2MsSUFBakI7QUFBMUUsS0FBbEIsRUFBc0hLLFFBQXRILENBQStIbkIsZ0JBQS9ILENBQXpCO0FBQ0FRLG9CQUFnQixHQUFJSSxlQUFlLENBQUNMLElBQWhCLENBQXFCLGtCQUFyQixDQUFwQjtBQUNBSixVQUFNLEdBQUdTLGVBQWUsQ0FBQ0wsSUFBaEIsQ0FBcUIsT0FBckIsQ0FBVDtBQUNBSCxhQUFTLEdBQUdnQixrQkFBa0IsQ0FBQ2IsSUFBbkIsQ0FBd0IsT0FBeEIsQ0FBWjtBQUNBRixZQUFRLEdBQUdPLGVBQWUsQ0FBQ0wsSUFBaEIsQ0FBcUIsVUFBckIsQ0FBWDtBQUVBYyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUVBdkIsS0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ3QixXQUF6QixDQUFxQyxLQUFyQztBQUNBeEIsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLE1BQWhCO0FBQ0F6QixLQUFDLENBQUMwQixJQUFGLENBQU87QUFDTEMsWUFBTSxFQUFFLE1BREg7QUFFTEMsU0FBRyxFQUFFQyxZQUZBO0FBR0xDLFVBQUksRUFBRTtBQUFDMUIsY0FBTSxFQUFFMkIsVUFBVSxDQUFDM0IsTUFBRCxDQUFWLENBQW1CNEIsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBVDtBQUF3QzNCLGlCQUFTLEVBQUVBLFNBQW5EO0FBQThEQyxnQkFBUSxFQUFDQSxRQUF2RTtBQUFpRkcsd0JBQWdCLEVBQUVBLGdCQUFuRztBQUFxSHdCLGNBQU0sRUFBRUM7QUFBN0gsT0FIRDtBQUlMQyxhQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWTtBQUNYZCxlQUFPLENBQUNDLEdBQVIsQ0FBWWEsQ0FBWjtBQUNMcEMsU0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJxQyxRQUF6QixDQUFrQyxLQUFsQztBQUNBckMsU0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJ3QixXQUEzQixDQUF1QyxLQUF2QztBQUNOO0FBUk0sS0FBUCxFQVNPYyxJQVRQLENBU1ksVUFBU0MsQ0FBVCxFQUFZO0FBQ2hCakIsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRHZCLE9BQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCcUMsUUFBM0IsQ0FBb0MsS0FBcEM7QUFDQXJDLE9BQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCcUMsUUFBeEIsQ0FBaUMsS0FBakM7QUFDQ2YsYUFBTyxDQUFDQyxHQUFSLENBQVlnQixDQUFaO0FBQ0gsS0FkTDtBQWdCQyxHQWhDRDtBQWlDQyxDQTlDRCxJIiwiZmlsZSI6Ii9qcy9Nb2JpbGVNb25leVRyYW5zYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuY29uc3QgYW1vdW50RWxlbWVudCA9ICQoJyNjdXJyZW5jeS1pbnB1dCcpO1xyXG52YXIgcmVjaXBpYW50RWxlbWVudCA9ICQoJy5zZW5kLXJlY2lwaWFudC1uYW1lJyk7XHJcbnZhciBjdXJyZW5jeUVsZW1lbnQgPSAkKCcuc2VuZC1jdXJyZW5jeS1idXR0b24nKTtcclxuY29uc3Qgc2VuZEJ1dHRvbiA9ICQoJy5zZW5kLW1vbmV5Jyk7XHJcbnZhciBhbW91bnQgPSAwLjAwO1xyXG52YXIgcmVjaXBpYW50ID0gJyc7XHJcbnZhciBjdXJyZW5jeSA9ICcnO1xyXG52YXIgdHR5cGUgPSBhbW91bnRFbGVtZW50LmF0dHIoJ2RhdGEtdHJhbnNhY3Rpb25UeXBlJyk7XHJcbnZhciB0cmFuc2FjdGlvbl90eXBlID0gJyc7XHJcblxyXG5cclxuc2VuZEJ1dHRvbi5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHJcblxyXG5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG52YXIgZGF0YUFtb3VudElucHV0ID0gJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdoaWRkZW4nLCBjdXJyZW5jeTogY3VycmVuY3lFbGVtZW50LnRleHQoKSwgdHJhbnNhY3Rpb25fdHlwZTogdHR5cGUsIGlkOiAnc2VuZE1vbmV5QW1vdW50SW5wdXQnLCBuYW1lOiAnYW1vdW50JywgdmFsdWU6IGFtb3VudEVsZW1lbnQudmFsKCl9KS5hcHBlbmRUbyhhbW91bnRFbGVtZW50KTtcclxudmFyIGRhdGFSZWNpcGlhbnRJbnB1dCA9ICQoJzxpbnB1dD4nKS5hdHRyKHt0eXBlOiAnaGlkZGVuJywgaWQ6ICdzZW5kTW9uZXlSZWNpcGlhbnRJbnB1dCcsIG5hbWU6ICdyZWNpcGlhbnQnLCB2YWx1ZTogcmVjaXBpYW50RWxlbWVudC50ZXh0KCl9KS5hcHBlbmRUbyhyZWNpcGlhbnRFbGVtZW50KTtcclxudHJhbnNhY3Rpb25fdHlwZSA9ICBkYXRhQW1vdW50SW5wdXQuYXR0cigndHJhbnNhY3Rpb25fdHlwZScpO1xyXG5hbW91bnQgPSBkYXRhQW1vdW50SW5wdXQuYXR0cigndmFsdWUnKTtcclxucmVjaXBpYW50ID0gZGF0YVJlY2lwaWFudElucHV0LmF0dHIoJ3ZhbHVlJyk7XHJcbmN1cnJlbmN5ID0gZGF0YUFtb3VudElucHV0LmF0dHIoJ2N1cnJlbmN5Jyk7XHJcblxyXG5jb25zb2xlLmxvZygnc2hvdyBsb2FkZXIgaGVyZScpO1xyXG5cclxuJCgnLnRyYW5zYWN0aW9uLWxvYWRlcicpLnJlbW92ZUNsYXNzKCdvZmYnKTtcclxuJCgnLnNlbmRtb25leScpLnJlbW92ZSgpO1xyXG4kLmFqYXgoe1xyXG4gIG1ldGhvZDogJ1BPU1QnLFxyXG4gIHVybDogc2VuZE1vbmV5VXJsLFxyXG4gIGRhdGE6IHthbW91bnQ6IHBhcnNlRmxvYXQoYW1vdW50KS50b0ZpeGVkKDIpLCByZWNpcGlhbnQ6IHJlY2lwaWFudCwgY3VycmVuY3k6Y3VycmVuY3ksIHRyYW5zYWN0aW9uX3R5cGU6IHRyYW5zYWN0aW9uX3R5cGUsIF90b2tlbjogdG9rZW59LFxyXG4gIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7ICAgXHJcbiAgICAgICAkKCcudHJhbnNhY3Rpb24tbG9hZGVyJykuYWRkQ2xhc3MoJ29mZicpO1xyXG4gICAgICAgJCgnLnRyYW5zYWN0aW9uLWNvbXBsZXRlJykucmVtb3ZlQ2xhc3MoJ29mZicpOyAgIFxyXG59XHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHcpIHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hpZGUgbG9hZGVyIGhlcmUnKTtcclxuICAgICAgICQoJy50cmFuc2FjdGlvbi1jb21wbGV0ZScpLmFkZENsYXNzKCdvZmYnKTtcclxuICAgICAgICQoJy5tb2RhbC5mYWRlLnNob3cgIycpLmFkZENsYXNzKCdvZmYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3KTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcbn0pKCk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9