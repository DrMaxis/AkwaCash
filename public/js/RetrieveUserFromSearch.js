(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/RetrieveUserFromSearch"],{

/***/ "./resources/js/frontend/ajax/RetrieveUserFromSearch.js":
/*!**************************************************************!*\
  !*** ./resources/js/frontend/ajax/RetrieveUserFromSearch.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var input = $("#livesearch-send");
var baseCurrency = $("#livesearch-send").attr("data-baseCurrency");
input.change(function () {
  var value = input.val();
  console.log(value);
  $.ajax({
    method: "GET",
    url: getUserUrl,
    data: {
      username: value
    },
    success: function success(e) {}
  }).done(function (w) {
    $("#send-recipient-name").text(w.full_name);
    $("#recipient-phone-number").attr('data-recipientPhoneNumber', w.phone_number);
    $(".recipient-avi").attr("src", w.avatar_location);
    $("#sending-currency").text(w.default_currency);
    var paymentAmount = $('#payment-amount').text();
    paymentAmount = paymentAmount.replace(/\,/g, '');
    paymentAmount = parseFloat(paymentAmount).toFixed(2);
    var factorCurrency = w.default_currency;
    console.log(paymentAmount, baseCurrency, factorCurrency);
    determineConfluece(paymentAmount, baseCurrency, factorCurrency);

    function determineConfluece(paymentAmount, baseCurrency, factorCurrency) {
      $.ajax({
        method: "GET",
        url: convertCurrencyUrl,
        data: {
          paymentAmount: paymentAmount,
          baseCurrency: baseCurrency,
          factorCurrency: factorCurrency
        },
        success: function success(e) {
          console.log(e);
          $('#sending-amount').text(parseFloat(e).toFixed(2));
        }
      });
    }
  });
  $(".recipient-avi").attr("src", "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028.jpg?s=80&d=mm&r=g");
});

/***/ }),

/***/ 3:
/*!********************************************************************!*\
  !*** multi ./resources/js/frontend/ajax/RetrieveUserFromSearch.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\frontend\ajax\RetrieveUserFromSearch.js */"./resources/js/frontend/ajax/RetrieveUserFromSearch.js");


