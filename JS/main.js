$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	
    var wipetimeline = new TimelineMax()
        .fromTo("#item1", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#transition1", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone})
        .fromTo("#item2", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#transition2", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone})
        .fromTo("#item3", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#transition3", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone});
    
	var scene = new ScrollMagic.Scene({
		triggerElement: "#bodyitemcontainer",
        triggerHook: "0",
        duration: "600%"
	})
	.setPin("#bodyitemcontainer")
    .setTween(wipetimeline)
    .addIndicators()
    .addTo(controller)
});