// const menuIcon = document.querySelector('.menu i');
// const navList = document.querySelector('.nav-list');
// const dropdown = document.querySelector('.dropdown');
// const contactLink = document.querySelector('.nav-item:last-child'); // Select the "Contact" link

// menuIcon.addEventListener('click', () => {
//     navList.classList.toggle('show'); // Toggle a "show" class for mobile menu
// });

// contactLink.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent default link behavior
//     dropdown.classList.toggle('show');
// });

// ... more JavaScript ...


// // Add a smooth scrolling effect to the "Contact" link
// const menuIcon = document.querySelector('.menu-icon');
// const navList = document.querySelector('.nav-list');
// const navItems = document.querySelectorAll('.nav-item'); // Select all nav items

// menuIcon.addEventListener('click', () => {
//   navList.classList.toggle('show');

//   // Toggle visibility of individual nav items with a delay
//   navItems.forEach((item, index) => {
//     if (navList.classList.contains('show')) {
//       setTimeout(() => {
//         item.style.display = 'block'; // Or 'flex', 'inline', etc. as needed
//         item.style.opacity = 1; // Fade in
//       }, index * 100); // Delay each item by 100ms
//     } else {
//       item.style.opacity = 0; // Fade out
//       setTimeout(() => {
//         item.style.display = 'none';
//       }, 300); // Delay hiding to allow fade out to complete

//     }
//   });
// });


function openNav() {
    document.getElementById("myNav").style.display = "block";

}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}