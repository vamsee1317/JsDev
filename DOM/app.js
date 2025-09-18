// DOM Selectors : 

// DOM Selectors are methods provided by the Document Object Model (DOM) API that allow you to select and manipulate HTML elements in a web page using JavaScript. These selectors enable developers to access specific elements or groups of elements based on their attributes, such as ID, class, tag name, or other criteria.


// Common DOM Selectors:


// 1. getElementsByTagName(tagName):
//    - Selects all elements with the specified tag name.
//    - Returns an HTMLCollection of matching elements.

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // HTMLCollection of all <p> elements
paragraphs[0].style.color = 'blue'; // Change color of the first paragraph

// 2. getElementsByClassName(className):
//    - Selects all elements with the specified class name.
//    - Returns an HTMLCollection of matching elements.

const specialParagraphs = document.getElementsByClassName('post-meta');
console.log(specialParagraphs); // HTMLCollection of all elements with class "post-meta"

// 3. getElementById(id):
//    - Selects a single element with the specified ID.
//    - Returns the element or null if not found.

const mainHeader = document.getElementById('main-header');
console.log(mainHeader);

mainHeader.style.backgroundColor = '#333'; // Change background color of the header

const navbar =    ` <nav>
        <a href="index.html" class="nav-link"><i class="fa-solid fa-user"></i></a>
        <a href="about.html" class="nav-link"><i class="fa-solid fa-info"></i></a>
        <a href="contact.html" class="nav-link"><i class="fa-solid fa-envelope"></i></a>
    </nav>`

mainHeader.innerHTML += navbar; // Add navigation bar to the header

// 4. querySelector(selector):
//    - Selects the first element that matches the specified CSS selector.
//    - Returns the element or null if not found.

const firstPost = document.querySelector('.post');
console.log(firstPost); // First element with class "post"

firstPost.style.border = '2px solid green'; // Add border to the first post

// 5. querySelectorAll(selector):
//    - Selects all elements that match the specified CSS selector.
//    - Returns a NodeList of matching elements.

const allPosts = document.querySelectorAll('.post');
console.log(allPosts); // NodeList of all elements with class "post"


// Navbar List
const navList = document.getElementById('navList');
// Navbar Links

const navItems = [
    { name: 'Home', link: 'index.html', icon: 'fa-house' },
    { name: 'About', link: 'about.html', icon: 'fa-info' },
    { name: 'Contact', link: 'contact.html', icon: 'fa-envelope' },
    { name: 'Blog', link: 'blog.html', icon: 'fa-blog' },
];
navItems.push({ name: 'Services', link: 'services.html', icon: 'fa-concierge-bell' }, { name: 'Portfolio', link: 'portfolio.html', icon: 'fa-briefcase' });

navItems.forEach((item)=>{
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.style.color = 'black';
    li.innerHTML = `<a href="${item.link}" class="nav-link" style="color:black"><i class="fa-solid ${item.icon}"></i> ${item.name}</a>`;
    navList.appendChild(li);
});

