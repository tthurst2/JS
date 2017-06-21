$(document).ready(function() {
   $("div").mouseenter(function() {
      $(this).fadeTo("fast", 1); 
   });
   $("div").mouseleave(function() {
      $(this).fadeTo("fast",0.5); 
   });
   $("div").mousedown(function() {
      $(this).css("background-color", "#5599FF");
   });
   $("div").mouseup(function() {
      $(this).css("background-color", "#69D2E7");
   });
});