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

var pinpos;

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
	
    // pin bar to top
	
	var scrollposstate = false;
    
    var scrollpos = new ScrollMagic.Scene({
        triggerElement: "#topbarpin",
        triggerHook: 0
    })
    .addIndicators({
        name: "Scroll Pos"
    })
    .addTo(controller)
    .on("enter leave", function() {
         if(scrollposstate === false){
			 scrollposstate = true;
			 pinpos = true;
		 }else{
			 scrollposstate = false;
			 pinpos = false;
		 }
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
		document.getElementById("topbarpin").style.top = 0;
        TweenMax.to("#topbarpin", 1, {opacity: 1, ease: Power4.easeOut});
    } else {
        AnimationState = false;
		
		TweenMax.to("#topbarpin", 0.5, {opacity: "0", ease: Power4.easeOut});
		TweenMax.to("#SiteViewButton", 0.5, {y: 0, ease: SteppedEase.config(14)});
        TweenMax.to("#topbarpin", 0, {height: "7.5vh"});
		TweenMax.to("#topbarpin", 0.5, {opacity: "1", ease: Power4.easeOut});
       	
		if(pinpos === true){
			document.getElementById("topbarpin").style.position = "fixed";
		}else{
			document.getElementById("topbarpin").style.position = "relative";
		}
       
        // add detection to tell if the top is fixed and if its not then have it just fade in then move down  
		// Fix opacity fading somthings off maybe I need a timeline for that perhalps
		// apears to have affected both transitions where it moves back maybe I deleted somthing by mistake check old git commits to figure it out
		
        console.log(pinpos.toString());
		// pinpos returns false when user is not in area
    }
}