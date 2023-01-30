$(document).ready(function(){

    // Typed library
    var typed= new Typed(".element",{
        strings:["Ahmed Ali","a Backend Developer","a Frontend Developer","a FullStack Developer","a Designer"],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    // Animate Progress bar

    // waypoints function makes the function run when special section is viewed

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function(direction) {
            var prog = document.querySelectorAll(".progress-bar");
            prog[0].setAttribute("style","width:100%; transition:1s all ");
            prog[1].setAttribute("style","width:95%; transition:1.5s all ");
            prog[2].setAttribute("style","width:80%; transition:1.9s all ");
            prog[3].setAttribute("style","width:90%; transition:2.3s all ");
            prog[4].setAttribute("style","width:99%; transition:2.7s all ");
            prog[5].setAttribute("style","width:79%; transition:3s all ");
        },
        offset:'90%'
    })

    //  filterzr liberary help me to filter categories and show them 

    var filterzr = $('.filter-container').filterizr({
        animationDuration : 0.5,
    });
        

    // Owl carousel 

    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        items:1
    });

});