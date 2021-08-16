$(document).ready(function(){
    buildNav();
})


function buildNav() {
    var html =  
    '<div class="nav_panel">' +
        '<div class="nav_panel_wrapper">' +
            '<div class="nav_subscribe_section">' +
                '<p class="nav_panel_subscribe_button" data-link="https://whsredandblack.herokuapp.com/subscription.html">Get 1 year of full access for $25</p>' +
                '<div class="mobile_search_button">' +
                    '<p class="mobile_search_button_text">Search Archives</p>' +
                    '<img class="mobile_search_button_icon" src="icons/search_icon_dark.png">' +
                '</div>' +
            '</div>' +
            '<div class="nav_section_section">' +
                '<ul class="section_container">' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/index.html">Front Page</li>' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/student-life.html">Student Life</li>' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/opinion.html">Opinion</li>' +
                    // '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/media.html">Media</li>' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/news.html">News</li>' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/sports.html">Sports</li>' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/arts-and-entertainment.html">Arts &amp; Entertainment</li>' +
                '</ul>' +
            '</div>' +
            '<div class="nav_extra_section">' +
                '<ul class="section_container">' +
                    '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/archives.html">Archives</li>' +
                    // '<li class="nav_link" data-link="https://whsredandblack.herokuapp.com/about.html">About</li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
    '</div>';

    $('body').append(html);
    
    $('.nav_link').bind('click', function(){
        
        if (!($(this).attr('data-link') === "https://whsredandblack.herokuapp.com/about.html" || $(this).attr('data-link') === "https://whsredandblack.herokuapp.com/media.html")) {
            window.location.href = $(this).attr('data-link');
        }
        
    })
    
    
    
    $('.rb_logo').click(function(){
        window.location.href = "https://whsredandblack.herokuapp.com/index.html";
    })
    $('.footer_title').click(function(){
        window.location.href = "https://whsredandblack.herokuapp.com/index.html";
    })
    $('.footer_subscribe_button').click(function(){
        window.location.href = "https://whsredandblack.herokuapp.com/subscription.html";
    })
    $('.nav_panel_subscribe_button').click(function(){
        window.location.href = "https://whsredandblack.herokuapp.com/subscription.html";
    })
    $('.nav_subscribe_button').click(function(){
        window.location.href = "https://whsredandblack.herokuapp.com/subscription.html";
    })

    $('.nav_search_button').hide();
    $('.mobile_search_button').hide();
    // Media section temporarily commented out
    
    
    /*
    // Add search button to mobile navigation panel
    if (window.innerWidth <= 500) {
        search_html = 
        '<div class="mobile_search_button">' +
            '<p class="mobile_search_button_text">Search Archives</p>' +
            '<img class="mobile_search_button_icon" src="icons/search_icon_dark.png">' +
        '</div>';
        
        
        $('.nav_subscribe_section').append(search_html);  
    }
    */
    
    
    setNav();
}

function setNav(){
    
    var navOpen = false;
    
    $('.nav_section_button').click(function(){
        if ($('.account_panel').css('display') == 'none') {
            $('.nav_panel').toggle('slide', {easing: 'swing'}, 250);

            if (!navOpen) {
                variableWidth = $('.content_wrapper').outerWidth(true) * 0.05;
                $('.content_wrapper').animate({paddingLeft: 300 + variableWidth}, 250, 'swing');
                $('.nav_account_button').css('cursor', 'not-allowed');
            }
            else {
                $('.content_wrapper').animate({paddingLeft: 0}, 250, 'swing');
                $('.nav_account_button').css('cursor', 'pointer');
            }

            navOpen = !navOpen;
        }
    })
    
    $('.mobile_navigation_button').click(function(){
        if ($('.account_panel').css('display') == 'none') {
            $('.nav_panel').toggle('slide', {easing: 'swing'}, 250);

            if (!navOpen) {
                variableWidth = $('.content_wrapper').outerWidth(true) * 0.05;
                $('.content_wrapper').animate({paddingLeft: 300 + variableWidth}, 250, 'swing');
                $('.nav_account_button').css('cursor', 'not-allowed');
            }
            else {
                $('.content_wrapper').animate({paddingLeft: 0}, 250, 'swing');
                $('.nav_account_button').css('cursor', 'pointer');
            }

            navOpen = !navOpen;
        }
    })
    
    $('.content_wrapper').click(function(){
        if (navOpen) {
            $('.nav_panel').toggle('slide', {easing: 'swing'}, 250);
            
            if (!navOpen) {
                variableWidth = $('.content_wrapper').outerWidth(true) * 0.05;
                $('.content_wrapper').animate({paddingLeft: 300 + variableWidth}, 250, 'swing');
            }
            else {
                $('.content_wrapper').animate({paddingLeft: 0}, 250, 'swing');
                $('.nav_account_button').css('cursor', 'pointer');
            }
            
            navOpen = !navOpen;
        }
    })
    
    
    
    
    
    // ACCOUNT PANEL
    
    $('.mobile_account_button').click(accountButtonClick);
    $('.nav_account_button').click(accountButtonClick);

    $('.nav_search_button').click(notImplementedNotification);
    $('.mobile_search_button').click(notImplementedNotification);
    $('.nav_link[data-link="https://whsredandblack.herokuapp.com/about.html"]').click(notImplementedNotification);
    $('.nav_link[data-link="https://whsredandblack.herokuapp.com/media.html"]').click(notImplementedNotification);
    $('.link_inactive').click(notImplementedNotification);
    
}


function notImplementedNotification(event = null) {
    if (event) {
        event.preventDefault();
    }
    alert('This feature is coming soon.');
}




function accountButtonClick() {
    if (getCookie('login')) {
        alert('This feature is coming soon...')
    }
    else {
        window.location = 'https://whsredandblack.herokuapp.com/login.html';
    }
}