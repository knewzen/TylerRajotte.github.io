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
    
    // add a fade in once past a point
    
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

function PullDown(){
    TweenMax.to(".TopBarContainer", 1, {css:{height: "100%"}, ease: Power4.easeOut})
}

function PulldownIconAnimationOn(){
	var tlsidebar = new TimelineMax({
		
	});
	
	tlsidebar.to("#SiteViewButton", 0.5, {
		y: -406,
		ease: SteppedEase.config(14)
	});
	
	tlsidebar.play();
    document.getElementById("AnimationContainer").setAttribute("onClick", "PulldownIconAnimationOff();");
}

function PulldownIconAnimationOff(){
	var tlsidebar = new TimelineMax({
		
	});
	
	tlsidebar.to("#SiteViewButton", 0.5, {
		y: 0,
		ease: SteppedEase.config(14)
	});
	
	tlsidebar.play();
    document.getElementById("AnimationContainer").setAttribute("onClick", "PulldownIconAnimationOn();");
}


