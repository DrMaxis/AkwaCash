(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/UsernameSearch"],{

/***/ "./resources/js/frontend/ajax/UsernameSearch.js":
/*!******************************************************!*\
  !*** ./resources/js/frontend/ajax/UsernameSearch.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load', function () {
  var options1 = {
    url: searchForUserUrl,
    getValue: "username",
    template: {
      type: "description",
      fields: {
        description: "full_name"
      }
    },
    list: {
      match: {
        enabled: true
      },
      maxNumberOfElements: 4
    },
    theme: "plate-dark"
  };
  var options2 = {
    url: "{{route('frontend.user.search')}}",
    getValue: "username",
    template: {
      type: "description",
      fields: {
        description: "full_name"
      }
    },
    list: {
      match: {
        enabled: true
      },
      maxNumberOfElements: 4
    },
    theme: "plate-dark"
  };
  $("#livesearch-send").easyAutocomplete(options1);
  $("#livesearch-request").easyAutocomplete(options2);
});
$(window).on("resize", function () {
  $("#livesearch-send").easyAutocomplete(options1);
  $("#livesearch-request").easyAutocomplete(options2);
});

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** multi ./resources/js/frontend/ajax/UsernameSearch.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\frontend\ajax\UsernameSearch.js */"./resources/js/frontend/ajax/UsernameSearch.js");


/***/ })

},[[2,"/js/manifest"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvYWpheC9Vc2VybmFtZVNlYXJjaC5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwib24iLCJvcHRpb25zMSIsInVybCIsInNlYXJjaEZvclVzZXJVcmwiLCJnZXRWYWx1ZSIsInRlbXBsYXRlIiwidHlwZSIsImZpZWxkcyIsImRlc2NyaXB0aW9uIiwibGlzdCIsIm1hdGNoIiwiZW5hYmxlZCIsIm1heE51bWJlck9mRWxlbWVudHMiLCJ0aGVtZSIsIm9wdGlvbnMyIiwiZWFzeUF1dG9jb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQ0MsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVk7QUFJN0IsTUFBSUMsUUFBUSxHQUFHO0FBR25CQyxPQUFHLEVBQUVDLGdCQUhjO0FBTVhDLFlBQVEsRUFBRSxVQU5DO0FBUVhDLFlBQVEsRUFBRTtBQUNOQyxVQUFJLEVBQUUsYUFEQTtBQUVOQyxZQUFNLEVBQUU7QUFDSkMsbUJBQVcsRUFBRTtBQURUO0FBRkYsS0FSQztBQWVYQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFO0FBQ0hDLGVBQU8sRUFBRTtBQUROLE9BREw7QUFJRkMseUJBQW1CLEVBQUU7QUFKbkIsS0FmSztBQXFCWEMsU0FBSyxFQUFFO0FBckJJLEdBQWY7QUF5QkEsTUFBSUMsUUFBUSxHQUFHO0FBR2ZaLE9BQUcsRUFBRSxtQ0FIVTtBQU1QRSxZQUFRLEVBQUUsVUFOSDtBQVFQQyxZQUFRLEVBQUU7QUFDTkMsVUFBSSxFQUFFLGFBREE7QUFFTkMsWUFBTSxFQUFFO0FBQ0pDLG1CQUFXLEVBQUU7QUFEVDtBQUZGLEtBUkg7QUFlUEMsUUFBSSxFQUFFO0FBQ0ZDLFdBQUssRUFBRTtBQUNIQyxlQUFPLEVBQUU7QUFETixPQURMO0FBSUZDLHlCQUFtQixFQUFFO0FBSm5CLEtBZkM7QUFxQlBDLFNBQUssRUFBRTtBQXJCQSxHQUFmO0FBd0JBZixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmlCLGdCQUF0QixDQUF1Q2QsUUFBdkM7QUFDQUgsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJpQixnQkFBekIsQ0FBMENELFFBQTFDO0FBQ0gsQ0F2REQ7QUEwREFoQixDQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVQyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQy9CRixHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmlCLGdCQUF0QixDQUF1Q2QsUUFBdkM7QUFDQUgsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJpQixnQkFBekIsQ0FBMENELFFBQTFDO0FBQ0gsQ0FIRCxFIiwiZmlsZSI6Ii9qcy9Vc2VybmFtZVNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgXHJcblxyXG5cclxuICAgIHZhciBvcHRpb25zMSA9IHtcclxuICAgIFxyXG5cclxudXJsOiBzZWFyY2hGb3JVc2VyVXJsLFxyXG5cclxuXHJcbiAgICAgICAgZ2V0VmFsdWU6IFwidXNlcm5hbWVcIixcclxuXHJcbiAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgdHlwZTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImZ1bGxfbmFtZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgIG1hdGNoOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1heE51bWJlck9mRWxlbWVudHM6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoZW1lOiBcInBsYXRlLWRhcmtcIlxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIG9wdGlvbnMyID0ge1xyXG4gICAgXHJcblxyXG4gICAgdXJsOiBcInt7cm91dGUoJ2Zyb250ZW5kLnVzZXIuc2VhcmNoJyl9fVwiLFxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgZ2V0VmFsdWU6IFwidXNlcm5hbWVcIixcclxuICAgIFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiZnVsbF9uYW1lXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZkVsZW1lbnRzOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoZW1lOiBcInBsYXRlLWRhcmtcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgJChcIiNsaXZlc2VhcmNoLXNlbmRcIikuZWFzeUF1dG9jb21wbGV0ZShvcHRpb25zMSk7XHJcbiAgICAkKFwiI2xpdmVzZWFyY2gtcmVxdWVzdFwiKS5lYXN5QXV0b2NvbXBsZXRlKG9wdGlvbnMyKTtcclxufSk7XHJcblxyXG5cclxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjbGl2ZXNlYXJjaC1zZW5kXCIpLmVhc3lBdXRvY29tcGxldGUob3B0aW9uczEpO1xyXG4gICAgJChcIiNsaXZlc2VhcmNoLXJlcXVlc3RcIikuZWFzeUF1dG9jb21wbGV0ZShvcHRpb25zMik7XHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==