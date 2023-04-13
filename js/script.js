"use strict"

// get the .items classed element

let items = document.querySelector(".items");

// get the.prev classed element from html

const prev = document.querySelector(".prev");

// get the.next classed element from html

const next = document.querySelector(".next");

// create an array containing objects with the images and relative informations inside

// const images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp",];

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// INSERT DINAMICALLY in HTML the .item classed elements that contain the images

for ( let i = 0; i < images.length; i++ ) {

    // create element

    let item = document.createElement("div");

    // the item element will contain ...

    item.innerHTML = `
        <img src="./images/${images[i]}" alt="superheroes">
    `;

    console.log(item);

    // append the item element to items

    items.append(item);

    // give the item element the class ".item"

    item.classList.add('item');
}

// add class .active to the first .item classed element

document.querySelector(".item").classList.add("active");

// add class .first to the first .item classed element

document.querySelector(".item").classList.add("first");

// add class .last to the last .item classed element

const elementsItem = document.querySelectorAll(".item");

const lastItem = elementsItem[elementsItem.length - 1];

lastItem.classList.add("last");




// ADD EVENT LISTENER

next.addEventListener("click", function() {

    // get the first html element that contains an img element: the .active classed one

    let activeItem = document.querySelector(".item.active");

    // get the element placed immediately after the one with class .active

    let itemToActive = activeItem.nextElementSibling;

    // make a cycle out of the sliding process with "next"

    if ( activeItem.classList.contains("last") ) {
        itemToActive = document.querySelector(".item.first");
    }

    // remove class .active

    activeItem.classList.remove("active");

    // add .active class to the following img element

    itemToActive.classList.add("active");

})

prev.addEventListener("click", function() {

     // get the first html element that contains an img element: the .active classed one

     let activeItem = document.querySelector(".item.active");

     // get the element placed immediately before the one with class .active

    let itemToActive = activeItem.previousElementSibling;

    // make a cycle out of the sliding process with "prev"


    if ( activeItem.classList.contains("first") ) {
        itemToActive = document.querySelector(".item.last");
    }

    // remove class .active

    activeItem.classList.remove("active");

    // add .active class to the following img element

    itemToActive.classList.add("active");

})