function getObj() {
  return this;
}

getCoutry(){
  for (let key in Country){
    console.log(key);
  }
}

function Country(title, capital, population, area) {
  this.titleCountry = title;
  this.capitalCountry = capital;
  this.populationCountry = population;
  this.areaCountry = area;
  this.formsOfGovernment = "Republic"
  this.displayInfo = getCountry(); //??????
};


let france = new Country("France", "Paris", 1854565, 45054851)
let italy = new Country("Italy", "Rome", 654654654, 465745)
let germany = new Country("Germany", "Berlin", 654654654, 6545454)

console.log(france);
console.log(italy);
console.log(germany);
