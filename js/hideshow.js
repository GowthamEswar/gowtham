function showhide() {
    var about = document.querySelector(".about");
    var worked = document.querySelector(".worked");
    var contact = document.querySelector(".contact");
    setTimeout(function() {
        about.classList.add('about-active');
        worked.classList.add('worked-active');
        contact.classList.add('contact-active');
    }, 15000);
}

showhide()