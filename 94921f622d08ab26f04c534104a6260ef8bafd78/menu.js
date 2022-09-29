const URL = window.location.href;
const fileName = URL.split("/").pop();

async function loadNames() {
  const response = await fetch('./menu.json');
  const names = await response.json()
  let menuName = Object.keys(names)[0]
  let menu = document.getElementById("menu");
  var menuDom = "<ul>"

  for (name in names[menuName]){
    let link = name.replace(".md", ".html")
    let label = names["admin"][name]
    let className = (fileName == link) ? "active" : "link"
    let li = `<li><a href="${link}" class="${className}">${label}</a></li>`
    menuDom = menuDom+li
   }
    menuDom = `${menuDom}</ul>`
    console.log(menuDom)
    menu.innerHTML = menuDom
}

loadNames()
