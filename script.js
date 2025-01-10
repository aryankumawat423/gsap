
gsap.from("h1",{
    x:500,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 h1",
 scrub:2,
        scroller:"body",
    }

})
gsap.from("h2",{
    x:500,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 h2",
        scroller:"body",
        start:"top 50%"
    }

})