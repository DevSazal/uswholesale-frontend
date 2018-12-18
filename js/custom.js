(function($) {
  $.fn.menumaker = function(options) {
    var cssmenu = $(this),
      settings = $.extend(
        {
          format: "dropdown",
          sticky: false
        },
        options
      );
    return this.each(function() {
      $(this)
        .find(".button")
        .on("click", function() {
          $(this).toggleClass("menu-opened");
          var mainmenu = $(this).next("ul");
          if (mainmenu.hasClass("open")) {
            mainmenu.slideToggle().removeClass("open");
          } else {
            mainmenu.slideToggle().addClass("open");
            if (settings.format === "dropdown") {
              mainmenu.find("ul").show();
            }
          }
        });
      cssmenu
        .find("li ul")
        .parent()
        .addClass("has-sub");
      multiTg = function() {
        cssmenu
          .find(".has-sub")
          .prepend('<span class="submenu-button"></span>');
        cssmenu.find(".submenu-button").on("click", function() {
          $(this).toggleClass("submenu-opened");
          if (
            $(this)
              .siblings("ul")
              .hasClass("open")
          ) {
            $(this)
              .siblings("ul")
              .removeClass("open")
              .slideToggle();
          } else {
            $(this)
              .siblings("ul")
              .addClass("open")
              .slideToggle();
          }
        });
      };
      if (settings.format === "multitoggle") multiTg();
      else cssmenu.addClass("dropdown");
      if (settings.sticky === true) cssmenu.css("position", "fixed");
      resizeFix = function() {
        var mediasize = 1000;
        if ($(window).width() > mediasize) {
          cssmenu.find("ul").show();
        }
        if ($(window).width() <= mediasize) {
          cssmenu
            .find("ul")
            .hide()
            .removeClass("open");
        }
      };
      resizeFix();
      return $(window).on("resize", resizeFix);
    });
  };
})(jQuery);

(function($) {
  $(document).ready(function() {
    $("#cssmenu").menumaker({
      format: "multitoggle"
    });
  });
})(jQuery);

// if no Webkit browser
(function() {
  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  let isSafari =
    /Safari/.test(navigator.userAgent) &&
    /Apple Computer/.test(navigator.vendor);
  let scrollbarDiv = document.querySelector(".scrollbar");
  if (!isChrome && !isSafari) {
    scrollbarDiv.innerHTML = "You need Webkit browser to run this code";
  }
})();
(function($) {
  $(document).ready(function() {
    authPage("login");
  });
})(jQuery);
function authPage(auth_value) {
  if (auth_value === "login") {
    $("#login").show();
    $("#signup").hide();
  } else if (auth_value === "signup") {
    $("#login").hide();
    $("#signup").show();
  }
}
