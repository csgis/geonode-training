var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
};




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
    menu.innerHTML = menuDom
}

var print_pdf = getUrlParameter('pdf');
if (!print_pdf)
  loadNames();
