if($("#back-to-top").length){var scrollTrigger=200,backToTop=function(){var o=$(window).scrollTop(),t=Math.min($(document).height(),$(window).height())-1250;$(window).scroll(function(){o>scrollTrigger&&o<t?$("#back-to-top").addClass("show"):$("#back-to-top").removeClass("show")})};backToTop(),$(window).on("scroll",function(){backToTop()}),$("#back-to-top").on("click",function(o){o.preventDefault(),$("html,body").animate({scrollTop:0},700)})}