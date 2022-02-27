function getObj() {
  for (let key in Country){
    Country.getCountry[key];
  }
}
function Country(title, capital, population, area) {
  this.titleCountry = title;
  this.capitalCountry = capital;
  this.populationCountry = population;
  this.areaCountry = area;
  this.formsOfGovernment = "Republic";
  this.getCountry = getObj(Country.this);  
};

const france = new Country("France", "Paris", 1854565, 45054851)
//console.table(france);
 let italy = new Country("Italy", "Rome", 654654654, 465745)
// let germany = new Country("Germany", "Berlin", 654654, 6545454)


console.table(italy.getCountry);






/*
for (let key in Country){
  console.log(key)
}
*/