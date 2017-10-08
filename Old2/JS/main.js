$(function () {
	var controller = new ScrollMagic.Controller();
	
    var wipeAnimation = new TimelineMax()
//        .fromTo("#item1", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
//        .fromTo("#transition1", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone})
        .fromTo("section.bodyitem.item2", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
//        .fromTo("#transition2", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone})
        .fromTo("section.bodyitem.item3", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});
//        .fromTo("#transition3", 1, {opacity: "0%"}, {opacity: "100%", ease: Linear.easeNone});
    
	new ScrollMagic.Scene({
		triggerElement: "#bodyitemcontainer",
        triggerHook: "onLeave",
        duration: "200%"
	})
	.setPin("#bodyitemcontainer")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller)
});