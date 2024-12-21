document.addEventListener("DOMContentLoaded", () => {
    const menuHeader = document.querySelector(".menu-header");
    const menuList = document.querySelector(".menu-list");
    
    menuList.style.display = "none";

menuHeader.addEventListener("click", () => {
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "block";
        }
    })

});

const menuLinks = document.querySelectorAll(".menu-list a");
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
    menu.style.display = 'none';
    });
});

