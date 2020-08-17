$(document).ready(function () {
  // dropdown logos
  $('.logos-item').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $('.logos-dropdown').slideToggle(300);
  })

  // select logo

  $('.logos-dropdown_item').click(function () {
    const srcImg = $(this).find('.logo-img').attr('src');
    $('.logo .logo-img').attr('src', srcImg);
    $('.logos-dropdown').slideUp(300);
    $('.logos-item').removeClass('active');
    $(this).addClass('hide').siblings().removeClass('hide');

    let attrColor = $(this).attr('data-color');
    $("body").removeAttr('class');
    $('body').addClass(attrColor);

  });

  $('body, html').click(function () {
    $('.logos-dropdown').slideUp(300);
    $('.btn-arrow').removeClass('active');
    $(".select__body").slideUp(300);
    $(".select__header").removeClass('active');
  })

  // popups in bottombar
  $('.bottombar-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })

  $('#open_menu').click(function () {
    $('.nav-mobile').hide();
    $('.nav-mobile_menu').show();
  })

  $('#open_account').click(function () {
    $('.nav-mobile').hide();
    $('.nav-mobile_account').show();
  })
  $('#open_main').click(function () {
    $('.nav-mobile').hide();
  })

  // tabs
  $(".tab").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $(".form-item").eq(index).addClass('active').siblings().removeClass('active');
  });

  // select 
  $('.select__header').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active').parents().siblings().removeClass('active');
    $(this).closest(".select").find(".select__body").slideToggle(300);
   
  })
  
  $(".select__item").click(function (e) {
    e.stopPropagation();
    let selected = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest(".select__body").slideUp(300);
    $(".select__header").removeClass('active');
    $(this).closest(".select").find(".select__current span").addClass('active').text(selected);
    $(".drop-form").slideDown(300); 
  })

  // forgot password popup 
  $(".link-forgot").click(function (e) {
    e.preventDefault();
    $(".form-contract").hide();
    $(".form-sing_in-up, .form-contract").hide();
    $(".form-forgot").show();
  })

  $(".btn__next-services").click(function (e) {
    $(".form-forgot").hide();
    $(".form-sing_in-up").hide();
    $(".form-contract").show();
  })
  $(".back-form").click(function (e) {
    e.preventDefault();
    $(".form-forgot").hide();
    $(".form-contract").hide();
    $(".form-sing_in-up").show();
  })
  $(".accordion-item").click(function () {  
    $(this).closest(".accordion").toggleClass('active').siblings().removeClass('active');
    $(this).siblings(".accordion-drop").slideToggle(300).closest(".accordion").siblings().find(".accordion-drop").slideUp(300);
  })

  // notification
  $(".btn-notification").click(function () {
    $(".notification-popup").addClass('active');
  })
  $(".notification-popup .btn-back").click(function () {
    $(".notification-popup").removeClass('active');
  })

  // tabs
  $(".tab-item").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $(".drops__item").eq(index).addClass('active').siblings().removeClass('active');
  })


  // tabs mobile share and data
  let textChange = $(".text-change").text();

  $(".settings-tab ").click(function () {
    let thisData = $(this).attr("data-settings-tab");
    let text = $(this).text();
    $(".text-change").text(text);
    $(this).closest(".tabs-mob").addClass('left');
    $('[data-settings-dropdown=' + thisData + ']').addClass('active');
  })
 
  $(".btn-back__settings").click(function (e) {
    e.preventDefault();
    $(".settings-tab ").removeClass('active');
    $(".profile__data, .profile__share").removeClass('active');
    $(".tabs-mob").removeClass('left');
    $(this).siblings(".text-change").text(textChange);
  })

  // file download
  $('#file-download').on('change', function(){
    let fileName = this.files[0].name;
    $(".btn-download span").html(fileName);
  });

  $(".btn__enter-data").click(function () {
    $(this).hide()
    $(".drop-mobile").slideDown(300);
  })

  //check form product
  $("form[name='name_form']").submit(function(event, i) {
    event.preventDefault();
    let curform = $(this);
    let goodform = true;

    curform.find('input[required]').each(function () {
      switch($(this).attr("number")) {
          case "number":
              if( $(this).val() == '') {
                  setTimeout(() => {
                    $(".btn-reload").addClass('notChecked');
                    $(".system-check ").hide();
                    $(".section-product__right .system__red ").show();
                    }, 1000);
              }
      }
      if (goodform) {
        $(".btn-check").hide()
        if (window.matchMedia("(max-width: 767px)").matches) {
          $(".btn-reload").show();
        } else {
          $(".register-selected .btn-reload").show();
        }
        setTimeout(() => {
          $(".btn-reload").addClass('checked');
          $(".btn-reload .fs-16").text("Проверено");
          $(".system-check ").hide();
          $(".section-product__right .system__green").show();
        }, 1000);

        // !goodform
        setTimeout(() => {
          $(".btn-reload").addClass('notChecked');
          $(".btn-reload .fs-16").text("Ошибка");
          $(".system-check ").hide();
          $(".section-product__right .system__red").show();
        }, 2000);
      }
    });
  })

  // mobile QR btn variants
  $(".btn-scan").click(function (e) {
    e.preventDefault();
    $(this).find(".fs-14").text("Проверка");
    $(this).addClass('permit');

    setTimeout(() => {
      $(this).find(".fs-14").text("Проверено");
      $(this).addClass('checked');
      $(".system-check.system__green").show();
    }, 1000);
    setTimeout(() => {
      $(this).find(".fs-14").text("Ошибка");
      $(this).addClass('notChecked');
      $(".system-check.system__green").hide();
      $(".system-check.system__red").show();
    }, 2000);
  })

  // popup Error
  $(".btn-sign-up").click(function() {
    $(".popup-error").addClass('active');
  });
  $(".popup, .close, .popup-delete__btns .btn-gray").click(function() {
    $(".popup").removeClass('active');
    $(".set-product").html('');
  });
  $(".popup-error__container").click(function(e) {
    e.stopPropagation();
  });

  // popup delete
  $(".btn-delete").click(function() {
    let cloneProduct = $(this).closest(".product-item").find(".product-item_row").clone();
    $(".popup-delete").addClass('active');
    $(".set-product").append(cloneProduct);
  });

   //number of products
   function lengthProduct() {
    let lengthProduct = $(".product-item").length;
    $(".count-product").text(lengthProduct);
  };
  lengthProduct();

  // delete product
  $(".popup-delete__btns .btn-red").click(function(e) {
    e.preventDefault();
    let i = $(this).closest(".popup-delete__container").find(".product-item_row").attr("data-index");
    console.log(i);
    $(".product-item[data-index=" + i + "]").remove();
    lengthProduct();
  });

});
