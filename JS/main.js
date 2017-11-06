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

//site actually works not that bad on ie 10 exept the flexboxs are broken but there are ways around it https://stackoverflow.com/questions/18019450/css-flexbox-not-working-in-ie10
// You could just have it switch over to a verstion for legacy browsers
// or just redirect them to a place where they can download a more up to date browser

var pinpos;

$(function(){
	var controller = new ScrollMagic.Controller();
    
	//Fade out Scroll Arrow
	var downarrow = new ScrollMagic.Scene({
		triggerElement: ".titlecontainer",
		duration: "25%",
		triggerHook: 0
	})
	.setTween("#downarrow", 1, {opacity: 0, ease: Linear.easeNone}) 
//	.addIndicators({
//		name: "Down Arrow",
//		colorTrigger: "pink"
//	})
	.addTo(controller);
	
	//Fade in Topbar
	var pinbarfade = new ScrollMagic.Scene({
		triggerElement: "#topbarpin",
		duration: "25%",
		triggerHook: 0.8
	})
	.setTween("#topbarpin", 1, {opacity: 1, ease: Linear.easeNone})
//	.addIndicators({
//		name: "Topbar pin",
//		colorTrigger: "aqua"
//	})
	.addTo(controller);
	
	//Auto Pin Topbar
    var pinbar = new ScrollMagic.Scene({
        triggerElement: "#topbarpin",
        triggerHook: 0
    })
    .setPin("#topbarpin")
//    .addIndicators({
//        name: "Topbar Pin"
//    })
    .addTo(controller);
	
	var scrollposstate = false;
    
	//Deterimines the postion of the scroll so bar can return in natural way (Used Later)
    var scrollpos = new ScrollMagic.Scene({
        triggerElement: "#topbarpin",
        triggerHook: 0
    })
//    .addIndicators({
//        name: "Scroll Pos"
//    })
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
});

//Performs Topbar Expantion

var AnimationState = false;

function TopIconTrigger(){

    if(AnimationState === false){
        AnimationState = true;

        TweenMax.to("#SiteViewButton", 0.5, {y: -406, ease: SteppedEase.config(14)});
		//Animate three lines
        TweenMax.to("#topbarpin", 1, {height: "100vh", ease: Power4.easeOut});
		// main pull down
        $("#TopbarPin").css("position", "fixed");
		$("#TopbarPin").css("top", "0");
		// put bar to top and follow screen
		
		$("h1.TopbarText").css("font-size", "3rem");
		$("h1.TopbarText").css("font-weight", "normal");
		$(".TopbarBody").css("display", "flex");
		$(".TopbarBody").css("padding", "2%");
		$(".TopbarText").css("padding", "3%");
		
		$(".TopbarContainer").css("align-Items", "center");
		
		//document.getElementById("main").style.alignItems = "flex-start";

		
        TweenMax.to("#topbarpin", 1, {opacity: 1, ease: Power4.easeOut});
		//Make Opacity 1 if top bar is in mid scroll
		
		TweenMax.staggerFrom(".TopbarBodyHome", 0.5, {opacity:0, ease:Power4.easeOut}, 0.2);
		TweenMax.staggerFrom(".TopbarBodyDA9", 0.5, {opacity:0, ease:Power4.easeOut}, 0.2);
		TweenMax.staggerFrom(".TopbarBodyPreviousWork", 0.5, {opacity:0, ease:Power4.easeOut}, 0.2);
		//Animate the entrance of the products
		
		
		
    } else {
        AnimationState = false;

		if(pinpos === true){
			//Before Scroll Point
			document.getElementById("topbarpin").style.position = "fixed";
			TweenMax.to("#topbarpin", 1, {height: "7.5vh", ease: Power4.easeOut});
			//Set height back to default
			TweenMax.to("#SiteViewButton", 0.5, {y: 0, ease: SteppedEase.config(14)});
			//Trigger X Animation
			
			$("h1.TopbarText").css("font-size", "1.75rem");
			$("h1.TopbarText").css("font-weight", "lighter");
			$(".TopbarBody").css("display", "none");
			$(".TopbarBody").css("padding", "0");
			$(".TopbarText").css("padding", "0");
		
			
		}else{
			//After Scoll Point
			
			//Timeline so Fades occur after each other
			var fadetl = new TimelineLite();

			fadetl.to("#topbarpin", 0.5, {opacity: "0", ease: Power4.easeOut})
			//Fade Out
			.to("#SiteViewButton", 0.5, {y: 0, ease: SteppedEase.config(14)}, 0)
			//Trigger Animation
			.to("#topbarpin", 0, {height: "7.5vh", ease: Power4.easeOut})
			//Sets Height to normal
			.add(function() {document.getElementById("topbarpin").style.position = "relative"})
			//Reset Topbar Position
			.add(function(){
			$("h1.TopbarText").css("font-size", "1.75rem");
			$("h1.TopbarText").css("font-weight", "lighter");
			$(".TopbarBody").css("display", "none");
			$(".TopbarBody").css("padding", "0");
			$(".TopbarText").css("padding", "0");
			})
			.to("#topbarpin", 2, {opacity: "1", ease: Power4.easeOut}, 0.5);
			//Fade In
		}
    }
}