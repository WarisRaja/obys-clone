function loadingAnim(){
  var tl=gsap.timeline();
tl.from(".line h1",{
  y:150,
  stagger:0.25,
  duration:0.6,
  delay:0.5
});
tl.from("#line1-part1",{
  opacity:0,
  onStart:function(){
    var h5timer= document.querySelector("#line1-part1 h5");
    var count = 0;
    setInterval(function(){
      if(count <101)
        h5timer.textContent = count++;
      // else
      //   h5timer.textContent = count;
    },33);
  },
});

tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});

tl.to("#loader",{
  opacity:0,
  duration:0.2,
  delay:4,  
});


tl.from("#page1",{
  delay:0.2,
  y:1600,
  opacity:0,
  duration:0.5,
  ease:Power4,
});

tl.to("#loader",{
  display:"none",
});
tl.from("#nav",{
  opacity:0
})
tl.from("#hero1 h1 ,#hero2 h1,#hero3 h2,#hero4 h1",{
  y:120,
  stagger:0.2
})
};

function cursorAnim(){
  document.addEventListener("mousemove",function(details){
    gsap.to("#crsr",{
      left:details.x,
      top:details.y
    })
  });
  
  // Shery.makeMagnet("#nav-part2 h4" , {
    //  this is real
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
  // });
  
  
  Shery.makeMagnet("#nav-part2 h4" );
}

loadingAnim();
cursorAnim();