/***/ })

},[[3,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9SZXRyaWV2ZVVzZXJGcm9tU2VhcmNoLmpzIl0sIm5hbWVzIjpbImlucHV0IiwiJCIsImJhc2VDdXJyZW5jeSIsImF0dHIiLCJjaGFuZ2UiLCJ2YWx1ZSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZ2V0VXNlclVybCIsImRhdGEiLCJ1c2VybmFtZSIsInN1Y2Nlc3MiLCJlIiwiZG9uZSIsInciLCJ0ZXh0IiwiZnVsbF9uYW1lIiwicGhvbmVfbnVtYmVyIiwiYXZhdGFyX2xvY2F0aW9uIiwiZGVmYXVsdF9jdXJyZW5jeSIsInBheW1lbnRBbW91bnQiLCJyZXBsYWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmYWN0b3JDdXJyZW5jeSIsImRldGVybWluZUNvbmZsdWVjZSIsImNvbnZlcnRDdXJyZW5jeVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHQyxDQUFDLENBQUMsa0JBQUQsQ0FBYjtBQUNBLElBQUlDLFlBQVksR0FBR0QsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JFLElBQXRCLENBQTJCLG1CQUEzQixDQUFuQjtBQUNBSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxZQUFXO0FBQ3BCLE1BQUlDLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxHQUFOLEVBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUosR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDSEMsVUFBTSxFQUFFLEtBREw7QUFFSEMsT0FBRyxFQUFFQyxVQUZGO0FBR0hDLFFBQUksRUFBRTtBQUFFQyxjQUFRLEVBQUVUO0FBQVosS0FISDtBQUlIVSxXQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWSxDQUFFO0FBSnBCLEdBQVAsRUFLR0MsSUFMSCxDQUtRLFVBQVNDLENBQVQsRUFBWTtBQUNoQmpCLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCa0IsSUFBMUIsQ0FBK0JELENBQUMsQ0FBQ0UsU0FBakM7QUFDQW5CLEtBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRSxJQUE3QixDQUFrQywyQkFBbEMsRUFBK0RlLENBQUMsQ0FBQ0csWUFBakU7QUFFQXBCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxJQUFwQixDQUF5QixLQUF6QixFQUFnQ2UsQ0FBQyxDQUFDSSxlQUFsQztBQUNBckIsS0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJrQixJQUF2QixDQUE0QkQsQ0FBQyxDQUFDSyxnQkFBOUI7QUFFQSxRQUFJQyxhQUFhLEdBQUd2QixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmtCLElBQXJCLEVBQXBCO0FBQ0FLLGlCQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUFoQjtBQUNBRCxpQkFBYSxHQUFHRSxVQUFVLENBQUNGLGFBQUQsQ0FBVixDQUEwQkcsT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FBaEI7QUFDQSxRQUFJQyxjQUFjLEdBQUdWLENBQUMsQ0FBQ0ssZ0JBQXZCO0FBRUFoQixXQUFPLENBQUNDLEdBQVIsQ0FDSWdCLGFBREosRUFDbUJ0QixZQURuQixFQUNpQzBCLGNBRGpDO0FBR0FDLHNCQUFrQixDQUFDTCxhQUFELEVBQWdCdEIsWUFBaEIsRUFBOEIwQixjQUE5QixDQUFsQjs7QUFFQSxhQUFTQyxrQkFBVCxDQUE0QkwsYUFBNUIsRUFBMkN0QixZQUEzQyxFQUF5RDBCLGNBQXpELEVBQXlFO0FBQ3pFM0IsT0FBQyxDQUFDUSxJQUFGLENBQU87QUFDSEMsY0FBTSxFQUFFLEtBREw7QUFFSEMsV0FBRyxFQUFFbUIsa0JBRkY7QUFHSGpCLFlBQUksRUFBRTtBQUNGVyx1QkFBYSxFQUFFQSxhQURiO0FBRUZ0QixzQkFBWSxFQUFFQSxZQUZaO0FBR0YwQix3QkFBYyxFQUFFQTtBQUhkLFNBSEg7QUFRSGIsZUFBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVk7QUFDakJULGlCQUFPLENBQUNDLEdBQVIsQ0FBWVEsQ0FBWjtBQUNBZixXQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmtCLElBQXJCLENBQTBCTyxVQUFVLENBQUNWLENBQUQsQ0FBVixDQUFjVyxPQUFkLENBQXNCLENBQXRCLENBQTFCO0FBQ0g7QUFYRSxPQUFQO0FBYUg7QUFDQSxHQXJDRDtBQXlDQTFCLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxJQUFwQixDQUNJLEtBREosRUFFSSxvRkFGSjtBQUlILENBaERELEUiLCJmaWxlIjoiL2pzL1JldHJpZXZlVXNlckZyb21TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5wdXQgPSAkKFwiI2xpdmVzZWFyY2gtc2VuZFwiKTtcclxudmFyIGJhc2VDdXJyZW5jeSA9ICQoXCIjbGl2ZXNlYXJjaC1zZW5kXCIpLmF0dHIoXCJkYXRhLWJhc2VDdXJyZW5jeVwiKTtcclxuaW5wdXQuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHZhbHVlID0gaW5wdXQudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGdldFVzZXJVcmwsXHJcbiAgICAgICAgZGF0YTogeyB1c2VybmFtZTogdmFsdWUgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihlKSB7fVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbih3KSB7XHJcbiAgICAgICAgJChcIiNzZW5kLXJlY2lwaWVudC1uYW1lXCIpLnRleHQody5mdWxsX25hbWUpO1xyXG4gICAgICAgICQoXCIjcmVjaXBpZW50LXBob25lLW51bWJlclwiKS5hdHRyKCdkYXRhLXJlY2lwaWVudFBob25lTnVtYmVyJywgdy5waG9uZV9udW1iZXIpO1xyXG5cclxuICAgICAgICAkKFwiLnJlY2lwaWVudC1hdmlcIikuYXR0cihcInNyY1wiLCB3LmF2YXRhcl9sb2NhdGlvbik7XHJcbiAgICAgICAgJChcIiNzZW5kaW5nLWN1cnJlbmN5XCIpLnRleHQody5kZWZhdWx0X2N1cnJlbmN5KTtcclxuXHJcbiAgICAgICAgdmFyIHBheW1lbnRBbW91bnQgPSAkKCcjcGF5bWVudC1hbW91bnQnKS50ZXh0KCk7XHJcbiAgICAgICAgcGF5bWVudEFtb3VudCA9IHBheW1lbnRBbW91bnQucmVwbGFjZSgvXFwsL2csJycpO1xyXG4gICAgICAgIHBheW1lbnRBbW91bnQgPSBwYXJzZUZsb2F0KHBheW1lbnRBbW91bnQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgdmFyIGZhY3RvckN1cnJlbmN5ID0gdy5kZWZhdWx0X2N1cnJlbmN5O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgcGF5bWVudEFtb3VudCwgYmFzZUN1cnJlbmN5LCBmYWN0b3JDdXJyZW5jeVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGV0ZXJtaW5lQ29uZmx1ZWNlKHBheW1lbnRBbW91bnQsIGJhc2VDdXJyZW5jeSwgZmFjdG9yQ3VycmVuY3kpO1xyXG4gICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lQ29uZmx1ZWNlKHBheW1lbnRBbW91bnQsIGJhc2VDdXJyZW5jeSwgZmFjdG9yQ3VycmVuY3kpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogY29udmVydEN1cnJlbmN5VXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50QW1vdW50OiBwYXltZW50QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYmFzZUN1cnJlbmN5OiBiYXNlQ3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICBmYWN0b3JDdXJyZW5jeTogZmFjdG9yQ3VycmVuY3lcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VuZGluZy1hbW91bnQnKS50ZXh0KHBhcnNlRmxvYXQoZSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgICQoXCIucmVjaXBpZW50LWF2aVwiKS5hdHRyKFxyXG4gICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzY0ZTFiOGQzNGY0MjVkMTllMWVlMmVhNzIzNmQzMDI4LmpwZz9zPTgwJmQ9bW0mcj1nXCJcclxuICAgICk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9