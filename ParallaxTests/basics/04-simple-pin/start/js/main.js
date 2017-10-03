$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: "#intro",
		triggerHook: 0,
		duration: "30%"
	})
	.addIndicators({
		colorTrigger: "yellow"
	})
	.setPin("#intro", {pushFollowers: false})
	//There are aditional things that can be pluged into the pin element
	.addTo(controller);
	
	// loop through each .project element
	$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.9
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	});

});


















