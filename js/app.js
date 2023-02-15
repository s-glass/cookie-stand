'use strict';

// ********** GLOBALS **************

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let saleTable = document.getElementById('sale-table');

let storeObjects = []; // store all of my store objects as an array

// console.dir(storeSection);


//********HELPER FUNCTIONS *******

//header and footer row need to stand alone, not be in prototype
//create one row to poulate the hours
//create one row to populate totals 
//footer will need a nested loop to calculate totals by hour for all stores (vs. by day)


// **********CONSTRUCTOR FUNCTION ****************

function Store(name, minCust, maxCust, avgCookiesBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.cookiesBought = [];
  this.randomCustomer = [];
  this.dailyTotal = 0;
}

// *************PROTOTYPE METHODS*************

Store.prototype.getCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let customer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.randomCustomer.push(customer);
    console.log('the customers per hour is: ' + customer);
  }
};

Store.prototype.calcTotalCookiePerHOur = function () {
  this.getCookies(this.minCust, this.maxCust);
  for (let i = 0; i < hours.length; i++) {
    let totalCookie = Math.round(this.randomCustomer[i] * this.avgCookiesBought);
    console.log (typeof(this.randomCustomer[i]));
    console.log (typeof(this.avgCookieBought));
    this.cookiesBought.push(totalCookie);
    console.log('this is the number of cookies bought per hour' + this.cookiesBought);
    this.dailyTotal += totalCookie;
  }
};

Store.prototype.render = function () {

  // const containerElem = document.getElementById('store-profiles'); // I have this in Globals also, do I need it here?

  // const articleElem = document.createElement('article');
  // containerElem.appendChild(articleElem);

  this.calcTotalCookiePerHOur();

  //   let articleElem = document.createElement('article'); // row or tr - attaches to tables
  //   storeSection.appendChild(articleElem); // render to table instead of this thing - store section? or articleElem? 

  // //(helper function - header)

  //   for(let i = 0; i < hours.length; i++){
  //     let headerElem = document.createElement('header'); // td cells attach to row
  //     console.log(this.cookieNum);
  //     headerElem.textContent = `${hours[i]}`;
  //     headerElem.textContent = `Total: ${this.dailyTotal} cookies`;
  //     headerElem.appendChild(headerElem);
  //   }
  // // end header attempt

  //   let h2Elem = document.createElement('h2'); // th (name) (cell) attach to rows
  //   h2Elem.textContent = this.name; //h2 text content value assigned
  //   console.log(h2Elem);
  //   articleElem.appendChild(h2Elem);


  //   let ulElem = document.createElement('ul'); // tr (row), attach to table
  //   articleElem.appendChild(ulElem);

  //   for(let i = 0; i < hours.length; i++){
  //     let liElem = document.createElement('li'); // td cells attach to row
  //     console.log(this.cookieNum);
  //     liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
  //     ulElem.appendChild(liElem);
  //   }

  //   let totalItem = document.createElement('li'); // td cells attach to row
  //   console.log();
  //   totalItem.textContent = `Total: ${this.dailyTotal} cookies`;
  //   ulElem.appendChild(totalItem);

  //   let pElem = document.createElement('p');
  //   pElem.alt = `${this.name} has an average of ${this.customerNum} per hour.`;
  //   articleElem.appendChild(pElem);



  // TABLE RENDERING - table, rows, table cells

  // header row
  let headerRow = document.createElement('tr');
  saleTable.appendChild(headerRow);

  //header cell
  let headerCell = document.createElement('th');
  headerCell.textContent = this.name;
  headerRow.appendChild(headerCell);

  // filling in the table with the prototype data

  for (let i = 0; i < hours.length; i++) {
    let cookieData = document.createElement('td');
    cookieData.textContent = this.cookiesBought[i];
    headerRow.appendChild(cookieData);
  }

  //   for(let i = 0; i < hours.length; i++){
  //     let liElem = document.createElement('li'); // td cells attach to row
  //     console.log(this.cookieNum);
  //     liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
  //     ulElem.appendChild(liElem);

  //data row

  // let row1 = document.createElement('tr');
  // headerRow.appendChild(row1);
  // row1.textContent = `${hours[i]}`;

  //data cell

  // let timeDataCell = document.createElement('td')
  // row1.appendChild(timeDataCell);
  // timeDataCell.textContent = this.

  // let row2 = document.createElement('tr');
  // table.appendChild(row2);

  // //data cell
  // let td1Elem = document.createElement('td');
  // td1Elem.textContent = this.name;
  // row2.appendChild(td1Elem);

  // let td2Elem = document.createElement('td');
  // td2Elem.textContent = this.isGoodWithDogs;
  // row2.appendChild(td2Elem);

  // let td3Elem = document.createElement('td');
  // td3Elem.textContent = this.isGoodWithKids;
  // row2.appendChild(td3Elem);
}

function header() {
  let headerRow = document.createElement('tr');
  headerRow.textContent = 'location';
  saleTable.appendChild(headerRow);
  for (let i = 0; i < hours.length; i++) {
    let headerTime = document.createElement('th');
    headerTime.textContent = hours[i];
    headerRow.appendChild(headerTime);
  }
}

// ********EXECUTABLE CODE************

let seattle = new Store('Seattle', '23', '65', '6.3');
let tokyo = new Store('Tokyo', '3', '24', '1.2');
let dubai = new Store('Dubai', '11', '28', '3.7');
let paris = new Store('Paris', '20', '38', '2.3');
let lima = new Store('Lima', '2', '16', '4.6');


//push new stores to the array

storeObjects.push(seattle, tokyo, dubai, paris, lima);
console.log(storeObjects);

// helper function to call all needed methods

header();

function renderAll() {
  for (let i = 0; i < storeObjects.length; i++) {
    storeObjects[i].getCookies();
    storeObjects[i].render();
  }
}

renderAll();

//render needs to live in the prototype if you have just one for loop, every time you have DOM, you have the 'render' that will create its row for the table.