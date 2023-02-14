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

    
    /*----------------------------
        Search bar show & hide
    ----------------------------*/
    function openSearch() {
        document.getElementById("search-bar").style.top = "0px";
    }

    function closeSearch() {
        document.getElementById("search-bar").style.top = "-70px";
    }


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


    /*-------------------------
        Product count item
    --------------------------*/
    let total_item;
    total_item = document.querySelectorAll('.count').length;
    if (total_item > 0) {
        document.getElementById("count-product").innerHTML=total_item;
    } else {
        total_item = 0;
    }


    /*-------------------------
        Product view
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


// Menyebabkan error pada js product view
    /*----------------------------
        Load more product grid
    ----------------------------*/
    // let loadMoreBtn = document.querySelector('#load-more');
    //     let currentItem = 4;
    //     loadMoreBtn.onclick = () => {
    //         let boxes = [...document.querySelectorAll('.product-col .product-warp')];
    //         for (var i = currentItem; i < currentItem + 4; i++) {
    //             boxes[i].style.display = 'inline-block';
    //         }
    //         currentItem += 4;
    //         if (currentItem >= boxes.length) {
    //             loadMoreBtn.style.display = 'none';
    //         }
    //     }


    /*----------------------------
        Load more product grid jquery
    ----------------------------*/
    // $(document).ready(function () {
    //         $(".image").slice(0, 4).fadeIn();

    //         $(".load-more").click(function () {
    //             $(".image").slice(0, 12).fadeIn();
    //             $(this).fadeOut();
    //         });
    //     });

    /*-----------------------------------
        Adding class active to button
    -----------------------------------*/
    $(document).ready(function () {
            $('.color-option-warp').click(function () {
                $('.color-option-warp').removeClass("color-active");
                $(this).addClass("color-active");
            });
        });

    $(document).ready(function () {
            $('.btn-love').click(function () {
                $('.btn-love').toggleClass("active");
            });
        });


//     $(".color-btn").click(function () {
//         var title = $(".color-img").attr("title");
//         $("#color-name").text(title);
//     });


    $(document).ready(function () {
            $('.size-option-warp').click(function () {
                $('.size-option-warp').removeClass("size-active");
                $(this).addClass("size-active");
            });
        });

    $(document).ready(function(){
        $(".row-coupon").click(function(){
            $(".panel-coupon").slideToggle("slow");
        });
    });

    $(document).ready(function(){
        $(".voucher-input").click(function(){
            $(".panel-voucher").slideToggle("slow");
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


    /*-----------------------------------
        Adding quantity shopbag
    -----------------------------------*/
     jQuery(document).ready(($) => {
        $('.quantity').on('click', '.plus', function(e) {
            let $input = $(this).prev('input.qty');
            let val = parseInt($input.val());
            $input.val( val+1 ).change();
        });
 
        $('.quantity').on('click', '.minus', 
            function(e) {
            let $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val( val-1 ).change();
            } 
        });
    });