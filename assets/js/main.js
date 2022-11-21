/******************************************************************
  Template Name: Flies
  Description:  Brand fashion Flies eCommerce frontend
  Author: Lugas Gilas Angkoro
  Version: 1.0.0
  Created: PT. Aditya Mandiri Sejahtera - 2022
******************************************************************/    
    
    /*------------------
        Preloader
    --------------------*/
    (function ($) {
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloder").delay(300).fadeOut("slow");
            });
    })(jQuery);


    /*----------------------
        Hide side filter
    ----------------------*/
    $(document).ready(function(){
    $(".hide-filter").click(function(){
        $(".side-filter").fadeToggle("fast");
    });
    });


    /*----------------------
        Sort by toogle
    ----------------------*/
    $(document).ready(function(){
    $("#sort-by").click(function(){
        $(".sort-by").fadeToggle("fast");
    });
    });


    /*----------------------
        Go to top
    ----------------------*/
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("goBtn").style.right = "30px";
        } else {
            document.getElementById("goBtn").style.right = "-50px";
        }
    }
    
    $('#goBtn').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });

    
    /*-------------------------
        Product detail photo
    --------------------------*/
    $(document).ready(function(){

    $(".tb").hover(function(){

    $(".tb").removeClass("tb-active");
    $(this).addClass("tb-active");

        current_fs = $(".active");

        next_fs = $(this).attr('id');
        next_fs = "#" + next_fs + "1";

    $("fieldset").removeClass("active");
    $(next_fs).addClass("active");

        current_fs.animate({}, {
        step: function() {
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        next_fs.css({
        'display': 'block'
        });
         }
    });
    });

    });


    /*-----------------------------------
        Adding class active to button
    -----------------------------------*/
    $(document).ready(function () {
            $('.btn-size').click(function () {
                $('.btn-size').removeClass("active");
                $(this).addClass("active");
            });
        });

    $(document).ready(function () {
            $('.btn-color').click(function () {
                $('.btn-color').removeClass("active");
                $(this).addClass("active");
            });
        });

    $(document).ready(function () {
            $('.btn-love').click(function () {
                $('.btn-love').toggleClass("active");
            });
        });

    $(document).ready(function(){
        $(".color-list").click(function(){
            $(".panel-color").slideToggle("slow");
        });
    });

    $(document).ready(function(){
        $(".row-coupon").click(function(){
            $(".panel-coupon").slideToggle("slow");
        });
    });
    

    /*-----------------------------------
        Accordion tabs (detail product)
    -----------------------------------*/
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active-tab");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }