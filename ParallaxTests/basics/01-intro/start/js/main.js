$(document).ready(function(){

	var controller = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01'
	})
	//inside of curls defines the trigger everything out side is what results
	.setClassToggle('#project01', 'fade-in')
	// When tripped it will toggle the animation verus moving as the user scrolls
	// When this is toggled it just simply adds the class "fade-in"
	.addIndicators()
	.addTo(controller);
});
	
















