(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = (function (window, document, undefined) {
  "use strict";

  function setCookie(name, value, expires) {
    if (typeof expires === 'number') {
      var d = new Date();
      d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + "; " + expires + "; path=/";
    } else {
      document.cookie = name + "=" + value + "; path=/";
    }
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  return {
    setCookie: setCookie,
    getCookie: getCookie
  };
})(window, document);

},{}],2:[function(require,module,exports){
// check the value of the css :before psuedo element
// values look for "true" or "false"

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function ($el) {
  var value = "true";
  try {
    value = window.getComputedStyle($el[0], ':before').getPropertyValue('content').replace(/\"/g, '');
  } catch (err) {}
  return value === "false" ? false : true;
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        jQuery.ajax({
            url: themePath + '/js/templates/' + name + '.html',
            success: function success(data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {
  var $el = undefined,
      $elParent = undefined,
      elHeight = undefined,
      elWidth = undefined,
      lowerLimit = undefined,
      upperLimit = undefined,
      debounceTimer = undefined,
      runCode = false;

  function init(element) {
    $el = element;
    $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    updateData();

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      updateData();
    }, 1000);

    $(window).resize(function () {
      updateData();
      setPosition();
    });

    // toggle the sticky positioning
    $(window).scroll(function () {
      setPosition();
    });
  }

  function updateData() {
    var newRunCode = (0, _helpersCssControlCodeJs2['default'])($el);

    if (runCode && !newRunCode) {
      $el.removeAttr('style');
    }

    runCode = newRunCode;

    if (!runCode) {
      return;
    }

    runCode = newRunCode;
    elHeight = $el.height();
    elWidth = $elParent.width();
    upperLimit = $elParent.offset().top;
    lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

    $el.width(elWidth);
  }

  function setPosition() {
    if (!runCode) {
      $el.attr('data-sticky', 'top');
      return false;
    }

    var windowTop = $(window).scrollTop(),
        attr = $el.attr('data-sticky'),
        top = attr !== 'top' && windowTop <= upperLimit,
        middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
        bottom = attr !== 'bottom' && windowTop >= lowerLimit;

    if (top) {
      $el.attr('data-sticky', 'top');
    } else if (middle) {
      $el.attr('data-sticky', 'middle');
    } else if (bottom) {
      $el.attr('data-sticky', 'bottom');
    }
  }

  return { init: init };
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],5:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesAccordionsJs = require("./modules/accordions.js");

var _modulesAccordionsJs2 = _interopRequireDefault(_modulesAccordionsJs);

var _modulesGoogleMapJs = require("./modules/googleMap.js");

var _modulesGoogleMapJs2 = _interopRequireDefault(_modulesGoogleMapJs);

var _modulesBack2topJs = require("./modules/back2top.js");

var _modulesBack2topJs2 = _interopRequireDefault(_modulesBack2topJs);

var _modulesBannerCarouselJs = require("./modules/bannerCarousel.js");

var _modulesBannerCarouselJs2 = _interopRequireDefault(_modulesBannerCarouselJs);

var _modulesClickableJs = require("./modules/clickable.js");

var _modulesClickableJs2 = _interopRequireDefault(_modulesClickableJs);

var _modulesDropdownJs = require("./modules/dropdown.js");

var _modulesDropdownJs2 = _interopRequireDefault(_modulesDropdownJs);

var _modulesEmergencyAlertsJs = require("./modules/emergencyAlerts.js");

var _modulesEmergencyAlertsJs2 = _interopRequireDefault(_modulesEmergencyAlertsJs);

var _modulesFormValidationJs = require("./modules/formValidation.js");

var _modulesFormValidationJs2 = _interopRequireDefault(_modulesFormValidationJs);

var _modulesHideAlertJs = require("./modules/hideAlert.js");

var _modulesHideAlertJs2 = _interopRequireDefault(_modulesHideAlertJs);

var _modulesKeywordSearchJs = require("./modules/keywordSearch.js");

var _modulesKeywordSearchJs2 = _interopRequireDefault(_modulesKeywordSearchJs);

var _modulesLocationListingJs = require("./modules/locationListing.js");

var _modulesLocationListingJs2 = _interopRequireDefault(_modulesLocationListingJs);

var _modulesMainNavJs = require("./modules/mainNav.js");

var _modulesMainNavJs2 = _interopRequireDefault(_modulesMainNavJs);

var _modulesMainNavPilotJs = require("./modules/mainNavPilot.js");

var _modulesMainNavPilotJs2 = _interopRequireDefault(_modulesMainNavPilotJs);

var _modulesMobileNavJs = require("./modules/mobileNav.js");

var _modulesMobileNavJs2 = _interopRequireDefault(_modulesMobileNavJs);

var _modulesResponsiveVideoJs = require("./modules/responsiveVideo.js");

var _modulesResponsiveVideoJs2 = _interopRequireDefault(_modulesResponsiveVideoJs);

var _modulesRichTextJs = require("./modules/richText.js");

var _modulesRichTextJs2 = _interopRequireDefault(_modulesRichTextJs);

var _modulesScrollAnchorsJs = require("./modules/scrollAnchors.js");

var _modulesScrollAnchorsJs2 = _interopRequireDefault(_modulesScrollAnchorsJs);

var _modulesUtilNavJs = require("./modules/utilNav.js");

var _modulesUtilNavJs2 = _interopRequireDefault(_modulesUtilNavJs);

},{"./modules/accordions.js":6,"./modules/back2top.js":7,"./modules/bannerCarousel.js":8,"./modules/clickable.js":9,"./modules/dropdown.js":10,"./modules/emergencyAlerts.js":11,"./modules/formValidation.js":12,"./modules/googleMap.js":13,"./modules/hideAlert.js":14,"./modules/keywordSearch.js":15,"./modules/locationListing.js":16,"./modules/mainNav.js":17,"./modules/mainNavPilot.js":18,"./modules/mobileNav.js":19,"./modules/responsiveVideo.js":20,"./modules/richText.js":21,"./modules/scrollAnchors.js":22,"./modules/utilNav.js":23}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-accordion').each(function () {
    var $el = $(this),
        $link = $el.find('.js-accordion-link'),
        $content = $el.find('.js-accordion-content'),
        active = (0, _helpersCssControlCodeJs2['default'])($el),
        open = $el.hasClass('is-open');

    $el.attr('aria-expanded', open);

    if (open) {
      // setup the inline display block
      $content.stop(true, true).slideDown();
    }

    $link.on('click', function (e) {
      if (active) {
        e.preventDefault();
        open = $el.hasClass('is-open');
        if (open) {
          $content.stop(true, true).slideUp();
        } else {
          $content.stop(true, true).slideDown();
        }
        $el.attr('aria-expanded', !open).toggleClass('is-open');
      }
    });

    $(window).resize(function () {
      var temp = (0, _helpersCssControlCodeJs2['default'])($el);

      if (temp !== active && !temp) {
        $content.removeAttr('style');
        $el.removeClass('is-open');
        $el.attr('aria-expanded', 'false');
      }

      active = temp;
    }).resize();
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cssControlCode.js":2}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  var $footer = $('.js-footer'),
      visibleThreshold = 250,
      staticThreshold = 50;

  $(".js-back2top").each(function () {
    var $el = $(this);

    $el.on('click', function (e) {
      e.preventDefault();
      try {
        $("html, body").stop(true, true).animate({ scrollTop: 0 }, '750');
      } catch (e) {
        $('body').scrollTop(0);
      }
      // Bring keyboard focus back to top as well.
      $("#main-content").focus();
      return false;
    });

    $(window).on('scroll', function () {
      // if we've exceeded the threshold of scrolling
      // from the top, show control
      var scrollTop = $(window).scrollTop();

      if (scrollTop > visibleThreshold) {
        $el.removeClass('is-hidden');
      } else {
        $el.addClass('is-hidden');
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-banner-carousel').each(function () {
    var $el = $(this);

    if ($el.children().length <= 1) {
      return;
    }

    var slider = $el.slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {
  $('.js-clickable').each(function () {
    // if the this is clicked
    $(this).click(function (event) {
      event.preventDefault();

      var $el = $(this).find('.js-clickable-link').first();
      // find the destination
      var dest = $el.attr("href");
      // if the target attribute exists
      if ("_blank" === $el.attr("target")) {
        // launch new tab/window
        window.open(dest);
      } else {
        // otherwise redirect to a new page
        window.location = dest;
      }
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
// ****** basic custom select that uses mobile select keyboard ******
"use strict";

var dropdownMenu = document.querySelectorAll(".js-dropdown");

if (null !== dropdownMenu) {

  var _length = dropdownMenu.length;

  var _loop = function (i) {
    var parentEl = dropdownMenu[i],
        selectEl = parentEl.querySelector(".js-dropdown-select"),
        link = parentEl.querySelector(".js-dropdown-link");

    if (null === selectEl || null === link) {
      return "break";
    }

    selectEl.onchange = function () {
      var elem = typeof this.selectedIndex === "undefined" ? window.event.srcElement : this;
      link.innerText = elem.text || elem.options[elem.selectedIndex].text;
    };
  };

  for (var i = 0; i < _length; i++) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {
  // Emergency Alerts start close on page load
  // the default behavior is to expand the alerts
  // Emergency Alerts should stay closed if the cookie is set to false

  /* ********* NOTE: 
    This component is dependent on the 
    accordion.js component runing before it. 
  ********* */

  $('.js-emergency-alerts').each(function () {
    var $el = $(this),
        open = true,
        id = $el.data('id'),
        cookieName = 'emergency-alerts' + id,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName),
        $button = $el.find('.js-accordion-link button');

    $button.on('click', function () {
      // clicking this link also triggers the accordion click
      // toggle the current state
      open = !open;
      // update open/close state cookie
      // leave off third argument to make it expire on session
      _helpersCookiesJs2['default'].setCookie(cookieName, open);
    });

    // if the user has closed the alerts on a previous page
    if (typeof cookieValue !== 'undefined' && cookieValue === 'false') {
      open = false;
      // set the state of aria-expanded
      $button.attr('aria-expanded', open);
    }

    // Emergency Alerts loads closed so expand it.
    if (open) {
      open = false; // clicking the link swaps the value
      $button.first().trigger('click');
    }
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('form').each(function () {
    var $form = $(this),
        requiredFields = [];

    // find all required fields
    $('.js-is-required').each(function () {
      var $field = $(this),
          type = $field.data('type'),
          value = $field.val(),
          valid = validate(value, type);

      requiredFields.push({ type: type, valid: valid, $el: $field });

      $(this).data('index', requiredFields.length);
    });

    // if there aren't any required fields, don't do anything
    if (requiredFields.length === 0) {
      return;
    }

    $form.on('submit', function (e) {
      var submitForm = true;

      // validate each required field
      requiredFields.forEach(function (item) {
        var value = item.$el.val();

        item.valid = validate(value, item.type);

        if (item.valid) {
          item.$el.attr('data-valid', 'is-valid');
        } else {
          submitForm = false;
          item.$el.attr('data-valid', 'is-invalid');
        }
      });

      if (!submitForm) {
        // prevent the form from submitting
        e.preventDefault();
        // show the form error message
        // or blink the message if it is already visible
        $form.find('.js-error-msg').attr('hidden', true);
        setTimeout(function () {
          $form.find('.js-error-msg').removeAttr('hidden');
        }, 100);
      }
    });
  });

  function validate(value) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? 'text' : arguments[1];

    var valid = false;

    switch (type) {
      case 'email':
        valid = !!value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+/i);
        break;
      default:
        valid = value.length !== 0;
    }

    return valid;
  }
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersGetHandlebarTemplateJs = require("../helpers/getHandlebarTemplate.js");

var _helpersGetHandlebarTemplateJs2 = _interopRequireDefault(_helpersGetHandlebarTemplateJs);

exports['default'] = (function (window, document, $, undefined) {

  // only run this code if there is a google map component on the page
  if (!$('.js-google-map').length || typeof googleMapData === 'undefined') {
    return;
  }

  var compiledTemplate = (0, _helpersGetHandlebarTemplateJs2['default'])('googleMapInfo');

  // after the api is loaded this function is called
  window.initMap = function () {

    $(".js-google-map").each(function (i) {
      var $el = $(this);

      // get the maps data
      // this could be replaced with an api
      var rawData = googleMapData[i];

      // *** Create the Map *** //
      // map defaults
      var initMapData = {
        scrollwheel: false
      };
      // create map Data by combining the rawData with the defaults
      var mapData = Object.assign({}, rawData.map, initMapData);

      var map = new google.maps.Map(this, mapData);

      var markers = [];

      // *** Add Markers with popups *** //
      rawData.markers.forEach(function (d, i) {
        var markerData = Object.assign({ map: map }, d);

        var marker = new google.maps.Marker(markerData);

        var infoData = infoTransform(markerData.infoWindow);
        var template = compiledTemplate(infoData);
        var infoWindow = new google.maps.InfoWindow({
          content: template
        });

        var markerBouncing = null;

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });

        marker.showInfo = function () {
          infoWindow.open(map, marker);
          marker.open = true;
        };

        marker.hideInfo = function () {
          infoWindow.close(map, marker);
          marker.open = false;
        };

        marker.bounce = function () {
          clearTimeout(markerBouncing);
          marker.setAnimation(null);
          marker.setAnimation(google.maps.Animation.BOUNCE);
          markerBouncing = setTimeout(function () {
            marker.setAnimation(null);
          }, 3000);
        };

        markers.push(marker);
      });

      // listen for recenter command
      $el.on("recenter", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        var marker = markers[markerIndex];
        // center the map on this marker     
        map.setCenter(marker.getPosition());
        // close all open infoWindows
        for (var _i in markers) {
          if (markers[_i].open) {
            markers[_i].hideInfo();
          }
        }
        // show the infoWindow for this marker
        marker.showInfo();
      });
      // listen for bounce command
      $el.on("bounce", function (event, markerIndex) {
        if (typeof markers[markerIndex] === "undefined") {
          return false;
        }
        var marker = markers[markerIndex];
        // center the map on this marker     
        map.setCenter(marker.getPosition());
        // make the marker bounce three times
        marker.bounce();
      });
    });
  };

  function infoTransform(data) {
    var infoData = {
      phoneFormatted: formatPhone(data.phone),
      faxFormatted: formatPhone(data.fax)
    };
    return Object.assign({}, data, infoData);
  }

  function formatPhone(phone) {
    var phoneTemp = phone[0] === '1' ? phone.substring(1) : phone;
    return phoneTemp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  // load Google's api
  var script = document.createElement('script');
  script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyC-WIoNfS6fh7TOtOqpDEgKST-W_NBebTk&callback=initMap";
  document.getElementsByTagName('head')[0].appendChild(script);
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/getHandlebarTemplate.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersCookiesJs = require("../helpers/cookies.js");

var _helpersCookiesJs2 = _interopRequireDefault(_helpersCookiesJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-header-alert').each(function () {
    var $el = $(this),
        $link = $el.find('.js-header-alert-link'),
        id = $el.data('id'),
        cookieName = "Alert" + id,
        cookieExpires = 365,
        cookieValue = _helpersCookiesJs2['default'].getCookie(cookieName);

    // show alert if cookie doesn't exist
    if (cookieValue !== "hide") {
      $el.fadeIn().fadeOut('fast').fadeIn('slow');
    }

    // hide the alert
    $link.on('click', function () {
      _helpersCookiesJs2['default'].setCookie(cookieName, "hide", cookieExpires);
      $el.stop(true, true).fadeOut();
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/cookies.js":1}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-keyword-search').each(function () {
    var $el = $(this),
        $form = $el.find('form');

    $form.on('submit', function (e) {
      e.preventDefault();
      $el.addClass('is-dirty');
    });

    $form.on('reset', function () {
      $el.removeClass('is-dirty');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersStickyJs = require("../helpers/sticky.js");

var _helpersStickyJs2 = _interopRequireDefault(_helpersStickyJs);

exports['default'] = (function (window, document, $, undefined) {

  $('.js-location-listing').each(function () {
    var $el = $(this),
        $mapCol = $el.find('.js-location-listing-map'),
        $map = $el.find('.js-google-map');

    _helpersStickyJs2['default'].init($mapCol);

    // find the location link
    $el.find('.js-location-listing-link').each(function (index) {
      var $link = $(this);

      // when link is clicked
      $link.on('click', function () {
        // trigger map to recenter on this item based on it's index.
        $map.trigger('recenter', index);
        // mark this link as active
        $el.find('.js-location-listing-link.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        // focus on the map - mainly for mobile when it is stacked
        var position = $map.offset().top;
        $("html,body").stop(true, true).animate({ scrollTop: position }, '750');
      });

      // when link is hovered
      $link.on('mouseenter', function () {
        // trigger map to recenter on this item and make the marker bounce
        $map.trigger('bounce', index);
      });
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{"../helpers/sticky.js":4}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  var windowWidth = window.innerWidth;

  $(window).resize(function () {
    windowWidth = window.innerWidth;
  });

  $('.js-main-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-submenu",
        $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle'),
        $mainNavItems = $parent.find('.js-main-nav-toggle, .js-main-nav-top-link'),
        previousKey = null,
        breakpoint = 800; // matches CSS breakpoint for Main Nav

    $mainNavItems.on('keydown', function (e) {
      if (windowWidth <= breakpoint) {
        // only for desktop
        return;
      }

      // Grab all the DOM info we need...
      var $link = $(this),
          $topLevelLinks = $parent.find('.ma__main-nav__top-link'),
          open = $link.hasClass(openClass),
          $openContent = $parent.find('.js-main-nav-content.' + openClass),
          $focusedElement = $(document.activeElement),

      // relevant if open..
      $topLevelItem = $focusedElement.parents('.ma__main-nav__item'),
          $topLevelLink = $topLevelItem.find('.ma__main-nav__top-link'),
          $dropdownLinks = $link.find('.ma__main-nav__subitem .ma__main-nav__link'),
          focusIndexInDropdown = $dropdownLinks.index($focusedElement),
          isShift = !!e.shiftKey; // typecast to boolean

      // down arrow or tab key
      if (e.keyCode === 40 || e.keyCode === 9 && !isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select next menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown === $dropdownLinks.length - 1) {
            return;
          } else {
            if (focusIndexInDropdown === -1) {
              $dropdownLinks[1].focus();
            } else {
              $dropdownLinks[focusIndexInDropdown + 1].focus();
            }
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.attr('aria-expanded', 'true');
          $link.addClass(openClass);
          if ($dropdownLinks[1]) {
            $dropdownLinks[1].focus();
          }
          return;
        }
      }

      // up arrow or shift+tab keys
      if (e.keyCode === 38 || e.keyCode === 9 && isShift) {
        // hide content
        // If menubar focus
        //  - Open pull down menu and select first menu item
        //
        // If dropdown focus
        //  - Select previous menu item
        e.preventDefault();
        if (open) {
          if (focusIndexInDropdown <= 1) {
            // not 0 bc of hidden first link
            hide($openContent);
            $topLevelLink.focus().attr('aria-expanded', 'false');
            return;
          } else {
            $dropdownLinks[focusIndexInDropdown - 1].focus();
            return;
          }
        } else {
          show($topLevelItem.find('.js-main-nav-content'));
          $topLevelLink.focus().attr('aria-expanded', 'true');
          $link.addClass(openClass);
          return;
        }
      }

      // esc key
      if (e.keyCode === 27) {
        // Close menu and return focus to menubar
        e.preventDefault();
        hide($openContent);
        $link.removeClass(openClass);
        $topLevelLink.focus().attr('aria-expanded', 'false');
        return;
      }

      // left arrow key
      if (e.keyCode === 37) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Previous menubar item
        //
        // If dropdown focus
        //  - Open previous pull down menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) - 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }
      // right arrow key
      if (e.keyCode === 39) {
        e.preventDefault();
        // hide content
        // If menubar focus
        //  - Next menubar item
        //
        // If dropdown focus
        //  - Open next pull menu and select first item
        hide($openContent);
        $topLevelLink.attr('aria-expanded', 'false');
        var index = $topLevelLinks.index($topLevelLink) + 1;
        if ($topLevelLinks[index]) {
          $topLevelLinks[index].focus();
        }
        return;
      }

      // key code 9 is the tab key
      if (open || typeof e.keycode !== "undefined" && e.keycode !== 9) {
        return;
      }
    });
    $mainNavItems.on('mouseenter', function (e) {
      $(this).children('button').attr("aria-expanded", "true");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        show($openContent);
      }
    });
    $mainNavItems.on('mouseleave', function (e) {
      $(this).children('button').attr("aria-expanded", "false");

      if (windowWidth > breakpoint) {
        var $openContent = $(this).find('.js-main-nav-content');
        hide($openContent);
      }
    });
    $mainNavToggle.children('button, a').on('click', function (e) {
      var $el = $(this);
      var $elParent = $(this).parent();
      var $content = $elParent.find('.js-main-nav-content');
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      var isOpen = $content.hasClass(openClass);

      // mobile
      if (windowWidth <= breakpoint) {
        e.preventDefault();
        // add open class to this item
        $elParent.addClass(openClass);
        show($content);
        $el.attr('aria-expanded', 'true');
      } else {
        hide($openContent);
        $el.attr('aria-expanded', 'false');

        if (!isOpen) {
          show($content);
          $el.attr('aria-expanded', 'true');
        }
      }
    });
    $mainNavToggle.last().find('.js-main-nav-content li').last().find('a').on('keydown', function (e) {
      e.stopPropagation();
      // previous key was not a shift
      if (e.keyCode === 9 && previousKey !== 16) {
        // tab arrow\
        var $openContent = $parent.find('.js-main-nav-content.' + openClass);
        hide($openContent);
      }
      previousKey = e.keyCode;
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    // Hide any open submenu content when the sidebar menu is closed
    $('.js-header-menu-button').click(function () {
      var $openContent = $parent.find('.js-main-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);

      if (windowWidth <= breakpoint) {
        $content.addClass(closeClass);
      } else {
        $content.stop(true, true).slideUp('fast', function () {
          $content.addClass(closeClass).slideDown(0);
        });
      }
    }

    function show($content) {
      $('body').addClass(submenuClass);
      if (windowWidth <= breakpoint) {
        $content.addClass(openClass).removeClass(closeClass);
      } else {
        $content.stop(true, true).delay(200).slideUp(0, function () {
          $content.addClass(openClass).removeClass(closeClass).slideDown('fast');
        });
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-main-nav').each(function () {
    var $parent = $(this),
        $mainNavToggle = $parent.find('.js-main-nav-toggle');

    // make root top-level links inert for pilot
    $mainNavToggle.children('a').on('click', function (e) {
      e.preventDefault();
    });

    // Ensure top-level links that are potential anchor links close the sidebar on mobile
    $parent.find('.js-main-nav-top-link').find('a').on('click', function () {
      $('.js-header-menu-button').trigger('click');
    });
  });
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
// ****** Menu button ******
"use strict";

var menuButton = document.querySelector(".js-header-menu-button");

if (null !== menuButton) {
  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

// ****** Main Header Search button on mobile should open the mobile menu  ******
var searchForm = document.querySelector(".js-header-search-menu .js-header-search-form");

if (null !== searchForm) {
  searchForm.addEventListener("submit", function (event) {
    if (window.innerWidth > 620) {
      return;
    }
    event.preventDefault();
    document.querySelector("body").classList.toggle("show-menu");
  });
}

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = (function (window, document, $, undefined) {

  $('.js-ma-responsive-video').fitVids();
})(window, document, jQuery);

;
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-ma-rich-text table').wrap("<div class='ma__rich-text__table-wrapper'></div>");
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpersCssControlCodeJs = require("../helpers/cssControlCode.js");

var _helpersCssControlCodeJs2 = _interopRequireDefault(_helpersCssControlCodeJs);

exports["default"] = (function (window, document, $, undefined) {

  $(".js-scroll-anchors").each(function () {
    var $el = $(this),
        $elParent = $el.parent().css('position') === 'relative' ? $el.parent() : $el.parent().offsetParent(),
        $links = $el.find('.js-scroll-anchors-link'),
        elHeight = undefined,
        headerBuffer = 0,
        lowerLimit = undefined,
        upperLimit = undefined,
        debounceTimer = undefined,
        activeClass = "is-active",
        activeAnchorIndex = 0,
        anchors = [],
        numAnchors = 0,
        isMobile = false,
        linkScrolling = false;

    setVariables();

    // default assumption as to where the screen will load
    $el.attr('data-sticky', 'top');

    // update variables one more time to catch any post page load changes
    window.setTimeout(function () {
      setVariables();
    }, 1000);

    $links.on('click', function (e) {
      e.preventDefault();

      // is the menu closed on mobile
      if (!$el.hasClass('is-open') && isMobile) {
        // just show the menu
        $el.addClass('is-open');
        return;
      }

      activeAnchorIndex = $(this).data('index');
      // find the location of the desired link and scroll the page
      var position = anchors[activeAnchorIndex].position;
      // close the menu
      $el.removeClass('is-open');
      // remove active flag from other links
      $el.find('.' + activeClass).removeClass(activeClass);
      // mark this link as active
      $(this).addClass(activeClass);
      // prevent the scroll event from updating active links
      linkScrolling = true;

      $("html,body").stop(true, true).animate({ scrollTop: position }, '750', function () {
        linkScrolling = false;
        // Get the link hash target so we can bring focus to it
        var hash = anchors[activeAnchorIndex].hash;
        // bring focus to the item we just scrolled to
        $(hash).focus();
      });
    });

    // if the content contains accordions,
    // readjust settings when there state changes.
    $('.js-accordion-link').on('click', function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 400);
    });

    $el.find(".js-scroll-anchors-toggle").on('click', function () {
      $el.toggleClass('is-open');
    });

    // make the links sticky
    $(window).resize(function () {
      if (typeof debounceTimer === "number") {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(function () {
        setVariables();
        setPosition();
        activateLink();
      }, 300);
    });

    $(window).scroll(function () {
      setPosition();
      activateLink();
    });

    function setVariables() {
      var topOffset = 0;

      headerBuffer = 0;
      elHeight = $el.outerHeight(true);
      upperLimit = $elParent.offset().top;
      isMobile = (0, _helpersCssControlCodeJs2["default"])($el);

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (isMobile) {
        headerBuffer = $('.js-sticky-header').height() || 0;
        upperLimit -= headerBuffer;
        topOffset = elHeight;
      }

      lowerLimit = upperLimit + $elParent.outerHeight(true) - $el.height();

      // locate the position of all of the anchor targets
      anchors = new Array();
      $links.each(function (i, e) {
        var $el = $(this),
            $link = $el.is('a') ? $el : $el.find('a'),
            hash = $link[0].hash,
            position = $(hash).offset() ? $(hash).offset().top - headerBuffer - topOffset : upperLimit;

        anchors[i] = { hash: hash, position: position };

        $el.data('index', i);
      });

      // record the number of anchors for performance
      numAnchors = anchors.length;
    }

    function setPosition() {
      var windowTop = $(window).scrollTop(),
          attr = $el.attr('data-sticky'),
          top = attr !== 'top' && windowTop <= upperLimit,
          middle = attr !== 'middle' && windowTop < lowerLimit && windowTop > upperLimit,
          bottom = attr !== 'bottom' && windowTop >= lowerLimit;

      if ($elParent[0].hasAttribute("style") && !isMobile) {
        $elParent.removeAttr('style');
      }

      if (!$elParent[0].hasAttribute("style") && isMobile && attr === 'middle') {
        $elParent.css({ 'paddingTop': elHeight });
      }

      if (top) {
        $el.attr('data-sticky', 'top');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      } else if (middle) {
        $el.attr('data-sticky', 'middle');

        if (isMobile) {
          $elParent.css({ 'paddingTop': elHeight });
        }
      } else if (bottom) {
        $el.attr('data-sticky', 'bottom');

        if (isMobile) {
          $elParent.removeAttr('style');
        }
      }
    }

    function activateLink() {
      // do we have more than one anchor
      if (numAnchors < 2 || linkScrolling) {
        return;
      }

      // get the current scroll position and offset by half the view port
      var windowTop = $(window).scrollTop() + window.innerHeight / 2,
          currentAnchor = activeAnchorIndex;

      // is there a prev target
      // and
      // is the current scroll position above the current target
      if (currentAnchor > 0 && windowTop < anchors[activeAnchorIndex].position) {
        // make the prev link active
        --activeAnchorIndex;
      }

      // is there a next target
      // and
      // is the current scroll position below the next target
      else if (currentAnchor < numAnchors - 1 && windowTop > anchors[activeAnchorIndex + 1].position) {
          // make the next link active
          ++activeAnchorIndex;
        }

      if (currentAnchor !== activeAnchorIndex) {
        // move the active flag
        $el.find('.' + activeClass).removeClass(activeClass);
        $links.eq(activeAnchorIndex).addClass(activeClass);
      }
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{"../helpers/cssControlCode.js":2}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = (function (window, document, $, undefined) {

  $('.js-util-nav').each(function () {
    var openClass = "is-open",
        closeClass = "is-closed",
        submenuClass = "show-utilmenu",
        $parent = $(this),
        waitForIt = null;

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    $parent.find('.js-util-nav-toggle > a').on('click', function (e) {
      e.preventdefault;

      var open = $(this).hasClass(openClass),
          $content = $(this).next('.js-util-nav-content'),
          $openContent = $parent.find('.js-util-nav-content.' + openClass);

      // hide other content
      hide($openContent);

      if (open) {
        return;
      }
      // add open class to this item
      $(this).addClass(openClass);
      // add open class to the correct content based on index
      $content.attr("aria-hidden", "false");

      setTimeout(function () {
        $content.removeClass(closeClass).addClass(openClass);
        $('body').addClass(submenuClass);
      }, .1);
    });

    $parent.find('.js-close-util-nav').on('click', function (e) {
      e.preventDefault;

      hide($(this).closest('.js-util-nav-content'));
    });

    $('.js-close-sub-nav').on('click', function () {
      var $openContent = $parent.find('.js-util-nav-content.' + openClass);
      hide($openContent);
    });

    function hide($content) {
      $('body').removeClass(submenuClass);
      $parent.find("." + openClass).removeClass(openClass);
      $content.removeClass(openClass).addClass(closeClass);

      if (waitForIt) {
        clearTimeout(waitForIt);
      }
      waitForIt = setTimeout(function () {
        $content.attr("aria-hidden", "true");
      }, 1000);
    }
  });
})(window, document, jQuery);

;
module.exports = exports["default"];

},{}]},{},[5])

//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2hlbHBlcnMvY29va2llcy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9jc3NDb250cm9sQ29kZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvaGVscGVycy9zdGlja3kuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL2luZGV4LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2FjY29yZGlvbnMuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvYmFjazJ0b3AuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvYmFubmVyQ2Fyb3VzZWwuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvY2xpY2thYmxlLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2Ryb3Bkb3duLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2VtZXJnZW5jeUFsZXJ0cy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9nb29nbGVNYXAuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvaGlkZUFsZXJ0LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL2tleXdvcmRTZWFyY2guanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbG9jYXRpb25MaXN0aW5nLmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21haW5OYXYuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvbWFpbk5hdlBpbG90LmpzIiwiL1VzZXJzL2pjb25zdGFudGluZS9tYXNzZ292LXdvcmsvbWF5Zmxvd2VyL3N0eWxlZ3VpZGUvc291cmNlL2Fzc2V0cy9qcy9tb2R1bGVzL21vYmlsZU5hdi5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy9yZXNwb25zaXZlVmlkZW8uanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvcmljaFRleHQuanMiLCIvVXNlcnMvamNvbnN0YW50aW5lL21hc3Nnb3Ytd29yay9tYXlmbG93ZXIvc3R5bGVndWlkZS9zb3VyY2UvYXNzZXRzL2pzL21vZHVsZXMvc2Nyb2xsQW5jaG9ycy5qcyIsIi9Vc2Vycy9qY29uc3RhbnRpbmUvbWFzc2dvdi13b3JrL21heWZsb3dlci9zdHlsZWd1aWRlL3NvdXJjZS9hc3NldHMvanMvbW9kdWxlcy91dGlsTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUEsVUFBUyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztBQUNwRCxjQUFZLENBQUM7O0FBRWIsV0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBRyxPQUFPLE9BQU8sQUFBQyxLQUFLLFFBQVEsRUFBRTtBQUMvQixVQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLE9BQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFJLE9BQU8sR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxJQUFJLEFBQUMsQ0FBQyxDQUFDO0FBQ2pELFVBQUksT0FBTyxHQUFHLFVBQVUsR0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekMsY0FBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQztLQUNwRSxNQUFNO0FBQ0wsY0FBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUM7S0FDbkQ7R0FFRjs7QUFFRCxXQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDdkIsUUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDbkMsUUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLFFBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0dBQzlEOztBQUVELFNBQU87QUFDTCxhQUFTLEVBQVQsU0FBUztBQUNULGFBQVMsRUFBVCxTQUFTO0dBQ1YsQ0FBQztDQUVILENBQUEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztxQkN2QkwsVUFBQyxHQUFHLEVBQUs7QUFDdEIsTUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ25CLE1BQUk7QUFDRixTQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0dBQ25HLENBQUMsT0FBTSxHQUFHLEVBQUUsRUFBRTtBQUNmLFNBQU8sS0FBSyxLQUFLLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0NBQ3pDOzs7Ozs7O0FDVEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLElBQUksRUFBRTtBQUM5QixRQUFJLFVBQVUsQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ2hGLGNBQU0sQ0FBQyxJQUFJLENBQUM7QUFDUixlQUFHLEVBQUcsU0FBUyxHQUFHLGdCQUFnQixHQUFHLElBQUksR0FBRyxPQUFPO0FBQ25ELG1CQUFPLEVBQUcsaUJBQVMsSUFBSSxFQUFFO0FBQ3JCLG9CQUFJLFVBQVUsQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO0FBQ3BDLDhCQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztpQkFDN0I7QUFDRCwwQkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pEO0FBQ0QsaUJBQUssRUFBRyxLQUFLO1NBQ2hCLENBQUMsQ0FBQztLQUNOO0FBQ0QsV0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ25DLENBQUM7Ozs7Ozs7Ozs7O3VDQ2RzQiw4QkFBOEI7Ozs7cUJBRXZDLENBQUEsVUFBVSxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUU7QUFDcEQsTUFBSSxHQUFHLFlBQUE7TUFDTCxTQUFTLFlBQUE7TUFDVCxRQUFRLFlBQUE7TUFDUixPQUFPLFlBQUE7TUFDUCxVQUFVLFlBQUE7TUFDVixVQUFVLFlBQUE7TUFDVixhQUFhLFlBQUE7TUFDYixPQUFPLEdBQUcsS0FBSyxDQUFDOztBQUVsQixXQUFTLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDckIsT0FBRyxHQUFHLE9BQU8sQ0FBQztBQUNkLGFBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDOzs7QUFHckcsT0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTlCLGNBQVUsRUFBRSxDQUFDOzs7QUFHYixVQUFNLENBQUMsVUFBVSxDQUFDLFlBQVU7QUFDMUIsZ0JBQVUsRUFBRSxDQUFDO0tBQ2QsRUFBQyxJQUFJLENBQUMsQ0FBQzs7QUFFUixLQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVc7QUFDMUIsZ0JBQVUsRUFBRSxDQUFDO0FBQ2IsaUJBQVcsRUFBRSxDQUFDO0tBQ2YsQ0FBQyxDQUFDOzs7QUFHSCxLQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7QUFDM0IsaUJBQVcsRUFBRSxDQUFDO0tBQ2YsQ0FBQyxDQUFDO0dBQ0o7O0FBRUQsV0FBUyxVQUFVLEdBQUU7QUFDbkIsUUFBSSxVQUFVLEdBQUcsMENBQVksR0FBRyxDQUFDLENBQUM7O0FBRWxDLFFBQUcsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ3pCLFNBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDekI7O0FBRUQsV0FBTyxHQUFHLFVBQVUsQ0FBQzs7QUFFckIsUUFBRyxDQUFDLE9BQU8sRUFBQztBQUNWLGFBQU87S0FDUjs7QUFFRCxXQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLFlBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDeEIsV0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM1QixjQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxjQUFVLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDOztBQUVyRSxPQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3BCOztBQUVELFdBQVMsV0FBVyxHQUFHO0FBQ3JCLFFBQUcsQ0FBQyxPQUFPLEVBQUM7QUFDVixTQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixhQUFPLEtBQUssQ0FBQztLQUNkOztBQUVELFFBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUU7UUFDakMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLEdBQUcsR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLFNBQVMsSUFBSSxVQUFVO1FBQy9DLE1BQU0sR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLFNBQVMsR0FBRyxVQUFVLElBQUksU0FBUyxHQUFHLFVBQVU7UUFDOUUsTUFBTSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUksU0FBUyxJQUFJLFVBQVUsQ0FBQzs7QUFFMUQsUUFBRyxHQUFHLEVBQUU7QUFDTixTQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsQ0FBQztLQUMvQixNQUNJLElBQUksTUFBTSxFQUFFO0FBQ2YsU0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsUUFBUSxDQUFDLENBQUM7S0FDbEMsTUFDSSxJQUFJLE1BQU0sRUFBRTtBQUNmLFNBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2xDO0dBQ0Y7O0FBRUQsU0FBTyxFQUFDLElBQUksRUFBSixJQUFJLEVBQUMsQ0FBQztDQUVmLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7OzttQ0NwRkcseUJBQXlCOzs7O2tDQUN6Qix3QkFBd0I7Ozs7aUNBQ3hCLHVCQUF1Qjs7Ozt1Q0FDdkIsNkJBQTZCOzs7O2tDQUM3Qix3QkFBd0I7Ozs7aUNBQ3hCLHVCQUF1Qjs7Ozt3Q0FDdkIsOEJBQThCOzs7O3VDQUM5Qiw2QkFBNkI7Ozs7a0NBQzdCLHdCQUF3Qjs7OztzQ0FDeEIsNEJBQTRCOzs7O3dDQUM1Qiw4QkFBOEI7Ozs7Z0NBQzlCLHNCQUFzQjs7OztxQ0FDdEIsMkJBQTJCOzs7O2tDQUMzQix3QkFBd0I7Ozs7d0NBQ3hCLDhCQUE4Qjs7OztpQ0FDOUIsdUJBQXVCOzs7O3NDQUN2Qiw0QkFBNEI7Ozs7Z0NBQzVCLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozt1Q0NqQjNCLDhCQUE4Qjs7OztxQkFFdkMsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsR0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFVO0FBQ2hDLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDYixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUN0QyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUM1QyxNQUFNLEdBQUcsMENBQVksR0FBRyxDQUFDO1FBQ3pCLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVuQyxPQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsQ0FBQzs7QUFFL0IsUUFBRyxJQUFJLEVBQUU7O0FBRVAsY0FBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDdEM7O0FBRUQsU0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsVUFBUyxDQUFDLEVBQUM7QUFDMUIsVUFBRyxNQUFNLEVBQUU7QUFDVCxTQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsWUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsWUFBRyxJQUFJLEVBQUM7QUFDTixrQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEMsTUFBTTtBQUNMLGtCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN0QztBQUNELFdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO09BQ3hEO0tBQ0YsQ0FBQyxDQUFBOztBQUVGLEtBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUMzQixVQUFJLElBQUksR0FBRywwQ0FBWSxHQUFHLENBQUMsQ0FBQzs7QUFFNUIsVUFBRyxJQUFJLEtBQUssTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQzNCLGdCQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLFdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0IsV0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsT0FBTyxDQUFDLENBQUM7T0FDbkM7O0FBRUQsWUFBTSxHQUFHLElBQUksQ0FBQztLQUNmLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNiLENBQUMsQ0FBQztDQUVKLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7Ozs7O3FCQzVDWCxDQUFBLFVBQVUsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFFO0FBQ3BELE1BQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7TUFDekIsZ0JBQWdCLEdBQUcsR0FBRztNQUN0QixlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUV6QixHQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVc7QUFDaEMsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVsQixPQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFTLENBQUMsRUFBRTtBQUN6QixPQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsVUFBSTtBQUNGLFNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUMvRCxDQUNELE9BQU0sQ0FBQyxFQUFFO0FBQ1AsU0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUN4Qjs7QUFFRCxPQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0IsYUFBTyxLQUFLLENBQUM7S0FDZCxDQUFDLENBQUM7O0FBRUgsS0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVzs7O0FBR2hDLFVBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7QUFFdEMsVUFBSSxTQUFTLEdBQUcsZ0JBQWdCLEVBQUU7QUFDOUIsV0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUNoQyxNQUFNO0FBQ0gsV0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUM3QjtLQUNGLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUVKLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7Ozs7O3FCQ2xDWCxDQUFBLFVBQVUsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFFOztBQUVwRCxHQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVTtBQUN0QyxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxCLFFBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDN0IsYUFBTztLQUNSOztBQUVELFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDckIsVUFBSSxFQUFFLElBQUk7QUFDVixlQUFTLEVBQUUsb0RBQW9EO0FBQy9ELGVBQVMsRUFBRSxvREFBb0Q7S0FDaEUsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBRUosQ0FBQSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxDQUFDOztBQUFBLENBQUM7Ozs7Ozs7Ozs7cUJDaEJYLENBQUEsVUFBVSxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUU7QUFDcEQsR0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFVOztBQUVoQyxLQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsS0FBSyxFQUFDO0FBQzNCLFdBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7QUFFdkIsVUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUVyRCxVQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU1QixVQUFHLFFBQVEsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztBQUVsQyxjQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ25CLE1BQU07O0FBRUwsY0FBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7T0FDeEI7S0FDRixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFBLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7O0FBQUEsQ0FBQzs7Ozs7OztBQ2xCMUIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUU3RCxJQUFHLElBQUksS0FBSyxZQUFZLEVBQUM7O0FBRXZCLE1BQUksT0FBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7O3dCQUV4QixDQUFDO0FBQ1IsUUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxQixRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBOztBQUV0RCxRQUFHLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtBQUNyQyxxQkFBTTtLQUNQOztBQUVELFlBQVEsQ0FBQyxRQUFRLEdBQUcsWUFBVztBQUM3QixVQUFJLElBQUksR0FBSSxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQUFBQyxDQUFDO0FBQ3hGLFVBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDckUsQ0FBQTs7O0FBWkgsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRztxQkFBekIsQ0FBQzs7MEJBTU4sTUFBTTtHQU9UO0NBQ0Y7Ozs7Ozs7Ozs7O2dDQ3JCb0IsdUJBQXVCOzs7O3FCQUU3QixDQUFBLFVBQVUsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFFOzs7Ozs7Ozs7O0FBVXBELEdBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFVO0FBQ3ZDLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDYixJQUFJLEdBQUcsSUFBSTtRQUNYLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixVQUFVLEdBQUcsa0JBQWtCLEdBQUcsRUFBRTtRQUNwQyxXQUFXLEdBQUcsOEJBQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztBQUVwRCxXQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXOzs7QUFHN0IsVUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDOzs7QUFHYixvQ0FBTyxTQUFTLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DLENBQUMsQ0FBQzs7O0FBR0gsUUFBRyxPQUFPLFdBQVcsQUFBQyxLQUFLLFdBQVcsSUFBSSxXQUFXLEtBQUssT0FBTyxFQUFFO0FBQ2pFLFVBQUksR0FBRyxLQUFLLENBQUM7O0FBRWIsYUFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDckM7OztBQUdELFFBQUcsSUFBSSxFQUFFO0FBQ1AsVUFBSSxHQUFHLEtBQUssQ0FBQztBQUNiLGFBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEM7R0FFRixDQUFDLENBQUM7Q0FDSixDQUFBLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7O0FBQUEsQ0FBQzs7Ozs7Ozs7OztxQkMzQ1gsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFVO0FBQ3ZCLFFBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDZixjQUFjLEdBQUcsRUFBRSxDQUFDOzs7QUFHeEIsS0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVU7QUFDbEMsVUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztVQUNoQixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7VUFDMUIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUU7VUFDcEIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWpDLG9CQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFKLElBQUksRUFBQyxLQUFLLEVBQUwsS0FBSyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDOztBQUU3QyxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0MsQ0FBQyxDQUFDOzs7QUFHSCxRQUFHLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzlCLGFBQU87S0FDUjs7QUFFRCxTQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFTLENBQUMsRUFBQztBQUM1QixVQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7OztBQUd0QixvQkFBYyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRTtBQUNwQyxZQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOztBQUUzQixZQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV2QyxZQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDYixjQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEMsTUFBTTtBQUNMLG9CQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ25CLGNBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxZQUFZLENBQUMsQ0FBQztTQUMxQztPQUNGLENBQUMsQ0FBQzs7QUFFSCxVQUFHLENBQUMsVUFBVSxFQUFFOztBQUVkLFNBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7O0FBR25CLGFBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsa0JBQVUsQ0FBQyxZQUFXO0FBQ3BCLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQ3hCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QixFQUFDLEdBQUcsQ0FBQyxDQUFDO09BQ1Y7S0FDRixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7O0FBRUgsV0FBUyxRQUFRLENBQUMsS0FBSyxFQUFhO1FBQVosSUFBSSx5REFBQyxNQUFNOztBQUNqQyxRQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7O0FBRWxCLFlBQU8sSUFBSTtBQUNULFdBQUssT0FBTztBQUNWLGFBQUssR0FBRyxDQUFDLENBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxBQUFDLENBQUM7QUFDL0QsY0FBTTtBQUFBLEFBQ1I7QUFDRSxhQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFBQSxLQUM5Qjs7QUFFRCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBRUYsQ0FBQSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxDQUFDOztBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs2Q0NyRUYsb0NBQW9DOzs7O3FCQUU3QyxDQUFBLFVBQVUsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFFOzs7QUFHcEQsTUFBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sSUFBSSxPQUFPLGFBQWEsS0FBSyxXQUFXLEVBQUM7QUFDckUsV0FBTztHQUNSOztBQUVELE1BQUksZ0JBQWdCLEdBQUcsZ0RBQVksZUFBZSxDQUFDLENBQUM7OztBQUdwRCxRQUFNLENBQUMsT0FBTyxHQUFHLFlBQVc7O0FBRTFCLEtBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUNuQyxVQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7QUFJcEIsVUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0FBSWpDLFVBQU0sV0FBVyxHQUFHO0FBQ2xCLG1CQUFXLEVBQUUsS0FBSztPQUNuQixDQUFBOztBQUVELFVBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7O0FBRTVELFVBQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUvQyxVQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7OztBQUdqQixhQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7QUFDbkMsWUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBSCxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEMsWUFBSSxNQUFNLEdBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakQsWUFBSSxRQUFRLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxZQUFJLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxZQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzFDLGlCQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUM7O0FBRUgsWUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDOztBQUUxQixjQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFVO0FBQ3BDLG9CQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM5QixDQUFDLENBQUM7O0FBRUgsY0FBTSxDQUFDLFFBQVEsR0FBRyxZQUFNO0FBQ3RCLG9CQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QixnQkFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDcEIsQ0FBQTs7QUFFRCxjQUFNLENBQUMsUUFBUSxHQUFHLFlBQU07QUFDdEIsb0JBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLGdCQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNyQixDQUFBOztBQUVELGNBQU0sQ0FBQyxNQUFNLEdBQUcsWUFBTTtBQUNwQixzQkFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdCLGdCQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLGdCQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELHdCQUFjLEdBQUcsVUFBVSxDQUFDLFlBQU07QUFDaEMsa0JBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDM0IsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNULENBQUE7O0FBRUQsZUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUN0QixDQUFDLENBQUM7OztBQUdILFNBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRztBQUNoRCxZQUFHLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUM5QyxpQkFBTyxLQUFLLENBQUM7U0FDZDtBQUNELFlBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFbEMsV0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7QUFFcEMsYUFBSyxJQUFJLEVBQUMsSUFBSSxPQUFPLEVBQUU7QUFDckIsY0FBRyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2xCLG1CQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7V0FDdkI7U0FDRjs7QUFFRCxjQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDbkIsQ0FBQyxDQUFDOztBQUVILFNBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRztBQUM5QyxZQUFHLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUM5QyxpQkFBTyxLQUFLLENBQUM7U0FDZDtBQUNELFlBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFbEMsV0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7QUFFcEMsY0FBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO09BQ2pCLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztHQUNKLENBQUE7O0FBRUQsV0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFO0FBQzNCLFFBQUksUUFBUSxHQUFHO0FBQ2Isb0JBQWMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QyxrQkFBWSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ3BDLENBQUE7QUFDRCxXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxRQUFRLENBQUMsQ0FBQztHQUN4Qzs7QUFFRCxXQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUU7QUFDMUIsUUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUM5RCxXQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDakU7OztBQUdELE1BQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUMsUUFBTSxDQUFDLEdBQUcsR0FBRyxnR0FBZ0csQ0FBQztBQUM5RyxVQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBR2hFLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7Z0NDM0hOLHVCQUF1Qjs7OztxQkFFNUIsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsR0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVU7QUFDbkMsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNiLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQ3pDLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixVQUFVLEdBQUcsT0FBTyxHQUFHLEVBQUU7UUFDekIsYUFBYSxHQUFHLEdBQUc7UUFDbkIsV0FBVyxHQUFHLDhCQUFRLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7O0FBR2hELFFBQUcsV0FBVyxLQUFLLE1BQU0sRUFBRTtBQUN6QixTQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3Qzs7O0FBR0QsU0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsWUFBVTtBQUN6QixvQ0FBUSxTQUFTLENBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxhQUFhLENBQUMsQ0FBQztBQUNuRCxTQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMvQixDQUFDLENBQUE7R0FDSCxDQUFDLENBQUM7Q0FDSixDQUFBLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7O0FBQUEsQ0FBQzs7Ozs7Ozs7OztxQkN2QlgsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsR0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVU7QUFDckMsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNiLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QixTQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxVQUFTLENBQUMsRUFBQztBQUMzQixPQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsU0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtLQUN6QixDQUFDLENBQUM7O0FBRUgsU0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsWUFBVTtBQUN6QixTQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0tBQzVCLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUVKLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7K0JDaEJQLHNCQUFzQjs7OztxQkFFMUIsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsR0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVU7QUFDdkMsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNiLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQzlDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRXRDLGlDQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O0FBR3JCLE9BQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLLEVBQUU7QUFDekQsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7QUFHcEIsV0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVTs7QUFFMUIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsS0FBSyxDQUFDLENBQUM7O0FBRS9CLFdBQUcsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekUsU0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFOUIsWUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUNqQyxTQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDckUsQ0FBQyxDQUFDOzs7QUFHSCxXQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFVOztBQUUvQixZQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztPQUM5QixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7R0FFSixDQUFDLENBQUM7Q0FDSixDQUFBLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7O0FBQUEsQ0FBQzs7Ozs7Ozs7OztxQkNuQ1gsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsTUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7QUFFcEMsR0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFVO0FBQ3pCLGVBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0dBQ2pDLENBQUMsQ0FBQzs7QUFFSCxHQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVc7QUFDaEMsUUFBSSxTQUFTLEdBQUcsU0FBUztRQUNyQixVQUFVLEdBQUcsV0FBVztRQUN4QixZQUFZLEdBQUcsY0FBYztRQUM3QixPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqQixjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUNwRCxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztRQUMxRSxXQUFXLEdBQUcsSUFBSTtRQUNsQixVQUFVLEdBQUcsR0FBRyxDQUFDOztBQUVyQixpQkFBYSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDdEMsVUFBRyxXQUFXLElBQUksVUFBVSxFQUFFOztBQUU1QixlQUFPO09BQ1I7OztBQUdELFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7VUFDZixjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztVQUN4RCxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7VUFDaEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO1VBQ2hFLGVBQWUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQzs7O0FBRTNDLG1CQUFhLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztVQUM5RCxhQUFhLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztVQUM3RCxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztVQUN6RSxvQkFBb0IsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztVQUM1RCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7OztBQUczQixVQUFHLEFBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQU0sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEFBQUMsRUFBRTs7Ozs7OztBQU90RCxTQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsWUFBRyxJQUFJLEVBQUU7QUFDUCxjQUFHLG9CQUFvQixLQUFNLGNBQWMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxBQUFDLEVBQUc7QUFDdEQsbUJBQU87V0FDUixNQUFNO0FBQ0wsZ0JBQUcsb0JBQW9CLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDOUIsNEJBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQixNQUFNO0FBQ0wsNEJBQWMsQ0FBQyxvQkFBb0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoRDtBQUNELG1CQUFPO1dBQ1I7U0FDRixNQUFNO0FBQ0wsY0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBQ2pELHVCQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxlQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFCLGNBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLDBCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7V0FDM0I7QUFDRCxpQkFBTztTQUNSO09BQ0Y7OztBQUdBLFVBQUcsQUFBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBTSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxPQUFPLEFBQUMsRUFBRTs7Ozs7OztBQU90RCxTQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsWUFBRyxJQUFJLEVBQUU7QUFDUCxjQUFHLG9CQUFvQixJQUFJLENBQUMsRUFBRzs7QUFDN0IsZ0JBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuQix5QkFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckQsbUJBQU87V0FDUixNQUFNO0FBQ0wsMEJBQWMsQ0FBQyxvQkFBb0IsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQyxtQkFBTztXQUNSO1NBQ0YsTUFBTTtBQUNMLGNBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUNqRCx1QkFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMxQixpQkFBTztTQUNSO09BQ0Y7OztBQUdELFVBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7O0FBRW5CLFNBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixZQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbkIsYUFBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QixxQkFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsZUFBTztPQUNSOzs7QUFHRCxVQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQ25CLFNBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Ozs7OztBQU9uQixZQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbkIscUJBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLFlBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ2xELFlBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3hCLHdCQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDL0I7QUFDRCxlQUFPO09BRVI7O0FBRUQsVUFBRyxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUNuQixTQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7Ozs7QUFPbkIsWUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25CLHFCQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxZQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUNsRCxZQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN4Qix3QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQy9CO0FBQ0QsZUFBTztPQUNSOzs7QUFHRCxVQUFHLElBQUksSUFBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLEFBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEFBQUMsRUFBRTtBQUNqRSxlQUFPO09BQ1I7S0FFRixDQUFDLENBQUM7QUFDSCxpQkFBYSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDekMsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV4RCxVQUFHLFdBQVcsR0FBRyxVQUFVLEVBQUU7QUFDM0IsWUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hELFlBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztPQUNwQjtLQUNGLENBQUMsQ0FBQztBQUNILGlCQUFhLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFTLENBQUMsRUFBRTtBQUN6QyxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXpELFVBQUcsV0FBVyxHQUFHLFVBQVUsRUFBRTtBQUMzQixZQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEQsWUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO09BQ3BCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0gsa0JBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBRTtBQUMzRCxVQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsVUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pDLFVBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0RCxVQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ3JFLFVBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7OztBQUcxQyxVQUFHLFdBQVcsSUFBSSxVQUFVLEVBQUU7QUFDNUIsU0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUVuQixpQkFBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixZQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDZixXQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztPQUNuQyxNQUFNO0FBQ0wsWUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25CLFdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUVuQyxZQUFHLENBQUMsTUFBTSxFQUFFO0FBQ1YsY0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2YsYUFBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkM7T0FDRjtLQUNGLENBQUMsQ0FBQztBQUNILGtCQUFjLENBQUMsSUFBSSxFQUFFLENBQ2xCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUM3QixJQUFJLEVBQUUsQ0FDSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFTLENBQUMsRUFBRTtBQUNuQyxPQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7O0FBRXBCLFVBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksV0FBVyxLQUFLLEVBQUUsRUFBRTs7QUFDeEMsWUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUNyRSxZQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7T0FDcEI7QUFDRCxpQkFBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDN0IsQ0FBQyxDQUFDOztBQUVMLEtBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVTtBQUMzQyxVQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ3JFLFVBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNwQixDQUFDLENBQUM7OztBQUdILEtBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFXO0FBQzNDLFVBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDckUsVUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3BCLENBQUMsQ0FBQzs7QUFFSCxhQUFTLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdEIsT0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwQyxhQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRXJELFVBQUcsV0FBVyxJQUFJLFVBQVUsRUFBRTtBQUM1QixnQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUMvQixNQUFNO0FBQ0wsZ0JBQVEsQ0FDUCxJQUFJLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUNsQixPQUFPLENBQUMsTUFBTSxFQUFDLFlBQVc7QUFDekIsa0JBQVEsQ0FDTCxRQUFRLENBQUMsVUFBVSxDQUFDLENBQ3BCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQixDQUFDLENBQUM7T0FDSjtLQUNGOztBQUVELGFBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN0QixPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLFVBQUcsV0FBVyxJQUFJLFVBQVUsRUFBRTtBQUM1QixnQkFBUSxDQUNMLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FDbkIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQzVCLE1BQU07QUFDTCxnQkFBUSxDQUNMLElBQUksQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQ2xCLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FDWixPQUFPLENBQUMsQ0FBQyxFQUFDLFlBQVc7QUFDcEIsa0JBQVEsQ0FDTCxRQUFRLENBQUMsU0FBUyxDQUFDLENBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FDdkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCLENBQUMsQ0FBQztPQUNOO0tBQ0Y7R0FHRixDQUFDLENBQUM7Q0FFSixDQUFBLENBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxNQUFNLENBQUM7O0FBQUEsQ0FBQzs7Ozs7Ozs7OztxQkN6UFgsQ0FBQSxVQUFVLE1BQU0sRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBRTs7QUFFcEQsR0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFXO0FBQ2hDLFFBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkIsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7O0FBR3ZELGtCQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDbkQsT0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCLENBQUMsQ0FBQzs7O0FBR0gsV0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7QUFDckUsT0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlDLENBQUMsQ0FBQztHQUVKLENBQUMsQ0FBQztDQUVKLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7O0FDakIxQixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7O0FBRWxFLElBQUcsSUFBSSxLQUFLLFVBQVUsRUFBQztBQUNyQixZQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBSyxFQUFFO0FBQ25ELFNBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixZQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDOUQsQ0FBQyxDQUFDO0NBQ0o7OztBQUdELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQzs7QUFFekYsSUFBRyxJQUFJLEtBQUssVUFBVSxFQUFDO0FBQ3JCLFlBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBUyxLQUFLLEVBQUU7QUFDcEQsUUFBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtBQUMxQixhQUFPO0tBQ1I7QUFDRCxTQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsWUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBQzlELENBQUMsQ0FBQztDQUNKOzs7Ozs7Ozs7cUJDckJjLENBQUEsVUFBVSxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUU7O0FBRXBELEdBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBRXhDLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7Ozs7O3FCQ0pYLENBQUEsVUFBVSxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUU7O0FBRXBELEdBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBRSxrREFBa0QsQ0FBRSxDQUFDO0NBRXhGLENBQUEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQzs7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7dUNDSkYsOEJBQThCOzs7O3FCQUV2QyxDQUFBLFVBQVUsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFFOztBQUVwRCxHQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVztBQUN0QyxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2IsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFO1FBQ3BHLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1FBQzVDLFFBQVEsWUFBQTtRQUNSLFlBQVksR0FBRyxDQUFDO1FBQ2hCLFVBQVUsWUFBQTtRQUNWLFVBQVUsWUFBQTtRQUNWLGFBQWEsWUFBQTtRQUNiLFdBQVcsR0FBRyxXQUFXO1FBQ3pCLGlCQUFpQixHQUFHLENBQUM7UUFDckIsT0FBTyxHQUFHLEVBQUU7UUFDWixVQUFVLEdBQUcsQ0FBQztRQUNkLFFBQVEsR0FBRyxLQUFLO1FBQ2hCLGFBQWEsR0FBRyxLQUFLLENBQUM7O0FBRTFCLGdCQUFZLEVBQUUsQ0FBQzs7O0FBR2YsT0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUM7OztBQUc5QixVQUFNLENBQUMsVUFBVSxDQUFDLFlBQVU7QUFDMUIsa0JBQVksRUFBRSxDQUFDO0tBQ2hCLEVBQUMsSUFBSSxDQUFDLENBQUM7O0FBRVIsVUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsVUFBUyxDQUFDLEVBQUU7QUFDNUIsT0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOzs7QUFHbkIsVUFBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxFQUFFOztBQUV2QyxXQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hCLGVBQU87T0FDUjs7QUFFRCx1QkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUUxQyxVQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUM7O0FBRW5ELFNBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTNCLFNBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFckQsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFOUIsbUJBQWEsR0FBRyxJQUFJLENBQUM7O0FBRXJCLE9BQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsRUFBRSxLQUFLLEVBQUUsWUFBVTtBQUM1RSxxQkFBYSxHQUFHLEtBQUssQ0FBQzs7QUFFdEIsWUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDOztBQUUzQyxTQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDakIsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDOzs7O0FBSUgsS0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxZQUFXO0FBQzVDLFVBQUcsT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO0FBQ3BDLGNBQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7T0FDcEM7QUFDRCxtQkFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBVTtBQUMxQyxvQkFBWSxFQUFFLENBQUM7QUFDZixtQkFBVyxFQUFFLENBQUM7QUFDZCxvQkFBWSxFQUFFLENBQUM7T0FDaEIsRUFBQyxHQUFHLENBQUMsQ0FBQztLQUNSLENBQUMsQ0FBQTs7QUFFRixPQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxZQUFXO0FBQzFELFNBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDOzs7QUFHSCxLQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVc7QUFDMUIsVUFBRyxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7QUFDcEMsY0FBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztPQUNwQztBQUNELG1CQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFVO0FBQzFDLG9CQUFZLEVBQUUsQ0FBQztBQUNmLG1CQUFXLEVBQUUsQ0FBQztBQUNkLG9CQUFZLEVBQUUsQ0FBQztPQUNoQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1IsQ0FBQyxDQUFDOztBQUVILEtBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTtBQUMzQixpQkFBVyxFQUFFLENBQUM7QUFDZCxrQkFBWSxFQUFFLENBQUM7S0FDaEIsQ0FBQyxDQUFDOztBQUVILGFBQVMsWUFBWSxHQUFHO0FBQ3RCLFVBQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7QUFDakIsY0FBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsZ0JBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ3BDLGNBQVEsR0FBRywwQ0FBWSxHQUFHLENBQUMsQ0FBQzs7QUFFNUIsVUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2xELGlCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQy9COztBQUVELFVBQUcsUUFBUSxFQUFFO0FBQ1gsb0JBQVksR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEQsa0JBQVUsSUFBSSxZQUFZLENBQUM7QUFDM0IsaUJBQVMsR0FBRyxRQUFRLENBQUM7T0FDdEI7O0FBRUQsZ0JBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7OztBQUdyRSxhQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUEsQ0FBQztBQUNwQixZQUFNLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUN2QixZQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3pDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNwQixRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsWUFBWSxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7O0FBRTdGLGVBQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBRSxDQUFDOztBQUVoQyxXQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQztPQUNyQixDQUFDLENBQUM7OztBQUdILGdCQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUM3Qjs7QUFFRCxhQUFTLFdBQVcsR0FBRztBQUNyQixVQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFO1VBQ2pDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztVQUM5QixHQUFHLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxTQUFTLElBQUksVUFBVTtVQUMvQyxNQUFNLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxTQUFTLEdBQUcsVUFBVSxJQUFJLFNBQVMsR0FBRyxVQUFVO1VBQzlFLE1BQU0sR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLFNBQVMsSUFBSSxVQUFVLENBQUM7O0FBRTFELFVBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNsRCxpQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUMvQjs7QUFFRCxVQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUN2RSxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO09BQ3hDOztBQUVELFVBQUcsR0FBRyxFQUFFO0FBQ04sV0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTlCLFlBQUcsUUFBUSxFQUFDO0FBQ1YsbUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDL0I7T0FDRixNQUNJLElBQUksTUFBTSxFQUFFO0FBQ2YsV0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsUUFBUSxDQUFDLENBQUM7O0FBRWpDLFlBQUcsUUFBUSxFQUFDO0FBQ1YsbUJBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUN4QztPQUNGLE1BQ0ksSUFBSSxNQUFNLEVBQUU7QUFDZixXQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxRQUFRLENBQUMsQ0FBQzs7QUFFakMsWUFBRyxRQUFRLEVBQUM7QUFDVixtQkFBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtPQUNGO0tBQ0Y7O0FBRUQsYUFBUyxZQUFZLEdBQUc7O0FBRXRCLFVBQUcsVUFBVSxHQUFHLENBQUMsSUFBSSxhQUFhLEVBQUU7QUFDbEMsZUFBTztPQUNSOzs7QUFHRCxVQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUksTUFBTSxDQUFDLFdBQVcsR0FBQyxDQUFDLEFBQUM7VUFDMUQsYUFBYSxHQUFHLGlCQUFpQixDQUFDOzs7OztBQUt0QyxVQUFHLGFBQWEsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7QUFFdkUsVUFBRSxpQkFBaUIsQ0FBQztPQUNyQjs7Ozs7V0FLSSxJQUFHLGFBQWEsR0FBRyxVQUFVLEdBQUMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFOztBQUV6RixZQUFFLGlCQUFpQixDQUFDO1NBQ3JCOztBQUVELFVBQUksYUFBYSxLQUFLLGlCQUFpQixFQUFFOztBQUV2QyxXQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckQsY0FBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUNwRDtLQUNGO0dBRUYsQ0FBQyxDQUFDO0NBRUosQ0FBQSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxDQUFDOztBQUFBLENBQUM7Ozs7Ozs7Ozs7cUJDN01YLENBQUEsVUFBVSxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUU7O0FBRXBELEdBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVztBQUNoQyxRQUFJLFNBQVMsR0FBRyxTQUFTO1FBQ3JCLFVBQVUsR0FBRyxXQUFXO1FBQ3hCLFlBQVksR0FBRyxlQUFlO1FBQzlCLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pCLFNBQVMsR0FBRyxJQUFJLENBQUM7O0FBRXJCLEtBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVTtBQUMzQyxVQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ3JFLFVBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNwQixDQUFDLENBQUM7O0FBRUgsV0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUU7QUFDOUQsT0FBQyxDQUFDLGNBQWMsQ0FBQzs7QUFFakIsVUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7VUFDcEMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7VUFDL0MsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDLENBQUM7OztBQUduRSxVQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRW5CLFVBQUcsSUFBSSxFQUFFO0FBQ1AsZUFBTztPQUNSOztBQUVELE9BQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTVCLGNBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVyQyxnQkFBVSxDQUFDLFlBQVU7QUFDbkIsZ0JBQVEsQ0FDTCxXQUFXLENBQUMsVUFBVSxDQUFDLENBQ3ZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixTQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO09BQ2pDLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDUixDQUFDLENBQUM7O0FBRUgsV0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUM7QUFDeEQsT0FBQyxDQUFDLGNBQWMsQ0FBQzs7QUFFakIsVUFBSSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBRSxDQUFDO0tBQ2pELENBQUMsQ0FBQzs7QUFFSCxLQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVU7QUFDM0MsVUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUNyRSxVQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDcEIsQ0FBQyxDQUFDOztBQUVILGFBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN0QixPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ25DLGFBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyRCxjQUFRLENBQ0wsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUN0QixRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRXhCLFVBQUcsU0FBUyxFQUFFO0FBQ1osb0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUN6QjtBQUNELGVBQVMsR0FBRyxVQUFVLENBQUMsWUFBVTtBQUMvQixnQkFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsTUFBTSxDQUFDLENBQUM7T0FDckMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNWO0dBRUYsQ0FBQyxDQUFDO0NBRUosQ0FBQSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxDQUFDOztBQUFBLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpe1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICBmdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIGV4cGlyZXMpIHtcclxuICAgIGlmKHR5cGVvZihleHBpcmVzKSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhwaXJlcyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiK2QudG9VVENTdHJpbmcoKTtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBcIjsgXCIgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBcIjsgcGF0aD0vXCI7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgIHZhciB2YWx1ZSA9IFwiOyBcIiArIGRvY3VtZW50LmNvb2tpZTtcclxuICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KFwiOyBcIiArIG5hbWUgKyBcIj1cIik7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09IDIpIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdChcIjtcIikuc2hpZnQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXRDb29raWUsXHJcbiAgICBnZXRDb29raWVcclxuICB9O1xyXG5cclxufSh3aW5kb3csIGRvY3VtZW50KTtcclxuXHJcbiIsIi8vIGNoZWNrIHRoZSB2YWx1ZSBvZiB0aGUgY3NzIDpiZWZvcmUgcHN1ZWRvIGVsZW1lbnRcclxuLy8gdmFsdWVzIGxvb2sgZm9yIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCRlbCkgPT4ge1xyXG4gIGxldCB2YWx1ZSA9IFwidHJ1ZVwiO1xyXG4gIHRyeSB7XHJcbiAgICB2YWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCRlbFswXSwgJzpiZWZvcmUnKS5nZXRQcm9wZXJ0eVZhbHVlKCdjb250ZW50JykucmVwbGFjZSgvXFxcIi9nLCAnJyk7XHJcbiAgfSBjYXRjaChlcnIpIHt9XHJcbiAgcmV0dXJuIHZhbHVlID09PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSkge1xyXG4gIGlmIChIYW5kbGViYXJzLnRlbXBsYXRlcyA9PT0gdW5kZWZpbmVkIHx8IEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgdXJsIDogdGhlbWVQYXRoICsgJy9qcy90ZW1wbGF0ZXMvJyArIG5hbWUgKyAnLmh0bWwnLFxyXG4gICAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoSGFuZGxlYmFycy50ZW1wbGF0ZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICBIYW5kbGViYXJzLnRlbXBsYXRlcyA9IHt9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSA9IEhhbmRsZWJhcnMuY29tcGlsZShkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhc3luYyA6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV07XHJcbn07XHJcbiIsImltcG9ydCBjaGVja0FjdGl2ZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG4gIGxldCAkZWwsXHJcbiAgICAkZWxQYXJlbnQsXHJcbiAgICBlbEhlaWdodCxcclxuICAgIGVsV2lkdGgsXHJcbiAgICBsb3dlckxpbWl0LFxyXG4gICAgdXBwZXJMaW1pdCxcclxuICAgIGRlYm91bmNlVGltZXIsXHJcbiAgICBydW5Db2RlID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoZWxlbWVudCkge1xyXG4gICAgJGVsID0gZWxlbWVudDtcclxuICAgICRlbFBhcmVudCA9ICRlbC5wYXJlbnQoKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdyZWxhdGl2ZScgPyAkZWwucGFyZW50KCkgOiAkZWwucGFyZW50KCkub2Zmc2V0UGFyZW50KCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBhc3N1bXB0aW9uIGFzIHRvIHdoZXJlIHRoZSBzY3JlZW4gd2lsbCBsb2FkXHJcbiAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuXHJcbiAgICB1cGRhdGVEYXRhKCk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHZhcmlhYmxlcyBvbmUgbW9yZSB0aW1lIHRvIGNhdGNoIGFueSBwb3N0IHBhZ2UgbG9hZCBjaGFuZ2VzXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICB1cGRhdGVEYXRhKCk7XHJcbiAgICB9LDEwMDApO1xyXG4gICAgXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICB1cGRhdGVEYXRhKCk7XHJcbiAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0b2dnbGUgdGhlIHN0aWNreSBwb3NpdGlvbmluZ1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGEoKXtcclxuICAgIGxldCBuZXdSdW5Db2RlID0gY2hlY2tBY3RpdmUoJGVsKTtcclxuXHJcbiAgICBpZihydW5Db2RlICYmICFuZXdSdW5Db2RlKSB7XHJcbiAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bkNvZGUgPSBuZXdSdW5Db2RlO1xyXG5cclxuICAgIGlmKCFydW5Db2RlKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBydW5Db2RlID0gbmV3UnVuQ29kZTtcclxuICAgIGVsSGVpZ2h0ID0gJGVsLmhlaWdodCgpO1xyXG4gICAgZWxXaWR0aCA9ICRlbFBhcmVudC53aWR0aCgpO1xyXG4gICAgdXBwZXJMaW1pdCA9ICRlbFBhcmVudC5vZmZzZXQoKS50b3A7XHJcbiAgICBsb3dlckxpbWl0ID0gdXBwZXJMaW1pdCArICRlbFBhcmVudC5vdXRlckhlaWdodCh0cnVlKSAtICRlbC5oZWlnaHQoKTtcclxuXHJcbiAgICAkZWwud2lkdGgoZWxXaWR0aCk7ICAgICAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQb3NpdGlvbigpIHtcclxuICAgIGlmKCFydW5Db2RlKXtcclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgd2luZG93VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgIGF0dHIgPSAkZWwuYXR0cignZGF0YS1zdGlja3knKSxcclxuICAgICAgICB0b3AgPSBhdHRyICE9PSAndG9wJyAmJiB3aW5kb3dUb3AgPD0gdXBwZXJMaW1pdCwgXHJcbiAgICAgICAgbWlkZGxlID0gYXR0ciAhPT0gJ21pZGRsZScgJiYgd2luZG93VG9wIDwgbG93ZXJMaW1pdCAmJiB3aW5kb3dUb3AgPiB1cHBlckxpbWl0LFxyXG4gICAgICAgIGJvdHRvbSA9IGF0dHIgIT09ICdib3R0b20nICYmIHdpbmRvd1RvcCA+PSBsb3dlckxpbWl0O1xyXG4gICAgXHJcbiAgICBpZih0b3ApIHtcclxuICAgICAgJGVsLmF0dHIoJ2RhdGEtc3RpY2t5JywndG9wJyk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAobWlkZGxlKSB7XHJcbiAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ21pZGRsZScpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYgKGJvdHRvbSkge1xyXG4gICAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCdib3R0b20nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7aW5pdH07XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImltcG9ydCBhY2NvcmRpb25zICAgICAgIGZyb20gXCIuL21vZHVsZXMvYWNjb3JkaW9ucy5qc1wiO1xuaW1wb3J0IGdvb2dsZU1hcCAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9nb29nbGVNYXAuanNcIjtcbmltcG9ydCBiYWNrMnRvcCAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvYmFjazJ0b3AuanNcIjtcbmltcG9ydCBiYW5uZXJDYXJvdXNlbCAgIGZyb20gXCIuL21vZHVsZXMvYmFubmVyQ2Fyb3VzZWwuanNcIjtcbmltcG9ydCBjbGlja2FibGUgICAgICAgIGZyb20gXCIuL21vZHVsZXMvY2xpY2thYmxlLmpzXCI7XG5pbXBvcnQgZHJvcGRvd24gICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL2Ryb3Bkb3duLmpzXCI7XG5pbXBvcnQgZW1lcmdlbmN5QWxlcnRzICBmcm9tIFwiLi9tb2R1bGVzL2VtZXJnZW5jeUFsZXJ0cy5qc1wiO1xuaW1wb3J0IGZvcm1WYWxpZGF0aW9uICAgZnJvbSBcIi4vbW9kdWxlcy9mb3JtVmFsaWRhdGlvbi5qc1wiO1xuaW1wb3J0IGhpZGVBbGVydCAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9oaWRlQWxlcnQuanNcIjtcbmltcG9ydCBrZXl3b3JkU2VhcmNoICAgIGZyb20gXCIuL21vZHVsZXMva2V5d29yZFNlYXJjaC5qc1wiO1xuaW1wb3J0IGxvY2F0aW9uTGlzdGluZyAgZnJvbSBcIi4vbW9kdWxlcy9sb2NhdGlvbkxpc3RpbmcuanNcIjtcbmltcG9ydCBtYWluTmF2ICAgICAgICAgIGZyb20gXCIuL21vZHVsZXMvbWFpbk5hdi5qc1wiO1xuaW1wb3J0IG1haW5OYXZQaWxvdCAgICAgZnJvbSBcIi4vbW9kdWxlcy9tYWluTmF2UGlsb3QuanNcIjtcbmltcG9ydCBtb2JpbGVOYXYgICAgICAgIGZyb20gXCIuL21vZHVsZXMvbW9iaWxlTmF2LmpzXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZVZpZGVvICBmcm9tIFwiLi9tb2R1bGVzL3Jlc3BvbnNpdmVWaWRlby5qc1wiO1xuaW1wb3J0IHJpY2hUZXh0ICAgICAgICAgZnJvbSBcIi4vbW9kdWxlcy9yaWNoVGV4dC5qc1wiO1xuaW1wb3J0IHNjcm9sbEFuY2hvcnMgICAgZnJvbSBcIi4vbW9kdWxlcy9zY3JvbGxBbmNob3JzLmpzXCI7XG5pbXBvcnQgdXRpbE5hdiAgICAgICAgICBmcm9tIFwiLi9tb2R1bGVzL3V0aWxOYXYuanNcIjtcbiIsImltcG9ydCBjaGVja0FjdGl2ZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKCcuanMtYWNjb3JkaW9uJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgJGxpbmsgPSAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1saW5rJyksXHJcbiAgICAgICAgJGNvbnRlbnQgPSAkZWwuZmluZCgnLmpzLWFjY29yZGlvbi1jb250ZW50JyksXHJcbiAgICAgICAgYWN0aXZlID0gY2hlY2tBY3RpdmUoJGVsKSxcclxuICAgICAgICBvcGVuID0gJGVsLmhhc0NsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLG9wZW4pO1xyXG5cclxuICAgIGlmKG9wZW4pIHtcclxuICAgICAgLy8gc2V0dXAgdGhlIGlubGluZSBkaXNwbGF5IGJsb2NrXHJcbiAgICAgICRjb250ZW50LnN0b3AodHJ1ZSx0cnVlKS5zbGlkZURvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICAkbGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihhY3RpdmUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgb3BlbiA9ICRlbC5oYXNDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIGlmKG9wZW4pe1xyXG4gICAgICAgICAgJGNvbnRlbnQuc3RvcCh0cnVlLHRydWUpLnNsaWRlVXAoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGNvbnRlbnQuc3RvcCh0cnVlLHRydWUpLnNsaWRlRG93bigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkZWwuYXR0cignYXJpYS1leHBhbmRlZCcsIW9wZW4pLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gY2hlY2tBY3RpdmUoJGVsKTtcclxuXHJcbiAgICAgIGlmKHRlbXAgIT09IGFjdGl2ZSAmJiAhdGVtcCkge1xyXG4gICAgICAgICRjb250ZW50LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhY3RpdmUgPSB0ZW1wO1xyXG4gICAgfSkucmVzaXplKCk7XHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuICBsZXQgJGZvb3RlciA9ICQoJy5qcy1mb290ZXInKSxcclxuICAgICAgdmlzaWJsZVRocmVzaG9sZCA9IDI1MCxcclxuICAgICAgc3RhdGljVGhyZXNob2xkID0gNTA7XHJcblxyXG4gICQoXCIuanMtYmFjazJ0b3BcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICRlbC5vbignY2xpY2snLGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLnN0b3AodHJ1ZSx0cnVlKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sICc3NTAnKTtcclxuICAgICAgfSBcclxuICAgICAgY2F0Y2goZSkge1xyXG4gICAgICAgICQoJ2JvZHknKS5zY3JvbGxUb3AoMCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQnJpbmcga2V5Ym9hcmQgZm9jdXMgYmFjayB0byB0b3AgYXMgd2VsbC5cclxuICAgICAgJChcIiNtYWluLWNvbnRlbnRcIikuZm9jdXMoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gaWYgd2UndmUgZXhjZWVkZWQgdGhlIHRocmVzaG9sZCBvZiBzY3JvbGxpbmdcclxuICAgICAgLy8gZnJvbSB0aGUgdG9wLCBzaG93IGNvbnRyb2xcclxuICAgICAgbGV0IHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgIGlmIChzY3JvbGxUb3AgPiB2aXNpYmxlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJGVsLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWJhbm5lci1jYXJvdXNlbCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGlmKCRlbC5jaGlsZHJlbigpLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2xpZGVyID0gJGVsLnNsaWNrKHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcclxuICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+J1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuICAkKCcuanMtY2xpY2thYmxlJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgLy8gaWYgdGhlIHRoaXMgaXMgY2xpY2tlZFxyXG4gICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgJGVsID0gJCh0aGlzKS5maW5kKCcuanMtY2xpY2thYmxlLWxpbmsnKS5maXJzdCgpO1xyXG4gICAgICAvLyBmaW5kIHRoZSBkZXN0aW5hdGlvblxyXG4gICAgICB2YXIgZGVzdCA9ICRlbC5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgLy8gaWYgdGhlIHRhcmdldCBhdHRyaWJ1dGUgZXhpc3RzXHJcbiAgICAgIGlmKFwiX2JsYW5rXCIgPT09ICRlbC5hdHRyKFwidGFyZ2V0XCIpKSB7XHJcbiAgICAgICAgLy8gbGF1bmNoIG5ldyB0YWIvd2luZG93XHJcbiAgICAgICAgd2luZG93Lm9wZW4oZGVzdCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHJlZGlyZWN0IHRvIGEgbmV3IHBhZ2UgXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gZGVzdDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7IiwiLy8gKioqKioqIGJhc2ljIGN1c3RvbSBzZWxlY3QgdGhhdCB1c2VzIG1vYmlsZSBzZWxlY3Qga2V5Ym9hcmQgKioqKioqXHJcbmxldCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWRyb3Bkb3duXCIpO1xyXG5cclxuaWYobnVsbCAhPT0gZHJvcGRvd25NZW51KXtcclxuXHJcbiAgbGV0IGxlbmd0aCA9IGRyb3Bkb3duTWVudS5sZW5ndGg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcbiAgICBsZXQgcGFyZW50RWwgPSBkcm9wZG93bk1lbnVbaV0sXHJcbiAgICAgICAgc2VsZWN0RWwgPSBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLXNlbGVjdFwiKSxcclxuICAgICAgICBsaW5rID0gcGFyZW50RWwucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1saW5rXCIpXHJcblxyXG4gICAgaWYobnVsbCA9PT0gc2VsZWN0RWwgfHwgbnVsbCA9PT0gbGluaykge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RFbC5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgZWxlbSA9ICh0eXBlb2YgdGhpcy5zZWxlY3RlZEluZGV4ID09PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmV2ZW50LnNyY0VsZW1lbnQgOiB0aGlzKTtcclxuICAgICAgbGluay5pbm5lclRleHQgPSBlbGVtLnRleHQgfHwgZWxlbS5vcHRpb25zW2VsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGNvb2tpZSAgIGZyb20gXCIuLi9oZWxwZXJzL2Nvb2tpZXMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuICAvLyBFbWVyZ2VuY3kgQWxlcnRzIHN0YXJ0IGNsb3NlIG9uIHBhZ2UgbG9hZFxyXG4gIC8vIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIGV4cGFuZCB0aGUgYWxlcnRzXHJcbiAgLy8gRW1lcmdlbmN5IEFsZXJ0cyBzaG91bGQgc3RheSBjbG9zZWQgaWYgdGhlIGNvb2tpZSBpcyBzZXQgdG8gZmFsc2VcclxuICBcclxuICAvKiAqKioqKioqKiogTk9URTogXHJcbiAgICBUaGlzIGNvbXBvbmVudCBpcyBkZXBlbmRlbnQgb24gdGhlIFxyXG4gICAgYWNjb3JkaW9uLmpzIGNvbXBvbmVudCBydW5pbmcgYmVmb3JlIGl0LiBcclxuICAqKioqKioqKiogKi9cclxuXHJcbiAgJCgnLmpzLWVtZXJnZW5jeS1hbGVydHMnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICBvcGVuID0gdHJ1ZSxcclxuICAgICAgICBpZCA9ICRlbC5kYXRhKCdpZCcpLFxyXG4gICAgICAgIGNvb2tpZU5hbWUgPSAnZW1lcmdlbmN5LWFsZXJ0cycgKyBpZCxcclxuICAgICAgICBjb29raWVWYWx1ZSA9IGNvb2tpZS5nZXRDb29raWUoY29va2llTmFtZSksXHJcbiAgICAgICAgJGJ1dHRvbiA9ICRlbC5maW5kKCcuanMtYWNjb3JkaW9uLWxpbmsgYnV0dG9uJyk7XHJcblxyXG4gICAgJGJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gY2xpY2tpbmcgdGhpcyBsaW5rIGFsc28gdHJpZ2dlcnMgdGhlIGFjY29yZGlvbiBjbGlja1xyXG4gICAgICAvLyB0b2dnbGUgdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgICAgb3BlbiA9ICFvcGVuO1xyXG4gICAgICAvLyB1cGRhdGUgb3Blbi9jbG9zZSBzdGF0ZSBjb29raWVcclxuICAgICAgLy8gbGVhdmUgb2ZmIHRoaXJkIGFyZ3VtZW50IHRvIG1ha2UgaXQgZXhwaXJlIG9uIHNlc3Npb25cclxuICAgICAgY29va2llLnNldENvb2tpZShjb29raWVOYW1lLG9wZW4pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHVzZXIgaGFzIGNsb3NlZCB0aGUgYWxlcnRzIG9uIGEgcHJldmlvdXMgcGFnZVxyXG4gICAgaWYodHlwZW9mKGNvb2tpZVZhbHVlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29va2llVmFsdWUgPT09ICdmYWxzZScpIHtcclxuICAgICAgb3BlbiA9IGZhbHNlO1xyXG4gICAgICAvLyBzZXQgdGhlIHN0YXRlIG9mIGFyaWEtZXhwYW5kZWRcclxuICAgICAgJGJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgb3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1lcmdlbmN5IEFsZXJ0cyBsb2FkcyBjbG9zZWQgc28gZXhwYW5kIGl0LlxyXG4gICAgaWYob3Blbikge1xyXG4gICAgICBvcGVuID0gZmFsc2U7IC8vIGNsaWNraW5nIHRoZSBsaW5rIHN3YXBzIHRoZSB2YWx1ZVxyXG4gICAgICAkYnV0dG9uLmZpcnN0KCkudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnZm9ybScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZm9ybSA9ICQodGhpcyksXHJcbiAgICAgICAgcmVxdWlyZWRGaWVsZHMgPSBbXTtcclxuXHJcbiAgICAvLyBmaW5kIGFsbCByZXF1aXJlZCBmaWVsZHNcclxuICAgICQoJy5qcy1pcy1yZXF1aXJlZCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgbGV0ICRmaWVsZCA9ICQodGhpcyksXHJcbiAgICAgICAgICB0eXBlID0gJGZpZWxkLmRhdGEoJ3R5cGUnKSxcclxuICAgICAgICAgIHZhbHVlID0gJGZpZWxkLnZhbCgpLFxyXG4gICAgICAgICAgdmFsaWQgPSB2YWxpZGF0ZSh2YWx1ZSx0eXBlKTtcclxuXHJcbiAgICAgIHJlcXVpcmVkRmllbGRzLnB1c2goe3R5cGUsdmFsaWQsJGVsOiRmaWVsZH0pO1xyXG5cclxuICAgICAgJCh0aGlzKS5kYXRhKCdpbmRleCcscmVxdWlyZWRGaWVsZHMubGVuZ3RoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGFyZW4ndCBhbnkgcmVxdWlyZWQgZmllbGRzLCBkb24ndCBkbyBhbnl0aGluZ1xyXG4gICAgaWYocmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCBzdWJtaXRGb3JtID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIHZhbGlkYXRlIGVhY2ggcmVxdWlyZWQgZmllbGRcclxuICAgICAgcmVxdWlyZWRGaWVsZHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS4kZWwudmFsKCk7XHJcblxyXG4gICAgICAgIGl0ZW0udmFsaWQgPSB2YWxpZGF0ZSh2YWx1ZSxpdGVtLnR5cGUpO1xyXG5cclxuICAgICAgICBpZihpdGVtLnZhbGlkKSB7XHJcbiAgICAgICAgICBpdGVtLiRlbC5hdHRyKCdkYXRhLXZhbGlkJywnaXMtdmFsaWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3VibWl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgaXRlbS4kZWwuYXR0cignZGF0YS12YWxpZCcsJ2lzLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoIXN1Ym1pdEZvcm0pIHtcclxuICAgICAgICAvLyBwcmV2ZW50IHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBzaG93IHRoZSBmb3JtIGVycm9yIG1lc3NhZ2UgXHJcbiAgICAgICAgLy8gb3IgYmxpbmsgdGhlIG1lc3NhZ2UgaWYgaXQgaXMgYWxyZWFkeSB2aXNpYmxlXHJcbiAgICAgICAgJGZvcm0uZmluZCgnLmpzLWVycm9yLW1zZycpXHJcbiAgICAgICAgICAuYXR0cignaGlkZGVuJyx0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJGZvcm0uZmluZCgnLmpzLWVycm9yLW1zZycpXHJcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdoaWRkZW4nKTtcclxuICAgICAgICAgIH0sMTAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLHR5cGU9J3RleHQnKXtcclxuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICB2YWxpZCA9ICEhKHZhbHVlLm1hdGNoKC9bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdKy9pKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdmFsaWQgPSB2YWx1ZS5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH1cclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBnZXRUZW1wbGF0ZSBmcm9tIFwiLi4vaGVscGVycy9nZXRIYW5kbGViYXJUZW1wbGF0ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAvLyBvbmx5IHJ1biB0aGlzIGNvZGUgaWYgdGhlcmUgaXMgYSBnb29nbGUgbWFwIGNvbXBvbmVudCBvbiB0aGUgcGFnZVxyXG4gIGlmKCEkKCcuanMtZ29vZ2xlLW1hcCcpLmxlbmd0aCB8fCB0eXBlb2YgZ29vZ2xlTWFwRGF0YSA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvbXBpbGVkVGVtcGxhdGUgPSBnZXRUZW1wbGF0ZSgnZ29vZ2xlTWFwSW5mbycpO1xyXG5cclxuICAvLyBhZnRlciB0aGUgYXBpIGlzIGxvYWRlZCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG4gIHdpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJChcIi5qcy1nb29nbGUtbWFwXCIpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICBjb25zdCAkZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgLy8gZ2V0IHRoZSBtYXBzIGRhdGFcclxuICAgICAgLy8gdGhpcyBjb3VsZCBiZSByZXBsYWNlZCB3aXRoIGFuIGFwaVxyXG4gICAgICBjb25zdCByYXdEYXRhID0gZ29vZ2xlTWFwRGF0YVtpXTtcclxuICAgICAgXHJcbiAgICAgIC8vICoqKiBDcmVhdGUgdGhlIE1hcCAqKiogLy9cclxuICAgICAgLy8gbWFwIGRlZmF1bHRzXHJcbiAgICAgIGNvbnN0IGluaXRNYXBEYXRhID0ge1xyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNyZWF0ZSBtYXAgRGF0YSBieSBjb21iaW5pbmcgdGhlIHJhd0RhdGEgd2l0aCB0aGUgZGVmYXVsdHNcclxuICAgICAgY29uc3QgbWFwRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHJhd0RhdGEubWFwLCBpbml0TWFwRGF0YSk7XHJcblxyXG4gICAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMsIG1hcERhdGEpO1xyXG5cclxuICAgICAgbGV0IG1hcmtlcnMgPSBbXTtcclxuXHJcbiAgICAgIC8vICoqKiBBZGQgTWFya2VycyB3aXRoIHBvcHVwcyAqKiogLy9cclxuICAgICAgcmF3RGF0YS5tYXJrZXJzLmZvckVhY2goZnVuY3Rpb24oZCxpKXtcclxuICAgICAgICBsZXQgbWFya2VyRGF0YSA9IE9iamVjdC5hc3NpZ24oe21hcH0sZCk7XHJcblxyXG4gICAgICAgIGxldCBtYXJrZXIgPSAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihtYXJrZXJEYXRhKTtcclxuXHJcbiAgICAgICAgbGV0IGluZm9EYXRhID0gaW5mb1RyYW5zZm9ybShtYXJrZXJEYXRhLmluZm9XaW5kb3cpO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGNvbXBpbGVkVGVtcGxhdGUoaW5mb0RhdGEpO1xyXG4gICAgICAgIGxldCBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICAgICAgY29udGVudDogdGVtcGxhdGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG1hcmtlckJvdW5jaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtYXJrZXIuc2hvd0luZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xyXG4gICAgICAgICAgbWFya2VyLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBtYXJrZXIuaGlkZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgICBpbmZvV2luZG93LmNsb3NlKG1hcCwgbWFya2VyKTtcclxuICAgICAgICAgIG1hcmtlci5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrZXIuYm91bmNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KG1hcmtlckJvdW5jaW5nKTtcclxuICAgICAgICAgIG1hcmtlci5zZXRBbmltYXRpb24obnVsbCk7XHJcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0UpO1xyXG4gICAgICAgICAgbWFya2VyQm91bmNpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcclxuICAgICAgICAgIH0sMzAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBsaXN0ZW4gZm9yIHJlY2VudGVyIGNvbW1hbmRcclxuICAgICAgJGVsLm9uKFwicmVjZW50ZXJcIiwgZnVuY3Rpb24oIGV2ZW50LCBtYXJrZXJJbmRleCApIHtcclxuICAgICAgICBpZih0eXBlb2YgbWFya2Vyc1ttYXJrZXJJbmRleF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IG1hcmtlcnNbbWFya2VySW5kZXhdOyAgXHJcbiAgICAgICAgLy8gY2VudGVyIHRoZSBtYXAgb24gdGhpcyBtYXJrZXIgICAgICBcclxuICAgICAgICBtYXAuc2V0Q2VudGVyKG1hcmtlci5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyBjbG9zZSBhbGwgb3BlbiBpbmZvV2luZG93c1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gbWFya2Vycykge1xyXG4gICAgICAgICAgaWYobWFya2Vyc1tpXS5vcGVuKSB7XHJcbiAgICAgICAgICAgIG1hcmtlcnNbaV0uaGlkZUluZm8oKTsgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzaG93IHRoZSBpbmZvV2luZG93IGZvciB0aGlzIG1hcmtlclxyXG4gICAgICAgIG1hcmtlci5zaG93SW5mbygpO1xyXG4gICAgICB9KTsgICAgXHJcbiAgICAgIC8vIGxpc3RlbiBmb3IgYm91bmNlIGNvbW1hbmRcclxuICAgICAgJGVsLm9uKFwiYm91bmNlXCIsIGZ1bmN0aW9uKCBldmVudCwgbWFya2VySW5kZXggKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIG1hcmtlcnNbbWFya2VySW5kZXhdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXJrZXIgPSBtYXJrZXJzW21hcmtlckluZGV4XTsgIFxyXG4gICAgICAgIC8vIGNlbnRlciB0aGUgbWFwIG9uIHRoaXMgbWFya2VyICAgICAgXHJcbiAgICAgICAgbWFwLnNldENlbnRlcihtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8gbWFrZSB0aGUgbWFya2VyIGJvdW5jZSB0aHJlZSB0aW1lc1xyXG4gICAgICAgIG1hcmtlci5ib3VuY2UoKTtcclxuICAgICAgfSk7ICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbmZvVHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGxldCBpbmZvRGF0YSA9IHtcclxuICAgICAgcGhvbmVGb3JtYXR0ZWQ6IGZvcm1hdFBob25lKGRhdGEucGhvbmUpLFxyXG4gICAgICBmYXhGb3JtYXR0ZWQ6IGZvcm1hdFBob25lKGRhdGEuZmF4KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sZGF0YSxpbmZvRGF0YSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmb3JtYXRQaG9uZShwaG9uZSkge1xyXG4gICAgbGV0IHBob25lVGVtcCA9IHBob25lWzBdID09PSAnMScgPyBwaG9uZS5zdWJzdHJpbmcoMSkgOiBwaG9uZTtcclxuICAgIHJldHVybiBwaG9uZVRlbXAucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7NH0pLywgJygkMSkgJDItJDMnKTtcclxuICB9XHJcblxyXG4gIC8vIGxvYWQgR29vZ2xlJ3MgYXBpXHJcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnNyYyA9IFwiLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lDLVdJb05mUzZmaDdUT3RPcXBERWdLU1QtV19OQmViVGsmY2FsbGJhY2s9aW5pdE1hcFwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBjb29raWVzIGZyb20gXCIuLi9oZWxwZXJzL2Nvb2tpZXMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcclxuXHJcbiAgJCgnLmpzLWhlYWRlci1hbGVydCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRsaW5rID0gJGVsLmZpbmQoJy5qcy1oZWFkZXItYWxlcnQtbGluaycpLFxyXG4gICAgICAgIGlkID0gJGVsLmRhdGEoJ2lkJyksXHJcbiAgICAgICAgY29va2llTmFtZSA9IFwiQWxlcnRcIiArIGlkLFxyXG4gICAgICAgIGNvb2tpZUV4cGlyZXMgPSAzNjUsXHJcbiAgICAgICAgY29va2llVmFsdWUgPSBjb29raWVzLmdldENvb2tpZShjb29raWVOYW1lKTtcclxuXHJcbiAgICAvLyBzaG93IGFsZXJ0IGlmIGNvb2tpZSBkb2Vzbid0IGV4aXN0XHJcbiAgICBpZihjb29raWVWYWx1ZSAhPT0gXCJoaWRlXCIpIHtcclxuICAgICAgJGVsLmZhZGVJbigpLmZhZGVPdXQoJ2Zhc3QnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoaWRlIHRoZSBhbGVydFxyXG4gICAgJGxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICBjb29raWVzLnNldENvb2tpZShjb29raWVOYW1lLFwiaGlkZVwiLGNvb2tpZUV4cGlyZXMpO1xyXG4gICAgICAkZWwuc3RvcCh0cnVlLHRydWUpLmZhZGVPdXQoKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1rZXl3b3JkLXNlYXJjaCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCAkZWwgPSAkKHRoaXMpLFxyXG4gICAgICAgICRmb3JtID0gJGVsLmZpbmQoJ2Zvcm0nKTtcclxuXHJcbiAgICAkZm9ybS5vbignc3VibWl0JyxmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkZWwuYWRkQ2xhc3MoJ2lzLWRpcnR5JylcclxuICAgIH0pO1xyXG5cclxuICAgICRmb3JtLm9uKCdyZXNldCcsZnVuY3Rpb24oKXtcclxuICAgICAgJGVsLnJlbW92ZUNsYXNzKCdpcy1kaXJ0eScpXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0od2luZG93LGRvY3VtZW50LGpRdWVyeSk7XHJcbiIsImltcG9ydCBzdGlja3kgZnJvbSBcIi4uL2hlbHBlcnMvc3RpY2t5LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1sb2NhdGlvbi1saXN0aW5nJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgJG1hcENvbCA9ICRlbC5maW5kKCcuanMtbG9jYXRpb24tbGlzdGluZy1tYXAnKSxcclxuICAgICAgICAkbWFwID0gJGVsLmZpbmQoJy5qcy1nb29nbGUtbWFwJyk7XHJcblxyXG4gICAgc3RpY2t5LmluaXQoJG1hcENvbCk7XHJcblxyXG4gICAgLy8gZmluZCB0aGUgbG9jYXRpb24gbGlua1xyXG4gICAgJGVsLmZpbmQoJy5qcy1sb2NhdGlvbi1saXN0aW5nLWxpbmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIGxldCAkbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAvLyB3aGVuIGxpbmsgaXMgY2xpY2tlZCBcclxuICAgICAgJGxpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyB0cmlnZ2VyIG1hcCB0byByZWNlbnRlciBvbiB0aGlzIGl0ZW0gYmFzZWQgb24gaXQncyBpbmRleC5cclxuICAgICAgICAkbWFwLnRyaWdnZXIoJ3JlY2VudGVyJyxpbmRleCk7XHJcbiAgICAgICAgLy8gbWFyayB0aGlzIGxpbmsgYXMgYWN0aXZlXHJcbiAgICAgICAgJGVsLmZpbmQoJy5qcy1sb2NhdGlvbi1saXN0aW5nLWxpbmsuaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIGZvY3VzIG9uIHRoZSBtYXAgLSBtYWlubHkgZm9yIG1vYmlsZSB3aGVuIGl0IGlzIHN0YWNrZWRcclxuICAgICAgICBsZXQgcG9zaXRpb24gPSAkbWFwLm9mZnNldCgpLnRvcDtcclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AodHJ1ZSx0cnVlKS5hbmltYXRlKHtzY3JvbGxUb3A6cG9zaXRpb259LCAnNzUwJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gd2hlbiBsaW5rIGlzIGhvdmVyZWRcclxuICAgICAgJGxpbmsub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIHRyaWdnZXIgbWFwIHRvIHJlY2VudGVyIG9uIHRoaXMgaXRlbSBhbmQgbWFrZSB0aGUgbWFya2VyIGJvdW5jZVxyXG4gICAgICAgICRtYXAudHJpZ2dlcignYm91bmNlJyxpbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICB9KTtcclxuXHJcbiAgJCgnLmpzLW1haW4tbmF2JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBvcGVuQ2xhc3MgPSBcImlzLW9wZW5cIixcclxuICAgICAgICBjbG9zZUNsYXNzID0gXCJpcy1jbG9zZWRcIixcclxuICAgICAgICBzdWJtZW51Q2xhc3MgPSBcInNob3ctc3VibWVudVwiLFxyXG4gICAgICAgICRwYXJlbnQgPSAkKHRoaXMpLFxyXG4gICAgICAgICRtYWluTmF2VG9nZ2xlID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtdG9nZ2xlJyksXHJcbiAgICAgICAgJG1haW5OYXZJdGVtcyA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LXRvZ2dsZSwgLmpzLW1haW4tbmF2LXRvcC1saW5rJyksXHJcbiAgICAgICAgcHJldmlvdXNLZXkgPSBudWxsLFxyXG4gICAgICAgIGJyZWFrcG9pbnQgPSA4MDA7IC8vIG1hdGNoZXMgQ1NTIGJyZWFrcG9pbnQgZm9yIE1haW4gTmF2XHJcblxyXG4gICAgJG1haW5OYXZJdGVtcy5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgIC8vIG9ubHkgZm9yIGRlc2t0b3BcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEdyYWIgYWxsIHRoZSBET00gaW5mbyB3ZSBuZWVkLi4uXHJcbiAgICAgIGxldCAkbGluayA9ICQodGhpcyksXHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rcyA9ICRwYXJlbnQuZmluZCgnLm1hX19tYWluLW5hdl9fdG9wLWxpbmsnKSxcclxuICAgICAgICAgIG9wZW4gPSAkbGluay5oYXNDbGFzcyhvcGVuQ2xhc3MpLFxyXG4gICAgICAgICAgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKSxcclxuICAgICAgICAgICRmb2N1c2VkRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCksXHJcbiAgICAgIC8vIHJlbGV2YW50IGlmIG9wZW4uLlxyXG4gICAgICAgICAgJHRvcExldmVsSXRlbSA9ICRmb2N1c2VkRWxlbWVudC5wYXJlbnRzKCcubWFfX21haW4tbmF2X19pdGVtJyksXHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rID0gJHRvcExldmVsSXRlbS5maW5kKCcubWFfX21haW4tbmF2X190b3AtbGluaycpLFxyXG4gICAgICAgICAgJGRyb3Bkb3duTGlua3MgPSAkbGluay5maW5kKCcubWFfX21haW4tbmF2X19zdWJpdGVtIC5tYV9fbWFpbi1uYXZfX2xpbmsnKSxcclxuICAgICAgICAgIGZvY3VzSW5kZXhJbkRyb3Bkb3duID0gJGRyb3Bkb3duTGlua3MuaW5kZXgoJGZvY3VzZWRFbGVtZW50KSxcclxuICAgICAgICAgIGlzU2hpZnQgPSAhIWUuc2hpZnRLZXk7IC8vIHR5cGVjYXN0IHRvIGJvb2xlYW5cclxuXHJcbiAgICAgIC8vIGRvd24gYXJyb3cgb3IgdGFiIGtleVxyXG4gICAgICBpZigoZS5rZXlDb2RlID09PSA0MCkgfHwgKGUua2V5Q29kZSA9PT0gOSAmJiAhaXNTaGlmdCkpIHtcclxuICAgICAgICAvLyBoaWRlIGNvbnRlbnRcclxuICAgICAgICAvLyBJZiBtZW51YmFyIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gT3BlbiBwdWxsIGRvd24gbWVudSBhbmQgc2VsZWN0IGZpcnN0IG1lbnUgaXRlbVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgZHJvcGRvd24gZm9jdXNcclxuICAgICAgICAvLyAgLSBTZWxlY3QgbmV4dCBtZW51IGl0ZW1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYob3Blbikge1xyXG4gICAgICAgICAgaWYoZm9jdXNJbmRleEluRHJvcGRvd24gPT09ICgkZHJvcGRvd25MaW5rcy5sZW5ndGgtMSkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGZvY3VzSW5kZXhJbkRyb3Bkb3duID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICRkcm9wZG93bkxpbmtzWzFdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbZm9jdXNJbmRleEluRHJvcGRvd24rMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3coJHRvcExldmVsSXRlbS5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCcpKTtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAkbGluay5hZGRDbGFzcyhvcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgaWYoJGRyb3Bkb3duTGlua3NbMV0pIHtcclxuICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbMV0uZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAvLyB1cCBhcnJvdyBvciBzaGlmdCt0YWIga2V5c1xyXG4gICAgICAgaWYoKGUua2V5Q29kZSA9PT0gMzgpIHx8IChlLmtleUNvZGUgPT09IDkgJiYgaXNTaGlmdCkpIHtcclxuICAgICAgICAvLyBoaWRlIGNvbnRlbnRcclxuICAgICAgICAvLyBJZiBtZW51YmFyIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gT3BlbiBwdWxsIGRvd24gbWVudSBhbmQgc2VsZWN0IGZpcnN0IG1lbnUgaXRlbVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgZHJvcGRvd24gZm9jdXNcclxuICAgICAgICAvLyAgLSBTZWxlY3QgcHJldmlvdXMgbWVudSBpdGVtXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKG9wZW4pIHtcclxuICAgICAgICAgIGlmKGZvY3VzSW5kZXhJbkRyb3Bkb3duIDw9IDEgKSB7IC8vIG5vdCAwIGJjIG9mIGhpZGRlbiBmaXJzdCBsaW5rXHJcbiAgICAgICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAgICAgJHRvcExldmVsTGluay5mb2N1cygpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGRyb3Bkb3duTGlua3NbZm9jdXNJbmRleEluRHJvcGRvd24tMV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93KCR0b3BMZXZlbEl0ZW0uZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKSk7XHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rLmZvY3VzKCkuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAkbGluay5hZGRDbGFzcyhvcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZXNjIGtleVxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbWVudSBhbmQgcmV0dXJuIGZvY3VzIHRvIG1lbnViYXJcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgJHRvcExldmVsTGluay5mb2N1cygpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gbGVmdCBhcnJvdyBrZXlcclxuICAgICAgaWYoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBoaWRlIGNvbnRlbnRcclxuICAgICAgICAvLyBJZiBtZW51YmFyIGZvY3VzXHJcbiAgICAgICAgLy8gIC0gUHJldmlvdXMgbWVudWJhciBpdGVtXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiBkcm9wZG93biBmb2N1c1xyXG4gICAgICAgIC8vICAtIE9wZW4gcHJldmlvdXMgcHVsbCBkb3duIG1lbnUgYW5kIHNlbGVjdCBmaXJzdCBpdGVtXHJcbiAgICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgICAgICR0b3BMZXZlbExpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJyk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gJHRvcExldmVsTGlua3MuaW5kZXgoJHRvcExldmVsTGluayktMTtcclxuICAgICAgICBpZigkdG9wTGV2ZWxMaW5rc1tpbmRleF0pIHtcclxuICAgICAgICAgICR0b3BMZXZlbExpbmtzW2luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC8vIHJpZ2h0IGFycm93IGtleVxyXG4gICAgICBpZihlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGhpZGUgY29udGVudFxyXG4gICAgICAgIC8vIElmIG1lbnViYXIgZm9jdXNcclxuICAgICAgICAvLyAgLSBOZXh0IG1lbnViYXIgaXRlbVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gSWYgZHJvcGRvd24gZm9jdXNcclxuICAgICAgICAvLyAgLSBPcGVuIG5leHQgcHVsbCBtZW51IGFuZCBzZWxlY3QgZmlyc3QgaXRlbVxyXG4gICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAkdG9wTGV2ZWxMaW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCdmYWxzZScpO1xyXG4gICAgICAgIGxldCBpbmRleCA9ICR0b3BMZXZlbExpbmtzLmluZGV4KCR0b3BMZXZlbExpbmspKzE7XHJcbiAgICAgICAgaWYoJHRvcExldmVsTGlua3NbaW5kZXhdKSB7XHJcbiAgICAgICAgICAkdG9wTGV2ZWxMaW5rc1tpbmRleF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBrZXkgY29kZSA5IGlzIHRoZSB0YWIga2V5XHJcbiAgICAgIGlmKG9wZW4gfHwgKHR5cGVvZihlLmtleWNvZGUpICE9PSBcInVuZGVmaW5lZFwiICYmIGUua2V5Y29kZSAhPT0gOSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICRtYWluTmF2SXRlbXMub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQodGhpcykuY2hpbGRyZW4oJ2J1dHRvbicpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgaWYod2luZG93V2lkdGggPiBicmVha3BvaW50KSB7XHJcbiAgICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICQodGhpcykuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKTtcclxuICAgICAgICBzaG93KCRvcGVuQ29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZJdGVtcy5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignYnV0dG9uJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpO1xyXG5cclxuICAgICAgaWYod2luZG93V2lkdGggPiBicmVha3BvaW50KSB7XHJcbiAgICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICQodGhpcykuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKTtcclxuICAgICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZUb2dnbGUuY2hpbGRyZW4oJ2J1dHRvbiwgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0ICRlbCA9ICQodGhpcyk7XHJcbiAgICAgIGxldCAkZWxQYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICBsZXQgJGNvbnRlbnQgPSAkZWxQYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQnKTtcclxuICAgICAgbGV0ICRvcGVuQ29udGVudCA9ICRwYXJlbnQuZmluZCgnLmpzLW1haW4tbmF2LWNvbnRlbnQuJyArIG9wZW5DbGFzcyk7XHJcbiAgICAgIGxldCBpc09wZW4gPSAkY29udGVudC5oYXNDbGFzcyhvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgLy8gbW9iaWxlXHJcbiAgICAgIGlmKHdpbmRvd1dpZHRoIDw9IGJyZWFrcG9pbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gYWRkIG9wZW4gY2xhc3MgdG8gdGhpcyBpdGVtXHJcbiAgICAgICAgJGVsUGFyZW50LmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgc2hvdygkY29udGVudCk7XHJcbiAgICAgICAgJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAkZWwuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICBpZighaXNPcGVuKSB7XHJcbiAgICAgICAgICBzaG93KCRjb250ZW50KTtcclxuICAgICAgICAgICRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJG1haW5OYXZUb2dnbGUubGFzdCgpXHJcbiAgICAgIC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudCBsaScpXHJcbiAgICAgICAgLmxhc3QoKVxyXG4gICAgICAgICAgLmZpbmQoJ2EnKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gcHJldmlvdXMga2V5IHdhcyBub3QgYSBzaGlmdFxyXG4gICAgICAgICAgICBpZihlLmtleUNvZGUgPT09IDkgJiYgcHJldmlvdXNLZXkgIT09IDE2KSB7ICAvLyB0YWIgYXJyb3dcXFxyXG4gICAgICAgICAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICAgICAgICAgIGhpZGUoJG9wZW5Db250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2aW91c0tleSA9IGUua2V5Q29kZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJCgnLmpzLWNsb3NlLXN1Yi1uYXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGlkZSBhbnkgb3BlbiBzdWJtZW51IGNvbnRlbnQgd2hlbiB0aGUgc2lkZWJhciBtZW51IGlzIGNsb3NlZFxyXG4gICAgJCgnLmpzLWhlYWRlci1tZW51LWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSgkY29udGVudCkge1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3Moc3VibWVudUNsYXNzKTtcclxuICAgICAgJHBhcmVudC5maW5kKFwiLlwiICsgb3BlbkNsYXNzKS5yZW1vdmVDbGFzcyhvcGVuQ2xhc3MpO1xyXG5cclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRjb250ZW50LmFkZENsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRjb250ZW50XHJcbiAgICAgICAgLnN0b3AoIHRydWUsIHRydWUgKVxyXG4gICAgICAgIC5zbGlkZVVwKCdmYXN0JyxmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhjbG9zZUNsYXNzKVxyXG4gICAgICAgICAgICAuc2xpZGVEb3duKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvdygkY29udGVudCkge1xyXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3Moc3VibWVudUNsYXNzKTtcclxuICAgICAgaWYod2luZG93V2lkdGggPD0gYnJlYWtwb2ludCkge1xyXG4gICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAuYWRkQ2xhc3Mob3BlbkNsYXNzKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRjb250ZW50XHJcbiAgICAgICAgICAuc3RvcCggdHJ1ZSwgdHJ1ZSApXHJcbiAgICAgICAgICAuZGVsYXkoIDIwMCApXHJcbiAgICAgICAgICAuc2xpZGVVcCgwLGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkY29udGVudFxyXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhvcGVuQ2xhc3MpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGNsb3NlQ2xhc3MpXHJcbiAgICAgICAgICAgICAgLnNsaWRlRG93bignZmFzdCcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH0pO1xyXG5cclxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xuXG4gICQoJy5qcy1tYWluLW5hdicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgbGV0ICRwYXJlbnQgPSAkKHRoaXMpLFxuICAgICAgJG1haW5OYXZUb2dnbGUgPSAkcGFyZW50LmZpbmQoJy5qcy1tYWluLW5hdi10b2dnbGUnKTtcblxuICAgIC8vIG1ha2Ugcm9vdCB0b3AtbGV2ZWwgbGlua3MgaW5lcnQgZm9yIHBpbG90XG4gICAgJG1haW5OYXZUb2dnbGUuY2hpbGRyZW4oJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBFbnN1cmUgdG9wLWxldmVsIGxpbmtzIHRoYXQgYXJlIHBvdGVudGlhbCBhbmNob3IgbGlua3MgY2xvc2UgdGhlIHNpZGViYXIgb24gbW9iaWxlXG4gICAgJHBhcmVudC5maW5kKCcuanMtbWFpbi1uYXYtdG9wLWxpbmsnKS5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCcuanMtaGVhZGVyLW1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9KTtcblxuICB9KTtcblxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTtcblxuIiwiLy8gKioqKioqIE1lbnUgYnV0dG9uICoqKioqKlxyXG5sZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVhZGVyLW1lbnUtYnV0dG9uXCIpO1xyXG5cclxuaWYobnVsbCAhPT0gbWVudUJ1dHRvbil7XHJcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyAqKioqKiogTWFpbiBIZWFkZXIgU2VhcmNoIGJ1dHRvbiBvbiBtb2JpbGUgc2hvdWxkIG9wZW4gdGhlIG1vYmlsZSBtZW51ICAqKioqKipcclxubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWhlYWRlci1zZWFyY2gtbWVudSAuanMtaGVhZGVyLXNlYXJjaC1mb3JtXCIpO1xyXG5cclxuaWYobnVsbCAhPT0gc2VhcmNoRm9ybSl7XHJcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDYyMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW5kb3csZG9jdW1lbnQsJCx1bmRlZmluZWQpIHtcblxuICAkKCcuanMtbWEtcmVzcG9uc2l2ZS12aWRlbycpLmZpdFZpZHMoKTtcblxufSh3aW5kb3csZG9jdW1lbnQsalF1ZXJ5KTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy1tYS1yaWNoLXRleHQgdGFibGUnKS53cmFwKCBcIjxkaXYgY2xhc3M9J21hX19yaWNoLXRleHRfX3RhYmxlLXdyYXBwZXInPjwvZGl2PlwiICk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpOyIsImltcG9ydCBjaGVja01vYmlsZSBmcm9tIFwiLi4vaGVscGVycy9jc3NDb250cm9sQ29kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHdpbmRvdyxkb2N1bWVudCwkLHVuZGVmaW5lZCkge1xyXG5cclxuICAkKFwiLmpzLXNjcm9sbC1hbmNob3JzXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgJGVsID0gJCh0aGlzKSxcclxuICAgICAgICAkZWxQYXJlbnQgPSAkZWwucGFyZW50KCkuY3NzKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnID8gJGVsLnBhcmVudCgpIDogJGVsLnBhcmVudCgpLm9mZnNldFBhcmVudCgpLFxyXG4gICAgICAgICRsaW5rcyA9ICRlbC5maW5kKCcuanMtc2Nyb2xsLWFuY2hvcnMtbGluaycpLFxyXG4gICAgICAgIGVsSGVpZ2h0LFxyXG4gICAgICAgIGhlYWRlckJ1ZmZlciA9IDAsXHJcbiAgICAgICAgbG93ZXJMaW1pdCxcclxuICAgICAgICB1cHBlckxpbWl0LFxyXG4gICAgICAgIGRlYm91bmNlVGltZXIsXHJcbiAgICAgICAgYWN0aXZlQ2xhc3MgPSBcImlzLWFjdGl2ZVwiLFxyXG4gICAgICAgIGFjdGl2ZUFuY2hvckluZGV4ID0gMCxcclxuICAgICAgICBhbmNob3JzID0gW10sXHJcbiAgICAgICAgbnVtQW5jaG9ycyA9IDAsXHJcbiAgICAgICAgaXNNb2JpbGUgPSBmYWxzZSxcclxuICAgICAgICBsaW5rU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG4gICAgc2V0VmFyaWFibGVzKCk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBhc3N1bXB0aW9uIGFzIHRvIHdoZXJlIHRoZSBzY3JlZW4gd2lsbCBsb2FkXHJcbiAgICAkZWwuYXR0cignZGF0YS1zdGlja3knLCd0b3AnKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgdmFyaWFibGVzIG9uZSBtb3JlIHRpbWUgdG8gY2F0Y2ggYW55IHBvc3QgcGFnZSBsb2FkIGNoYW5nZXNcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldFZhcmlhYmxlcygpO1xyXG4gICAgfSwxMDAwKTtcclxuXHJcbiAgICAkbGlua3Mub24oJ2NsaWNrJyxmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIC8vIGlzIHRoZSBtZW51IGNsb3NlZCBvbiBtb2JpbGVcclxuICAgICAgaWYoISRlbC5oYXNDbGFzcygnaXMtb3BlbicpICYmIGlzTW9iaWxlKSB7ICAgICBcclxuICAgICAgICAvLyBqdXN0IHNob3cgdGhlIG1lbnVcclxuICAgICAgICAkZWwuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBhY3RpdmVBbmNob3JJbmRleCA9ICQodGhpcykuZGF0YSgnaW5kZXgnKTtcclxuICAgICAgLy8gZmluZCB0aGUgbG9jYXRpb24gb2YgdGhlIGRlc2lyZWQgbGluayBhbmQgc2Nyb2xsIHRoZSBwYWdlXHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IGFuY2hvcnNbYWN0aXZlQW5jaG9ySW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAvLyBjbG9zZSB0aGUgbWVudVxyXG4gICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBmbGFnIGZyb20gb3RoZXIgbGlua3NcclxuICAgICAgJGVsLmZpbmQoJy4nICsgYWN0aXZlQ2xhc3MpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgLy8gbWFyayB0aGlzIGxpbmsgYXMgYWN0aXZlXHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAvLyBwcmV2ZW50IHRoZSBzY3JvbGwgZXZlbnQgZnJvbSB1cGRhdGluZyBhY3RpdmUgbGlua3NcclxuICAgICAgbGlua1Njcm9sbGluZyA9IHRydWU7XHJcblxyXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AodHJ1ZSx0cnVlKS5hbmltYXRlKHtzY3JvbGxUb3A6cG9zaXRpb259LCAnNzUwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsaW5rU2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBsaW5rIGhhc2ggdGFyZ2V0IHNvIHdlIGNhbiBicmluZyBmb2N1cyB0byBpdFxyXG4gICAgICAgIGxldCBoYXNoID0gYW5jaG9yc1thY3RpdmVBbmNob3JJbmRleF0uaGFzaDtcclxuICAgICAgICAvLyBicmluZyBmb2N1cyB0byB0aGUgaXRlbSB3ZSBqdXN0IHNjcm9sbGVkIHRvXHJcbiAgICAgICAgJChoYXNoKS5mb2N1cygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIHRoZSBjb250ZW50IGNvbnRhaW5zIGFjY29yZGlvbnMsIFxyXG4gICAgLy8gcmVhZGp1c3Qgc2V0dGluZ3Mgd2hlbiB0aGVyZSBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgJCgnLmpzLWFjY29yZGlvbi1saW5rJykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgICAgaWYodHlwZW9mIGRlYm91bmNlVGltZXIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRlYm91bmNlVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldFZhcmlhYmxlcygpO1xyXG4gICAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgYWN0aXZhdGVMaW5rKCk7XHJcbiAgICAgIH0sNDAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgJGVsLmZpbmQoXCIuanMtc2Nyb2xsLWFuY2hvcnMtdG9nZ2xlXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcbiAgICAgICRlbC50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbWFrZSB0aGUgbGlua3Mgc3RpY2t5XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZih0eXBlb2YgZGVib3VuY2VUaW1lciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XHJcbiAgICAgIH1cclxuICAgICAgZGVib3VuY2VUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2V0VmFyaWFibGVzKCk7XHJcbiAgICAgICAgc2V0UG9zaXRpb24oKTtcclxuICAgICAgICBhY3RpdmF0ZUxpbmsoKTtcclxuICAgICAgfSwzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFBvc2l0aW9uKCk7XHJcbiAgICAgIGFjdGl2YXRlTGluaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VmFyaWFibGVzKCkge1xyXG4gICAgICBsZXQgdG9wT2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgIGhlYWRlckJ1ZmZlciA9IDA7XHJcbiAgICAgIGVsSGVpZ2h0ID0gJGVsLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICB1cHBlckxpbWl0ID0gJGVsUGFyZW50Lm9mZnNldCgpLnRvcDtcclxuICAgICAgaXNNb2JpbGUgPSBjaGVja01vYmlsZSgkZWwpO1xyXG5cclxuICAgICAgaWYoJGVsUGFyZW50WzBdLmhhc0F0dHJpYnV0ZShcInN0eWxlXCIpICYmICFpc01vYmlsZSkge1xyXG4gICAgICAgICRlbFBhcmVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICB9XHJcbiBcclxuICAgICAgaWYoaXNNb2JpbGUpIHtcclxuICAgICAgICBoZWFkZXJCdWZmZXIgPSAkKCcuanMtc3RpY2t5LWhlYWRlcicpLmhlaWdodCgpIHx8IDA7XHJcbiAgICAgICAgdXBwZXJMaW1pdCAtPSBoZWFkZXJCdWZmZXI7XHJcbiAgICAgICAgdG9wT2Zmc2V0ID0gZWxIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvd2VyTGltaXQgPSB1cHBlckxpbWl0ICsgJGVsUGFyZW50Lm91dGVySGVpZ2h0KHRydWUpIC0gJGVsLmhlaWdodCgpO1xyXG5cclxuICAgICAgLy8gbG9jYXRlIHRoZSBwb3NpdGlvbiBvZiBhbGwgb2YgdGhlIGFuY2hvciB0YXJnZXRzXHJcbiAgICAgIGFuY2hvcnMgPSBuZXcgQXJyYXk7XHJcbiAgICAgICRsaW5rcy5lYWNoKGZ1bmN0aW9uKGksZSl7XHJcbiAgICAgICAgbGV0ICRlbCA9ICQodGhpcyksXHJcbiAgICAgICAgICAkbGluayA9ICRlbC5pcygnYScpID8gJGVsIDogJGVsLmZpbmQoJ2EnKSxcclxuICAgICAgICAgIGhhc2ggPSAkbGlua1swXS5oYXNoLFxyXG4gICAgICAgICAgcG9zaXRpb24gPSAkKGhhc2gpLm9mZnNldCgpID8gJChoYXNoKS5vZmZzZXQoKS50b3AgLSBoZWFkZXJCdWZmZXIgLSB0b3BPZmZzZXQgOiB1cHBlckxpbWl0O1xyXG5cclxuICAgICAgICBhbmNob3JzW2ldID0geyBoYXNoLCBwb3NpdGlvbiB9O1xyXG5cclxuICAgICAgICAkZWwuZGF0YSgnaW5kZXgnLGkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIHJlY29yZCB0aGUgbnVtYmVyIG9mIGFuY2hvcnMgZm9yIHBlcmZvcm1hbmNlXHJcbiAgICAgIG51bUFuY2hvcnMgPSBhbmNob3JzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQb3NpdGlvbigpIHtcclxuICAgICAgbGV0IHdpbmRvd1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgIGF0dHIgPSAkZWwuYXR0cignZGF0YS1zdGlja3knKSxcclxuICAgICAgICAgIHRvcCA9IGF0dHIgIT09ICd0b3AnICYmIHdpbmRvd1RvcCA8PSB1cHBlckxpbWl0LCBcclxuICAgICAgICAgIG1pZGRsZSA9IGF0dHIgIT09ICdtaWRkbGUnICYmIHdpbmRvd1RvcCA8IGxvd2VyTGltaXQgJiYgd2luZG93VG9wID4gdXBwZXJMaW1pdCxcclxuICAgICAgICAgIGJvdHRvbSA9IGF0dHIgIT09ICdib3R0b20nICYmIHdpbmRvd1RvcCA+PSBsb3dlckxpbWl0O1xyXG4gICAgICBcclxuICAgICAgaWYoJGVsUGFyZW50WzBdLmhhc0F0dHJpYnV0ZShcInN0eWxlXCIpICYmICFpc01vYmlsZSkge1xyXG4gICAgICAgICRlbFBhcmVudC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighJGVsUGFyZW50WzBdLmhhc0F0dHJpYnV0ZShcInN0eWxlXCIpICYmIGlzTW9iaWxlICYmIGF0dHIgPT09ICdtaWRkbGUnKSB7XHJcbiAgICAgICAgJGVsUGFyZW50LmNzcyh7J3BhZGRpbmdUb3AnOmVsSGVpZ2h0fSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRvcCkge1xyXG4gICAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ3RvcCcpO1xyXG5cclxuICAgICAgICBpZihpc01vYmlsZSl7XHJcbiAgICAgICAgICAkZWxQYXJlbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgaWYgKG1pZGRsZSkge1xyXG4gICAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ21pZGRsZScpO1xyXG5cclxuICAgICAgICBpZihpc01vYmlsZSl7XHJcbiAgICAgICAgICAkZWxQYXJlbnQuY3NzKHsncGFkZGluZ1RvcCc6ZWxIZWlnaHR9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgaWYgKGJvdHRvbSkge1xyXG4gICAgICAgICRlbC5hdHRyKCdkYXRhLXN0aWNreScsJ2JvdHRvbScpO1xyXG5cclxuICAgICAgICBpZihpc01vYmlsZSl7XHJcbiAgICAgICAgICAkZWxQYXJlbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUxpbmsoKSB7XHJcbiAgICAgIC8vIGRvIHdlIGhhdmUgbW9yZSB0aGFuIG9uZSBhbmNob3JcclxuICAgICAgaWYobnVtQW5jaG9ycyA8IDIgfHwgbGlua1Njcm9sbGluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBhbmQgb2Zmc2V0IGJ5IGhhbGYgdGhlIHZpZXcgcG9ydFxyXG4gICAgICBsZXQgd2luZG93VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgKHdpbmRvdy5pbm5lckhlaWdodC8yKSxcclxuICAgICAgICAgIGN1cnJlbnRBbmNob3IgPSBhY3RpdmVBbmNob3JJbmRleDtcclxuICAgICAgXHJcbiAgICAgIC8vIGlzIHRoZXJlIGEgcHJldiB0YXJnZXRcclxuICAgICAgLy8gYW5kIFxyXG4gICAgICAvLyBpcyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gYWJvdmUgdGhlIGN1cnJlbnQgdGFyZ2V0XHJcbiAgICAgIGlmKGN1cnJlbnRBbmNob3IgPiAwICYmIHdpbmRvd1RvcCA8IGFuY2hvcnNbYWN0aXZlQW5jaG9ySW5kZXhdLnBvc2l0aW9uKSB7IFxyXG4gICAgICAgIC8vIG1ha2UgdGhlIHByZXYgbGluayBhY3RpdmVcclxuICAgICAgICAtLWFjdGl2ZUFuY2hvckluZGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpcyB0aGVyZSBhIG5leHQgdGFyZ2V0XHJcbiAgICAgIC8vIGFuZFxyXG4gICAgICAvLyBpcyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gYmVsb3cgdGhlIG5leHQgdGFyZ2V0XHJcbiAgICAgIGVsc2UgaWYoY3VycmVudEFuY2hvciA8IG51bUFuY2hvcnMtMSAmJiB3aW5kb3dUb3AgPiBhbmNob3JzW2FjdGl2ZUFuY2hvckluZGV4KzFdLnBvc2l0aW9uKSB7IFxyXG4gICAgICAgIC8vIG1ha2UgdGhlIG5leHQgbGluayBhY3RpdmVcclxuICAgICAgICArK2FjdGl2ZUFuY2hvckluZGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudEFuY2hvciAhPT0gYWN0aXZlQW5jaG9ySW5kZXgpIHtcclxuICAgICAgICAvLyBtb3ZlIHRoZSBhY3RpdmUgZmxhZ1xyXG4gICAgICAgICRlbC5maW5kKCcuJyArIGFjdGl2ZUNsYXNzKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgJGxpbmtzLmVxKGFjdGl2ZUFuY2hvckluZGV4KS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAod2luZG93LGRvY3VtZW50LCQsdW5kZWZpbmVkKSB7XHJcblxyXG4gICQoJy5qcy11dGlsLW5hdicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgb3BlbkNsYXNzID0gXCJpcy1vcGVuXCIsXHJcbiAgICAgICAgY2xvc2VDbGFzcyA9IFwiaXMtY2xvc2VkXCIsXHJcbiAgICAgICAgc3VibWVudUNsYXNzID0gXCJzaG93LXV0aWxtZW51XCIsXHJcbiAgICAgICAgJHBhcmVudCA9ICQodGhpcyksXHJcbiAgICAgICAgd2FpdEZvckl0ID0gbnVsbDtcclxuXHJcbiAgICAkKCcuanMtY2xvc2Utc3ViLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCAkb3BlbkNvbnRlbnQgPSAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi1jb250ZW50LicgKyBvcGVuQ2xhc3MpO1xyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkcGFyZW50LmZpbmQoJy5qcy11dGlsLW5hdi10b2dnbGUgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnRkZWZhdWx0O1xyXG5cclxuICAgICAgbGV0IG9wZW4gPSAkKHRoaXMpLmhhc0NsYXNzKG9wZW5DbGFzcyksXHJcbiAgICAgICAgJGNvbnRlbnQgPSAkKHRoaXMpLm5leHQoJy5qcy11dGlsLW5hdi1jb250ZW50JyksXHJcbiAgICAgICAgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtdXRpbC1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuXHJcbiAgICAgIC8vIGhpZGUgb3RoZXIgY29udGVudFxyXG4gICAgICBoaWRlKCRvcGVuQ29udGVudCk7XHJcbiAgICAgIFxyXG4gICAgICBpZihvcGVuKSB7IFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBhZGQgb3BlbiBjbGFzcyB0byB0aGlzIGl0ZW1cclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhvcGVuQ2xhc3MpO1xyXG4gICAgICAvLyBhZGQgb3BlbiBjbGFzcyB0byB0aGUgY29ycmVjdCBjb250ZW50IGJhc2VkIG9uIGluZGV4XHJcbiAgICAgICRjb250ZW50LmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGNvbnRlbnRcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhjbG9zZUNsYXNzKVxyXG4gICAgICAgICAgLmFkZENsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKHN1Ym1lbnVDbGFzcylcclxuICAgICAgfSwgLjEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHBhcmVudC5maW5kKCcuanMtY2xvc2UtdXRpbC1uYXYnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuXHJcbiAgICAgIGhpZGUoICQodGhpcykuY2xvc2VzdCgnLmpzLXV0aWwtbmF2LWNvbnRlbnQnKSApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmpzLWNsb3NlLXN1Yi1uYXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgJG9wZW5Db250ZW50ID0gJHBhcmVudC5maW5kKCcuanMtdXRpbC1uYXYtY29udGVudC4nICsgb3BlbkNsYXNzKTtcclxuICAgICAgaGlkZSgkb3BlbkNvbnRlbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZSgkY29udGVudCkge1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3Moc3VibWVudUNsYXNzKVxyXG4gICAgICAkcGFyZW50LmZpbmQoXCIuXCIgKyBvcGVuQ2xhc3MpLnJlbW92ZUNsYXNzKG9wZW5DbGFzcyk7XHJcbiAgICAgICRjb250ZW50XHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKG9wZW5DbGFzcylcclxuICAgICAgICAuYWRkQ2xhc3MoY2xvc2VDbGFzcyk7XHJcblxyXG4gICAgICBpZih3YWl0Rm9ySXQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQod2FpdEZvckl0KTtcclxuICAgICAgfVxyXG4gICAgICB3YWl0Rm9ySXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGNvbnRlbnQuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KHdpbmRvdyxkb2N1bWVudCxqUXVlcnkpO1xyXG4iXX0=