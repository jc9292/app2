(function($) {

        $.fn.jPushMenu = function(customOptions) {
                var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);

                /* add class to the body.*/
                $('#menu1').hide();
                $('body').addClass(o.bodyClass);
                $(this).addClass('jPushMenuBtn');
                $(this).click(function() {
                        var target         = '',
                        push_direction     = '';
                        $('#menu1').show();

                        if($(this).is('.'+o.showLeftClass)) {
                                target         = '.cbp-spmenu-left';
                                push_direction = 'toright';
                        }

                        $(this).toggleClass(o.activeClass);
                        $(target).toggleClass(o.menuOpenClass);

                        if($(this).is('.'+o.pushBodyClass)) {
                                $('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
                        }

                        return false;
                });
                var jPushMenu = {
                        close: function (o) {
                                $('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
                                $('#menu1').hide();
                        }
                }

                if(o.closeOnClickOutside) {
                         $(document).click(function() {
                                jPushMenu.close();
                         });
                         $('#closem1').click(function() {
                                jPushMenu.close();
                         });

                         $('.cbp-spmenu,.toggle-menu').click(function(e){
                                 e.stopPropagation();
                         });
                 }
        };

   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
        $.fn.jPushMenu.defaultOptions = {
                bodyClass       : 'cbp-spmenu-push',
                activeClass     : 'menu-active',
                showLeftClass   : 'menu-left',
                showRightClass  : 'menu-right',
                showTopClass    : 'menu-top',
                showBottomClass : 'menu-bottom',
                menuOpenClass   : 'cbp-spmenu-open',
                pushBodyClass   : 'push-body',
                closeOnClickOutside: true
        };
})(jQuery);
