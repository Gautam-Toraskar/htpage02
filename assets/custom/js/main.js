
(function(){

	var setBannerSize = function(event) {
    var screenHeight = window.innerHeight;
    console.log(screenHeight);
    var divHeight = $(".wrapperBanner").outerHeight();
    console.log(divHeight);
    if(screenHeight > divHeight){
      $(".wrapperBanner").outerHeight(screenHeight);
    }
  };
  $(window).load(setBannerSize);
  $(window).resize(setBannerSize);

  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });


  var $navbar = $("header"),
	    y_pos = $navbar.offset().top + 400,
	    height = $navbar.height(),
	    str = "";

	    y_pos = 400;

	var checkScroll = function(event) {
    var scrollTop = $(this).scrollTop();
    // console.log(event.data);
    checkHeight = event.data == undefined ? false : event.data.checkHeight;
    if (!checkHeight) {
    	height = 0;
    } else {
    	height = $navbar.height();
    }
    // console.log(y_pos);
    if (scrollTop > y_pos + height) {
      $navbar.removeClass('remove');
      str = "greater";
    } else if (scrollTop <= y_pos) {
      $navbar.addClass('remove');
      str = "lower";
    }
    $(".count").text(str + ": " + scrollTop);
  }
  $(document).scroll({checkHeight: true}, checkScroll);

  $(".ham-btn").on('click', function (event){
  	if($("#mobile-nav").hasClass('off')) {
  		$("#mobile-nav").fadeIn('fast');
  		$("#mobile-nav").addClass('on').removeClass('off');

  		y_pos = -1;
  		// $navbar.removeClass('remove');
  	} else {
  		$("#mobile-nav").fadeOut('fast');
  		$("#mobile-nav").addClass('off').removeClass('on');
  		y_pos = 400;
  	}
  	checkScroll(event);
  });
  $("#mobile-nav li.has-dropdown").on('click', function (event) {
  	event.stopPropagation();
  	event.preventDefault();
  	if($(this).find('.mobile-sub-menu').eq(0).hasClass('off')) {
	  	$(this).find('.mobile-sub-menu').eq(0).removeClass('off').addClass('on');
	  	$(this).find('.plus').addClass('rotate');
  	} else {
  		$(this).find('.mobile-sub-menu').eq(0).removeClass('on').addClass('off');
  		$(this).find('.plus').removeClass('rotate');
  	}
  });

  $(".app-maker-details button.close").on('click', function() {
    $(this).parent().hide();
    // $(this).parent().parent().siblings('.short-desc').show();

    if($(window).width() > 768) {
    	$(this).parent().siblings('.short-desc').show();
    }

    $(this).parent().prev().show();

    var $appSetupWrapper = $(this).parent().prev();
    // $appSetupWrapper.css('background-color', 'red');

    $appSetupWrapper.find("h3").removeClass('hide');
    $appSetupWrapper.find("p").removeClass('hide');
    $appSetupWrapper.find("button.learn-more-btn").removeClass('hide');
    // console.log($(this).parent().parent().siblings('.short-desc'));
  });
  $(".app-setup-wrapper button.learn-more-btn").on('click', function (event) {
  	var that = this;

  	if($(window).width() > 768) {
  		$(".about-app-setup .short-desc").hide();
    	$(that).parent().show();
  	} else {
  		$(that).parent().hide();
  	}

    var $appSetupWrapper = $(this).closest('.app-setup-wrapper');

    console.log($appSetupWrapper.length);
    // $appSetupWrapper.hide();
    $appSetupWrapper.find("h3").addClass('hide');
    $appSetupWrapper.find("p").addClass('hide');
    $appSetupWrapper.find("button.learn-more-btn").addClass('hide');

    $appSetupWrapper.next().show();
  });
})();