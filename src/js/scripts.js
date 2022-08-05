$(document).ready(function () {
  // Progress bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {
    color: "#03B404",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#F9F9F9" },
    to: { color: "#03B404" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 1110);
      circle.setText(value);
    },
  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#03B404",
    strokeWidth: 8,
    duration: 1600,
    from: { color: "#aaa" },
    to: { color: "#03B404" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 3874);
      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#03B404",
    strokeWidth: 8,
    duration: 1800,
    from: { color: "#aaa" },
    to: { color: "#03B404" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 4);
      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#03B404",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#aaa" },
    to: { color: "#03B404" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 7869);
      circle.setText(value);
    },
  });

  // iniciando loaders quando a usuário chegar no elemento
  let dataAreaOffset = $("#data-area").offset();
  // stop serve para a animação não carregar mais que uma vez
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();

    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  // Parallax

  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function () {
    $("#data-area").parallax({
      imageSrc: "src/components/img/cidadeparallax.jpg",
    });
  }, 200);

  // scroll para as seções

  let navBtn = $(".nav-item");
  let carouselBtn = $(".main-btn");

  let bannerSection = $("#mainSlider");
  let aboutSection = $("#about-area");
  let servicesSection = $("#services-area");
  let teamSection = $("#team-area");
  let destinosSection = $("#destinos-area");
  let contactSection = $("#contact-area");

  let scrollTo = "";

  $(navBtn).click(function () {
    let btnId = $(this).attr("id");

    if (btnId == "about-menu") {
      scrollTo = aboutSection;
    } else if (btnId == "services-menu") {
      scrollTo = servicesSection;
    } else if (btnId == "team-menu") {
      scrollTo = teamSection;
    } else if (btnId == "destinos-menu") {
      scrollTo = destinosSection;
    } else if (btnId == "contact-menu") {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 70,
      },
      1500
    );
  });

  $(carouselBtn).click(function () {
    let btnId = $(this).attr("id");

    if (btnId == "about-menu") {
      scrollTo = aboutSection;
    } else if (btnId == "services-menu") {
      scrollTo = servicesSection;
    } else if (btnId == "team-menu") {
      scrollTo = teamSection;
    } else if (btnId == "destinos-menu") {
      scrollTo = destinosSection;
    } else if (btnId == "contact-menu") {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 70,
      },
      1500
    );
  });
});
