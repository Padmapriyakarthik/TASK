var request= new XMLHttpRequest();
//create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send the connection
request.send();
//register a event listener.once the data is ready loads the data

request.onload=function()
{
var countrydata=JSON.parse(this.response);

for(i=0;i<countrydata.length;i++)
{
var degree=countrydata[i].latlng;
var longitude=degree[0];
var latitude=degree[1];
console.log(countrydata[i].name)
try{
    if(latitude==""||longitude=="")
    {
        throw "error";
    }
    else
    {
        var request1=new XMLHttpRequest();
        request1.open('GET',"http://api.openweathermap.org/data/2.5/weather?lat="+longitude+"&lon="+latitude+"&APPID=6fe5b1936e7d8b30aa35979c6bd428bd",true);
        request1.send();
        request1.onload=function()
    {
        var data=JSON.parse(this.response);
        console.log(data.name,data.main.temp);
    }
    }
}
catch(e)
{
    console.log(e);
}
}
}