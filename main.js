//Html tarafından elemanları çekme /
const navMenu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menuLinks = document.querySelectorAll(".nav__menu a");
const Logo = document.querySelector(".nav__container h4");
const navbar = document.querySelector("nav");
const faqs = document.querySelectorAll(".faq");

//Navbar Menüsünü Açma /
openBtn.addEventListener("click", () => {
  navMenu.style.display = "grid";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});

//Navbar Menü ikonlarının tarzını değiştirme/
const closeNav = () => {
  navMenu.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
};
//Navbar Menüsünü kapatma /
closeBtn.addEventListener("click", closeNav);

window.addEventListener("scroll", () => {
  const shouldScrollStyle = window.scrollY > 100;
  // Scroll pozisyonu 100'den büyükse, window-scroll sınıfını ekler küçükse eklemez
  navbar.classList.toggle("window-scroll", shouldScrollStyle);
  // Boş bırakarak default rengine döner
  // Scroll pozisyonu 100'den büyükse rengi beyaz değilse default değer /
  openBtn.style.color =
    closeBtn.style.color =
    Logo.style.color =
      shouldScrollStyle ? "white" : "";
  menuLinks.forEach((link) => {
    link.style.color = shouldScrollStyle ? "white" : "";
  });
});

// faq bölümünü açma/
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // faq bölümündeki + ikonunu - ye çervirme ikon değiştirme/

    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "bi bi-plus-lg") {
      icon.className = "bi bi-dash-lg";
    } else {
      icon.className = "bi bi-plus-lg";
    }
  });
});



    // Yukarı ok işaretine tıklama olayını dinle
    document.querySelector("#scroll-to-top").addEventListener("click", function() {
        // Sayfanın en üstüne yavaşça kaydır
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Sayfa aşağı kaydıkça yukarı ok işaretini göster veya gizle
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            document.querySelector("#scroll-to-top").style.display = "block";
        } else {
            document.querySelector("#scroll-to-top").style.display = "none";
        }
    });
