'use strict';

// Pat has a business idea to sell Salmon Cookies... Pat needs a proof of concept applicatoin to calculate the number of cookies each location must make every day in order to manage supplies and schedule... The number of cookies depends on hours of operation (6a-8p) and these factors: min number of customers per hour; max number of customers per hour; avg number of cookies purchased per customer. You need a sales.html to calculate sales projections and an index.html that is colorful, readable, and informative to be public-facing.

// ? what are we going to display?
// Store Locations
// TODO figure out what info about each store we need to show:
// * name
// * hours with a function - 6am to 8pm
// * min customers
// * max customers
// * avg customers per hour - use a method to generate random number Math.random()
// * avg cookies per customer/sale


// ********** GLOBALS **************

// !!! HELPFUL FOR LAB
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let storeSection = document.getElementById('store-profiles');

console.dir(storeSection);


// ********** HELPER FUNCTIONS/UTILITES *********

// function randomCustomerCalc(min,max){ // random number of customers per hour
//   // got this from MDN docs
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// ********** OBJECT LITERALS **********

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  randomCustomer: [],
  dailyTotal: 0,
  getCookies: function(min,max){
    // calculation
    // this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
    for(let i = 0; i < hours.length; i++){
      let customer = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(customer);
      console.log(customer);
    }
  },

  calcTotalCookiePerHour: function(){
    this.getCookies(this.minCust, this.maxCust);
    // randomCustomerCalc();
    for(let i = 0; i < hours.length; i++){
      let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
      this.cookiesBought.push(totalCookie);
      console.log(this.cookiesBought);
      this.dailyTotal += totalCookie;
    }
    console.log(this.dailyTotal, `this is the total`)

  },

  render: function(){

    this.calcTotalCookiePerHour();


// ***** DOM MANIPULATION *****

    //step 2 create element
    let articleElem = document.createElement('article');

    //step 3 add it to the dom
    storeSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    console.log(h2Elem);
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      console.log(this.cookieNum);
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let totalItem = document.createElement('li');
    console.log();
    totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElem.appendChild(totalItem);

    let pElem = document.createElement('p');
    pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
    articleElem.appendChild(pElem);
  }
};



let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  randomCustomer: [],
  dailyTotal: 0,
  getCookies: function(min,max){
    // calculation
    // this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
    for(let i = 0; i < hours.length; i++){
      let customer = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(customer);
      console.log(customer);
    }
  },

  calcTotalCookiePerHour: function(){
    this.getCookies(this.minCust, this.maxCust);
    // randomCustomerCalc();
    for(let i = 0; i < hours.length; i++){
      let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
      this.cookiesBought.push(totalCookie);
      console.log(this.cookiesBought);
      this.dailyTotal += totalCookie;
    }
    console.log(this.dailyTotal, `this is the total`)

  },

  render: function(){

    this.calcTotalCookiePerHour();


// ***** DOM MANIPULATION *****

    //step 2 create element
    let articleElem = document.createElement('article');

    //step 3 add it to the dom
    storeSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    console.log(h2Elem);
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      console.log(this.cookieNum);
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let totalItem = document.createElement('li');
    console.log();
    totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElem.appendChild(totalItem);

    let pElem = document.createElement('p');
    pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
    articleElem.appendChild(pElem);
  }
};




let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  randomCustomer: [],
  dailyTotal: 0,
  getCookies: function(min,max){
    // calculation
    // this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
    for(let i = 0; i < hours.length; i++){
      let customer = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(customer);
      console.log(customer);
    }
  },

  calcTotalCookiePerHour: function(){
    this.getCookies(this.minCust, this.maxCust);
    // randomCustomerCalc();
    for(let i = 0; i < hours.length; i++){
      let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
      this.cookiesBought.push(totalCookie);
      console.log(this.cookiesBought);
      this.dailyTotal += totalCookie;
    }
    console.log(this.dailyTotal, `this is the total`)

  },

  render: function(){

    this.calcTotalCookiePerHour();


// ***** DOM MANIPULATION *****

    //step 2 create element
    let articleElem = document.createElement('article');

    //step 3 add it to the dom
    storeSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    console.log(h2Elem);
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      console.log(this.cookieNum);
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let totalItem = document.createElement('li');
    console.log();
    totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElem.appendChild(totalItem);

    let pElem = document.createElement('p');
    pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
    articleElem.appendChild(pElem);
  }
};





let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  randomCustomer: [],
  dailyTotal: 0,
  getCookies: function(min,max){
    // calculation
    // this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
    for(let i = 0; i < hours.length; i++){
      let customer = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(customer);
      console.log(customer);
    }
  },

  calcTotalCookiePerHour: function(){
    this.getCookies(this.minCust, this.maxCust);
    // randomCustomerCalc();
    for(let i = 0; i < hours.length; i++){
      let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
      this.cookiesBought.push(totalCookie);
      console.log(this.cookiesBought);
      this.dailyTotal += totalCookie;
    }
    console.log(this.dailyTotal, `this is the total`)

  },

  render: function(){

    this.calcTotalCookiePerHour();


// ***** DOM MANIPULATION *****

    //step 2 create element
    let articleElem = document.createElement('article');

    //step 3 add it to the dom
    storeSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    console.log(h2Elem);
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      console.log(this.cookieNum);
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let totalItem = document.createElement('li');
    console.log();
    totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElem.appendChild(totalItem);

    let pElem = document.createElement('p');
    pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
    articleElem.appendChild(pElem);
  }
};







let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  randomCustomer: [],
  dailyTotal: 0,
  getCookies: function(min,max){
    // calculation
    // this.cookieNum = `${randomCustomerCalc(23-65)} cookies`;
    for(let i = 0; i < hours.length; i++){
      let customer = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(customer);
      console.log(customer);
    }
  },

  calcTotalCookiePerHour: function(){
    this.getCookies(this.minCust, this.maxCust);
    // randomCustomerCalc();
    for(let i = 0; i < hours.length; i++){
      let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookieBought);
      this.cookiesBought.push(totalCookie);
      console.log(this.cookiesBought);
      this.dailyTotal += totalCookie;
    }
    console.log(this.dailyTotal, `this is the total`)

  },

  render: function(){

    this.calcTotalCookiePerHour();


// ***** DOM MANIPULATION *****

    //step 2 create element
    let articleElem = document.createElement('article');

    //step 3 add it to the dom
    storeSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    console.log(h2Elem);
    articleElem.appendChild(h2Elem);


    // ! USEFUL FOR LAB
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      console.log(this.cookieNum);
      liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let totalItem = document.createElement('li');
    console.log();
    totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElem.appendChild(totalItem);

    let pElem = document.createElement('p');
    pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
    articleElem.appendChild(pElem);
  }
};



// ********** EXECUTABLE CODE **********

seattle.calcTotalCookiePerHour();
seattle.render();
console.log(seattle);

tokyo.calcTotalCookiePerHour();
tokyo.render();
console.log(tokyo);

dubai.calcTotalCookiePerHour();
dubai.render();
console.log(dubai);

paris.calcTotalCookiePerHour();
paris.render();
console.log(paris);

lima.calcTotalCookiePerHour();
lima.render();
console.log(lima);


