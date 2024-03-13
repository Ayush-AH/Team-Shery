function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

const clutterAnimation = (element) => {
  const htmlTag = document.querySelector(element);
  let clutter = "";

  // Wraps each letter in a span with a class for animation
  htmlTag.textContent.split("").forEach((word) => {
    clutter += `<span class="inline-block">${word}</span>`;
  });

  // Replaces the element's content with the animated spans
  htmlTag.innerHTML = clutter;
};

function navAnimation() {
  clutterAnimation(".text1");
  clutterAnimation(".text2");
  const navElem1 = document.querySelector(".nav-elem1");
  navElem1.addEventListener("mouseenter", () => {
    gsap.to(".text1>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text2>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });
  navElem1.addEventListener("mouseleave", () => {
    gsap.to(".text1>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text2>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });

  clutterAnimation(".text3");
  clutterAnimation(".text4");
  const navElem2 = document.querySelector(".nav-elem2");
  navElem2.addEventListener("mouseenter", () => {
    gsap.to(".text3>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text4>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });
  navElem2.addEventListener("mouseleave", () => {
    gsap.to(".text3>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text4>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });

  clutterAnimation(".text5");
  clutterAnimation(".text6");
  const navElem3 = document.querySelector(".nav-elem3");
  navElem3.addEventListener("mouseenter", () => {
    gsap.to(".text5>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text6>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });
  navElem3.addEventListener("mouseleave", () => {
    gsap.to(".text5>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text6>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });

  clutterAnimation(".text7");
  clutterAnimation(".text8");
  const navElem4 = document.querySelector(".nav-elem4");
  navElem4.addEventListener("mouseenter", () => {
    gsap.to(".text7>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text8>span", {
      y: -15,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });
  navElem4.addEventListener("mouseleave", () => {
    gsap.to(".text7>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
    gsap.to(".text8>span", {
      y: 0,
      stagger: {
        from: "center",
        amount: 0.4,
      },
    });
  });
}
navAnimation();

function sheryJs() {
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    Shery.mouseFollower({
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

    Shery.imageEffect(".img1,.img2,.img3,.img4", {
      style: 5, //Select Style
      gooey: true,
      // debug: true, // Debug Panel
      config: {
        a: { value: 2, range: [0, 30] },
        b: { value: 0.75, range: [-1, 1] },
        zindex: { value: "9", range: [-9999999, 9999999] },
        aspect: { value: 0.7988872425992561 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0.05, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.49, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
    });

    Shery.makeMagnet(".logo" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });

    const page1Left = document.querySelectorAll(".page1-main-left>h1");
      page1Left.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
          gsap.to(".mousefollower", {
            scale: 6,
          });
        });

      elem.addEventListener("mouseleave", () => {
        gsap.to(".mousefollower", {
          scale: 1,
        });
      });
    });
  }
}

sheryJs();


function canvas(){


  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./ayush-can/ayush1 (1).png
    ./ayush-can/ayush1 (2).png
    ./ayush-can/ayush1 (3).png
    ./ayush-can/ayush1 (4).png
    ./ayush-can/ayush1 (5).png
    ./ayush-can/ayush1 (6).png
    ./ayush-can/ayush1 (7).png
    ./ayush-can/ayush1 (8).png
    ./ayush-can/ayush1 (9).png
    ./ayush-can/ayush1 (10).png
    ./ayush-can/ayush1 (11).png
    ./ayush-can/ayush1 (12).png
    ./ayush-can/ayush1 (13).png
    ./ayush-can/ayush1 (14).png
    ./ayush-can/ayush1 (15).png
    ./ayush-can/ayush1 (16).png
    ./ayush-can/ayush1 (17).png
    ./ayush-can/ayush1 (18).png
    ./ayush-can/ayush1 (19).png
    ./ayush-can/ayush1 (20).png
    ./ayush-can/ayush1 (21).png
    ./ayush-can/ayush1 (22).png
    ./ayush-can/ayush1 (23).png
    ./ayush-can/ayush1 (24).png
    ./ayush-can/ayush1 (25).png
    ./ayush-can/ayush1 (26).png
    ./ayush-can/ayush1 (27).png
    ./ayush-can/ayush1 (28).png
    ./ayush-can/ayush1 (29).png
    ./ayush-can/ayush1 (30).png
    ./ayush-can/ayush1 (31).png
    ./ayush-can/ayush1 (32).png
    ./ayush-can/ayush1 (33).png
    ./ayush-can/ayush1 (34).png
    ./ayush-can/ayush1 (35).png
    ./ayush-can/ayush1 (36).png
    ./ayush-can/ayush1 (37).png
    ./ayush-can/ayush1 (38).png
    ./ayush-can/ayush1 (39).png
    ./ayush-can/ayush1 (40).png
    ./ayush-can/ayush1 (41).png
    ./ayush-can/ayush1 (42).png
    ./ayush-can/ayush1 (43).png
    ./ayush-can/ayush1 (44).png
    ./ayush-can/ayush1 (45).png
    ./ayush-can/ayush1 (46).png
    ./ayush-can/ayush1 (47).png
    ./ayush-can/ayush1 (48).png
    ./ayush-can/ayush1 (49).png
    ./ayush-can/ayush1 (50).png
    ./ayush-can/ayush1 (51).png
    ./ayush-can/ayush1 (52).png
    ./ayush-can/ayush1 (53).png
    ./ayush-can/ayush1 (54).png
    ./ayush-can/ayush1 (55).png
    ./ayush-can/ayush1 (56).png
    ./ayush-can/ayush1 (57).png
    ./ayush-can/ayush1 (58).png
    ./ayush-can/ayush1 (59).png
    ./ayush-can/ayush1 (60).png
    ./ayush-can/ayush1 (61).png
    ./ayush-can/ayush1 (62).png
    ./ayush-can/ayush1 (63).png
    ./ayush-can/ayush1 (64).png
    ./ayush-can/ayush1 (65).png
    ./ayush-can/ayush1 (66).png
    ./ayush-can/ayush1 (67).png
    ./ayush-can/ayush1 (68).png
    ./ayush-can/ayush1 (69).png
    ./ayush-can/ayush1 (70).png
    ./ayush-can/ayush1 (71).png
    ./ayush-can/ayush1 (72).png
    ./ayush-can/ayush1 (73).png
    ./ayush-can/ayush1 (74).png
    ./ayush-can/ayush1 (75).png
    ./ayush-can/ayush1 (76).png
    ./ayush-can/ayush1 (77).png
    ./ayush-can/ayush1 (78).png
    ./ayush-can/ayush1 (79).png
    ./ayush-can/ayush1 (80).png
    ./ayush-can/ayush1 (81).png
    ./ayush-can/ayush1 (82).png
    ./ayush-can/ayush1 (83).png
    ./ayush-can/ayush1 (84).png
    ./ayush-can/ayush1 (85).png
    ./ayush-can/ayush1 (86).png
    ./ayush-can/ayush1 (87).png
    ./ayush-can/ayush1 (88).png
    ./ayush-can/ayush1 (89).png
    ./ayush-can/ayush1 (90).png
    ./ayush-can/ayush1 (91).png
    ./ayush-can/ayush1 (92).png
    ./ayush-can/ayush1 (93).png
    ./ayush-can/ayush1 (94).png
    ./ayush-can/ayush1 (95).png
    ./ayush-can/ayush1 (96).png
    ./ayush-can/ayush1 (97).png
    ./ayush-can/ayush1 (98).png
    ./ayush-can/ayush1 (99).png
    ./ayush-can/ayush1 (100).png
    ./ayush-can/ayush1 (101).png
    ./ayush-can/ayush1 (102).png
    ./ayush-can/ayush1 (103).png
    ./ayush-can/ayush1 (104).png
    ./ayush-can/ayush1 (105).png
    ./ayush-can/ayush1 (106).png
    ./ayush-can/ayush1 (107).png
    ./ayush-can/ayush1 (108).png
    ./ayush-can/ayush1 (109).png
    ./ayush-can/ayush1 (110).png
    ./ayush-can/ayush1 (111).png
    ./ayush-can/ayush1 (112).png
    ./ayush-can/ayush1 (113).png
    ./ayush-can/ayush1 (114).png
    ./ayush-can/ayush1 (115).png
    ./ayush-can/ayush1 (116).png
    ./ayush-can/ayush1 (117).png
    ./ayush-can/ayush1 (118).png
    ./ayush-can/ayush1 (119).png
    ./ayush-can/ayush1 (120).png
    ./ayush-can/ayush1 (121).png
    ./ayush-can/ayush1 (122).png
    ./ayush-can/ayush1 (123).png
    ./ayush-can/ayush1 (124).png
    ./ayush-can/ayush1 (125).png
    ./ayush-can/ayush1 (126).png
    ./ayush-can/ayush1 (127).png
    ./ayush-can/ayush1 (128).png
    ./ayush-can/ayush1 (129).png
    ./ayush-can/ayush1 (130).png
    ./ayush-can/ayush1 (131).png
    ./ayush-can/ayush1 (132).png
    ./ayush-can/ayush1 (133).png
    ./ayush-can/ayush1 (134).png
    ./ayush-can/ayush1 (135).png
    ./ayush-can/ayush1 (136).png
    ./ayush-can/ayush1 (137).png
    ./ayush-can/ayush1 (138).png
    ./ayush-can/ayush1 (139).png
    ./ayush-can/ayush1 (140).png
    ./ayush-can/ayush1 (141).png
    ./ayush-can/ayush1 (142).png
    ./ayush-can/ayush1 (143).png
    ./ayush-can/ayush1 (144).png
    ./ayush-can/ayush1 (145).png
    ./ayush-can/ayush1 (146).png
    ./ayush-can/ayush1 (147).png
    ./ayush-can/ayush1 (148).png
    ./ayush-can/ayush1 (149).png
    ./ayush-can/ayush1 (150).png
    ./ayush-can/ayush1 (151).png
    ./ayush-can/ayush1 (152).png
    ./ayush-can/ayush1 (153).png
    ./ayush-can/ayush1 (154).png
    ./ayush-can/ayush1 (155).png
    ./ayush-can/ayush1 (156).png
    ./ayush-can/ayush1 (157).png
    ./ayush-can/ayush1 (158).png
    ./ayush-can/ayush1 (159).png
    ./ayush-can/ayush1 (160).png
    ./ayush-can/ayush1 (161).png
    ./ayush-can/ayush1 (162).png
    ./ayush-can/ayush1 (163).png
    ./ayush-can/ayush1 (164).png
    ./ayush-can/ayush1 (165).png
    ./ayush-can/ayush1 (166).png
    ./ayush-can/ayush1 (167).png
    ./ayush-can/ayush1 (168).png
    ./ayush-can/ayush1 (169).png
    ./ayush-can/ayush1 (170).png
    ./ayush-can/ayush1 (171).png
    ./ayush-can/ayush1 (172).png
    ./ayush-can/ayush1 (173).png
    ./ayush-can/ayush1 (174).png
    ./ayush-can/ayush1 (175).png
    ./ayush-can/ayush1 (176).png
    ./ayush-can/ayush1 (177).png
    ./ayush-can/ayush1 (178).png
    ./ayush-can/ayush1 (179).png
    ./ayush-can/ayush1 (180).png
    ./ayush-can/ayush1 (181).png
    ./ayush-can/ayush1 (182).png
    ./ayush-can/ayush1 (183).png
    ./ayush-can/ayush1 (184).png
    ./ayush-can/ayush1 (185).png
    ./ayush-can/ayush1 (186).png
    ./ayush-can/ayush1 (187).png
    ./ayush-can/ayush1 (188).png
    ./ayush-can/ayush1 (189).png
    ./ayush-can/ayush1 (190).png
    ./ayush-can/ayush1 (191).png
    ./ayush-can/ayush1 (192).png
    ./ayush-can/ayush1 (193).png
    ./ayush-can/ayush1 (194).png
    ./ayush-can/ayush1 (195).png
    ./ayush-can/ayush1 (196).png
    ./ayush-can/ayush1 (197).png
    ./ayush-can/ayush1 (198).png
    ./ayush-can/ayush1 (199).png
    ./ayush-can/ayush1 (200).png
    ./ayush-can/ayush1 (201).png
    ./ayush-can/ayush1 (202).png
    ./ayush-can/ayush1 (203).png
    ./ayush-can/ayush1 (204).png
    ./ayush-can/ayush1 (205).png
    ./ayush-can/ayush1 (206).png
    ./ayush-can/ayush1 (207).png
    ./ayush-can/ayush1 (208).png
    ./ayush-can/ayush1 (209).png
    ./ayush-can/ayush1 (210).png
    ./ayush-can/ayush1 (211).png
    ./ayush-can/ayush1 (212).png
    ./ayush-can/ayush1 (213).png
    ./ayush-can/ayush1 (214).png
    ./ayush-can/ayush1 (215).png
    ./ayush-can/ayush1 (216).png
    ./ayush-can/ayush1 (217).png
    ./ayush-can/ayush1 (218).png
    ./ayush-can/ayush1 (219).png
    ./ayush-can/ayush1 (220).png
    ./ayush-can/ayush1 (221).png
    ./ayush-can/ayush1 (222).png
    ./ayush-can/ayush1 (223).png
    ./ayush-can/ayush1 (224).png
    ./ayush-can/ayush1 (225).png
    ./ayush-can/ayush1 (226).png
    ./ayush-can/ayush1 (227).png
    ./ayush-can/ayush1 (228).png
    ./ayush-can/ayush1 (229).png
    ./ayush-can/ayush1 (230).png
    ./ayush-can/ayush1 (231).png
    ./ayush-can/ayush1 (232).png
    ./ayush-can/ayush1 (233).png
    ./ayush-can/ayush1 (234).png
    ./ayush-can/ayush1 (235).png
    ./ayush-can/ayush1 (236).png
    ./ayush-can/ayush1 (237).png
    ./ayush-can/ayush1 (238).png
    ./ayush-can/ayush1 (239).png
    ./ayush-can/ayush1 (240).png
    ./ayush-can/ayush1 (241).png
    ./ayush-can/ayush1 (242).png
    ./ayush-can/ayush1 (243).png
    ./ayush-can/ayush1 (244).png
    ./ayush-can/ayush1 (245).png
    ./ayush-can/ayush1 (246).png
    ./ayush-can/ayush1 (247).png
    ./ayush-can/ayush1 (248).png
    ./ayush-can/ayush1 (249).png
    ./ayush-can/ayush1 (250).png
    ./ayush-can/ayush1 (251).png
    ./ayush-can/ayush1 (252).png
    ./ayush-can/ayush1 (253).png
    ./ayush-can/ayush1 (254).png
    ./ayush-can/ayush1 (255).png
    ./ayush-can/ayush1 (256).png
    ./ayush-can/ayush1 (257).png
    ./ayush-can/ayush1 (258).png
    ./ayush-can/ayush1 (259).png
    ./ayush-can/ayush1 (260).png
    ./ayush-can/ayush1 (261).png
    ./ayush-can/ayush1 (262).png
    ./ayush-can/ayush1 (263).png
    ./ayush-can/ayush1 (264).png
    ./ayush-can/ayush1 (265).png
    ./ayush-can/ayush1 (266).png
    ./ayush-can/ayush1 (267).png
    ./ayush-can/ayush1 (268).png
    ./ayush-can/ayush1 (269).png
    ./ayush-can/ayush1 (270).png
    ./ayush-can/ayush1 (271).png
    ./ayush-can/ayush1 (272).png
    ./ayush-can/ayush1 (273).png
    ./ayush-can/ayush1 (274).png
    ./ayush-can/ayush1 (275).png
    ./ayush-can/ayush1 (276).png
    ./ayush-can/ayush1 (277).png
    ./ayush-can/ayush1 (278).png
    ./ayush-can/ayush1 (279).png
    ./ayush-can/ayush1 (280).png
    ./ayush-can/ayush1 (281).png
    ./ayush-can/ayush1 (282).png
    ./ayush-can/ayush1 (283).png
    ./ayush-can/ayush1 (284).png
    ./ayush-can/ayush1 (285).png
    ./ayush-can/ayush1 (286).png
    ./ayush-can/ayush1 (287).png
    ./ayush-can/ayush1 (288).png
    ./ayush-can/ayush1 (289).png
    ./ayush-can/ayush1 (290).png
    ./ayush-can/ayush1 (291).png
    ./ayush-can/ayush1 (292).png
    ./ayush-can/ayush1 (293).png
    ./ayush-can/ayush1 (294).png
    ./ayush-can/ayush1 (295).png
    ./ayush-can/ayush1 (296).png
    ./ayush-can/ayush1 (297).png
    ./ayush-can/ayush1 (298).png
    ./ayush-can/ayush1 (299).png
    ./ayush-can/ayush1 (300).png
    ./ayush-can/ayush1 (301).png
    ./ayush-can/ayush1 (302).png
    ./ayush-can/ayush1 (303).png
    ./ayush-can/ayush1 (304).png
    ./ayush-can/ayush1 (305).png
    ./ayush-can/ayush1 (306).png
    ./ayush-can/ayush1 (307).png
    ./ayush-can/ayush1 (308).png
    ./ayush-can/ayush1 (309).png
    ./ayush-can/ayush1 (310).png
    ./ayush-can/ayush1 (311).png
    ./ayush-can/ayush1 (312).png
    ./ayush-can/ayush1 (313).png
    ./ayush-can/ayush1 (314).png
    ./ayush-can/ayush1 (315).png
    ./ayush-can/ayush1 (316).png
    ./ayush-can/ayush1 (317).png
    ./ayush-can/ayush1 (318).png
    ./ayush-can/ayush1 (319).png
    ./ayush-can/ayush1 (320).png
    ./ayush-can/ayush1 (321).png
    ./ayush-can/ayush1 (322).png
    ./ayush-can/ayush1 (323).png
    ./ayush-can/ayush1 (324).png
    ./ayush-can/ayush1 (325).png
    ./ayush-can/ayush1 (326).png
    ./ayush-can/ayush1 (327).png
    ./ayush-can/ayush1 (328).png
    ./ayush-can/ayush1 (329).png
    ./ayush-can/ayush1 (330).png
    ./ayush-can/ayush1 (331).png
    ./ayush-can/ayush1 (332).png
    ./ayush-can/ayush1 (333).png
    ./ayush-can/ayush1 (334).png
    ./ayush-can/ayush1 (335).png
    ./ayush-can/ayush1 (336).png
    ./ayush-can/ayush1 (337).png
    ./ayush-can/ayush1 (338).png
    ./ayush-can/ayush1 (339).png
    ./ayush-can/ayush1 (340).png
    ./ayush-can/ayush1 (341).png
    ./ayush-can/ayush1 (342).png
    ./ayush-can/ayush1 (343).png
    ./ayush-can/ayush1 (344).png
    ./ayush-can/ayush1 (345).png
    ./ayush-can/ayush1 (346).png
    ./ayush-can/ayush1 (347).png
    ./ayush-can/ayush1 (348).png
    ./ayush-can/ayush1 (349).png
    ./ayush-can/ayush1 (350).png
    ./ayush-can/ayush1 (351).png
    ./ayush-can/ayush1 (352).png
    ./ayush-can/ayush1 (353).png
    ./ayush-can/ayush1 (354).png
    ./ayush-can/ayush1 (355).png
    ./ayush-can/ayush1 (356).png
    ./ayush-can/ayush1 (357).png
    ./ayush-can/ayush1 (358).png
    ./ayush-can/ayush1 (359).png
    ./ayush-can/ayush1 (360).png
    ./ayush-can/ayush1 (361).png
    ./ayush-can/ayush1 (362).png
    ./ayush-can/ayush1 (363).png
    ./ayush-can/ayush1 (364).png
    ./ayush-can/ayush1 (365).png
    ./ayush-can/ayush1 (366).png
    ./ayush-can/ayush1 (367).png
    ./ayush-can/ayush1 (368).png
    ./ayush-can/ayush1 (369).png
    ./ayush-can/ayush1 (370).png
    ./ayush-can/ayush1 (371).png
    ./ayush-can/ayush1 (372).png
    ./ayush-can/ayush1 (373).png
    ./ayush-can/ayush1 (374).png
    ./ayush-can/ayush1 (375).png
    ./ayush-can/ayush1 (376).png
    ./ayush-can/ayush1 (377).png
    ./ayush-can/ayush1 (378).png
    ./ayush-can/ayush1 (379).png
    ./ayush-can/ayush1 (380).png
    ./ayush-can/ayush1 (381).png
    ./ayush-can/ayush1 (382).png
    ./ayush-can/ayush1 (383).png
    ./ayush-can/ayush1 (384).png
    ./ayush-can/ayush1 (385).png
    ./ayush-can/ayush1 (386).png
    ./ayush-can/ayush1 (387).png
    ./ayush-can/ayush1 (388).png
    ./ayush-can/ayush1 (389).png
    ./ayush-can/ayush1 (390).png
    ./ayush-can/ayush1 (391).png
    ./ayush-can/ayush1 (392).png
    ./ayush-can/ayush1 (393).png
    ./ayush-can/ayush1 (394).png
    ./ayush-can/ayush1 (395).png
    ./ayush-can/ayush1 (396).png
    ./ayush-can/ayush1 (397).png
    ./ayush-can/ayush1 (398).png
    ./ayush-can/ayush1 (399).png
    ./ayush-can/ayush1 (400).png
    ./ayush-can/ayush1 (401).png
    ./ayush-can/ayush1 (402).png
    ./ayush-can/ayush1 (403).png
    ./ayush-can/ayush1 (404).png
    ./ayush-can/ayush1 (405).png
    ./ayush-can/ayush1 (406).png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 406;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page3>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `1000% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `1000% top`,
  });
  
  
}
canvas()