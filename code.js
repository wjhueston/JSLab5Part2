$(document).ready(
    function ()
    {
        //Events
        $("#purchaseCount").keypress(purchaseKeypress);
        $("#donationCount").keypress(donationKeypress);
        var purchaseValue = 0;
        var donationValue = 0;
        var total = 0;
        //Functions
        function purchaseKeypress(event) {
            var character = parseInt(event.key);
            purchaseValue = character * 39.99;
            total = purchaseValue + donationValue;
            $("#purchaseTotal").text("$" + (character * 39.99).toFixed(2));
            $("#grandTotal").text("$" + total.toFixed(2))
        }
        function donationKeypress(event) {
            var character = parseInt(event.key);
            donationValue = character * 14.99;
            total = purchaseValue + donationValue;
            $("#donationTotal").text("$" + (character * 14.99).toFixed(2));
            $("#grandTotal").text("$" + total.toFixed(2))
        }
    }
);