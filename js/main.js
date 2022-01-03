(function (){
    const pricesYear = [199.99, 249.99, 399.99];
    const pricesMonth = [19.99, 24.99, 39.99];

    const toggle = document.querySelector(".toggle");
    const btn = document.querySelector(".toggle-inner");
    const arias = document.querySelectorAll(".price-cost");

    toggle.addEventListener("click", (e) => {
        btn.classList.toggle("toggle-inner-mod")

        if(btn.classList.contains("toggle-inner-mod")){
            arias.forEach(($el, i) => {
                $el.innerHTML = pricesYear[i];
            });
        } else {
            arias.forEach(($el, i) => {
                $el.innerHTML = pricesMonth[i];
            });
        }
    });
})()
