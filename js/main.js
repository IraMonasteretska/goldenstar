$(document).ready((function(){$((function(){$(window).scroll((function(){$(this).scrollTop()>20?$("#header").css("background-color","#fff"):$("#header").css("background-color","transparent")}))})),$(".curriculum__item").on("click",(function(){$(this).find(".curriculum-dropdown").slideToggle()})),$(".main__slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,speed:1e3,autoplay:!0,autospeed:1e3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,speed:1e3,autoplay:!0,autospeed:1e3}}]}),$(".slider__inner").slick({slidesToShow:2.5,slidesToScroll:1,arrows:!0,infinite:!1,prevArrow:'<button type="button" class="slide-btn slide-prev"></button>',nextArrow:'<button type="button" class="slide-btn slide-next"></button>',responsive:[{breakpoint:1050,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:700,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1}}]}),$(".about-slider__inner").slick({slidesToShow:3.5,slidesToScroll:1,arrows:!0,infinite:!1,prevArrow:'<button type="button" class="slide-btn slide-prev"></button>',nextArrow:'<button type="button" class="slide-btn slide-next"></button>',responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1}}]});let e=$(window).width(),s=$(".container").width(),t=(e-s)/2-40;if(sideDotsWidth=(e-s)/2,$(".slider__wrapper").css("padding-left",t+"px"),$(".slick-dots").css("right",sideDotsWidth+"px"),$(window).resize((function(){let e=$(window).width(),s=$(".container").width(),t=(e-s)/2-40;sideDotsWidth=(e-s)/2,$(".slick-dots").css("right",sideDotsWidth+"px"),$(window).width()<992?$(".slider__wrapper").css("padding-left",0):$(".slider__wrapper").css("padding-left",t+"px")})),$(".burger-menu").on("click",(function(){$(".burger-menu").toggleClass("burger-menu--active"),$(".header__mobile").toggleClass("header__mobile--active")})),$("body *").is("#scene")){var o=document.getElementById("scene");new Parallax(o)}if($("body *").is("#scene1")){var i=document.getElementById("scene1");new Parallax(i)}if($("body *").is("#scene3")){var n=document.getElementById("scene3");new Parallax(n)}if($("body *").is("#scene4")){var l=document.getElementById("scene4");new Parallax(l)}$(".info__item-text").on("click",(function(){$(this).toggleClass("text-active")})),$(".about-slider__item-text").on("click",(function(){$(this).toggleClass("text-active")}))}));