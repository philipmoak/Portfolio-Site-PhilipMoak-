console.log("Hey! This is my portfolio")
$(document).ready(function(){
  $(".navigation").click(function(){
  console.log("Clicked")
    $(".mobile-menu").toggle();
    $(".navigation").toggleClass("navigate-padding")
  })
});
