function createSubMenu(){
    var jumpMenu = document.getElementById("jumpMenu")
    headlines = document.querySelectorAll("h1, h2, h3");
    let subMenu = ""
    headlines.forEach((headlineItem) => {
      let subClassName = headlineItem.nodeName == 'H1' ? 'first' : (headlineItem.nodeName == 'H2') ? 'second' : 'third'
      subMenu = subMenu + `<li><a href="#${headlineItem.id}" class="${subClassName}">${headlineItem.innerHTML}</a></li>`
      });
  
    jumpMenu.innerHTML = `<ul>${subMenu}</ul>`
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createSubMenu()
  });
  