if($("#back-to-top").length){var offset=1200,scrollTrigger=200;checkOffset=(()=>{var o=$(document).height()-$(window).scrollTop(),t=$(document).height()-offset;$(window).scroll(()=>{$(window).scrollTop()>scrollTrigger?($("#back-to-top").addClass("show"),o>offset?($("#back-to-top").css({position:"fixed"}),$("#back-to-top").css({transform:"translateY(0)"})):($("#back-to-top").css({position:"absolute"}),$("#back-to-top").css({transform:`translateY(${t}px)`}))):$("#back-to-top").removeClass("show")})}),checkOffset(),$(window).on("scroll",()=>{checkOffset()}),$("#back-to-top").on("click",o=>{o.preventDefault(),$("html, body").animate({scrollTop:0},700)})}