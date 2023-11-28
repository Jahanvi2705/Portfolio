
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
document.querySelector('.first-button').addEventListener('click', function () {

	document.querySelector('.animated-icon1').classList.toggle('open');
	});
	document.querySelector('.second-button').addEventListener('click', function () {
	
	document.querySelector('.animated-icon2').classList.toggle('open');
	});
	document.querySelector('.third-button').addEventListener('click', function () {
	
	document.querySelector('.animated-icon3').classList.toggle('open');
	});