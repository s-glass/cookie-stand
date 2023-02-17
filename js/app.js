'use strict';

// ********** GLOBALS **************

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let saleTable = document.getElementById('sale-table');

let myForm = document.getElementById('store-form');

let storeObjects = []; // store all of my store objects as an array


// **********CONSTRUCTOR FUNCTION ****************

function Store(name, minCust, maxCust, avgCookiesBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.cookiesBought = [];
  this.randomCustomer = [];
  this.dailyTotal = 0;

  storeObjects.push(this);
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
    console.log(typeof (this.randomCustomer[i]));
    console.log(typeof (this.avgCookieBought));
    this.cookiesBought.push(totalCookie);
    console.log('this is the number of cookies bought per hour' + this.cookiesBought);
    this.dailyTotal += totalCookie;
    //for(let j = 0; j< this.avgCookieBought.length; j++){
    // sum += this.avgCookieBought[j][i];
  }
};

Store.prototype.setCookiesTotal = function () {
  for (let i = 0; i < hours.length; i++) {
    this.dailyTotal += this.cookiesBought[i];
  }
  console.log(this.dailyTotal);
};

Store.prototype.render = function () {

  this.calcTotalCookiePerHOur();


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
  // for (let j= 0; j < storeObjects.length; j ++) {
  let dailyTotalTD = document.createElement('td');
  dailyTotalTD.textContent = this.dailyTotal;
  console.log(this.dailyTotal);
  headerRow.appendChild(dailyTotalTD);


  // let totalCell = document.createElement('th');
  // totalCell.textContent = 'Store Totals';
  // headerRow.appendChild(totalCell);


  //   for(let i = 0; i < hours.length; i++){
  //     let liElem = document.createElement('li'); // td cells attach to row
  //     console.log(this.cookieNum);
  //     liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
  //     ulElem.appendChild(liElem);

  //data row
};

function header() {
  let headerRow = document.createElement('tr');
  headerRow.textContent = 'Location';
  saleTable.appendChild(headerRow);
  for (let i = 0; i < hours.length; i++) {
    let headerTime = document.createElement('th');
    headerTime.textContent = hours[i];
    headerRow.appendChild(headerTime);
  }

  let totalCell = document.createElement('th');
  totalCell.textContent = 'Store Totals';
  headerRow.appendChild(totalCell);
}

function footer() {
  let footerRow = document.createElement('tfoot');
  let footerTime = document.createElement('th');
  footerTime.textContent = 'Total by Hour';
  footerRow.appendChild(footerTime);
  saleTable.appendChild(footerRow);

  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeObjects.length; j++) {
      hourlyTotal += storeObjects[j].cookiesBought[i];
      grandTotal += storeObjects[j].cookiesBought[i];
      console.log(storeObjects[j].cookiesBought);
    }
    footerTime = document.createElement('th');
    footerTime.textContent = hourlyTotal;
    footerRow.appendChild(footerTime);

  }
  footerTime = document.createElement('th');
  footerTime.textContent = grandTotal;
  footerRow.appendChild(footerTime);
  saleTable.appendChild(footerRow);
}

// ***** FORM HANDLER ****** 

function handleFormSubmit(event) {
  event.preventDefault();
  //console.log('FORM SUBMITTED!');

  let name = event.target.storeLocation.value;
  let minCust = +event.target.minCustomers.value;
  let maxCust = +event.target.maxCustomers.value;
  let avgCookiesBought = +event.target.avgBoughtPerHour.value;
  // console.log('FORM SUBMITTED');
  console.log(typeof minCust);

  // TODO: Create a New Location With The Form Values // push new object into the cities array

  let newStore = new Store(name, minCust, maxCust, avgCookiesBought);
  // storeObjects.push(newStore);

  // Remove Footer;
  let newTfoot = document.querySelector('tfoot');

  // saleTable.deleteRow('tfoot');
  event.target.storeLocation.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgBoughtPerHour.value = null;

  newTfoot.innerHTML = '';

  newStore.getCookies();
  newStore.render(); // this should add the new city to the table

  footer();

  myForm.reset();

  console.log(storeObjects);
}

// ********EXECUTABLE CODE************

let seattle = new Store('Seattle', '23', '65', '6.3');
let tokyo = new Store('Tokyo', '3', '24', '1.2');
let dubai = new Store('Dubai', '11', '28', '3.7');
let paris = new Store('Paris', '20', '38', '2.3');
let lima = new Store('Lima', '2', '16', '4.6');

// storeObjects.push(seattle, tokyo, dubai, paris, lima);
// console.log(storeObjects);


header();

function renderAll() {
  for (let i = 0; i < storeObjects.length; i++) {
    storeObjects[i].getCookies();
    storeObjects[i].render();
  }
  footer();
}

renderAll();

// TODO: Step 2 - attach event listener
myForm.addEventListener('submit', handleFormSubmit);


//render needs to live in the prototype if you have just one for loop, every time you have DOM, you have the 'render' that will create its row for the table.
