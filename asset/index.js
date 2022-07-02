
 var man = Math.floor(Math.random() * 4);


var img = document.querySelectorAll("img");

var img = $("img");
var btn = $("button");
  btn.on("click",  function () {
 setTimeout(function() {
   $("h3").slideToggle(4500)
  $("img").fadeToggle(5000);
 });
})