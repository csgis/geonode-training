function createSubMenu(){
    var jumpMenu = document.getElementById("jumpMenu")
    headlines = document.querySelectorAll("h1, h2");
    let subMenu = ""
    headlines.forEach((headlineItem) => {
      let subClassName = headlineItem.nodeName == 'H1' ? 'h1' : 'h2'
      subMenu = subMenu + `<li><a href="#${headlineItem.id}" class="${subClassName}">${headlineItem.innerHTML}</a></li>`
      });
  
    jumpMenu.innerHTML = `<ul>${subMenu}</ul>`
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createSubMenu()
  });
  