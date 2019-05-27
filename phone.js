var tlTopScreen = new TimelineMax({repeat:-1, repeatDelay:2.0});
var tlBottomScreen = new TimelineMax({repeat:-1, repeatDelay:2.0});

tlTopScreen.fromTo(["#top_screen"], 2.5, {y:58.3}, {y:-28, ease:Back.easeOut.config(3)});
	//.fromTo("#top_shadow", 3.5, {y:50}, {y:-12}, '-=3.5');
tlBottomScreen.fromTo(["#bottom_screen", "#top_shadow"], 2.5, {y:26.5}, {y:-16, ease:Back.easeOut.config(3)});

tlTopScreen.fromTo(["#top_screen"], 2.5, {y:-28}, {y:58.3, ease:Back.easeIn.config(3)}, '+=1.5');
tlBottomScreen.fromTo(["#bottom_screen", "#top_shadow"], 2.5, {y:-16}, {y:26.5, ease:Back.easeIn.config(3)}, '_+=1.5');
