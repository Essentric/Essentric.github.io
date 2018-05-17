/*------------------------------------------------------------------
Project:        resume
Author:         Essentric
URL:            https://essentric.github.io/resume/
-------------------------------------------------------------------*/

$(function(){
    // 严格模式
	'use strict';

    // Scrollspy 插件
    $('body').scrollspy({
    	target: '#main-navbar',
    	offset: 121
    });

    /*------------------------------------------------------------------------------------*/

    // affix 插件
    $('#main-navigation').affix({
        offset: {
            top: function() {
                // 页面当前高度
                var windowHeight = $(window).height();
                if(windowHeight > 568 && windowHeight < 1050) {
                    return windowHeight;
                } else if(windowHeight <= 568) {
                    return 568;
                } else {
                    return 1050;
                }
            }
        }
    });

	/*------------------------------------------------------------------------------------*/

    // Smooth Scroll 插件
	smoothScroll.init({
		selector: '.smoothScroll',
		speed: 1000,
		offset: function(){

            var query = Modernizr.mq('(max-width: 767px)');

            var navFix = $("#main-navigation").hasClass('affix');

            var navExt = $('#main-navbar').hasClass('in');

            if(query && navExt && !navFix) {
                return (121 + $("#main-navbar").height());
            } else {
                return 121;
            }
        },
		before: function(anchor, toggle){

			var query = Modernizr.mq('(max-width: 767px)');

			var navItem = $(toggle).parents("#main-navbar").length;

			if (query && navItem !== 0) {
				$("button.navbar-toggle").click();
			}
		}
	});

    /*------------------------------------------------------------------------------------*/

    // 解决移动导航
    var setNavHeight = function(){
        var query = Modernizr.mq('(max-width: 767px)');
        // 设置 navbar-collapse 的最大高度
        if(query) {
            $(".navbar-collapse").css({
                maxHeight: $(window).height() - $(".navbar-header").height() + "px"
            });
        }
    };

    setNavHeight();

    // 监听高度改变
    $(window).resize(function(){
        setNavHeight();
    });

	/*------------------------------------------------------------------------------------*/

    // 自动更新脚注的年份
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	$("#year").text(year);

    // progress插件
    var progress = $(".progress-bar-inner");
    progress.each(function (i)
    {
        var data = $(this).attr('data-value');
        $(this).prev().find("span").html(data+"%");
    });
});