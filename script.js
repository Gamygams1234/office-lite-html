// GSAP Animations
gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
})
timeline
    .from('.image', {
        x: '100vw',
        opacity: 0,
        delay: .5

    }, 0)
    .from('.description', {
        x: '-120%',
        opacity: 0,
        delay: .5
    }, 0)
   


// opacity left to right

ScrollTrigger.batch(".price-card", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
                stagger:.5,
                duration: 1
            })
    }
})
       // making the duration


//fade up
// ScrollTrigger.batch(".fade", {
//     start: "top bottom",
//     once: true,
//     onEnter: (elements, triggers) => {
//         gsap.from(elements, {
//                 opacity: 0,
//                 stagger:.5,
//                 duration: 1
//             })
//     }
// })