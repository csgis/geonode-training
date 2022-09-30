function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
};


function createSubMenu(){
    var jumpMenu = document.getElementById("jumpMenu")
    headlines = document.querySelectorAll("h1, h2, h3");
    let subMenu = ""
    headlines.forEach((headlineItem) => {
      let subClassName = headlineItem.nodeName == 'H1' ? 'first' : (headlineItem.nodeName == 'H2') ? 'second' : 'third'
      let jumpName = truncate(headlineItem.innerHTML, 40)
      subMenu = subMenu + `<li><a href="#${headlineItem.id}" class="${subClassName}">${jumpName}</a></li>`
      });
  
    jumpMenu.innerHTML = `<ul>${subMenu}</ul>`
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createSubMenu()
  });
  