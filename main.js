//////  INIT  ////////

container.addEventListener("mouseover", ctarollover);
container.addEventListener("mouseout", ctarolloff);
thereplay.addEventListener("click", replaybanner);

function replaybanner() {
  replayad();
}
function ctarollover() {
  TweenMax.to(cta, 0.2, {
    backgroundColor: "#FFF6E8",
    ease: "Quint.easeOut",
  });

  TweenMax.to(cta, 0.2, { scale: 0.9, ease: "Quad.easeInOut" });
}

function ctarolloff() {
  TweenMax.to(cta, 0.2, {
    backgroundColor: "#77C2F3",
    ease: "Quint.easeOut",
  });
  TweenMax.to(cta, 0.2, { scale: 1, ease: "Quad.easeInOut" });
}

showElement = function (e) {
  e.style.visibility = "visible";
};

hideElement = function (e) {
  e.style.visibility = "hidden";
};

function replayad() {
  showElement(txt1);
  TweenMax.set(txt1, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt2a);
  TweenMax.set(txt2a, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt2b);
  TweenMax.set(txt2b, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt3);
  TweenMax.set(txt3, { y: "0px", opacity: 1, scale: 1 });
  showElement(dog);
  TweenMax.set(dog, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt4a);
  TweenMax.set(txt4a, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt4b);
  TweenMax.set(txt4b, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt4c);
  TweenMax.set(txt4c, { y: "0px", opacity: 1, scale: 1 });
  showElement(finalframebg);
  TweenMax.set(finalframebg, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt5a);
  showElement(txt5b);
  showElement(txt5c);
  showElement(txt5d);
  showElement(cta);
  TweenMax.set(".halfsize", { transformOrigin: "left top", scale: 0.5 });
  TweenMax.set(".regsize", { transformOrigin: "left top", scale: 1 });
  TweenMax.set(".lgsize", { transformOrigin: "left top", scale: 2 });

  // set up initial positions
  hideElement(txt1);
  hideElement(txt2a);
  hideElement(txt2b);
  hideElement(txt3);
  hideElement(dog);
  hideElement(txt4a);
  hideElement(txt4b);
  hideElement(txt4c);
  hideElement(finalframebg);
  hideElement(txt5a);
  hideElement(txt5b);
  hideElement(txt5c);
  hideElement(txt5d);
  hideElement(cta);
  console.log("daaaamn 22");
  TweenMax.delayedCall(0, intro);
  // TweenMax.delayedCall(0, startAd);
}
function startAd() {
  startAd2();
  // size setup
  TweenMax.set(".halfsize", { transformOrigin: "left top", scale: 0.5 });
  TweenMax.set(".regsize", { transformOrigin: "left top", scale: 1 });
  TweenMax.set(".lgsize", { transformOrigin: "left top", scale: 2 });

  // set up initial positions
  hideElement(txt1);
  hideElement(txt2a);
  hideElement(txt2b);
  hideElement(txt3);
  hideElement(dog);
  hideElement(txt4a);
  hideElement(txt4b);
  hideElement(txt4c);
  hideElement(finalframebg);
  hideElement(txt5a);
  hideElement(txt5b);
  hideElement(txt5c);
  hideElement(txt5d);
  hideElement(cta);
  console.log("daaaamn 22");
  TweenMax.delayedCall(0, intro);
}

intro = function () {
  TweenMax.delayedCall(0, revealAd);
  TweenMax.delayedCall(1, frame1);
};

revealAd = function () {
  TweenMax.to(cover, 0.5, { alpha: 0 });
};

frame1 = function () {
  showElement(txt1);
  TweenMax.from(txt1, 1, {
    y: 300,
    ease: "Back.easeInOut",
    onComplete: function () {
      frame2();
    },
  });
};

