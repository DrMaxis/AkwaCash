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

