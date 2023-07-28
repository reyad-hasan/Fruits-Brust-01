let mobile_view = document.getElementById("mobile_view");
let main_menu = document.getElementById("main_menu");

mobile_view.addEventListener("click", () => {
    main_menu.classList.toggle('hidden');
})