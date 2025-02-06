document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector(".navbar").prepend(navToggle);
    
    navToggle.addEventListener("click", function () {
        document.querySelector(".nav-list").classList.toggle("active");
    });
    
    const heroImage = document.querySelector(".hero img");
    window.addEventListener("scroll", function () {
        let scrollPos = window.scrollY;
        heroImage.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });

    document.querySelectorAll(".nav-list a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});