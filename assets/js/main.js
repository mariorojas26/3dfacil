$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(100).fadeOut(100);
    });
    
    
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo3d.png");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo3d.png");
            // logo de otro color
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {


            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //=====  WOW active
    
    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();
    
    
    //===== 
    
    
});

//EFECTO MAQUINA DE ESCRIBIR

document.addEventListener("DOMContentLoaded", function () {
  const text = "Permite que tus clientes vean tus productos en su propio entorno.";
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

//SPINER ROBOT

window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.remove(); // Elimina completamente el preloader del DOM
    }, 500); // Espera a que la transición termine
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-explicacion');
  const btnCerrar = document.getElementById('cerrar-modal');
  const seccion3D = document.querySelector('.mi-seccion-3d');

  // Configurar IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Mostrar modal
        modal.style.display = 'block';
        // Dejar de observar para que no aparezca de nuevo
        observer.unobserve(seccion3D);
      }
    });
  }, { threshold: 0.5 }); // Se activa cuando la mitad de la sección es visible

  observer.observe(seccion3D);

  // Cerrar modal
  btnCerrar.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

