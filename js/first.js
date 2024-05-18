   var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
   function searchPage(features)
   {
      var element = document.getElementById('SiteSearch');
      window.open('sitesearch-results.html?q='+encodeURIComponent(element.value), '', features);
      return false;
   }


   document.addEventListener('DOMContentLoaded', function(event)
   {
      var Slidehead = new bootstrap.Carousel('#Slidehead', {interval: 10000, pause: false});
      var missionCard = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_missionCard').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover missionCard" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
      var goalCard = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_goalCard').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover goalCard" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
      var Card1 = new bootstrap.Popover("#",
      {
         content: function()
         {
            return document.querySelector('#wb_Card1').innerHTML;
         },
         html : true,
         placement: 'auto',
         template: '<div class="popover Card1" role="tooltip"><div class="popover-arrow"></div><div class="popover-body"></div></div>',
         title: '',
         trigger: 'hover'
      });
   });

   $(document).ready(function()
   {
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("a[href*='#mainLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_mainLayoutGrid').offset().top-88 }, 600, 'easeOutCirc');
      });
      searchParseURL('SiteSearch');
      searchAutoComplete('SiteSearch', 0, '_parent');
      $("a[href*='#backtoTop']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_backtoTop').offset().top }, 800, 'linear');
      });
      function onScrolltopfooterLayoutGridDividerTop()
      {
         var $obj = $('#topfooterLayoutGrid-divider-top');
         if (!$obj.hasClass('show') && $obj.inViewPort(false))
         {
            $obj.addClass('show');
         }
      }
      onScrolltopfooterLayoutGridDividerTop();
      $(window).scroll(function(event)
      {
         onScrolltopfooterLayoutGridDividerTop();
      });
      $('#babyclassText').parallax();
      $('#middleclassText').parallax();
      $('#receptionclassText').parallax();
      $('#grade1Text').parallax();
      $('#grade2Text').parallax();
      $('#grade3Text').parallax();
      $('#grade4Text').parallax();
      $("#PanelLayer").panel({animate: true, animationDuration: 500, animationEasing: 'easeOutCirc', dismissible: true, display: 'overlay', position: 'left'});
      $('.OverlayMenu2 .item-has-children').children('a').on('click', function(event)
      {
         event.preventDefault();
         $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(0,'linear').end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(0,'linear');
      });
   });