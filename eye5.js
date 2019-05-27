var eyeTL = new TimelineMax({repeat:-1, repeatDelay:0});
var glassTL = new TimelineMax({repeat:-1, repeatDelay:0});
var textTL = new TimelineMax({repeat:-1, repeatDelay:0});

var eye_inner = new Array ("#iris", "#pupil");

eyeTL.to(eye_inner, 3, {x:+10, ease: Power2.easeInOut});
eyeTL.to(pupil, 0.5, {scale: 0.80, transformOrigin: "50% 50%"});
eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 3, {x:-10, ease: Power2.easeInOut});
eyeTL.to(pupil, 0.5, {scale: 0.75, transformOrigin: "50% 50%"});
eyeTL.to(pupil, 0.5, {scale: 1, transformOrigin: "50% 50%"}, '+=1.5');
eyeTL.to(eye_inner, 3, {x:0, ease: Power2.easeInOut});

glassTL.to(glass, 3, {x:+16, ease: Power2.easeInOut});
glassTL.to(glass, 3, {x:-8, ease: Power2.easeInOut}, '+=2');
glassTL.to(glass, 3, {x:0, ease: Power2.easeInOut}, '+=2');

textTL.to(text_nexa, 16, {y:-550});
