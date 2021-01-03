$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var toType = ["Student", "Developer"];

    // typing animation script
    var typed = new Typed(".typing", {
        strings: toType,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: toType,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$("form").on( "submit", function(e) {
    $('.loader').addClass("visible");
 
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: $(this).serialize(),
      success: function () {
        document.getElementById("contact-response").innerHTML = "Message Sent!";
        $('.loader').removeClass("visible");
        document.getElementById('contact-response').style.opacity = 1;
        $(".contact-response").delay(5000).animate({ opacity: 0 })
        document.getElementById('name-field').value = "";
        document.getElementById('email-field').value = "";
        document.getElementById('subject-field').value = "";
        document.getElementById('message-field').value = "";
      },
      error: function() {
        document.getElementById("contact-response").innerHTML = "Sorry, message failed to send...";
        document.getElementById('contact-response').style.opacity = 1;
        $('.loader').removeClass("visible");        
      }
    });
 
    e.preventDefault();
});