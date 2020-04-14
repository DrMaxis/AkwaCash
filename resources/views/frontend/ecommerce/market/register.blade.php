

<html lang="en">
@include('frontend.ecommerce.market.partials.register.include.head')
<body class="bg-defaulf">
    <div class="main-content">
        @include('frontend.ecommerce.market.partials.register.include.nav')
        
        @include('frontend.ecommerce.market.partials.register.include.header')

        @include('frontend.ecommerce.market.partials.register.content')
    </div>

    

     <!-- Scripts -->




        <!--   Core   -->
  <script src="{{asset('eapp/js/vendor/jquery/dist/jquery.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
  <!--   Optional JS   -->
  <script src="{{asset('eapp/js/vendor/chart.js/dist/Chart.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/chart.js/dist/Chart.extension.js')}}"></script>
  <!--   Argon JS   -->
  <script src="{{asset('eapp/js/vendor/argon/argon-dashboard.min.js?v=1.1.0')}}"></script>
  <script src="{{asset('eapp/js/vendor/owlcarousel/owl.carousel.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/owlcarousel/owl.carousel.min.js')}}"></script>


  <script>
  

  (function () {
      $(function(){

$(".dropdown-menu li a").click(function(){

  $(".country-select-btn:first-child").text($(this).text());
  $(".country-select-btn:first-child").val($(this).text());

});

});


$('.register-market-submit').on('click', function() {

  $marketName = $('input[name=market_name]').val();
  $contactEmail = $('input[name=contact_email').val();
  $contactPhoneNumber = $('input[name=contact_phonenumber').val();

  

  if($('#dropdownMenuButton').text() === "Please Select") {
    alert('Please Make Sure to selectr a Country of Origin');
  } else {
    $countryOfOrigin = $('#dropdownMenuButton').text();
  }

  console.log($marketName,$contactEmail,$contactPhoneNumber,$countryOfOrigin);
})


  })();


  
  </script>
</body>
</html>