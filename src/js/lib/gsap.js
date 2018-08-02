function clouds() {

  var tl = new TimelineMax({
    repeat: -1
  });

  tl.to('#clouds', 52, {
    backgroundPosition: '-2247px bottom',
    force3D:true,
    rotation:0.01,
    z:0.01,
    //autoRound:false,
    ease: Linear.easeNone
  });

  return tl;
}

var masterTL = new TimelineMax({
  repeat: -1
});


// animation on load
$(window).on('load', function() {

  var tll = new TimelineMax({});

  tll.to('.letter-b', 1, {x:-200,y:0, opacity: 0})
    .to('.letter-b', 1, {x:329,y:0, opacity: 1});

  tll.to('.text-anim', 1, {
    x:-200,
    y:-100,
    opacity: 0
  })
    .to('.text-anim', 1, {
      x:380,
      y:200,
      opacity: 1
    })
    .to('.text-anim', 1, {
      rotation: -45,
      transformOrigin: 'center bottom',
      ease: Elastic.easeOut
    }, '-=1')
    .to('.text-anim', 1, {
      rotation: -360,
      ease: Circ.easeIn
    })
    .to('.text-anim', 1, {
      rotation: 360,
      ease: Circ.easeIn
    }, '-=1')
    .to('.text-anim', 1, {
      rotation: 45
    })
    .to('.text-anim', 1, {
      rotation: -45
    }, '-=1')
    .to(['.text-anim'], 1, {
      rotationX: 180,
      scale: 0
    });


  masterTL
    .add(clouds(),0)
    .timeScale(0.7)
    .progress(1).progress(0)
    .play();

});
