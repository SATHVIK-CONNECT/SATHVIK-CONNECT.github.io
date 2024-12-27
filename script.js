function show(page) {
  document.querySelectorAll(".div").forEach((div) => {
    div.style.display = "none";
    document.querySelectorAll(".card-details").forEach((carddetail) => {
      carddetail.style.display = "none";
    });
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "block";
    });
  });

  document.querySelector(`#${page}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function () {
      show(this.dataset.page);
    };
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseover", (event) => {
      document.querySelectorAll(".cardinner").forEach((cardInner) => {
        cardInner.classList.toggle("class");
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseout", (event) => {
      document.querySelectorAll(".cardinner").forEach((cardInner) => {
        cardInner.classList.toggle("class");
      });
    });
  });
});

function showcard(card) {
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "none";
  });
  document.querySelector(`#${card}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      showcard(this.dataset.page);
    });
  });
});

function achivcard(card) {
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "none";
  });
  document.querySelector(`#${card}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      achivcard(this.dataset.page);
    });
  });
});
