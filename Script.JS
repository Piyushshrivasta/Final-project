gsap.set("#Banner", {
    top: "120vh"
})
gsap.to("#Banner",{
    scrollTrigger: {
        trigger: "#two",
        start: "top 100%",
        end: "top 40%",
        scrub: 2
    },
    top: "-10vw",
    rotate: "-170deg",
    duration: 2,
    ease: Circ.easeOut

})
gsap.to("#fcircle",{
    scrollTrigger: {
        trigger: "#two",
        start: "top 100%",
        end: "30 10%",
        scrub: 3
    },
    rotate: "720deg",
    ease: Power0.easeIn

})
gsap.to("#scircle",{
    scrollTrigger: {
        trigger: "#two",
        start: "top 100%",
        end: "30 10%",
        scrub: 2
    },
    rotate: "-420deg",
    ease: Power0.easeIn

})
gsap.to("#tcircle",{
    scrollTrigger: {
        trigger: "#two",
        start: "top 100%",
        end: "30 10%",
        scrub: 2
    },
    rotate: "620deg",
    ease: Power0.easeIn

})
gsap.to("#innercircle",{
    scrollTrigger: {
        trigger: "#two",
        start: "top 30%",
        end: "10 10%",
        scrub: 4
    },
    scale: 2,
    rotate: "360deg",
    color:"white",
    ease: Expo.easeInOut

})
   var tl = gsap.timeline({scrollTrigger: {
    trigger:" #three",
    start:  "center center",
    end: "80% 20%",
    pin: true,
    scrub: 2
}
});
   tl
.to("#photu", {
     top: "50%",
     ease: Circ.easeOut,
    rotate:"720deg"
})
.to("#photus", {
    left: "65%",
    ease: Power0.easeInOut
})
.to("#photus", {
    left: "65%",
    ease: Power0.easeInOut
})
.to(".abcd", {
    left: "-100%",
    ease: Power0.easeInOut
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#four",
        start: "center center",
        pin: true,
        scrub: 3
    }
})
tl2.to(".img",{
    opacity: 1,
    stagger: .2
}, "a")
tl2.to(".img",{
    opacity: 0,
    delay: .2,
    stagger: .2
}, "a")
.to("#four h1 span",{
    y: "-50",
    ease: Circ.easeInOut,
    stagger: .2
}, "a")
.to("#four h1 span",{
    y: "0",
    ease: Power1.easeInOut,
    stagger: .3
}, "a")


document
.querySelectorAll("#right a")
.forEach(function(link){
    link.addEventListener("mouseover", function(dets){
        gsap.to(".imgb", {
            x: dets.target.dataset.index * -100 + "%" ,
            ease: "power3",
            duration: 1

        })

    })
   
})
ScrollTrigger.create({
    onUpdate: function(prg){
        gsap.to("#progress",{width: Math.floor(prg.progress * 100) + "%"});
    }
})

