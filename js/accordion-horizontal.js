/*Trying out this accordion function but trying to simplify it*/

(function () {
  /*Set the vars to be used, the last one will be added to item's class list*/
  const headings = document.querySelectorAll(".accordion-heading");
  const triggers = [];
  const accordionContents = document.querySelectorAll(".accordion-copy");
  const copyOpenClass = "accordion-copy--open";

  headings.forEach((h,i) => {
    /*this fn determines whether the click will close or open the accordion*/
    let btn = h.querySelector("button"); /*this is not defined in css, just added to html*/
    triggers.push(btn);
    let target = h.nextElementSibling; /*i think thisis the content insdie the accordion*/
    btn.onclick = () => {
      let expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeItem(target, btn);
      } else {
        openItem(target, btn);
      }
    };
  });
/*
  function closeAllExpandedItems() {
    //this only for mutliselect, wich I don't think we'll need//
    const expandedTriggers = triggers.filter(
      (t) => t.getAttribute("aria-expanded") === "true" //this find all "opened"//
    );
    const expandedCopy = Array.from(accordionContents).filter((c) =>
    c.classList.calue.includes(copyOpenClass) // copyOpenclass is "accordion__copy--open"//
  ); // it does this so that we know what is already expanded //
  expandedTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", false); //document that we're closing this //
  });
  expandedCopy.forEach((copy) => {
    copy.classList.remove(copyOpenClass);
    copy.style.maxHeight = 0; //squish the content down //
    copy.style.padding = "0 1.5rem 0 1.5rem";
  });
}
*/
 function closeItem(target, btn) {
  /*if (!multiselect.checked) {
    closeAllExpandedItems();
  }*/
   btn.setAttribute("aria-expanded", false);
   target.classList.remove(copyOpenClass);
   target.style.maxHeight = 0;
   target.style.padding = "0 1.5rem 0 1.5rem";
 }
 function openItem(target, btn){
   btn.setAttribute("aria-expanded", true);
   target.classList.add(copyOpenClass);
   target.style.maxHeight = target.scrollHeight + "px";
   target.style.padding = "1rem 1.5rem 2rem 1.5rem";
 }

})();