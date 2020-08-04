"use strict";

$(document).ready(function () {
  // dropdown logos
  $('.logos-item').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $('.logos-dropdown').slideToggle(300);
  }); // select logo

  if (window.matchMedia('(min-width: 768px)').matches) {
    $('.logos-dropdown_item').click(function () {
      var srcImg = $(this).find('.logo-img').attr('src');
      $('.logos-item').find('.logo-img').attr('src', srcImg);
      $('.logos-dropdown').slideUp(300);
      $('.logos-item').removeClass('active');
      $(this).addClass('hide').siblings().removeClass('hide');
    });
  } else {
    $('.logos-dropdown_item').click(function () {
      var srcImg = $(this).find('.logo-img').attr('src');
      $('.selected-logo').find('.logo-img').attr('src', srcImg);
      $('.logos-dropdown').slideUp(300);
      $('.logos-item').removeClass('active');
      $(this).addClass('hide').siblings().removeClass('hide');
    });
  }

  $('body, html').click(function () {
    $('.logos-dropdown').slideUp(300);
    $('.btn-arrow').removeClass('active');
    $(".select__body").slideUp(300);
    $(".select__header").removeClass('active');
  }); // popups in bottombar

  $('.bottombar-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('#open_menu').click(function () {
    $('.nav-mobile').hide();
    $('.nav-mobile_menu').show();
  });
  $('#open_account').click(function () {
    // eslint-disable-next-line no-undef
    $('.nav-mobile').hide();
    $('.nav-mobile_account').show();
  });
  $('#open_main').click(function () {
    $('.nav-mobile').hide();
  }); // tabs

  $(".tab").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $(".form-item").eq(index).addClass('active').siblings().removeClass('active');
  }); // select 

  $('.select__header').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active').parents().siblings().removeClass('active');
    $(this).closest(".select").find(".select__body").slideToggle(300);
  });
  $(".select__item").click(function (e) {
    e.stopPropagation();
    var selected = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest(".select__body").slideUp(300);
    $(".select__header").removeClass('active');
    $(this).closest(".select").find(".select__current span").addClass('active').text(selected);
  }); // forgot password popup 

  $(".link-forgot").click(function (e) {
    e.preventDefault();
    $(".form-sing_in-up, .form-contract").hide();
    $(".form-forgot").show();
  });
  $(".back-form").click(function (e) {
    e.preventDefault();
    $(".form-forgot").hide();
    $(".form-sing_in-up").show();
  });
  $(".accordion-item").click(function () {
    $(this).closest(".accordion").toggleClass('active').siblings().removeClass('active');
  });
});