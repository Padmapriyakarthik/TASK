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
for(var i in countrydata)
{
    console.log(countrydata[i].flag);
}
//console.log(countrydata[1]);
}