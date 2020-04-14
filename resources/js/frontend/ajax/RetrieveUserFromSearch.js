var input = $("#livesearch-send");
var baseCurrency = $("#livesearch-send").attr("data-baseCurrency");
input.change(function() {
    var value = input.val();
    console.log(value);
    $.ajax({
        method: "GET",
        url: getUserUrl,
        data: { username: value },
        success: function(e) {}
    }).done(function(w) {
        $("#send-recipient-name").text(w.full_name);
        $("#recipient-phone-number").attr('data-recipientPhoneNumber', w.phone_number);

        $(".recipient-avi").attr("src", w.avatar_location);
        $("#sending-currency").text(w.default_currency);

        var paymentAmount = $('#payment-amount').text();
        paymentAmount = paymentAmount.replace(/\,/g,'');
        paymentAmount = parseFloat(paymentAmount).toFixed(2);
        var factorCurrency = w.default_currency;

        console.log(
            paymentAmount, baseCurrency, factorCurrency
        );
        determineConfluece(paymentAmount, baseCurrency, factorCurrency);
       
        function determineConfluece(paymentAmount, baseCurrency, factorCurrency) {
        $.ajax({
            method: "GET",
            url: convertCurrencyUrl,
            data: {
                paymentAmount: paymentAmount,
                baseCurrency: baseCurrency,
                factorCurrency: factorCurrency
            },
            success: function(e) {
                console.log(e);
                $('#sending-amount').text(parseFloat(e).toFixed(2));
            }
        });
    }
    });

    

    $(".recipient-avi").attr(
        "src",
        "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028.jpg?s=80&d=mm&r=g"
    );
});
