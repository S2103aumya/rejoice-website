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

function page2Animation(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            // markers:true,
            start: "top 80%",
            end:"top 5%",
        }
    });
    tl.from(".page2-content p, .page2-content h5",{
        y:80,  
        ease: "power3.Inout",
        opacity:0,
        duration: 1, 
        stagger: 0.3,  
        toggleActions: "restart none none none",
    })
    tl.from(".page2 .line", {
        width: "0%",
        // duration: 0.8, // Animation duration
        ease: Power4.InOut // Easing function
    },0.5);
    tl.from(".up",{
        // y: "3vw",
        duration: 1,
    })
}
page2Animation();

function page3Animation(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger: ".page3top",
        }
    })
    tl.from(".page3top h2",{
        y:80,  
        ease: "power3.Inout",
        opacity:0,
        duration: 1, 
        stagger: 0.3,  
        toggleActions: "restart none none none",
    })
}
page3Animation();
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