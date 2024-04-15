$(document).ready(function () {
    var navbar = document.getElementById("thenavbar");
    var sticky = navbar.offsetTop;
});

// function scrollFunction() {
//     //const element = document.getElementById("home");
//     //const element2 = document.getElementById("idk");
//     //var homeoffset = 60;
//     //scroll({top: (element.offsetTop - homeoffset), left: 0, behavior: 'smooth'});
//     //element.scrollIntoView({top: (element.offsetTop - homeoffset), left: 0, behavior: 'smooth'});

//     var top = document.getElementById("home").offsetTop-document.getElementById("thenavbar").offsetHeight-10;
//     window.scrollTo(0, top);
//   }

function scrollFunction() {
  const navbarHeight = document.getElementById("thenavbar").offsetHeight;
  const section = document.getElementById("home");

  // Calculate the top offset of the section accounting for navbar height
  const sectionTop = section.offsetTop - navbarHeight - 10; // Adjust as needed

  // Scroll to the section with custom behavior
  section.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Scroll to the top of the element
      inline: 'nearest' // Scroll to the nearest edge of the element
  });

  // Adjust scroll position to account for navbar covering top of section
  window.scrollBy(0, -navbarHeight);
}

  function scrollFunction2() {
    const element = document.getElementById("about");
    element.scrollIntoView(true, { behavior: 'smooth'});
  }
  console.log("Bruh");
  function scrollFunction3() {
    const element = document.getElementById("events");
    element.scrollIntoView(true, { behavior: 'smooth'});
  }


console.log("Script is executing...");
document.onscroll = function() {stickyNavbar()};


function stickyNavbar() {
    console.log("Scrolling...");
  if (document.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}