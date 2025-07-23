(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-sticky');
        } else {
            $('#nav').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills section
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    

    // Clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });
    

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
  
})(jQuery);


//--chatbox--//

document.getElementById('chat-toggle-button').addEventListener('click', function() {
    var chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none') {
        chatBox.style.display = 'flex';
        sendWelcomeMessage(); // Send the welcome message when the chat box is opened
    } else {
        chatBox.style.display = 'none';
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();

    if (messageText) {
        appendMessage('user', messageText);
        userInput.value = '';

        // Scroll to the bottom of the chat
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate automated response
        setTimeout(() => {
            autoRespond(messageText);
        }, 1000);
    }
}

function sendWelcomeMessage() {
    appendMessage('support', 'Welcome to our support chat! How can we assist you today?');
}

function appendMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const message = document.createElement('div');
    message.className = `message ${sender}`;
    message.innerHTML = `<span>${text}</span>`;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function autoRespond(userMessage) {
    let responseText = 'I\'m sorry, I didn\'t understand that. Can you please rephrase?';
    
    // Simple keyword-based responses
    if (userMessage.toLowerCase().includes('hello')) {
        responseText = 'Hello! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('price')) {
        responseText = 'Our prices vary based on the service you are interested in. Can you specify if you are looking for app development, web development, or an ERP system?';
    } else if (userMessage.toLowerCase().includes('contact')) {
        responseText = 'You can reach our support team at thevittavrdhan@gmail.com or call us at +91 6397598283.';
    }

    appendMessage('support', responseText);
}
