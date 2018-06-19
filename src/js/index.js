hello()
polyfillNearestElement.bind(this)()
applySelectorHandler()



function hello() {
  console.log(`  Hello! Thank you for the taking an interest in my code!
  here's not a lot going on here at the moment.
  
  To talk about something more exciting e-mail at
  vaughn.aurora@gmail.com

  or add me on linkedin

  linkedin.com/in/aurora-vaughn

  See you soon! 
`)
}
function applySelectorHandler() {
  window.selected = {}
  const skills = document.querySelectorAll('.skills')
  skills.forEach(skill => {
    skill.addEventListener("click", clickHandlerSelect)
  })
}



function clickHandlerSelect(e) {
  const container = e.target.closest(".devicon-container")
  console.log('before: ', window.selected)
  console.log(container.dataset.skill, window.selected[container.dataset.skill])
  if (!window.selected[container.dataset.skill]) {
    window.selected[container.dataset.skill] = container.dataset.skill
    container.style.backgroundColor = "#47ec31b9"
    container.style.border = "1px solid #e4c2e4d5"
    container.style.backgroundColor
  } else {
    window.selected[container.dataset.skill] = false
    container.style.backgroundColor = "#e4c2e4bd"
    container.style.border = "none"
  }
  console.log(container)
  console.log(window.selected[container.dataset.skill])
}





function polyfillNearestElement() {
  if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;

  if (!Element.prototype.closest)
    Element.prototype.closest = function (s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
}