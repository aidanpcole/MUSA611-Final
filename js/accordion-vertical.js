(function () {
  /*Set the vars to be used, the last one will be added to item's class list*/
  const headings = document.querySelectorAll(".accordion-vert");
  const triggers = [];
  const copyOpenClass = "accordion-vert--open";

  headings.forEach((h,i) => {
    /*this fn determines whether the click will close or open the accordion*/
    let btn = h.querySelector("button"); /*this is not defined in css, just added to html*/
    triggers.push(btn);
    let target = h.parentElement; /*i think thisis the content insdie the accordion*/
    btn.onclick = () => {
      let expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeItem(target, btn);
      } else {
        openItem(target, btn);
      }
    };
  });

 function closeItem(target, btn) {
   let sub = document.querySelector(".side-bar-col")
   btn.setAttribute("aria-expanded", false);
   target.classList.remove(copyOpenClass);
   target.style.maxWidth = 0;
   sub.style.maxWidth = 0;

 }
 function openItem(target, btn){
   let sub = document.querySelector(".side-bar-col")
   btn.setAttribute("aria-expanded", true);
   target.classList.add(copyOpenClass);
   target.style.maxWidth = target.scrollHeight + "px";
   target.style.padding = target.padding;
   sub.style.maxWidth = sub.scrollHeight + "px";
 }

})();