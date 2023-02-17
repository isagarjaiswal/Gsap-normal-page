var t1 = gsap.timeline();
t1.from(".card1",{
    x:"-1000px",
    opacity:0,
    duration:0.6,
    delay:0.5,
    
})
t1.from(".card3",{
    x:"1000px",
    opacity:0,
    duration:0.6,
    delay:0.5,
    
})
t1.from(".card2",{
  opacity:0,
  duration:0.6,
  delay:0.5,

})