
      //  Category small with owl carousel CDN
      
      $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            dots: false,
            smartSpeed: 1200,
            autoplay: true,
            responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: 5,
                        nav: false,
                        loop: false
                    },
                    1200: {
                        items: 6,
                        nav: false,
                        loop: false
                    }
                }
            })
