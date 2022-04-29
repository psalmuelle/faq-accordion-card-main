"strict mode";
const arrow = document.querySelectorAll(".arrow");
const figCaption = document.querySelectorAll("figcaption");
const info = document.querySelectorAll(".info");
const faq = document.querySelectorAll(".faq");

function accordion(ind) {
  console.log(ind);
  if (faq[ind].classList.contains("active")) {
    arrow.forEach((_arr, inde) => {
      arrow.item(inde).classList.remove("arrow-down");
    });
    info.forEach((_inf, inde) => {
      info.item(inde).classList.remove("open");
    });
    figCaption.forEach((_fig, inde) => {
      figCaption.item(inde).classList.remove("open-bold");
    });

    arrow.forEach((_arr) => {
      arrow.item(ind).classList.add("arrow-down");
    });
    info.forEach((_inf) => {
      info.item(ind).classList.add("open");
    });
    figCaption.forEach((_fig) => {
      figCaption.item(ind).classList.add("open-bold");
      figCaption.item(ind).classList.add("open-bold");
    });
  }
}

faq.forEach((faqt, index) => {
  const all = [index];

  faqt.addEventListener("click", (ev) => {
    if (!faqt[1]) {
      faqt.classList.add("active");
      accordion(index);
    }
  })
})