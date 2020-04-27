"use strict";

let header = $(".header"),
	introH = $(".intro").innerHeight(),
	scrollOffset = $(window).scrollTop();

/*Fixed header*/
checkScroll(scrollOffset);

$(window).on("scroll", function(){

	scrollOffset = $(this).scrollTop();

	checkScroll(scrollOffset);

});

function checkScroll(scrollOffset){

	if( scrollOffset >= introH ){
		header.addClass("fixed")
	} else{
		header.removeClass("fixed");
	}
}

/*Smooth scroll*/

$("[data-scroll]").on("click", function(event){
	event.preventDefault();

	let $this =$(this),
		blockId = $(this).data('scroll'),
		blockOffset = $(blockId).offset().top;

	$(".nav a").removeClass("active")
	$this.addClass("active");

	$("html, body").animate({
		scrollTop: blockOffset
	}, 500);

});
/*Menu nav toggle*/
$(".nav__toggle").on("click", function(event){
	event.preventDefault();

	$(this).toggleClass("active");
	$(".nav").toggleClass("active");
});

/*Sliders*/
$('.about__slider, .reviews').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  dots: true,
  prevArrow: false,
  nextArrow: false,
});

/*Service Show/Hide*/
$(".btnf1, .btnb1").click(function(){
	$(".frontside1, .backside1").toggle();
});
$(".btnf2, .btnb2").click(function(){
	$(".frontside2, .backside2").toggle();
});
$(".btnf3, .btnb3").click(function(){
	$(".frontside3, .backside3").toggle();
});
$(".btnf4, .btnb4").click(function(){
	$(".frontside4, .backside4").toggle();
});
$(".btnf5, .btnb5").click(function(){
	$(".frontside5, .backside5").toggle();
});
$(".btnf6, .btnb6").click(function(){
	$(".frontside6, .backside6").toggle();
});

 /*Team Show/Hide Info*/
 $(".teammate_first").hover(function(){
 	$(".teammate__info_first").fadeToggle(400);
 });
 $(".teammate_second").hover(function(){
 	$(".teammate__info_second").fadeToggle(400);
 });
 $(".teammate_third").hover(function(){
 	$(".teammate__info_third").fadeToggle(400);
 });
 $(".teammate_fourth").hover(function(){
 	$(".teammate__info_fourth").fadeToggle(400);
 });
  $(".teammate_fifth").hover(function(){
 	$(".teammate__info_fifth").fadeToggle(400);
 });
   $(".teammate_sixth").hover(function(){
 	$(".teammate__info_sixth").fadeToggle(400);
 });
