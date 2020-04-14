<div class="container mt--8 pb-5">
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">

                <div class="card-body px-lg-5 py-lg-5">
                    <div class="card-header bg-transparent pb-5">

                        <div class="btn-wrapper text-center">
                            <p> Create Your Market</p>
                        </div>
                    </div>

                    <form role="form" method="POST" action="{{route('frontend.ecommerce.market.create')}}">
                        @csrf
                        <div class="form-group mb-3">
                            <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-shop"></i></span>
                                </div>
                                <input name="market_name" class="form-control" placeholder="Market Name" type="text">
                            </div>
                        </div>



                        <div class="form-group">
                            <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                </div>
                                <input id="contact_email" name="contact_email" class="form-control" placeholder="Email"
                                    type="email">
                            </div>
                        </div>


                        <div class="form-group">
                            <div class="input-group input-group-alternative">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                                </div>
                                <input id="contact_phonenumber" name="contact_phonenumber" class="form-control"
                                    placeholder="Phone Number" type="text">
                            </div>
                        </div>
                        <div class=" text-muted mb-4">
                            <small>Country of Origin</small>
                        </div>

                        <div class="form-group">

                            <div class="form-group">

                                <select name="country_of_origin"
                                    class="country-select-btn btn btn-secondary dropdown-toggle"
                                    aria-labelledby="dropdownMenuButton">
                                    <option class="dropdown-menu-item" value="Kenya">Kenya</option>
                                    <option class="dropdown-menu-item" value="Ghana">Ghana</option>
                                    <option class="dropdown-menu-item" value="Nigeria">Nigeria</option>
                                    <option class="dropdown-menu-item" value="Uganda">Uganda</option>
                                    <option class="dropdown-menu-item" value="Tanzia">Tanzia</option>
                                    
                                </select>
                            </div>

                        </div>



                        <div class="card-footer bg-transparent pb-5">

                            <div class="btn-wrapper text-center">
                                <button type="submit" class="register-market-submit btn btn-primary btn-lg btn-block">

                                    <span class="btn-inner--text">Get Started</span>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light"><small>By creating an Afria Market you are agreeing to the terms and
                            conditions. </small></a>
                </div>
                {{-- <div class="col-6 text-right">
                    <a href="#" class="text-light"><small>Create new account</small></a>
                </div> --}}
            </div>
        </div>
    </div>
</div>