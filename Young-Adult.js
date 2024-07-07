   $(document).ready(function()
   {
      $('#lg2_page1').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page2').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page3').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });

      $('#lg2_page4').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page5').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page6').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
      $('#lg2_page7').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page8').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg2_page9').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page10').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page11').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg2_page12').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page13').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page14').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg2_page15').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg2_page16').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg3_page1').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
             $('#lg3_page2').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg3_page3').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg3_page4').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg3_page5').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $("a[href*='#mainLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_mainLayoutGrid').offset().top-88 }, 600, 'easeOutCirc');
      });
      $('#lg1_page1').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg1_page2').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page5').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page4').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       

      $('#lg1_page3').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page6').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page7').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page8').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg1_page9').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page10').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
       
      $('#lg1_page11').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg1_page12').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg4_page22').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
       
      $('#lg4_page23').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $('#lg4_page25').each(function()
      {
         var currentPage = 0;
         var numPerPage = 1;
         var $blog = $(this);
         var repaginate = function()
         {
            $blog.find('.blogitem').hide()
                 .slice(currentPage * numPerPage, (currentPage + 1) * numPerPage)
                 .show();
         };
         var numRows = $blog.find('.blogitem').length;
         var numPages = Math.ceil(numRows / numPerPage);
         var $pager = $('<div class="pager"></div>');
         for (var page = 0; page < numPages; page++)
         {
            $('<span class="page-number"></span>').text(page + 1)
            .bind('click', {newPage: page}, function(event)
            {
               currentPage = event.data['newPage'];
               repaginate();
               $(this).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');
         }
         $pager.prependTo($blog).find('span.page-number:first').addClass('active');
         repaginate();
      });
      $("#PanelLayer").panel({animate: true, animationDuration: 500, animationEasing: 'easeOutCirc', dismissible: true, display: 'overlay', position: 'left'});
      $('.OverlayMenu2 .item-has-children').children('a').on('click', function(event)
      {
         event.preventDefault();
         $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(0,'linear').end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(0,'linear');
      });
      $("a[href*='#lg1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_lg1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#lg2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_lg2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#lg3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_lg3').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#lg4']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_lg4').offset().top-88 }, 600, 'easeOutCirc');
      });
   });