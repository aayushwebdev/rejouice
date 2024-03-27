function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()

function cursorEffect() {
    var crsr = document.querySelector("#cursor")
    var page1Content = document.querySelector("#page1-content")

    page1Content.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function(){
        gsap.to("#cursor",{
            scale: 1,
            opacity:1
        })
    })
    page1Content.addEventListener("mouseleave", function(){
        gsap.to("#cursor",{
            scale: 0,
            opacity:0
        })
    })
}
cursorEffect()

function cursorEffect4() {
    var crsr4 = document.querySelector("#cursor4")
    var page4 = document.querySelector("#page4")

    page4.addEventListener("mousemove", function(dets){
        gsap.to("#cursor4", {
            x: dets.x,
            y: dets.y
        })
    })

    page4.addEventListener("mouseenter", function(){
        gsap.to("#cursor4",{
            scale: 1,
            opacity:1
        })
    })
    page4.addEventListener("mouseleave", function(){
        gsap.to("#cursor4",{
            scale: 0,
            opacity:0
        })
    })
}

function page2Animation() {
    // gsap.to("#page2 div h5",{
    //     duration: 0.5,
    //     scrollTrigger:{
    //         trigger: "#page2",
    //         scroller: "body",
    //         markers: true,
    //         start: "top -70%",
    //         end: "top -81%"
    //     }
    // })

    gsap.from("#page2 h1, #page3 h1", {
        y:120,
        stagger: 0.25,
        duration: 1,
        scrollTrigger:{
            trigger:"#page2",
            scroller: "#main",
            // markers: true, 
            start: "top 40%",
            end: "top 31%",
            scrub: 2
        }
    })
}
page2Animation()

function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          }
      });
}
sliderAnimation()

var tl = gsap.timeline()

tl.from("#loader h3",{
    x: 40,
    opactiy: 0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    stagger: 0.1,
    duration: 1
})
tl.to("#loader",{
    opactiy:0
})
tl.to("#loader",{
    display: "none"
})
tl.from("#page1-content h1 span",{
    y: 100,
    opacity:0,
    stagger: 0.1,
    duraction: 0.5,
    delay: -0.2
})
// tl.from("#footer #footer-bottom h1",{
//     y: 100,
//     opacity:0,
//     stagger: 0.1,
//     duraction: 0.5,
//     delay: -0.5,
//     scrollTrigger:{
//         trigger:"#footer-bottom",
//         loader: "body",
//         start: "top 40%",
//         end: "top: 50%"
//     }
// })
