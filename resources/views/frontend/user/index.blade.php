@extends('frontend.layouts.app') {{-- @lang('strings.frontend.welcome_to', ['place' => app_name()]) --}} 
@section('content')

<style>
  .digit {
    font-size: 1.3rem;
    height: 75px;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;
  }
</style>
<div class="container-fluid bg-light-opac">
    <div class="row">
        <div class="container my-3 main-container">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="content-color-primary page-title">Your Finances</h2>
                    <p class="content-color-secondary page-sub-title">View your Cash Card</p>
                </div>
                <div class="col-auto">
                    <button class="btn btn-rounded pink-gradient text-uppercase" data-toggle="modal" data-target="#createOrder"><i class="material-icons">add</i> <span class="text-hide-xs">Cash Card</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- content page -->


<div class="container-fluid mt-4 main-container">
   
  <div class="row">

    <div class="col-12 col-md-12">
      <div class="card mb-4 fullscreen">
        <div class="card-header">
          <div class="media">
            <div class="media-body">
              <h4 class="content-color-primary mb-0">Account Balance</h4>
              <p class="content-color-secondary mb-0">GHS</p>
            </div>

          </div>
        </div>
        <div class="card-body">
          <h1 id="test" class="mt-4"><span class="font-weight-light">$</span> 2053.19</h1>
          <p class="small mb-1 text-success "><i class="material-icons icon-sm">arrow_drop_up</i> $250
          </p>
        </div>
        <div class="card-footer border-top">
          <div class="media">
            <div class="media-body">
              <h5 class="content-color-primary mb-0">Latest Transaction</h5>
              <p class="content-color-secondary mb-0 small"><span class="content-color-primary">$340 Recieved </span> from Trevor</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-12">

      <div class="card mb-4 fullscreen">
        <div class="card-header">
          <div class="media">
            <div class="media-body">
              <h4 class="content-color-primary mb-0">Send or Recieve</h4>
            </div>

          </div>
        </div>
        <div class="card-body pt-0">




          <div id="dial-payment" class="container">

            <div class="row">
              <div class="col-12 col-md-4">

                <form method="post" action="#">
                  <label for="currency-field">Enter Amount</label>
                  <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency"
                    placeholder="$0.00">
                </form>

              </div>


            </div>

            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number="1">
                1
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="2">
                2
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="3">
                3
              </div>
            </div>


            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number="4">
                4
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="5">
                5
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="6">
                6
              </div>
            </div>


            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number="7">
                7
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="8">
                8
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="9">
                9
              </div>
            </div>


            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number=".">
                .
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="0">
                0
              </div>
              <div class="col-4 col-md-4 text-center digit " >
                x
              </div>
            </div>

            <div class="row">
              <div class="col-6 col-md-4 text-center digit " data-toggle="modal" data-target="#request">
                Request
              </div>
              <div class="col-6 col-md-4 text-center digit " data-toggle="modal" data-target="#send" >
                Pay

              </div>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="send" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog  modal-sm modal-dialog-centered " role="document">
                <div class="modal-content box-shadow pink-gradient">
                  <div class="modal-header border-0  px-0">
                    <div class="col-6">
                      <h5 class="card-title mb-0">Send Money</h5>
                    </div>
                    <div class="col text-right">
                      <div class="dropdown">
                        <button class="btn btn-link btn-sm text-secondary rounded-0 dropdown-toggle float-right icon" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="true" type="button">
                          <i class="fa fa-ellipsis-v"></i>
                      </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">
                              <i class="fa fa-exclamation-circle text-secondary"></i> Report a problem</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body text-center pr-4 pl-4">
                    <figure class="avatar avatar-120 mx-auto">
                      <img src="img/user1.png" alt="user image">
                    </figure>
                    <h5 class="my-3 f-light">John McMohan</h5>
                    
                   
                        
                        <div class="input-group mb-2">
                            <input  type="text" class="form-control border-light" id="example-mail2" placeholder="Type Something...">
                          </div>
                   
                    <div class="latest-transaction">
                        <div class="card mb-4">
                         
                            <div class="card-body">
                                
                                <div class="media">
                                    <figure class="avatar avatar-50 mr-3">
                                        <img src="img/user1.png" alt="Generic placeholder image">
                                    </figure>
                                    <div class="media-body">
                                        <h6 class="my-0 mt-1">John Doe <span class="status vm bg-success"></span></h6>
                                        <p class="small">New Jersey, UK</p>
                                    </div>
                                    <h4 class="content-color-secondary">$255</h4>
                                </div>
                            </div>
                            <div class="card-footer border-top">
                                <div class="media">
                                  <div class="media-body">
                                    <h5 class="content-color-primary mb-0">Last Contact</h5>
                                    <p class="content-color-secondary mb-0 small"><span class="content-color-primary">$255 Recieved </span> from John Doe</p>
                                  </div>
                                </div>
                              </div>
                        </div>
                    </div>
                    <div class="input-group mb-2">
                      <input id="currency-input" type="text" class="form-control border-light">
                    </div>
                    <div class="text-center">
                      <br>
                      <br>
                     <button class="btn btn-circle btn-outline-light btn-block col">Send</button>
                    </div>
                    <br>
                  </div>
                </div>
              </div>
            </div>


              <!-- Modal -->
              <div class="modal fade" id="request" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog  modal-sm modal-dialog-centered " role="document">
                    <div class="modal-content box-shadow pink-gradient">
                      <div class="modal-header border-0  px-0">
                        <div class="col-6">
                          <h5 class="card-title mb-0">Request Payment</h5>
                        </div>
                        <div class="col text-right">
                          <div class="dropdown">
                            <button class="btn btn-link btn-sm text-secondary rounded-0 dropdown-toggle float-right icon" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="true" type="button">
                              <i class="fa fa-ellipsis-v"></i>
                          </button>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#">
                                  <i class="fa fa-exclamation-circle text-secondary"></i> Report a problem</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-body text-center pr-4 pl-4">
                        <figure class="avatar avatar-120 mx-auto">
                          <img src="img/user1.png" alt="user image">
                        </figure>
                        <h5 class="my-3 f-light">John McMohan</h5>
                        
                       
                            
                            <div class="input-group mb-2">
                                <input  type="text" class="form-control border-light" id="example-mail2" placeholder="Type Something...">
                              </div>
                       
                        <div class="latest-transaction">
                            <div class="card mb-4">
                             
                                <div class="card-body">
                                    
                                    <div class="media">
                                        <figure class="avatar avatar-50 mr-3">
                                            <img src="img/user1.png" alt="Generic placeholder image">
                                        </figure>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">John Doe <span class="status vm bg-success"></span></h6>
                                            <p class="small">New Jersey, UK</p>
                                        </div>
                                        <h4 class="content-color-secondary">$255</h4>
                                    </div>
                                </div>
                                <div class="card-footer border-top">
                                    <div class="media">
                                      <div class="media-body">
                                        <h5 class="content-color-primary mb-0">Last Contact</h5>
                                        <p class="content-color-secondary mb-0 small"><span class="content-color-primary">$255 Recieved </span> from John Doe</p>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                        <div class="input-group mb-2">
                          <input id="currency-input" type="text" class="form-control border-light">
                        </div>
                        <div class="text-center">
                          <br>
                          <br>
                         <button class="btn btn-circle btn-outline-light btn-block col">Send</button>
                        </div>
                        <br>
                      </div>
                    </div>
                  </div>
                </div>

                
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
  <!-- content page ends -->
@endsection
 
@section('page-scripts')
  @include('frontend.includes.partials.scripts.dashboard.financeScript')

  <script>
    // Jquery Dependency

/* $("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
}); */
  $("input[data-type='currency']").on({
    change: function() {
      formatCurrency($(this));
    },
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    } 
});
var count = 0;

$(".digit").click(function() {

	  var num= $(this).attr('data-number');
	  $("#currency-field").val(function() {
      
      return this.value + num;
      
      
       
      
    });
     formatCurrency($("#currency-field"));
    
	});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);
    
    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }
    
    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;
    
    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);

  console.log(input_val);

  var modal = document.querySelector('#test');
  document.getElementById("currency-input").value = input_val;
  modal.innerHTML = input_val;

}
  </script>
@endsection




