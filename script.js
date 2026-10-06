// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// ===============================
// ANIMASI SAAT SCROLL
// ===============================

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.12
});

revealItems.forEach(item => observer.observe(item));


// ===============================
// NAVBAR AKTIF SESUAI SECTION
// ===============================

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      current = section.id;
    }

  });

  links.forEach(link => {

    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );

  });

});


// ===============================
// EFEK PARALLAX FOTO
// ===============================

const profile = document.querySelector(".profile-frame");

if (profile && window.innerWidth > 900) {

  const wrapper = document.querySelector(".profile-wrapper");

  wrapper.addEventListener("mousemove", (event) => {

    const rect = wrapper.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - .5) * 5;
    const rotateX = (y / rect.height - .5) * -5;

    profile.style.transform =
      `rotate(0deg) perspective(900px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-5px)`;

  });

  wrapper.addEventListener("mouseleave", () => {

    profile.style.transform =
      "rotate(2deg)";

  });

}
