function Check_Version(){
    var rv = -1; // Return value assumes failure.

    if (navigator.appName == 'Microsoft Internet Explorer'){

       var ua = navigator.userAgent,
           re  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

       if (re.exec(ua) !== null){
         rv = parseFloat( RegExp.$1 );
       }
    }
    else if(navigator.appName == "Netscape"){                       
       /// in IE 11 the navigator.appVersion says 'trident'
       /// in Edge the navigator.appVersion does not say trident
       if(navigator.appVersion.indexOf('Trident') === -1) rv = 12;
       else rv = 11;
    }       

    return rv;          
}

console.log(Check_Version().toString());

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
	
//    var pinbar = new ScrollMagic.Scene({
//        triggerElement: "#topbarpin",
//        triggerHook: 0
//    })
//    .setPin("#topbarpin")
//    .addIndicators({
//        name: "Topbar Pin"
//    })
//    .addTo(controller);
	
    // pin bar to top
    
    var scrollpos = new ScrollMagic.Scene({
        triggerElement: "#topbarpin",
        triggerHook: 1,
        duration: "100%"
    })
    .addIndicators({
        name: "Scroll Pos"
    })
    .addTo(controller)
    .on("progress", function (e) {
         window.pinpos = e.progress;
    });
    //get the postion of the scrollbar
});

var AnimationState = false;
    
function TopIconTrigger(){

    if(AnimationState === false){
        AnimationState = true;

        TweenMax.to("#SiteViewButton", 0.5, {y: -406, ease: SteppedEase.config(14)});
        TweenMax.to("#topbarpin", 1, {height: "100vh", ease: Power4.easeOut});
        document.getElementById("topbarpin").style.position = "fixed";
        TweenMax.to("#topbarpin", 1, {opacity: 1, ease: Power4.easeOut});
        console.log("Animation Done - The Bar is DOWN");
        
//        $('html, body').css({
//            overflow: 'hidden',
//            height: '100%'
//        });

    } else {
        AnimationState = false;
		
		TweenMax.to("#SiteViewButton", 0.5, {y: 0, ease: SteppedEase.config(14)});
        TweenMax.to("#topbarpin", 1, {height: "7.5vh", ease: Power4.easeOut});
		
		// need to have it set up so it knows weither it need to remain fixed because its pinned or if its relative and dosn't have a pin. Postion can be found with scrollmagic and it can be identical and scale across many screen sizes http://scrollmagic.io/examples/basic/custom_actions.html
		
        //this tool bar so work as expected from any point
        
        //on intial load if the bar is in mid fade and is then expanded it just disapears until scroll magic has pinned it it then takes the proper place
        
        // it moves it to the bottom of the screen for some reason and it follows it for some reason as well
        // maybe make it so it moves it to the top of the screen
        
        document.getElementById("topbarpin").style.position = "fixed";
		
        console.log(pinpos.toFixed(3))
		
        console.log("Animation Done - The Bar is UP");
        
//        $('html, body').css({
//            overflow: 'auto',
//            height: 'auto'
//        });
    }
}