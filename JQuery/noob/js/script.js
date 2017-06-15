$(document).ready(function() {
    $("li").click(function() {
        $(this).css("color", "#"+((1<<24)*Math.random()|0).toString(16));
    });
});