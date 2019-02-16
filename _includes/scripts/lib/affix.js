(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  var isAlwaysOnTop = window.TEXT_VARIABLES.site.header.always_on_top;
  var headerHeight = 0;
  var asideMenuLeft = 0;
  window.Lazyload.js(SOURCES.jquery, function() {
    headerHeight = (isAlwaysOnTop ? $('#header').height() : 0);
    asideMenuWidth = $('#aside-menu').width();
  });
  window.Lazyload.js(SOURCES.jquery, function() {
    function affix(options) {
      var $root = this, $window = $(window), $scrollTarget, $scroll,
        offsetBottom = 0, scrollTarget = window, scroll = window.document, disabled = false, isOverallScroller = true,
        rootTop, rootLeft, rootHeight, scrollBottom, rootBottomTop,
        hasInit = false, curState;

      function setOptions(options) {
        var _options = options || {};
        _options.offsetBottom && (offsetBottom = _options.offsetBottom);
        _options.scrollTarget && (scrollTarget = _options.scrollTarget);
        _options.scroll && (scroll = _options.scroll);
        _options.disabled !== undefined && (disabled = _options.disabled);
        $scrollTarget = $(scrollTarget);
        isOverallScroller = window.isOverallScroller($scrollTarget[0]);
        $scroll = $(scroll);
      }
      function preCalc() {
        top();
        rootHeight = $root.outerHeight();
        rootTop = $root.offset().top + (isOverallScroller ? 0 :  $scrollTarget.scrollTop());
        rootLeft = $root.offset().left;
      }
      function calc(needPreCalc) {
        needPreCalc && preCalc();
        scrollBottom = $scroll.outerHeight() - offsetBottom - rootHeight;
        rootBottomTop = scrollBottom - rootTop;
      }
      function top() {
        if (curState !== 'top') {
          $root.removeClass('fixed').css({
            left: asideMenuWidth + 'px',
            top: 0
          });
          curState = 'top';
        }
      }
      function fixed() {
        if (curState !== 'fixed') {
          $root.addClass('fixed').css({
            left: rootLeft + 'px',
            top: headerHeight + 'px'
          });
          curState = 'fixed';
        }
      }
      function bottom() {
        if (curState !== 'bottom') {
          $root.removeClass('fixed').css({
            left: asideMenuWidth + 'px',
            top: rootBottomTop + 'px'
          });
          curState = 'bottom';
        }
      }
      function setState() {
        var scrollTop = $scrollTarget.scrollTop() + headerHeight;
        if (scrollTop >= rootTop && scrollTop <= scrollBottom) {
          fixed();
        } else if (scrollTop < rootTop) {
          top();
        } else {
          bottom();
        }
      }
      function init() {
        if(!hasInit) {
          var interval, timeout;
          calc(true); setState();
          // run calc every 100 millisecond
          interval = setInterval(function() {
            calc();
          }, 100);
          timeout = setTimeout(function() {
            clearInterval(interval);
          }, 45000);
          window.pageLoad.then(function() {
            setTimeout(function() {
              clearInterval(interval);
              clearTimeout(timeout);
            }, 3000);
          });
          $scrollTarget.on('scroll', function() {
            disabled || setState();
          });
          $window.on('resize', function() {
            disabled || (calc(true), setState());
          });
          hasInit = true;
        }
      }

      setOptions(options);
      if (!disabled) {
        init();
      }
      $window.on('resize', window.throttle(function() {
        init();
      }, 200));
      return {
        setOptions: setOptions,
        refresh: function() {
          calc(true, { animation: false }); setState();
        }
      };
    }
    $.fn.affix = affix;
  });
})();