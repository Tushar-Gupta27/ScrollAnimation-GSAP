var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from("blockquote",.5,{x:200,opacity:0});
tl.from("span",1,{width:0},"=-0.5")
tl.from("#office",1,{x:-200,opacity:0},"=-1");
tl.from("#sky",1,{x:200,opacity:0},"=-1");


tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})


tl3.from(".text",2,{rotate:-720,opacity:0});

const scene = new ScrollMagic.Scene({
    triggerElement:".sticky",
    triggerHook:0,
    duration:"100%"
})
.setPin(".sticky")
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
  })
    .setTween(tl2)
          .addTo(controller);

          const scene3 = new ScrollMagic.Scene({
            triggerElement: ".scrollUp",
            triggerHook:0,
            duration:"100%"
          })
            .setTween(tl3)
            .setPin(".scrollUp")
            .addTo(controller);          

// if we add .from it will go from mentioned to initial that is in CSS and if we add .to its gonna go from initial to mentioned
// if we set pin, duration and hook it will only occur when its pinned so if we dont mention that it automatically happens when the triggerElement is in view
// for multiple screen scrolls different pins will be set
// old timelineMax thing also works with gsap 3 but new methods are there in DOcs

var tl4 = new TimelineMax();

tl4.to(".first",1,{y:500});
tl4.to(".fourth",1,{y:-500},"=-1");
tl4.to(".first",1,{opacity:0});
tl4.to(".fourth",1,{opacity:0},"=-1");
tl4.to(".second",1,{y:500});
tl4.to(".third",1,{x:600},"=-1");


const scene4 = new ScrollMagic.Scene({
  triggerElement: ".imgAnim",
  triggerHook:0,
  duration:"100%"
})
  .setTween(tl4)
  .setPin(".imgAnim")
  .addTo(controller);   



//   tl4.to(".second",1,{opacity:1});
// tl4.to(".third",1,{opacity:1});
// tl4.to(".fourth",1,{opacity:1});