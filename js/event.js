
// Get the modals
var modals = document.querySelectorAll('.modal');

// Get the buttons that open the modal
var modalBtns = document.querySelectorAll('.modalBtn');

// Get the <span> element that closes the modal
var spans = document.querySelectorAll('.closeBtn');

// Get the background overlay
var overlays = document.querySelectorAll('.modalOverlay');

// Loop through each modalBtn and assign click event
modalBtns.forEach(function(modalBtn, index) {
  modalBtn.addEventListener('click', function() {
    modals[index].style.display = 'block';
    overlays[index].style.display = 'block';
    localStorage.setItem('modal', 'open');
  });
});

// Loop through each span and assign click event
spans.forEach(function(span, index) {
  span.addEventListener('click', function() {
    modals[index].style.display = 'none';
    overlays[index].style.display = 'none';
    localStorage.removeItem('modal');
  });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modals.forEach(function(modal, index) {
    if (event.target == modal) {
      modal.style.display = 'none';
      overlays[index].style.display = 'none';
      localStorage.removeItem('modal');
    }
  });
};

 $(document).ready(function() {
    $('.closeButton').click(function() {
      $('.myModal').modal('hide');
    });
  });