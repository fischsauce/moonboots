// window.onload = function() {
//   var logo = document.getElementById("#layer2");
//   TweenMax.to(logo, 2, {left:"542px", backgroundColor:"black", borderBottomColor:"#90e500", color:"white"});
// }
var eyeTL = new TimelineMax({repeat:-1, repeatDelay:0});
var glassTL = new TimelineMax({repeat:-1, repeatDelay:0});
var textTL = new TimelineMax({repeat:-1, repeatDelay:0});

var eye_inner = new Array ("#iris", "#pupil");

// eyeTL.to(eye_inner, 3, {x:+10, ease: Power2.easeInOut});
// eyeTL.to(pupil, 0.5, {scale: 0.80, transformOrigin: "50% 50%"});
// eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: 'center'}, '+=1.5');
// eyeTL.to(eye_inner, 3, {x:-10, ease: Power2.easeInOut});
// eyeTL.to(pupil, 0.5, {scale: 0.75, transformOrigin: 'center'});
// eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: 'center'}, '+=1.5');
// eyeTL.to(eye_inner, 3, {x:0, ease: Power2.easeInOut});

eyeTL.to(eye_inner, 1, {x:+13, ease: Power2.easeInOut});
//eyeTL.to(pupil, 0.5, {scale: 0.80, transformOrigin: "50% 50%"});
//eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 1, {x:0, ease: Power2.easeInOut});
//eyeTL.to(pupil, 0.5, {scale: 0.75, transformOrigin: "50% 50%"});
//eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 1, {x:+11, ease: Power2.easeInOut});
eyeTL.to(eye_inner, 1, {x:0, ease: Power2.easeInOut});
//eyeTL.to(pupil, 0.5, {scale: 0.80, transformOrigin: "50% 50%"});
//eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 1, {x:-13, ease: Power2.easeInOut});
//eyeTL.to(pupil, 0.5, {scale: 0.75, transformOrigin: "50% 50%"});
//eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 1, {x:0, ease: Power2.easeInOut});
eyeTL.to(eye_inner, 1, {x:-13, ease: Power2.easeInOut});
//eyeTL.to(pupil, 0.5, {scale: 0.75, transformOrigin: "50% 50%"});
//eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 1, {x:0, ease: Power2.easeInOut});

glassTL.to(glass, 1, {x:+14, ease: Power2.easeInOut});
glassTL.to(glass, 2, {x:-2, ease: Power2.easeInOut}, '+=1');
glassTL.to(glass, 2, {x:0, ease: Power2.easeInOut}, '+=2');

//textTL.to(text_exo, 16, {y:-550});
textTL.fromTo(text_nexa, 16, {y:0}, {y:-550});
//TweenLite.to("#text_exo", 16, {y:-550});
