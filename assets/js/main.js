$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).hide();
    $(".hamburger-close").show();
    $(".menu").css("display", "flex");
  });
  $(".hamburger-close").click(function(){
    $(this).hide();
    $(".hamburger").show();
    $(".menu").hide();
  });
  $(".menu ul").click(function(){
    $(".menu").hide();
    $(".hamburger").show();
    $(".hamburger-close").hide();
  });
});