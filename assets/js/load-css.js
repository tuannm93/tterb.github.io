!function(e){var t=function(t,n,o){function r(){i.addEventListener&&i.removeEventListener("load",r),i.media=o||"all"}var a,l=e.document,i=l.createElement("link");if(n)a=n;else{var s=(l.body||l.getElementsByTagName("head")[0]).childNodes;a=s[s.length-1]}var d=l.styleSheets;i.rel="stylesheet",i.href=t,i.media="only x",function e(t){return l.body?t():void setTimeout(function(){e(t)})}(function(){a.parentNode.insertBefore(i,n?a:a.nextSibling)});var f=function(e){for(var t=i.href,n=d.length;n--;)if(d[n].href===t)return e();setTimeout(function(){f(e)})};return i.addEventListener&&i.addEventListener("load",r),i.onloadcssdefined=f,f(r),i};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this),function(e){if(e.loadCSS){var t=loadCSS.relpreload={};if(t.support=function(){try{return e.document.createElement("link").relList.supports("preload")}catch(e){}},t.poly=function(){for(var t=e.document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=t[n];"preload"===o.rel&&"style"===o.getAttribute("as")&&(e.loadCSS(o.href,o),o.rel=null)}},!t.support()){t.poly();var n=e.setInterval(t.poly,300);e.addEventListener&&e.addEventListener("load",function(){e.clearInterval(n)})}}}(this);var $fonts="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Spectral:300,300i,500,500i,700,700i|Source+Code+Pro:300,400,600,700";loadCSS($fonts),loadCSS("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"),loadCSS("/assets/styles/main.css");