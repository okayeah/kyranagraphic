$(document).ready(function(){
	
	/*Slider*/
		var slideOn = true;
		var liwidth = $('.slider li').width();
		var liheight = $('.slider li').height();
		var licount = $('.slider li').length;
		var ulwidth = licount * liwidth;

		$('.slider').closest('div').css({/*width: liwidth, */height: liheight});
		$('.slider').css({width: ulwidth, marginLeft: -liwidth});
		$('.slider li:last-child').prependTo('.slider');

		function slideLeft(){
			if (slideOn) {
				slideOn = false;
				$('.slider').animate({
					left: +liwidth
				},700,'swing',function(){
					$('.slider li:last-child').prependTo('.slider');
					$('.slider').css('left','');
					slideOn = true;
				});
			};
		}
		function slideRight(){
			if (slideOn) {
				slideOn = false;
				$('.slider').animate({
					left: -liwidth
				},700,'swing',function(){
					$('.slider li:first-child').appendTo('.slider');
					$('.slider').css('left','');
					slideOn = true;
				});
			};
		}
		
		setInterval(slideRight,3000);

		$('.slider').closest('div').on('click','a.slideleft',slideLeft);
		$('.slider').closest('div').on('click','a.slideright',slideRight);

	/*End Slider*/

});