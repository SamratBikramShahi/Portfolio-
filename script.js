const hamburger = document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener('click',mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink= document.querySelectorAll(".nav-link");
navLink.forEach(n =>{
    n.addEventListener('click',closeMenu=>{
        hamburger.classList.remove("active");
    navMenu.classList.remove("active")

    })
})

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  
  toggleSwitch.addEventListener("change", switchTheme, false);
  