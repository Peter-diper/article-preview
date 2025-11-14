const activeBtns = document.querySelectorAll(".btn");
const shareOption = document.querySelector("#share-block");
const articleCard = document.querySelector(".article--card");

activeBtns.forEach((btn) => {
  console.log("first");
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("btn--primery")) {
      activeBtns.forEach((btn) => {
        shareOption.classList.add("active");
        btn.classList.add("btn--secondery");
        btn.classList.remove("btn--primery");
      });
    } else if (btn.classList.contains("btn--secondery")) {
      activeBtns.forEach((btn) => {
        shareOption.classList.remove("active");
        btn.classList.add("btn--primery");
        btn.classList.remove("btn--secondery");
      });
    }
  });
});
