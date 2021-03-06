jQuery(document).ready(function($) {
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
    $(".btn-notification").removeClass('active');
    $(".notification-popup").removeClass('active');
  });

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
  });
  
  $(".select__item").click(function (e) {
    e.stopPropagation();
    let selected = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest(".select__body").slideUp(300);
    $(".select__header").removeClass('active');
    $(this).closest(".select").find(".select__current span").addClass('active').text(selected);

    let dataForm = $(this).attr("data-name-form");
    $(".drop-form[data-name-form='" + dataForm + "']").slideDown(300).siblings(".drop-form").slideUp(); 
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
  });

  $(".back-form").click(function (e) {
    e.preventDefault();
    $(".form-forgot").hide();
    $(".form-contract").hide();
    $(".form-sing_in-up").show();
  });

  $(".accordion-item").click(function () {
    let _this = $(this);
    _this.closest(".accordion").toggleClass('active').siblings().removeClass('active');
    if ($(".accordion-item.smooth-600")) {
      _this.siblings(".accordion-drop").slideToggle(600).closest(".accordion").siblings().find(".accordion-drop").slideUp(600);
    } else {
      _this.siblings(".accordion-drop").slideToggle(300).closest(".accordion").siblings().find(".accordion-drop").slideUp(300);
    }
  });

  $(".header__notification").click(function (e) {
    e.stopPropagation();
  });

  // notification
  $(".btn-notification").click(function () {
    $(this).toggleClass('active');
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".header__notification .notification-popup").toggleClass('active');
    } else {
      $(".notification-popup").toggleClass('active');
    }
  })

  $(".notification-popup .btn-back").click(function () {
    $(".btn-notification").removeClass('active');
    $(".notification-popup").removeClass('active');
  })

  // if length list notification in header > 3 - hide
  let lengthListNotification = $(".header__notification .notification-list li").length;
  function hideDetail() {
    if (lengthListNotification > 3) {
      $(".header__notification .notification-list li").hide();
      for (var i = 1; i <= 3; i++) {
        $(".header__notification .notification-list li:nth-child(" + i + ")").show();
      }
    }
  }
  hideDetail();

  $(".btn-more").click(function(e) {
    e.preventDefault();
    let _this = $(this);
    let text = _this.text();
    _this.text(text == "Посмотреть все" ? "Скрыть" : "Посмотреть все");
    _this.text() === "Посмотреть все" ?  hideDetail() : $(".notification-list li").show();
  });

  // tabs
  $(".tab-item").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    $(".drops__item").eq(index).addClass('active').siblings().removeClass('active');
  });

  // tabs mobile share and data
  let textChange = $(".text-change").text();

  $(".settings-tab ").click(function () {
    let thisData = $(this).attr("data-settings-tab");
    let text = $(this).text();
    $(".text-change").text(text);
    $(this).closest(".tabs-mob").addClass('left');
    $('[data-settings-dropdown=' + thisData + ']').addClass('active');
  });

  $(".btn-back__settings").click(function (e) {
    e.preventDefault();
    $(".settings-tab ").removeClass('active');
    $(".profile__data, .profile__share").removeClass('active');
    $(".tabs-mob").removeClass('left');
    $(this).siblings(".text-change").text(textChange);
  });

  // file download
  $('#file-download').on('change', function(){
    let fileName = this.files[0].name;
    $(".btn-download span").html(fileName);
  });

  $(".btn__enter-data").click(function () {
    $(this).hide()
    $(".drop-mobile").slideDown(300);
  });

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
        $(".btn-reload").removeClass('notChecked');
        $(".btn-reload").removeClass('checked');
        $(".system-check ").hide();
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
        if($(".btn-reload.notChecked")){
          if (window.matchMedia("(max-width: 767px)").matches) {
            $(".drop-mobile .btn-check").show();
          } else {
            $(".register-selected .btn-check").show();
          }
        }
      }
    });
  });

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
  });

  // popup Error
  // $(".btn-sign-up").click(function() {
  //   $(".popup-error").addClass('active');
  // });

  $(".popup, .close, .popup__btns .btn-gray").click(function() {
    $(".popup").removeClass('active');
    $(".set-product").html('');
  });

  // stop Propagation
  $(".popup__container").click(function(e) {
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
  $(".btn-delete_product").click(function(e) {
    e.preventDefault();
    let i = $(this).closest(".popup-delete__container").find(".product-item_row").attr("data-index");
    $(".product-item[data-index=" + i + "]").remove();
    lengthProduct();
    $(".popup").removeClass('active');
    $(".set-product").html('');
  });

  // popup convey information
  $(".btn-transfer").click(function(e) {
    e.preventDefault();
    $(".popup-convey").addClass('active');
  });

  // date (datepicker)
  $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

  $(".input-date").datepicker({
    maxDate: '0',
    dateFormat: 'dd.mm.yy',
    monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  });

  $('.select2').select2({
    minimumResultsForSearch: -1
  });

  $("span.select2-selection__arrow").append('<button class="btn-arrow" type="button"><svg class="svg-arrow-up btn-arrow_img"><use xlink:href="images/sprite/symbol/sprite.svg#arrow-up"></use></svg></button>')
});