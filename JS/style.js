

// $('.col-lg-5').sort(function(a, b) {
//     return $(b).find(".count").text() - $(a).find(".count").text();
//     }).appendTo('.row');

$(".like-button").on("click", function(e) {
    var $counter = $(this).find(".count");
    var count = $counter.text() | 0; //corose current count to an int
    $counter.text(count + 1); //set new count
});