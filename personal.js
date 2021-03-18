document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".nav-link").forEach((li) => {
    li.addEventListener("click", () => {
      document.querySelectorAll(".section").forEach((section) => {
        if (section.className.includes(li.getAttribute("data-target"))) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
  console.log("meow");

const skillFlip = {
  0: 'front-end',
  1: 'back-end'
}

  document.querySelector('#skills-select').addEventListener('change', (event) =>{
    document.querySelector(`#${event.target.value}.skills`).classList = "skills show"
    let opposite = !parseInt(Object.keys(skillFlip).find(key => skillFlip[key] === event.target.value));
    document.querySelector(`#${skillFlip[+ opposite]}.skills`).classList = "skills"
  })
});
