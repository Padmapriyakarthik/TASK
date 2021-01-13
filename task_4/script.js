// create a request variable.
var request= new XMLHttpRequest();
//create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the connection
request.send();
//register a event listener.once the data is ready loads the data
request.onload=function()
{
var countrydata=JSON.parse(this.response);
/*for(var i in countrydata)
{
    //console.log(countrydata[i].population);
  console.log(countrydata[i].region);
}
*/
//Question 1.Get all countries from asia continent /"region" using filter function.
let Asian_region=countrydata.filter((element)=>{

    return element.region==="Asia";
})
console.log(Asian_region);


// Question 2. Get all the countries with population less than 2 lakhs using filter function.
let population_less=countrydata.filter((element)=>{

    return element.population<200000;
})
console.log(population_less);

//Question 3. Print name,capital,flag using foreach function.

countrydata.forEach(element => { 
    console.log("Country Name: "+ element.name, "Capital: " +element.capital,"Flag:" +element.flag);
});

// Question 4. Print the total population of countries using reduce function.
let totalpopulation=countrydata.reduce((accumulator,element)=>{
     return accumulator+element.population
},0);
console.log(totalpopulation);

//Question 5.Print the country which uses us dollar as currency
var dollar=[];
countrydata.forEach(element=>{
    element.currencies.forEach((currency)=>
    {
        if(currency.code==="USD")
        {
            console.log(element.name,currency.code);
        }
    })
    
})

}