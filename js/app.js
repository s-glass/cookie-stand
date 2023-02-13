'use strict';

// Pat has a business idea to sell Salmon Cookies... Pat needs a proof of concept applicatoin to calculate the number of cookies each location must make every day in order to manage supplies and schedule... The number of cookies depends on hours of operation (6a-8p) and these factors: min number of customers per hour; max number of customers per hour; avg number of cookies purchased per customer. You need a sales.html to calculate sales projections and an index.html that is colorful, readable, and informative to be public-facing.

// ? what are we going to display?
// Shop Locations
// TODO figure out what info about each kitten we need to show:
// * name
// * hours with a function - 6am to 8pm
// * min customers
// * max customers
// * avg customers per hour - use a method to generate random number Math.random()
// * avg cookies per customer/sale


// !!! HELPFUL FOR LAB
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// !!! HELPFUL FOR START OF LAB !!!!!

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  generateCookies: function(){
    // calculation
  }
};

// ********** GLOBALS **************

let storeSection = document.getElementById('store-profiles');

console.dir(storeSection);

// ********** HELPER FUNCTIONS/UTILITES *********

function randomCust(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ********** OBJECT LITERALS **********


let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['wet food', 'cat nip', 'mice toys'],
  isGoodWithCats: true,
  isGoodWithDogs: true,
  isGoodWithKids: true,
  photo: 'img/frankie.jpeg',
  getAge: function(){
    this.age = `${randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = this.age;
    articleElem.appendChild(pElem);


    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};


let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['dry food', 'treats', 'fish toys'],
  isGoodWithCats: true,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/jumper.jpeg',
  randomAge: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = `${this.randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = this.age;
    articleElem.appendChild(pElem);


    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};

let serena = {
  name: 'Serena',
  age: 0,
  interests: ['mice', 'lasers', 'hunting'],
  isGoodWithCats: false,
  isGoodWithDogs: false,
  isGoodWithKids: false,
  photo: 'img/serena.jpeg',
  randomAge: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAge: function(){
    this.age = `${this.randomAge(3,12)} months`;
  },
  render: function(){
    // ***** DOM MANIPULATION *****

    // STEP 2: Create element
    let articleElem = document.createElement('article');
    // STEP 3: Add it to the dom
    kittenSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.interests.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = this.interests[i];
      ulElem.appendChild(liElem);
    }

    let pElem = document.createElement('p');
    pElem.textContent = this.age;
    articleElem.appendChild(pElem);


    let imgElem = document.createElement('img');
    imgElem.src = this.photo;
    imgElem.alt = `${this.name} is an adorable ${this.age} month old kitten.`;
    articleElem.appendChild(imgElem);
  }
};


// ********** EXECUTABLE CODE **********
frankie.getAge();
frankie.render();
console.log(frankie);

jumper.getAge();
jumper.render();
console.log(jumper);

serena.getAge();
serena.render();
console.log(serena);