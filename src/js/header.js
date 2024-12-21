document.addEventListener("DOMContentLoaded", () => {
    const menuHeader = document.querySelector(".menu-header");
    console.log(menuHeader);
    
    const menuList = document.querySelector(".menu-list");
    console.log(menuList);
    
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



// const menuHeader = document.querySelector(".menu-header").addEventListener("click", function () {
//     const menuList = document.querySelector(".menu-list");
//     menuList.style.display = menuList.style.display === "none" ? "block" : "none";
// })
