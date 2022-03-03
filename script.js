function getObj(){
  return this;
}
function getProperty(country) {
  for (let key in country){
    //console.log( country.getCountry()[key] )
    console.log(country.getCountry()[key])
  }
}
function Country(title, capital, population, area) {
  this.titleCountry = title;
  this.capitalCountry = capital;
  this.populationCountry = population;
  this.areaCountry = area;
  this.formsOfGovernment = "Republic";
  this.getCountry = getObj;  
};
//const france = new Country("France", "Paris", 1854565, 45054851)
//const italy = new Country("Italy", "Rome", 654654654, 465745)
const germany = new Country("Germany", "Berlin", 654654, 6545454)

//getProperty(france)
//getProperty(italy)
getProperty(germany)