frame2 = function () {
  let amountofdelay = 1.5;
  showElement(txt2a);
  showElement(txt2b);
  TweenMax.to(txt1, 0.5, {
    y: "-16",
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.from(txt2a, 1, {
    y: 300,
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0,
  });
  TweenMax.from(txt2b, 1, {
    y: 300,
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0.1,
    onComplete: function () {
      frame3();
    },
  });
};

frame3 = function () {
  let amountofdelay = 1.5;

  showElement(dog);
  TweenMax.set(dog, { y: 300 });
  showElement(txt3);

  TweenMax.to(txt1, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.to(txt2a, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.to(txt2b, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.from(txt3, 1, {
    y: 300,
    ease: "Quint.easeInOut",
    delay: amountofdelay + -0.2,
  });

  TweenMax.to(dog, 2, {
    y: 115,
    ease: "Quint.easeInOut",
    delay: amountofdelay + -0.2,
    onComplete: function () {
      frame5();
    },
  });
};

frame5 = function () {
  let amountofdelay = 1.5;
  showElement(txt4a);
  showElement(txt4b);
  showElement(txt4c);

  TweenMax.to(txt3, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });

  TweenMax.to(dog, 1, {
    y: 0,
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0.2,
  });

  TweenMax.from(txt4a, 0.2, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.9,
  });
  TweenMax.to(txt4a, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 2,
  });

  TweenMax.from(txt4b, 0.2, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 1.1,
  });
  TweenMax.to(txt4b, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 2.2,
  });

  TweenMax.from(txt4c, 0.2, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 1.2,
  });
  TweenMax.to(txt4c, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 2.4,
    onComplete: function () {
      frame6();
    },
  });
};

frame6 = function () {
  let amountofdelay = 0;
  showElement(finalframebg);
  showElement(txt5a);
  showElement(txt5b);
  showElement(txt5c);
  showElement(txt5d);
  showElement(cta);

  TweenMax.from(finalframebg, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.1,
  });

  TweenMax.from(txt5a, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.1,
  });
  TweenMax.from(txt5b, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.from(txt5c, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.3,
  });
  TweenMax.from(txt5d, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.4,
  });

  TweenMax.to(dog, 0.3, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0.1,
  });

  TweenMax.from(cta, 0.3, {
    scale: 0.7,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.5,
  });
};

//////  INIT  ////////

container2.addEventListener("mouseover", ctarollover);
container2.addEventListener("mouseout", ctarolloff);
thereplay2.addEventListener("click", replaybanner2);

function replaybanner2() {
  replayad2();
}

function ctarollover() {
  TweenMax.to(cta2, 0.2, {
    backgroundColor: "#FFF6E8",
    ease: "Quint.easeOut",
  });

  TweenMax.to(cta2, 0.2, { scale: 0.9, ease: "Quad.easeInOut" });
}

function ctarolloff() {
  TweenMax.to(cta2, 0.2, {
    backgroundColor: "#77C2F3",
    ease: "Quint.easeOut",
  });
  TweenMax.to(cta2, 0.2, { scale: 1, ease: "Quad.easeInOut" });
}

showElement = function (e) {
  e.style.visibility = "visible";
};

hideElement = function (e) {
  e.style.visibility = "hidden";
};

function replayad2() {
  showElement(txt1);
  TweenMax.set(txt1, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt2a);
  TweenMax.set(txt2a, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt2b);
  TweenMax.set(txt2b, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt3);
  TweenMax.set(txt3, { y: "0px", opacity: 1, scale: 1 });
  showElement(dog);
  TweenMax.set(dog, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt4a);
  TweenMax.set(txt4a, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt4b);
  TweenMax.set(txt4b, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt4c);
  TweenMax.set(txt4c, { y: "0px", opacity: 1, scale: 1 });
  showElement(finalframebg);
  TweenMax.set(finalframebg, { y: "0px", opacity: 1, scale: 1 });
  showElement(txt5a);
  showElement(txt5b);
  showElement(txt5c);
  showElement(txt5d);
  showElement(cta);

  TweenMax.set(".halfsize", { transformOrigin: "left top", scale: 0.5 });
  TweenMax.set(".regsize", { transformOrigin: "left top", scale: 1 });
  TweenMax.set(".lgsize", { transformOrigin: "left top", scale: 2 });

  // set up initial positions
  hideElement(txtbubble12);
  hideElement(dots12);
  hideElement(txtbubble22);
  hideElement(dots22);
  hideElement(txtbubble32);
  hideElement(txtbubble42);
  hideElement(dog2);
  hideElement(txt4a2);
  hideElement(txt4b2);
  hideElement(txt4c2);
  hideElement(finalframebg2);
  hideElement(txt5a2);
  hideElement(txt5b2);
  hideElement(txt5c2);
  hideElement(txt5d2);
  hideElement(cta2);
  TweenMax.delayedCall(0, intro2);
  // TweenMax.delayedCall(0, startAd2);
}

