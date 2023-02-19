var modals = [  document.getElementById("myModal1"),  document.getElementById("myModal2"),  document.getElementById("myModal3"),  document.getElementById("myModal4"),  document.getElementById("myModal6")];

var modalBtns = [  document.getElementById("modalBtn1"),  document.getElementById("modalBtn2"),  document.getElementById("modalBtn3"),  document.getElementById("modalBtn4"),  document.getElementById("modalBtn6")];

var spans = [  document.getElementsByClassName("closeBtn1")[0],
  document.getElementsByClassName("closeBtn2")[0],
  document.getElementsByClassName("closeBtn3")[0],
  document.getElementsByClassName("closeBtn4")[0],
  // document.getElementsByClassName("closeBtn5")[0],
  document.getElementsByClassName("closeBtn6")[0]
];

var overlays = [  document.getElementById("modalOverlay1"),  document.getElementById("modalOverlay2"),  document.getElementById("modalOverlay3"),  document.getElementById("modalOverlay4"),  document.getElementById("modalOverlay6")];


for (var i = 0; i < modals.length; i++) {
  modalBtns[i].addEventListener("click", createOpenModalHandler(modals[i], overlays[i]));
  spans[i].addEventListener("click", createCloseModalHandler(modals[i], overlays[i]));
}

function createOpenModalHandler(modal, overlay) {
  return function() {
    modal.style.display = "block";
    overlay.style.display = "block";
    localStorage.setItem("modal", "open");
  };
}

function createCloseModalHandler(modal, overlay) {
  return function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    localStorage.removeItem("modal");
  };
}


window.addEventListener("click", function(event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      overlays[i].style.display = "none";
      localStorage.removeItem("modal");
      break;
    }
  }
});


if (localStorage.getItem("modal") === "open") {
  for (var i = 0; i < modals.length; i++) {
    modals[i].style.display = "block";
    overlays[i].style.display = "block";
  }
}


function createOpenModalHandler(modal, overlay) {
  return function() {
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // disable scrolling
    localStorage.setItem("modal", "open");
  };
}


function createCloseModalHandler(modal, overlay) {
  return function() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // re-enable scrolling
    localStorage.removeItem("modal");
  };
}

window.addEventListener("click", function(event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      overlays[i].style.display = "none";
      localStorage.removeItem("modal");
      document.body.style.overflow = "auto"; // re-enable scrolling
      break;
    }
  }
});
