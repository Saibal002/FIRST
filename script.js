$(document).ready(function(){
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navbarNav',
        offset: 56
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#navbarNav").offset().top > 100) {
            $("#navbarNav").addClass("navbar-shrink");
        } else {
            $("#navbarNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

});
// JavaScript function to handle form submission
function displayConfirmationDialog() {
    // Create a confirmation dialogue
    var confirmationMessage = "Thank you for registering! We look forward to seeing you at TechVolution 2024.";
    alert(confirmationMessage);
}

// Get the registration form element
var registrationForm = document.getElementById("registration");

// Add event listener for form submission
registrationForm.addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Call the function to display the confirmation dialogue
    displayConfirmationDialog();
});