function startAd2() {
  // size setup
  TweenMax.set(".halfsize", { transformOrigin: "left top", scale: 0.5 });
  TweenMax.set(".regsize", { transformOrigin: "left top", scale: 1 });
  TweenMax.set(".lgsize", { transformOrigin: "left top", scale: 2 });

  // set up initial positions
  hideElement(txtbubble12);
  hideElement(dots12);
  hideElement(txtbubble22);
  hideElement(dots22);
  hideElement(txtbubble32);
  hideElement(txtbubble42);
  hideElement(dog2);
  hideElement(txt4a2);
  hideElement(txt4b2);
  hideElement(txt4c2);
  hideElement(finalframebg2);
  hideElement(txt5a2);
  hideElement(txt5b2);
  hideElement(txt5c2);
  hideElement(txt5d2);
  hideElement(cta2);
  TweenMax.delayedCall(0, intro2);
}

intro2 = function () {
  TweenMax.delayedCall(0, revealAd2);
  TweenMax.delayedCall(1, frame12);
  TweenMax.delayedCall(2, bluebubbles);
  TweenMax.delayedCall(4.2, creambubbles);
  TweenMax.delayedCall(6.5, bluebubbles);
  TweenMax.delayedCall(8.7, creambubbles);
};

revealAd2 = function () {
  TweenMax.to(cover2, 0.5, { alpha: 0 });
};

bluebubbles = function () {
  TweenMax.to(txtdotA32, 0.5, {
    scale: 0,
    ease: "Quint.easeOut",
  });
  TweenMax.to(txtdotA22, 0.5, {
    scale: 0,
    delay: -0.5,
    ease: "Quint.easeOut",
  });
  TweenMax.to(txtdotA12, 0.5, {
    scale: 0,
    delay: -0.5,
    ease: "Quint.easeOut",
  });
};

creambubbles = function () {
  TweenMax.to(txtdotB32, 0.5, {
    scale: 0,
    ease: "Quint.easeOut",
  });
  TweenMax.to(txtdotB22, 0.5, {
    scale: 0,
    delay: -0.5,
    ease: "Quint.easeOut",
  });
  TweenMax.to(txtdotB12, 0.5, {
    scale: 0,
    delay: -0.5,
    ease: "Quint.easeOut",
  });
};

