/*---Sticky Navbar---*/
$(function () {
    $(window).on("scroll", function () {
        var x = $(".navbar");
        $(window).scrollTop() >= x.height() ? x.addClass("nav-scroll") : x.removeClass("nav-scroll")
    });
});
/*---End Sticky Navbar---*/

/*---Portfolio Section---*/
$('.portfolio-link').on('click', 'span', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
});
/*---End Portfolio Section---*/

/*---Portfolio Active Links---*/
var header = document.getElementById("workFilter");
var btns = header.getElementsByClassName("wrk");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active_wrk");
        current[0].className = current[0].className.replace(" active_wrk", "");
        this.className += " active_wrk";
    });
}
/*---End Portfolio Active Links---*/

/*---Magnific Popup---*/
$('.view').magnificPopup({
    gallery: {
        enabled: true
      },
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
    }
  });

/*---End Magnific Popup---*/

/*---Testimonial Section---*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


/*---Testimonial Section---*/