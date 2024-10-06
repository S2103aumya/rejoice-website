let page1Content= document.querySelector(".page1-content");
let cursor= document.querySelector(".cursor");

page1Content.addEventListener("mousemove",function(dets){
    cursor.style.left= dets.x+"px";
    cursor.style.top= dets.y+"px";

})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor, {
        scale:1,
        opacity:1,
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor, {
        scale:0,
        opacity:0,
    })
})

function page2Animation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scrub: 2,
            stagger:1,
            trigger: ".page2-content",
            start: "top 40%",     // Animation starts when the top of #page2 hits 80% of the viewport
            end: "top 30%"         // Animation ends when the top of #page2 hits 5% of the viewport
        }
    });

    // Add your animation here, for example:
    tl.from(".page2-content", {
        y: 100,                  // Start from 100px below
        duration: 0.5,           // Duration of 1.5 seconds
        ease: "power2.out"       // Smooth easing
    });
}
document.addEventListener("DOMContentLoaded", function() {
    page2Animation();
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
    },
});