const URL = window.location.href;
const fileName = URL.split("/").pop();

async function loadNames() {
  const response = await fetch('./menu.json');
  const names = await response.json()
  let menuName = Object.keys(names)[0]
  let menu = document.getElementById("menu");
  var menuDom = ""
  let start = '<li><a href="../" class="backlink">← Start</a></li>'

  for (name in names[menuName]){
    let link = name.replace(".md", ".html")
    let label = names[menuName][name]
    let className = (fileName == link) ? "active" : "link"
    let li = `<li class="item-${className}" onClick="location.href='${link}'"><a href="${link}" class="${className}">${label}</a></li>`
    let li_spacer = `<li class="spacer">${label.replace('spacer_','')}</li>`
    if (label.includes('spacer_')){
      menuDom = menuDom+li_spacer
    } else {
      menuDom = menuDom+li
    }
   }
    if (menuName !== 'home'){
      menuDom = `<ul>${start}${menuDom}</ul>`
    } else {
      menuDom = `<ul>${menuDom}</ul>`
    }
    console.log(menuDom)
    menu.innerHTML = menuDom
}

loadNames()
