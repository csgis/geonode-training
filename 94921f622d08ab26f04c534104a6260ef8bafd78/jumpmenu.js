function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
};


function createSubMenu(){
    var jumpMenu = document.getElementById("jumpMenu")
    document.querySelectorAll("h1")[0].remove();
    headlines = document.querySelectorAll("h1, h2, h3");
    let subMenu = ""
    headlines.forEach((headlineItem) => {
      let subClassName = headlineItem.nodeName == 'H1' ? 'first' : (headlineItem.nodeName == 'H2') ? 'second' : 'third'
      let jumpName = truncate(headlineItem.innerText, 26)
      subMenu = subMenu + `<li><a href="#${headlineItem.id}" class="${subClassName}">${jumpName}</a></li>`
      });
  
    jumpMenu.innerHTML = `<ul>${subMenu}</ul>`
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    
    // Create the submenu
    createSubMenu()

    // Highlight active

    const jumpLinks = document.querySelectorAll(".first, .second, .third");

init = 0;

const inViewport = (entries, observer) => {
    
    jumpLinks.forEach(JL => {
        JL.classList.remove("highlight_jumpling");
      });

    entries.forEach(entry => {
      JL_target = document.querySelector('[href="#' + entry.target.id + '"]');
      if (init == 1)
        JL_target.classList.add("highlight_jumpling");
    });

    init = 1;
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll("h1, h2, h3");
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });


    // Create Captions -- Refactor in own file

    var images = document.querySelectorAll("img");

    images.forEach(function(el){
              var title = el.alt;
              var caption = document.createElement("small")
              caption.setAttribute("class", "caption");
              caption.innerText = title 
              if (title !== undefined)
                el.parentNode.insertBefore(caption, el.nextSibling);
          }); 

  });
  

