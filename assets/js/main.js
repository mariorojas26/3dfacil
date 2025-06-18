$(function () {
  "use strict";

  //===== Prealoder
  $(window).on("load", function (event) {
    $(".preloader").delay(100).fadeOut(100);
  });

  //===== Sticky
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".header_navbar").removeClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo3d.png");
    } else {
      $(".header_navbar").addClass("sticky");
      $(".header_navbar img").attr("src", "assets/images/logo3d.png");
    }
  });

  //===== Section Menu Active (con validación del hash)
  var scrollLink = $(".page-scroll");
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var target = $(this.hash);
      if (target.length) { // Solo si el destino existe
        var sectionOffset = target.offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass("active");
          $(this).parent().siblings().removeClass("active");
        }
      }
    });
  });

  //===== Close navbar-collapse when a link clicked
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Back to top
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //===== WOW active
  var wow = new WOW({
    boxClass: "wow",
    mobile: false,
  });
  wow.init();
});

//===== EFECTO MAQUINA DE ESCRIBIR
document.addEventListener("DOMContentLoaded", function () {
  const text = "Creamos experiencias interactivas que venden por ti.";
  const titleElement = document.getElementById("typewriter-title");

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      titleElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }

  typeWriter();
});

//===== SPINER ROBOT
window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
});

const swiper = new Swiper('.testimonial-slider', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


// Initialize Swiper
  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.testimonios-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
       autoHeight: true, // 👈 ESTA ES LA CLAVE
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        }
      },
      on: {
        init: matchCardHeights,
        resize: matchCardHeights,
        slideChange: matchCardHeights
      }
    });

    function matchCardHeights() {
      const cards = document.querySelectorAll('.testimonio-card');
      let maxHeight = 0;

      // Reset heights
      cards.forEach(card => {
        card.style.height = 'auto';
      });

      // Get max height
      cards.forEach(card => {
        const h = card.offsetHeight;
        if (h > maxHeight) maxHeight = h;
      });

      // Apply max height to all cards
      cards.forEach(card => {
        card.style.height = maxHeight + 'px';
      });
    }
  });

