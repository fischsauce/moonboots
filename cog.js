var cogTL = new TimelineMax({repeat:-1, repeatDelay:0, delay: 2.1});
var cog2TL = new TimelineMax({repeat:-1, repeatDelay:0, delay: 2});
var cog3TL = new TimelineMax({repeat:-1, repeatDelay:0, delay: 2.1});

var cogTLinit = new TimelineMax({});
var cog2TLinit = new TimelineMax({});
var cog3TLinit = new TimelineMax({});

cog2TLinit.from("#cog2", 1.5, {scale:0.01, transformOrigin:"109.74px 161.75px"});
cogTLinit.from("#cog1", 1.5, {scale:0.01, delay: 0.5, transformOrigin:"53.85px 153.78px"});
cog3TLinit.from("#cog3", 1.5, {scale:0.01, delay: 1, transformOrigin:"115.34px 214.47px"});

cog2TL.to("#cog2", 8, {rotation:360, transformOrigin:"109.74px 161.75px", ease: Power0.easeNone});
cogTL.to("#cog1", 3.8, {rotation:-360, transformOrigin:"53.85px 153.78px", ease: Power0.easeNone});
cog3TL.to("#cog3", 3.4, {rotation:-360, transformOrigin:"115.34px 214.47px", ease: Power0.easeNone});
