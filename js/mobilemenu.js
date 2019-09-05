var headerNav  = document.getElementById("headerNav");

function openMenu(){
  if(getComputedStyle(headerNav).display == "none"){
    headerNav.style.display = "inherit";
  } else {closeMenu();}
}
function closeMenu(){
  headerNav.style.display = "none";
}