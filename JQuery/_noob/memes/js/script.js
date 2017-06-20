$(document).ready(function() {
    $("li").click(function() {
        $(this).css("color", "#"+((1<<24)*Math.random()|0).toString(16));
    });
    $("button").click(function() {
        $("li").css("color", "black");
    });
    $("h1").click(function() {
        if($("h2").is(":visible")) {
            $("h2").hide();
        }
        else {
            $("h2").show()
        }
    });
});