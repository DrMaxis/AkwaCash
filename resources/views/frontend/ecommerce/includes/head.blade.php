<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>
        {{$market->name}} | Afria Market
    </title>
    <!-- Favicon -->
    <link href="./assets/img/brand/favicon.png" rel="icon" type="image/png">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    <!-- Icons -->
    <link href="{{asset('eapp/css/vendor/nucleo/css/nucleo.css')}}" rel="stylesheet">
    <link href="{{asset('eapp/css/vendor/fontawesome/fontawesome-free/css/all.min.css')}}" rel="stylesheet">
    <!-- CSS Files -->
    <link href="{{asset('eapp/css/vendor/argon/argon-dashboard.css?v=1.1.0')}}" rel="stylesheet">



    <link href="{{asset('eapp/js/vendor/owlcarousel/owl.carousel.min.css')}}" rel="stylesheet">
    <link href="{{asset('eapp/js/vendor/owlcarousel/owl.theme.default.min.css')}}" rel="stylesheet">

    @yield('xcss')

    
    <style type="text/css">
        /* Chart.js */
        @keyframes chartjs-render-animation {
            from {
                opacity: .99
            }

            to {
                opacity: 1
            }
        }

        .chartjs-render-monitor {
            animation: chartjs-render-animation 1ms
        }

        .chartjs-size-monitor,
        .chartjs-size-monitor-expand,
        .chartjs-size-monitor-shrink {
            position: absolute;
            direction: ltr;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            pointer-events: none;
            visibility: hidden;
            z-index: -1
        }

        .chartjs-size-monitor-expand>div {
            position: absolute;
            width: 1000000px;
            height: 1000000px;
            left: 0;
            top: 0
        }

        .chartjs-size-monitor-shrink>div {
            position: absolute;
            width: 200%;
            height: 200%;
            left: 0;
            top: 0
        }


        .product-imgs {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    margin-top: 20px;


}
.main-img img.active {
    opacity: 1;
}
.main-img img {
    opacity: 0;
    -webkit-transition: opacity .10s ease-in-out;
    transition: opacity .10s ease-in-out;
}
.product-finger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid white;
    min-height: 80px;
    cursor: pointer;
}

.product-thumbnail-img img {
    width: 100%;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}



.product-imgs {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
}

.product-imgs .chosen {
  border: 1px solid red;
}

.main-img img {
  opacity: 0;
  -webkit-transition: opacity .10s ease-in-out;
  transition: opacity .10s ease-in-out;
}

.main-img img.active {
  opacity: 1;
}

.product-finger {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 1px solid white;
  min-height: 80px;
  cursor: pointer;
}

.product-finger:hover {
  border: 1px solid yellow;
}
    </style>
</head>