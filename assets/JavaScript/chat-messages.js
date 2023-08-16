const ratingItemsList = document.querySelectorAll(".rating_item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
  item.addEventListener("click", () => {
    const {itemValue} = item.dataset
    item.parentNode.dataset.totalValue = itemValue;
  })
);

const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const btnTicket = document.querySelector(".btn_resolved-ticket");

btnTicket.addEventListener("click", function () {
  modal.classList.add("open");
});

close.addEventListener("click", function () {
  modal.classList.remove("open");
});
