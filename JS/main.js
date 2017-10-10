$(function(){
	var controller = new ScrollMagic.Controller();
    
    //-------------------------------------------
    
	var downarrow = new ScrollMagic.Scene({
		triggerElement: ".titlecontainer",
		duration: "25%",
		triggerHook: 0
	})
	.setTween("#downarrow", 1, {opacity: 0, ease: Linear.easeNone}) 
	.addIndicators({
		name: "Down Arrow",
		colorTrigger: "pink"
	})
	.addTo(controller);
    
    //-------------------------------------------
    
    var pinbar = new ScrollMagic.Scene({
        triggerElement: "#topbarpin",
        triggerHook: 0
    })
    .setPin("#topbarpin")
    .addIndicators({
        name: "Topbar Pin"
    })
    .addTo(controller);
});