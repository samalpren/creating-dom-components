// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

let newNameHeader = document.querySelector(".article__header");

newNameHeader.textContent ="Welcome to Sam's blog";

console.log(newNameHeader);


// const sectionEl = document.querySelector(".article__section")


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let allSectionHeaders = document.querySelectorAll(".article__header")
for (let i =0; i < allSectionHeaders.length; i++)
  {
    allSectionHeaders[i].classList.add("important");
  }

console.log(allSectionHeaders);

let sectionDashed = document.querySelector(".dashed");
sectionDashed.classList.remove("dashed");

let articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod");