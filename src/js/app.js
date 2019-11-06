'use strict';
import 'bootstrap/dist/js/bootstrap';
import '@fancyapps/fancybox/dist/jquery.fancybox';
import 'owl.carousel';
$(function () {

  // owl carusel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  // header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("#header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#header").removeClass("active");
    }
  });
  
  $('#toggleMenuButton').click(function () {
    $(this).toggleClass('active');
    $('.toggle_menu').slideToggle();
    //$('body').toggleClass('active');
  });
  // header //
// accordion

  var Accordion = function (el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;

      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
          { el: this.el, multiple: this.multiple },
          this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
          //show only one menu at the same time
          $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
  }

  var accordion = new Accordion($('.accordion-menu'), false);
})
