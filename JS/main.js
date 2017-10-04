$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	
    var wipetimeline = new TimelineMax()
        .fromTo("#item1", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
    
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#bodyitemcontainer",
        triggerHook: "onLeave",
        duration: "600%"
	})
	.setPin("#bodyitemcontainer")
    .setTween()
    .addIndicators()
    .addTo(controller)
});