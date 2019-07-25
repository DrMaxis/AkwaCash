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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9SZXRyaWV2ZVVzZXJGcm9tU2VhcmNoLmpzIl0sIm5hbWVzIjpbImlucHV0IiwiJCIsImJhc2VDdXJyZW5jeSIsImF0dHIiLCJjaGFuZ2UiLCJ2YWx1ZSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZ2V0VXNlclVybCIsImRhdGEiLCJ1c2VybmFtZSIsInN1Y2Nlc3MiLCJlIiwiZG9uZSIsInciLCJ0ZXh0IiwiZnVsbF9uYW1lIiwiYXZhdGFyX2xvY2F0aW9uIiwiZGVmYXVsdF9jdXJyZW5jeSIsInBheW1lbnRBbW91bnQiLCJyZXBsYWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmYWN0b3JDdXJyZW5jeSIsImRldGVybWluZUNvbmZsdWVjZSIsImNvbnZlcnRDdXJyZW5jeVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHQyxDQUFDLENBQUMsa0JBQUQsQ0FBYjtBQUNBLElBQUlDLFlBQVksR0FBR0QsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JFLElBQXRCLENBQTJCLG1CQUEzQixDQUFuQjtBQUNBSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxZQUFXO0FBQ3BCLE1BQUlDLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxHQUFOLEVBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUosR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDSEMsVUFBTSxFQUFFLEtBREw7QUFFSEMsT0FBRyxFQUFFQyxVQUZGO0FBR0hDLFFBQUksRUFBRTtBQUFFQyxjQUFRLEVBQUVUO0FBQVosS0FISDtBQUlIVSxXQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWSxDQUFFO0FBSnBCLEdBQVAsRUFLR0MsSUFMSCxDQUtRLFVBQVNDLENBQVQsRUFBWTtBQUNoQmpCLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCa0IsSUFBMUIsQ0FBK0JELENBQUMsQ0FBQ0UsU0FBakM7QUFDQW5CLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxJQUFwQixDQUF5QixLQUF6QixFQUFnQ2UsQ0FBQyxDQUFDRyxlQUFsQztBQUNBcEIsS0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJrQixJQUF2QixDQUE0QkQsQ0FBQyxDQUFDSSxnQkFBOUI7QUFFQSxRQUFJQyxhQUFhLEdBQUd0QixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmtCLElBQXJCLEVBQXBCO0FBQ0FJLGlCQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUFoQjtBQUNBRCxpQkFBYSxHQUFHRSxVQUFVLENBQUNGLGFBQUQsQ0FBVixDQUEwQkcsT0FBMUIsQ0FBa0MsQ0FBbEMsQ0FBaEI7QUFDQSxRQUFJQyxjQUFjLEdBQUdULENBQUMsQ0FBQ0ksZ0JBQXZCO0FBRUFmLFdBQU8sQ0FBQ0MsR0FBUixDQUNJZSxhQURKLEVBQ21CckIsWUFEbkIsRUFDaUN5QixjQURqQztBQUdBQyxzQkFBa0IsQ0FBQ0wsYUFBRCxFQUFnQnJCLFlBQWhCLEVBQThCeUIsY0FBOUIsQ0FBbEI7O0FBRUEsYUFBU0Msa0JBQVQsQ0FBNEJMLGFBQTVCLEVBQTJDckIsWUFBM0MsRUFBeUR5QixjQUF6RCxFQUF5RTtBQUN6RTFCLE9BQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0hDLGNBQU0sRUFBRSxLQURMO0FBRUhDLFdBQUcsRUFBRWtCLGtCQUZGO0FBR0hoQixZQUFJLEVBQUU7QUFDRlUsdUJBQWEsRUFBRUEsYUFEYjtBQUVGckIsc0JBQVksRUFBRUEsWUFGWjtBQUdGeUIsd0JBQWMsRUFBRUE7QUFIZCxTQUhIO0FBUUhaLGVBQU8sRUFBRSxpQkFBU0MsQ0FBVCxFQUFZO0FBQ2pCVCxpQkFBTyxDQUFDQyxHQUFSLENBQVlRLENBQVo7QUFDQWYsV0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJrQixJQUFyQixDQUEwQk0sVUFBVSxDQUFDVCxDQUFELENBQVYsQ0FBY1UsT0FBZCxDQUFzQixDQUF0QixDQUExQjtBQUNIO0FBWEUsT0FBUDtBQWFIO0FBQ0EsR0FuQ0Q7QUF1Q0F6QixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkUsSUFBcEIsQ0FDSSxLQURKLEVBRUksb0ZBRko7QUFJSCxDQTlDRCxFIiwiZmlsZSI6Ii9qcy9SZXRyaWV2ZVVzZXJGcm9tU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGlucHV0ID0gJChcIiNsaXZlc2VhcmNoLXNlbmRcIik7XHJcbnZhciBiYXNlQ3VycmVuY3kgPSAkKFwiI2xpdmVzZWFyY2gtc2VuZFwiKS5hdHRyKFwiZGF0YS1iYXNlQ3VycmVuY3lcIik7XHJcbmlucHV0LmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbCgpO1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgdXJsOiBnZXRVc2VyVXJsLFxyXG4gICAgICAgIGRhdGE6IHsgdXNlcm5hbWU6IHZhbHVlIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZSkge31cclxuICAgIH0pLmRvbmUoZnVuY3Rpb24odykge1xyXG4gICAgICAgICQoXCIjc2VuZC1yZWNpcGllbnQtbmFtZVwiKS50ZXh0KHcuZnVsbF9uYW1lKTtcclxuICAgICAgICAkKFwiLnJlY2lwaWVudC1hdmlcIikuYXR0cihcInNyY1wiLCB3LmF2YXRhcl9sb2NhdGlvbik7XHJcbiAgICAgICAgJChcIiNzZW5kaW5nLWN1cnJlbmN5XCIpLnRleHQody5kZWZhdWx0X2N1cnJlbmN5KTtcclxuXHJcbiAgICAgICAgdmFyIHBheW1lbnRBbW91bnQgPSAkKCcjcGF5bWVudC1hbW91bnQnKS50ZXh0KCk7XHJcbiAgICAgICAgcGF5bWVudEFtb3VudCA9IHBheW1lbnRBbW91bnQucmVwbGFjZSgvXFwsL2csJycpO1xyXG4gICAgICAgIHBheW1lbnRBbW91bnQgPSBwYXJzZUZsb2F0KHBheW1lbnRBbW91bnQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgdmFyIGZhY3RvckN1cnJlbmN5ID0gdy5kZWZhdWx0X2N1cnJlbmN5O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgcGF5bWVudEFtb3VudCwgYmFzZUN1cnJlbmN5LCBmYWN0b3JDdXJyZW5jeVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGV0ZXJtaW5lQ29uZmx1ZWNlKHBheW1lbnRBbW91bnQsIGJhc2VDdXJyZW5jeSwgZmFjdG9yQ3VycmVuY3kpO1xyXG4gICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lQ29uZmx1ZWNlKHBheW1lbnRBbW91bnQsIGJhc2VDdXJyZW5jeSwgZmFjdG9yQ3VycmVuY3kpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogY29udmVydEN1cnJlbmN5VXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50QW1vdW50OiBwYXltZW50QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYmFzZUN1cnJlbmN5OiBiYXNlQ3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICBmYWN0b3JDdXJyZW5jeTogZmFjdG9yQ3VycmVuY3lcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VuZGluZy1hbW91bnQnKS50ZXh0KHBhcnNlRmxvYXQoZSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgICQoXCIucmVjaXBpZW50LWF2aVwiKS5hdHRyKFxyXG4gICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzY0ZTFiOGQzNGY0MjVkMTllMWVlMmVhNzIzNmQzMDI4LmpwZz9zPTgwJmQ9bW0mcj1nXCJcclxuICAgICk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9