frame12 = function () {
  showElement(dots12);
  showElement(txtbubble12);
  TweenMax.from(txtdotA32, 0.5, {
    scale: 0,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotA22, 0.5, {
    scale: 0,
    delay: -0.2,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotA12, 0.5, {
    scale: 0,
    delay: -0.4,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtbubble12, 0.3, {
    scale: 0,
    delay: 1.2,
    ease: "Back.easeOut",
    onComplete: function () {
      frame22();
    },
  });
};

frame22 = function () {
  showElement(txtbubble22);
  showElement(dots22);
  let amountofdelay = 1;
  TweenMax.to(txtbubble12, 0, {
    y: "-10",
    delay: 1,
  });
  TweenMax.from(txtdotA32, 0.5, {
    scale: 0,
    delay: amountofdelay,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotA22, 0.5, {
    scale: 0,
    delay: amountofdelay + -0.2,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotA12, 0.5, {
    scale: 0,
    delay: amountofdelay + -0.4,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotB32, 0.5, {
    scale: 0,
    delay: amountofdelay,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotB22, 0.5, {
    scale: 0,
    delay: amountofdelay + -0.2,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotB12, 0.5, {
    scale: 0,
    delay: amountofdelay + -0.4,
    ease: "Back.easeIn",
  });
  TweenMax.to(txtbubble12, 0, {
    y: "-70",
    delay: amountofdelay + 1,
  });
  TweenMax.from(txtbubble22, 0.3, {
    scale: 0,
    delay: amountofdelay + 1,
    ease: "Back.easeOut",
    onComplete: function () {
      frame32();
    },
  });
};

frame32 = function () {
  showElement(txtbubble32);
  showElement(dots12);
  let amountofdelay = 1;
  TweenMax.to(txtbubble12, 0, {
    y: "-80",
    delay: 1,
  });
  TweenMax.to(txtbubble22, 0, {
    y: "-10",
    delay: 1,
  });
  TweenMax.to(txtdotA32, 0.5, {
    scale: 1,
    delay: amountofdelay,
    ease: "Back.easeIn",
  });
  TweenMax.to(txtdotA22, 0.5, {
    scale: 1,
    delay: amountofdelay + -0.2,
    ease: "Back.easeIn",
  });
  TweenMax.to(txtdotA12, 0.5, {
    scale: 1,
    delay: amountofdelay + -0.4,
    ease: "Back.easeIn",
  });
  TweenMax.from(txtdotB32, 0.5, {
    scale: 0,
    delay: amountofdelay,
    ease: "Back.easeIn",
  });
  TweenMax.to(txtbubble12, 0, {
    y: "-130",
    delay: amountofdelay + 1,
  });
  TweenMax.to(txtbubble22, 0, {
    y: "-50",
    delay: amountofdelay + 1,
  });
  TweenMax.from(txtbubble32, 0.3, {
    scale: 0,
    delay: amountofdelay + 1,
    ease: "Back.easeOut",
    onComplete: function () {
      frame42();
    },
  });
};

frame42 = function () {
  showElement(txtbubble42);
  showElement(dots22);
  let amountofdelay = 1;
  TweenMax.to(txtbubble12, 0, {
    y: "-140",
    delay: 1,
  });
  TweenMax.to(txtbubble22, 0, {
    y: "-60",
    delay: 1,
  });
  TweenMax.to(txtbubble32, 0, {
    y: "-10",
    delay: 1,
  });
  TweenMax.to(txtdotB32, 0.5, {
    scale: 1,
    delay: amountofdelay,
    ease: "Back.easeIn",
  });
  TweenMax.to(txtdotB22, 0.5, {
    scale: 1,
    delay: amountofdelay + -0.2,
    ease: "Back.easeIn",
  });
  TweenMax.to(txtdotB12, 0.5, {
    scale: 1,
    delay: amountofdelay + -0.4,
    ease: "Back.easeIn",
  });
  // TweenMax.from(txtdotB3, 0.5, {
  //   scale: 0,
  //   delay: amountofdelay,
  //   ease: "Back.easeIn",
  // });
  TweenMax.to(txtbubble12, 0, {
    y: "-230",
    delay: amountofdelay + 1,
  });
  TweenMax.to(txtbubble22, 0, {
    y: "-150",
    delay: amountofdelay + 1,
  });
  TweenMax.to(txtbubble32, 0, {
    y: "-90",
    delay: amountofdelay + 1,
  });
  TweenMax.from(txtbubble42, 0.3, {
    scale: 0,
    delay: amountofdelay + 1,
    ease: "Back.easeOut",
    onComplete: function () {
      frame52();
    },
  });
};

frame52 = function () {
  let amountofdelay = 1.5;

  showElement(dog2);
  TweenMax.set(dog2, { y: 300 });

  TweenMax.to(dog2, 2, {
    y: 115,
    ease: "Quint.easeInOut",
    delay: amountofdelay + -0.2,
    onComplete: function () {
      frame62();
    },
  });
};

frame62 = function () {
  let amountofdelay = 1.5;
  showElement(txt4a2);
  showElement(txt4b2);
  showElement(txt4c2);

  TweenMax.to(txtbubble12, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.to(txtbubble22, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.to(txtbubble32, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.to(txtbubble42, 0.2, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });

  TweenMax.to(dog2, 1, {
    y: 0,
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0.2,
  });

  TweenMax.from(txt4a2, 0.2, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.9,
  });
  TweenMax.to(txt4a2, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 2,
  });

  TweenMax.from(txt4b2, 0.2, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 1.1,
  });
  TweenMax.to(txt4b2, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 2.2,
  });

  TweenMax.from(txt4c2, 0.2, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 1.2,
  });
  TweenMax.to(txt4c2, 0.4, {
    scale: 0.8,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 2.4,
    onComplete: function () {
      frame72();
    },
  });
};

frame72 = function () {
  let amountofdelay = 0;
  showElement(finalframebg2);
  showElement(txt5a2);
  showElement(txt5b2);
  showElement(txt5c2);
  showElement(txt5d2);
  showElement(cta2);

  TweenMax.from(finalframebg2, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.1,
  });

  TweenMax.from(txt5a2, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.1,
  });
  TweenMax.from(txt5b2, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.2,
  });
  TweenMax.from(txt5c2, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.3,
  });
  TweenMax.from(txt5d2, 1, {
    y: 300,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.4,
  });

  TweenMax.to(dog2, 0.3, {
    scale: 0.9,
    opacity: 0,
    ease: "Quint.easeInOut",
    delay: amountofdelay + 0.1,
  });

  TweenMax.from(cta2, 0.3, {
    scale: 0.7,
    opacity: 0,
    ease: "Quint.easeOut",
    delay: amountofdelay + 0.5,
  });
};
