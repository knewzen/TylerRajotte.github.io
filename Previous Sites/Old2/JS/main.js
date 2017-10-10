$(function () {
	var controller = new ScrollMagic.Controller();
	
    var wipeAnimation = new TimelineMax()
//        .fromTo("#item1", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("div.bodyitem.wipeoverlay#transition1", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone})
        .fromTo("div.bodyitem.photo2", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("div.bodyitem.wipeoverlay#transition2", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone})
        .fromTo("div.bodyitem.photo3", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("div.bodyitem.wipeoverlay#transition3", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone});
    
    
	new ScrollMagic.Scene({
		triggerElement: "#bodyitemcontainer",
        triggerHook: "onLeave",
        duration: "500%"
	})
	.setPin("#bodyitemcontainer")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller)
});