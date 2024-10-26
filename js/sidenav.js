let isOpen = false; 
let asideOffset = "150px"

function openNav() {
  document.getElementById("mySidenav").style.width = asideOffset;
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = 'auto';
}

function toggleNav() {
  if (isOpen) {
      closeNav();
  } else {
      openNav();
  }
  isOpen = !isOpen;
}