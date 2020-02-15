$(".like-button").on("click", function(e) {
    var $counter = $(this).find(".count");
    var count = $counter.text() | 0; //changes current count
    $counter.text(count + 1); //set new number
});

$('.col-lg-5').sort( function(a, b) {
        return $(b).find(".count").text() - $(a).find(".count").text();
    }).appendTo('#movies');
