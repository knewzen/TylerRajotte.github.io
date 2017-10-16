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

$(function() { 
    
    
});

var AnimationState = false;
    
function TopIconTrigger(){

    if(AnimationState == false){
        AnimationState = true;

        TweenMax.to("#SiteViewButton", 0.5, {y: -406, ease: SteppedEase.config(14)});
        console.log("button animation trig");
        TweenMax.to(".TopBarContainer", 1, {scaleY: 1, ease: Power4.easeOut});
        console.log("scale animation trig");
        document.getElementById("topbarpin").style.position = "fixed";
        console.log("position fixed");

    } else {
        AnimationState = false;

        var tlsidebarOff = new TimelineMax({

        });

        tlsidebarOff.to("#SiteViewButton", 0.5, {
            y: 0,
            ease: SteppedEase.config(14)
        });

        tlsidebarOff.play();
    }
}

function testcat(){
    TweenMax.to("#SiteViewButton", 0.5, {y: -406, ease: SteppedEase.config(14)});
    console.log("button animation trig");
    TweenMax.to(".TopBarContainer", 1, {scaleY: 1, ease: Power4.easeOut});
    console.log("scale animation trig");
    document.getElementById("topbarpin").style.position = "fixed";
    console.log("position fixed");
}

//function testflop(){
//    //----------------FlipFlop Code
//
//    if(state == false){
//        state = true;
//        alert("State was False it is now True");
//    } else {
//        state = false;
//        alert("State was True it is now False")
//    }
//}
//
//function PulldownIconAnimationOn(){
//    PullDown();
//	var tlsidebar = new TimelineMax({
//		
//	});
//	
//	tlsidebar.to("#SiteViewButton", 0.5, {
//		y: -406,
//		ease: SteppedEase.config(14)
//	});
//	
//	tlsidebar.play();
//    document.getElementById("AnimationContainer").setAttribute("onClick", "PulldownIconAnimationOff();");
//}
//
//function PulldownIconAnimationOff(){
//	var tlsidebar = new TimelineMax({
//		
//	});
//	
//	tlsidebar.to("#SiteViewButton", 0.5, {
//		y: 0,
//		ease: SteppedEase.config(14)
//	});
//	
//	tlsidebar.play();
//    document.getElementById("AnimationContainer").setAttribute("onClick", "PulldownIconAnimationOn();");
//}


