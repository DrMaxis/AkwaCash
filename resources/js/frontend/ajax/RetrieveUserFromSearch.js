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
        $(".recipient-avi").attr("src", w.avatar_location);
        $("#sending-currency").text(w.default_currency);

        var paymentAmount = parseFloat($('#payment-amount').text());
        var factorCurrency = w.default_currency;

        console.log(
            determineConfluece(paymentAmount, baseCurrency, factorCurrency)
        );
        $("input[data-type='currency']").on({
          change: function() {
            determineConfluece(paymentAmount, baseCurrency, factorCurrency)
          },
          keyup: function() {
            determineConfluece(paymentAmount, baseCurrency, factorCurrency)
          }
      });
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
