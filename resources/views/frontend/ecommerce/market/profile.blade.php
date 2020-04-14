@extends('frontend.ecommerce.layouts.app')

@section('xcss')

<style>
  .market-info-title {
    display: inline-block;
    font-size: 0.875rem;

  }


  .market-info-detail {
    display: inline-block;
    font-size: 0.875rem;

  }


  .market-info-container {
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  .market-info-col {
    margin-bottom: 10px;
  }
</style>
@endsection

@section('content')

<!-- Page content -->
<div class="container-fluid mt--7">
  <div class="row">
    <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
      <div class="card card-profile shadow">
        <div class="row justify-content-center">
          <div class="col-lg-3 order-lg-2">
            <div class="card-profile-image">
              <a href="#">
                <img src="{{$logged_in_user->picture}}" class="rounded-circle">
              </a>
            </div>
          </div>
        </div>
        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
            <a href="#" class="btn btn-sm btn-default float-right">Message</a>
          </div>
        </div>
        <div class="card-body pt-0 pt-md-4">
     
          <div class="text-center">
            <h3>
              {{$logged_in_user->name}}<span class="font-weight-light"></span>
            </h3>
            <div class="h5 font-weight-300">
              <i class="ni location_pin mr-2 fa fa-map-marker"></i>California, United States
            </div>
            <div class="h5 mt-4">
              <i class="ni business_briefcase-24 mr-2"></i>Market Manager - {{$market->name}}
            </div>
            <div>
              <i class="ni education_hat mr-2"></i>Joined Afria.com in {{getJoinYear($market->created_at)}}
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
              <h3 class="market-name mb-0">{{$market->name}} Profile</h3>

            </div>
          </div>
        </div>
        <div class="card-body">



          <div class="market-info-container col-12">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="card-header bg-white border-0">
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h3 class="mb-0">Manager Contact Information</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="pl-lg-4 category-product">
                    <div class="row">
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Email: </div>
                        <div class="market-info-detail">Nathankantwi@gmail.com</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Alternative Email: </div>
                        <div class="market-info-detail">Antwi@studiounwanted.com</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Social Links: </div>
                        <div class="market-info-detail">None</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Fax: </div>
                        <div class="market-info-detail">1-570-747-2126</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Telephone: </div>
                        <div class="market-info-detail">1-470-347-7126</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Mobile: </div>
                        <div class="market-info-detail">1-470-347-7126</div>
                      </div>

                      {{-- Row End --}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="market-info-container col-12">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="card-header bg-white border-0">
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h3 class="mb-0">Market Information</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="pl-lg-4 category-product">
                    <div class="row">

                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Market Name: </div>
                        <div class="market-info-detail">Xencolor</div>
                      </div>

                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Platforms for Selling: </div>
                        <div class="market-info-detail">amazon | eBay | etsy | other</div>
                      </div>

                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Year Established：</div>
                        <div class="market-info-detail">2020</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Main Products: </div>
                        <div class="market-info-detail">LED Lights | Colored LEDs | Indoor Lighting | Outdoor Lighting
                        </div>
                      </div>

                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Official Website: </div>
                        <div class="market-info-detail">https://www.xencolor.com</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Registered Address: </div>
                        <div class="market-info-detail">US , Georgia , Kennesaw , 2011 Jebs CT NW</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Business Type: </div>
                        <div class="market-info-detail">Online Shop/ Store | Individual</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Operational Address: </div>
                        <div class="market-info-detail">US , Georgia , Kennesaw, , 2011 Jebs CT NW</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Total Number of Employees: </div>
                        <div class="market-info-detail">Fewer than 5 People</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">About Us: </div>
                        <div class="market-info-detail">
                          XenColor offers high quality LED lights and accessories to young adults and adults who seek to
                          add aesthetically pleasing effects and positive vibes to their living or work space.</div>
                      </div>

                      {{-- Row End --}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="market-info-container col-12">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="card-header bg-white border-0">
                  <div class="row align-items-center">
                    <div class="col-8">
                      <h3 class="mb-0">Sourcing Information</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="pl-lg-4 category-product">
                    <div class="row">
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Annual Purchasing Volume：</div>
                        <div class="market-info-detail">Below $10,000</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Primary Sourcing Purpose: </div>
                        <div class="market-info-detail">To resell items</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Average Sourcing Frequency: </div>
                        <div class="market-info-detail">Monthly</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Preferred Supplier Qualifications：</div>
                        <div class="market-info-detail">Ability to customize | Has items in stock | Short lead time |
                          Exported to my country before | Has a factory</div>
                      </div>
                      <div class="market-info-col col-lg-6">
                        <div class="market-info-title">Preferred Industries：</div>
                        <div class="market-info-detail">Tableware | Home Storage & Organization | Fabric | T-Shirts
                        </div>
                      </div>


                      {{-- Row End --}}
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
  <!-- Footer -->
@include('frontend.ecommerce.includes.footer')
</div>
@endsection

@section('page-scripts')


<script src="{{asset('eapp/js/vendor/sweetalert2/sweetalert2.all.min.js')}}"></script>

{{-- <script>
  Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})

</script>
 --}}
@endsection