$(function () {
	var controller = new ScrollMagic.Controller();
	
    var wipeAnimation = new TimelineMax()
//        .fromTo("div.bodyitem.wipeoverlay1", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
//        .fromTo("div.bodyitem.wipeoverlay1", 1, {opacity: 1}, {opacity: 0, ease: Linear.easeNone})
        .to("div.bodyitem.wipeoverlay1", 1, {opacity: 1})
    
//        .fromTo("div.bodyitem.wipeoverlay2", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
//        .fromTo("div.bodyitem.wipeoverlay2", 1, {opacity: 1}, {opacity: 0, ease: Linear.easeNone});
        .to("div.bodyitem.wipeoverlay2", 1, {opacity: 1})
    
//        .fromTo("div.bodyitem.wipeoverlay3", 1, {opacity: 0}, {opacity: 1, ease: Linear.easeNone})
//        .fromTo("div.bodyitem.wipeoverlay3", 1, {opacity: 1}, {opacity: 0, ease: Linear.easeNone});
        .to("div.bodyitem.wipeoverlay3", 1, {opacity: 1});
    
    
	new ScrollMagic.Scene({
		triggerElement: "#bodyitemcontainer",
        triggerHook: "onLeave",
        duration: "300%"
	})
	.setPin("#bodyitemcontainer")
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller)
});