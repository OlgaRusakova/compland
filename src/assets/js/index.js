/* header */

(function() {
    const header = document.querySelector(".header");
    const headerMenu = document.querySelector(".header__menu")
    const menuVisible = document.querySelector(".header__menu-wrap")

    document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header_has-bg");
        headerMenu.classList.add("header__menu-scrolled");

    } else {
        /* header.classList.remove("header_has-bg"); */
        headerMenu.classList.remove("header__menu-scrolled");
        if (menuVisible.classList.contains("header__menu-wrap_visible")){
            header.classList.add("header_has-bg");} else {
                header.classList.remove("header_has-bg");
            };
        }


    });

    console.log(header)
})();

/* mobile menu */
(function () {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header__burger");
    const menuContainerEl = document.querySelector(".header__menu-wrap");
    
    burger.addEventListener('click', function() {
    menuContainerEl.classList.toggle('header__menu-wrap_visible');
    
    header.classList.toggle('header_has-bg');
    if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");} 
   /*  document.body.classList.toggle('content-hidden'); */
    
    });

    console.log(header);

})();
