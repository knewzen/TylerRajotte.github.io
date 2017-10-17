$(function(){
	var controller = new ScrollMagic.Controller();
    
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
    
    // add a fade in once past a point
	
	var pinbarfade = new ScrollMagic.Scene({
		triggerElement: "#topbarpin",
		duration: "25%",
		triggerHook: 0.8
	})
	.setTween("#topbarpin", 1, {opacity: 1, ease: Linear.easeNone})
	.addIndicators({
		name: "Topbar pin",
		colorTrigger: "aqua"
	})
	.addTo(controller);
    
	//fade in for the toolbar
	
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

var AnimationState = false;
    
function TopIconTrigger(){

    if(AnimationState === false){
        AnimationState = true;

        TweenMax.to("#SiteViewButton", 0.5, {y: -406, ease: SteppedEase.config(14)});
        console.log("button animation trig");
        TweenMax.to(".TopBarContainer", 1, {height: "100vh", ease: Power4.easeOut});
        console.log("scale animation trig");
        document.getElementById("topbarpin").style.position = "fixed";
        console.log("position fixed");

    } else {
        AnimationState = false;
		
		TweenMax.to("#SiteViewButton", 0.5, {y: 0, ease: SteppedEase.config(14)});
        console.log("button animation trig");
        TweenMax.to(".TopBarContainer", 1, {height: "7.5vh", ease: Power4.easeOut});
        console.log("scale animation trig");
		
		// need to have it set up so it knows weither it need to remain fixed because its pinned or if its relative and dosn't have a pin. Postion can be found with scrollmagic and it can be identical and scale across many screen sizes http://scrollmagic.io/examples/basic/custom_actions.html
		
        document.getElementById("topbarpin").style.position = "fixed";
		
		
        console.log("position fixed");
    }
}