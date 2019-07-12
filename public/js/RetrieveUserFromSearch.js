(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/RetrieveUserFromSearch"],{

/***/ "./resources/js/frontend/ajax/RetrieveUserFromSearch.js":
/*!**************************************************************!*\
  !*** ./resources/js/frontend/ajax/RetrieveUserFromSearch.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var input = $('#livesearch-send');
input.change(function () {
  var value = input.val();
  console.log(value);
  $.ajax({
    method: 'GET',
    url: getUserUrl,
    data: {
      username: value
    },
    success: function success(e) {}
  }).done(function (w) {
    $('#send-recipient-name').text(w.full_name);
    $('.recipient-avi').attr("src", w.avatar_location);
    $('#sending-currency').text(w.default_currency);
  });
  $('.recipient-avi').attr("src", "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028.jpg?s=80&d=mm&r=g");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9SZXRyaWV2ZVVzZXJGcm9tU2VhcmNoLmpzIl0sIm5hbWVzIjpbImlucHV0IiwiJCIsImNoYW5nZSIsInZhbHVlIiwidmFsIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJnZXRVc2VyVXJsIiwiZGF0YSIsInVzZXJuYW1lIiwic3VjY2VzcyIsImUiLCJkb25lIiwidyIsInRleHQiLCJmdWxsX25hbWUiLCJhdHRyIiwiYXZhdGFyX2xvY2F0aW9uIiwiZGVmYXVsdF9jdXJyZW5jeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsSUFBSUEsS0FBSyxHQUFHQyxDQUFDLENBQUMsa0JBQUQsQ0FBYjtBQUNBRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxZQUFXO0FBQ3RCLE1BQUlDLEtBQUssR0FBR0gsS0FBSyxDQUFDSSxHQUFOLEVBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDRUYsR0FBQyxDQUFDTSxJQUFGLENBQVE7QUFDSkMsVUFBTSxFQUFHLEtBREw7QUFFSkMsT0FBRyxFQUFHQyxVQUZGO0FBR0pDLFFBQUksRUFBRztBQUFDQyxjQUFRLEVBQUVUO0FBQVgsS0FISDtBQUlIVSxXQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWSxDQUV6QjtBQU5PLEdBQVIsRUFPR0MsSUFQSCxDQU9RLFVBQVNDLENBQVQsRUFBWTtBQUNuQmYsS0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJnQixJQUExQixDQUErQkQsQ0FBQyxDQUFDRSxTQUFqQztBQUNLakIsS0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JrQixJQUFwQixDQUF5QixLQUF6QixFQUFnQ0gsQ0FBQyxDQUFDSSxlQUFsQztBQUNBbkIsS0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJnQixJQUF2QixDQUE0QkQsQ0FBQyxDQUFDSyxnQkFBOUI7QUFFTCxHQVpEO0FBYUFwQixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmtCLElBQXBCLENBQXlCLEtBQXpCLEVBQWdDLG9GQUFoQztBQUNELENBakJILEUiLCJmaWxlIjoiL2pzL1JldHJpZXZlVXNlckZyb21TZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxudmFyIGlucHV0ID0gJCgnI2xpdmVzZWFyY2gtc2VuZCcpO1xyXG5pbnB1dC5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHZhbHVlID0gaW5wdXQudmFsKCk7XHJcbiAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgJC5hamF4ICh7XHJcbiAgICAgICAgbWV0aG9kIDogJ0dFVCcsXHJcbiAgICAgICAgdXJsIDogZ2V0VXNlclVybCxcclxuICAgICAgICBkYXRhIDoge3VzZXJuYW1lOiB2YWx1ZX0sXHJcbiAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICBcclxuICAgIH0gXHJcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHcpIHsgXHJcbiAgICAgJCgnI3NlbmQtcmVjaXBpZW50LW5hbWUnKS50ZXh0KHcuZnVsbF9uYW1lKTtcclxuICAgICAgICAgICQoJy5yZWNpcGllbnQtYXZpJykuYXR0cihcInNyY1wiLCB3LmF2YXRhcl9sb2NhdGlvbik7XHJcbiAgICAgICAgICAkKCcjc2VuZGluZy1jdXJyZW5jeScpLnRleHQody5kZWZhdWx0X2N1cnJlbmN5KTtcclxuXHJcbiAgICB9KTsgXHJcbiAgICAkKCcucmVjaXBpZW50LWF2aScpLmF0dHIoXCJzcmNcIiwgXCJodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzY0ZTFiOGQzNGY0MjVkMTllMWVlMmVhNzIzNmQzMDI4LmpwZz9zPTgwJmQ9bW0mcj1nXCIpO1xyXG4gIH0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=