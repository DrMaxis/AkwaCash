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
    var paymentAmount = parseFloat($('#payment-amount').text());
    var factorCurrency = w.default_currency;
    console.log(determineConfluece(paymentAmount, baseCurrency, factorCurrency));
    $("input[data-type='currency']").on({
      change: function change() {
        determineConfluece(paymentAmount, baseCurrency, factorCurrency);
      },
      keyup: function keyup() {
        determineConfluece(paymentAmount, baseCurrency, factorCurrency);
      }
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9SZXRyaWV2ZVVzZXJGcm9tU2VhcmNoLmpzIl0sIm5hbWVzIjpbImlucHV0IiwiJCIsImJhc2VDdXJyZW5jeSIsImF0dHIiLCJjaGFuZ2UiLCJ2YWx1ZSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZ2V0VXNlclVybCIsImRhdGEiLCJ1c2VybmFtZSIsInN1Y2Nlc3MiLCJlIiwiZG9uZSIsInciLCJ0ZXh0IiwiZnVsbF9uYW1lIiwiYXZhdGFyX2xvY2F0aW9uIiwiZGVmYXVsdF9jdXJyZW5jeSIsInBheW1lbnRBbW91bnQiLCJwYXJzZUZsb2F0IiwiZmFjdG9yQ3VycmVuY3kiLCJkZXRlcm1pbmVDb25mbHVlY2UiLCJvbiIsImtleXVwIiwiY29udmVydEN1cnJlbmN5VXJsIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHQyxDQUFDLENBQUMsa0JBQUQsQ0FBYjtBQUNBLElBQUlDLFlBQVksR0FBR0QsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JFLElBQXRCLENBQTJCLG1CQUEzQixDQUFuQjtBQUNBSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxZQUFXO0FBQ3BCLE1BQUlDLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxHQUFOLEVBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUosR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDSEMsVUFBTSxFQUFFLEtBREw7QUFFSEMsT0FBRyxFQUFFQyxVQUZGO0FBR0hDLFFBQUksRUFBRTtBQUFFQyxjQUFRLEVBQUVUO0FBQVosS0FISDtBQUlIVSxXQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWSxDQUFFO0FBSnBCLEdBQVAsRUFLR0MsSUFMSCxDQUtRLFVBQVNDLENBQVQsRUFBWTtBQUNoQmpCLEtBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCa0IsSUFBMUIsQ0FBK0JELENBQUMsQ0FBQ0UsU0FBakM7QUFDQW5CLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxJQUFwQixDQUF5QixLQUF6QixFQUFnQ2UsQ0FBQyxDQUFDRyxlQUFsQztBQUNBcEIsS0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJrQixJQUF2QixDQUE0QkQsQ0FBQyxDQUFDSSxnQkFBOUI7QUFFQSxRQUFJQyxhQUFhLEdBQUdDLFVBQVUsQ0FBQ3ZCLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCa0IsSUFBckIsRUFBRCxDQUE5QjtBQUNBLFFBQUlNLGNBQWMsR0FBR1AsQ0FBQyxDQUFDSSxnQkFBdkI7QUFFQWYsV0FBTyxDQUFDQyxHQUFSLENBQ0lrQixrQkFBa0IsQ0FBQ0gsYUFBRCxFQUFnQnJCLFlBQWhCLEVBQThCdUIsY0FBOUIsQ0FEdEI7QUFHQXhCLEtBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDMEIsRUFBakMsQ0FBb0M7QUFDbEN2QixZQUFNLEVBQUUsa0JBQVc7QUFDakJzQiwwQkFBa0IsQ0FBQ0gsYUFBRCxFQUFnQnJCLFlBQWhCLEVBQThCdUIsY0FBOUIsQ0FBbEI7QUFDRCxPQUhpQztBQUlsQ0csV0FBSyxFQUFFLGlCQUFXO0FBQ2hCRiwwQkFBa0IsQ0FBQ0gsYUFBRCxFQUFnQnJCLFlBQWhCLEVBQThCdUIsY0FBOUIsQ0FBbEI7QUFDRDtBQU5pQyxLQUFwQzs7QUFRQSxhQUFTQyxrQkFBVCxDQUE0QkgsYUFBNUIsRUFBMkNyQixZQUEzQyxFQUF5RHVCLGNBQXpELEVBQXlFO0FBQ3pFeEIsT0FBQyxDQUFDUSxJQUFGLENBQU87QUFDSEMsY0FBTSxFQUFFLEtBREw7QUFFSEMsV0FBRyxFQUFFa0Isa0JBRkY7QUFHSGhCLFlBQUksRUFBRTtBQUNGVSx1QkFBYSxFQUFFQSxhQURiO0FBRUZyQixzQkFBWSxFQUFFQSxZQUZaO0FBR0Z1Qix3QkFBYyxFQUFFQTtBQUhkLFNBSEg7QUFRSFYsZUFBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVk7QUFDakJULGlCQUFPLENBQUNDLEdBQVIsQ0FBWVEsQ0FBWjtBQUNBZixXQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmtCLElBQXJCLENBQTBCSyxVQUFVLENBQUNSLENBQUQsQ0FBVixDQUFjYyxPQUFkLENBQXNCLENBQXRCLENBQTFCO0FBQ0g7QUFYRSxPQUFQO0FBYUg7QUFDQSxHQXZDRDtBQTJDQTdCLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxJQUFwQixDQUNJLEtBREosRUFFSSxvRkFGSjtBQUlILENBbERELEUiLCJmaWxlIjoiL2pzL1JldHJpZXZlVXNlckZyb21TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5wdXQgPSAkKFwiI2xpdmVzZWFyY2gtc2VuZFwiKTtcclxudmFyIGJhc2VDdXJyZW5jeSA9ICQoXCIjbGl2ZXNlYXJjaC1zZW5kXCIpLmF0dHIoXCJkYXRhLWJhc2VDdXJyZW5jeVwiKTtcclxuaW5wdXQuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHZhbHVlID0gaW5wdXQudmFsKCk7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGdldFVzZXJVcmwsXHJcbiAgICAgICAgZGF0YTogeyB1c2VybmFtZTogdmFsdWUgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihlKSB7fVxyXG4gICAgfSkuZG9uZShmdW5jdGlvbih3KSB7XHJcbiAgICAgICAgJChcIiNzZW5kLXJlY2lwaWVudC1uYW1lXCIpLnRleHQody5mdWxsX25hbWUpO1xyXG4gICAgICAgICQoXCIucmVjaXBpZW50LWF2aVwiKS5hdHRyKFwic3JjXCIsIHcuYXZhdGFyX2xvY2F0aW9uKTtcclxuICAgICAgICAkKFwiI3NlbmRpbmctY3VycmVuY3lcIikudGV4dCh3LmRlZmF1bHRfY3VycmVuY3kpO1xyXG5cclxuICAgICAgICB2YXIgcGF5bWVudEFtb3VudCA9IHBhcnNlRmxvYXQoJCgnI3BheW1lbnQtYW1vdW50JykudGV4dCgpKTtcclxuICAgICAgICB2YXIgZmFjdG9yQ3VycmVuY3kgPSB3LmRlZmF1bHRfY3VycmVuY3k7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBkZXRlcm1pbmVDb25mbHVlY2UocGF5bWVudEFtb3VudCwgYmFzZUN1cnJlbmN5LCBmYWN0b3JDdXJyZW5jeSlcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCJpbnB1dFtkYXRhLXR5cGU9J2N1cnJlbmN5J11cIikub24oe1xyXG4gICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGV0ZXJtaW5lQ29uZmx1ZWNlKHBheW1lbnRBbW91bnQsIGJhc2VDdXJyZW5jeSwgZmFjdG9yQ3VycmVuY3kpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkZXRlcm1pbmVDb25mbHVlY2UocGF5bWVudEFtb3VudCwgYmFzZUN1cnJlbmN5LCBmYWN0b3JDdXJyZW5jeSlcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lQ29uZmx1ZWNlKHBheW1lbnRBbW91bnQsIGJhc2VDdXJyZW5jeSwgZmFjdG9yQ3VycmVuY3kpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogY29udmVydEN1cnJlbmN5VXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50QW1vdW50OiBwYXltZW50QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYmFzZUN1cnJlbmN5OiBiYXNlQ3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICBmYWN0b3JDdXJyZW5jeTogZmFjdG9yQ3VycmVuY3lcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VuZGluZy1hbW91bnQnKS50ZXh0KHBhcnNlRmxvYXQoZSkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgICQoXCIucmVjaXBpZW50LWF2aVwiKS5hdHRyKFxyXG4gICAgICAgIFwic3JjXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzY0ZTFiOGQzNGY0MjVkMTllMWVlMmVhNzIzNmQzMDI4LmpwZz9zPTgwJmQ9bW0mcj1nXCJcclxuICAgICk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9