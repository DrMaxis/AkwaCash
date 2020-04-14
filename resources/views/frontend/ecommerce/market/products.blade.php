@extends('frontend.ecommerce.layouts.app')
@section('xcss')
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/css/fileinput.css" media="all" rel="stylesheet" type="text/css"/>

  

@endsection

@section('content')

<div class="container-fluid mt--7">
  <div class="row">
    <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
      <div class="card card-profile shadow">
        <div class="row justify-content-center">
          <div class="col-lg-3 order-lg-2">
            <div class="card-profile-image">
             
            </div>
          </div>
        </div>
        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <h1> Upload product Images</h1>
        </div>
         <div class="card card-profile shadow">
        <div class="row justify-content-center">
         
        </div>
        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
         
        </div>
        <div class="card-body pt-0 pt-md-4">
     
          <div class="text-center">
            <div class="form-group">
              <div class="file-loading">
                  <input id="image-file" type="file" name="file" accept="image/*" data-min-file-count="1" multiple>
              </div>
          </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="col-xl-8 order-xl-1">
      <div class="card bg-secondary shadow">
        <div class="card-header bg-white border-0">
          <div class="row align-items-center">
            <div class="col-8">
              <h3 class="mb-0">Add a Product</h3>
            </div>
           {{--  <div class="col-4 text-right">
              <a href="#!" class="btn btn-sm btn-primary">Settings</a>
            </div> --}}
          
          </div>
        </div>
        <div class="card-body">
          <form>
            <h6 class="heading-small text-muted mb-4">Quick Product Details</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="product_name">Product Name</label>
                    <input type="text" id="product_name" class="form-control form-control-alternative" placeholder="Product Name" >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="product_model">Product Model</label>
                    <input type="text" id="product_model" class="form-control form-control-alternative" placeholder="Ex. 123ABC">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="product_price">Product Brand</label>
                    <input type="text" id="product_brand" class="form-control form-control-alternative" placeholder="First name" >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="product_price">Product Price</label>
                    <input type="number" id="product_price" class="form-control form-control-alternative" placeholder="Last name">
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4" />
            <!-- Product Information -->
            <h6 class="heading-small text-muted mb-4">Product information</h6>
            <div class="pl-lg-4">
              <div class="form-group">
                <label>Product Description</label>
                <textarea rows="4" class="form-control form-control-alternative" placeholder="Include information about your product"></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  @include('frontend.ecommerce.includes.footer')
</div>
 
@endsection

@section('page-scripts');
<script>
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
  </script>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/js/fileinput.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/themes/fa/theme.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" type="text/javascript"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" type="text/javascript"></script>
<script type="text/javascript">
    $("#image-file").fileinput({
        theme: 'fa',
        uploadUrl: "", 
        uploadExtraData: function() {
            return {
                _token: "{{ csrf_token() }}",
            };
        },
        allowedFileExtensions: ['jpg', 'png', 'gif','jpeg'],
        overwriteInitial: false,
        maxFileSize:2048,
        maxFilesNum: 10
    });
</script>
@endsection