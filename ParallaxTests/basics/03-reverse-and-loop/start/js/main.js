$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	$('.project').each(function(){
		
		console.log(this);
		//spits out the console to find the children
		
		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			//using the results from the log command to make it so that the trigger starts with the img and not they start of element
			triggerHook: 0.9,
			reverse: false
			// makes it one go one time
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			indent: 200,
			colorStart: '#75C695'
		}) // this requires a plugin
		.addTo(controller);
	});
});


















