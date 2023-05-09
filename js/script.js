
gsap.registerPlugin(ScrollTrigger);

gsap.to('img-container',{
  scale:52,
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:1,
    start:"top top",
    end:'bottom',
    pin:true
  }
})

const timeline = gsap.timeline();

/*First page text animation*/ 
timeline.from('.title span' ,{
  y:150,
  skewY:6,
  duration:2
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity:0,
  duration:1
})