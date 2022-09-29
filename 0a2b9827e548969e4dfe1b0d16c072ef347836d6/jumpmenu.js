function createSubMenu(){
    var jumpMenu = document.getElementById("jumpMenu")
    headlines = document.querySelectorAll("h1, h2");
    let subMenu = ""
    headlines.forEach((headlineItem) => {
      subMenu = subMenu + `<li><a href="#${headlineItem.id}">${headlineItem.innerHTML}</a></li>`
    });
  
    jumpMenu.innerHTML = `<ul>${subMenu}</ul>`
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createSubMenu()
  });
  