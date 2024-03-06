let $gallery = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

const buttonGroup = document.querySelector(".button-group");

const btns = buttonGroup.querySelectorAll(".button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active");
    }
    btn.classList.add("active");
    let value = btn.getAttribute("data-filter");
    console.log(value);
    $gallery.isotope({
      filter: value,
    });
  });
});
