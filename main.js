function validateForm(){
    var nameField = document.getElementById("name-field");
    var emailField = document.getElementById("email-field");
    var messageField = document.getElementById("message-field");  
    var emailError = document.getElementById("email-error");
    var nameError = document.getElementById("name-error");
    var messageError = document.getElementById("message-error");

    // Clear previous error messages and reset border colors
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    nameField.style.borderBottomColor = "";
    emailField.style.borderBottomColor = "";
    messageField.style.borderBottomColor = "";

    var name = nameField.value.trim();
    var email = emailField.value.trim();
    var message = messageField.value.trim();

    // Improved regex for name: allows letters, numbers, spaces, hyphens, apostrophes
    var nameRegex = /^[a-zA-Z\s'-]+$/;
    // Improved email regex pattern (simplified but better)
    var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if(name.length < 2 || name.length > 25){
        nameError.innerHTML = "Name must be between 2 and 25 characters.";
        nameField.style.borderBottomColor = "red";
        return false;

    } else if(!nameRegex.test(name)){
        nameError.innerHTML = "Name can only contain letters, numbers, spaces, hyphens, and apostrophes.";
        nameField.style.borderBottomColor = "red";
        return false;
    }

    if(!emailRegex.test(email)) {
        emailError.innerHTML = "Invalid email address.";
        emailField.style.borderBottomColor = "red";
        return false;
    }

    if(message.length < 10 || message.length > 500){
        messageError.innerHTML = "Message must be between 10 and 500 characters.";
        messageField.style.borderBottomColor = "red";
        return false;
    }

    nameField.style.borderBottomColor = "green";
    emailField.style.borderBottomColor = "green";
    messageField.style.borderBottomColor = "green";

    return true;
}

const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//about container
ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// skillset and tools container
ScrollReveal().reveal(".service_container .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    interval: 500,
});

// resume container
ScrollReveal().reveal(".resume_container .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".resume_tablist", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".resume_tabpanel", {
    ...scrollRevealOption,
    delay: 1000,
});

//project container
ScrollReveal().reveal(".project_container .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".project_container .project_nav", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".project_container .project_grid", {
    ...scrollRevealOption,
    delay: 1000,
});

//testimonial
ScrollReveal().reveal(".testimonial_container .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".testimonial_container .swiper-wrapper", {
    ...scrollRevealOption,
    delay: 500,
});





const tablist = document.querySelector(".resume_tablist");

tablist.addEventListener("click", (e) => {
    const tabIndex = e.target.dataset.tab;
    if (!tabIndex) return;

    const tabs = document.querySelectorAll("[data-tab]");
    Array.from(tabs).forEach((tab) => {
        if (tab.dataset.tab === tabIndex) {
        tab.classList.add("active")
    } else {
        tab.classList.remove("active");
    }
    });
    
    const activePanel = document.querySelector(".panel_grid.active");
    const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
    if (activePanel.dataset.panel === tabIndex) return;
    activePanel.classList.add("close");
    activePanel.addEventListener(
        "animationend",
        (e) => {
            activePanel.classList.remove("active");
            activePanel.classList.remove("close");
            toActivePanel.classList.add("active");
        },
        { once: true }
    );
});

//project-grid
const mixer = mixitup(".project_grid");

//testimonials
const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
    