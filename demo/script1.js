
// Question 1.

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
var printAllValues=(obj) => {console.log(Object.values(obj));} // reurns an array of values.
printAllValues(obj);

// Question 2.
var  printAllKeys=(obj)=> {console.log(Object.keys(obj)); }// reurns an array of keys
printAllKeys(obj);
  
//Question 3.
var obj = {name: "ISRO", age: 35, role: "Scientist"};
var convertListToObject =(obj)=> {console.log(Object.entries(obj));} // return an array of entries of key value pair 
convertListToObject(obj);


//Question 4.Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];
var transformFirstAndLast=(arr) => {
 var newObject={};
 //var newObject=new Object();
 newObject[arr[0]]=arr[arr.length-1];
 return newObject;
}
var result=transformFirstAndLast(arr);
console.log(result);

//Question 5.Parsing a list of lists and convert into a JSON object:
var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(i=0;i<arr.length;i++)
 {
         newObject[arr[i][0]]=arr[i][1];
 }
 return newObject;
}
var result=fromListToObject(arr);
console.log(result);

//Question 6. Parsing a list of lists and convert into a JSON object:
var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 //Your code
for(i=0;i<arr.length;i++)
{ var obj={};
    for(j=0;j<arr[i].length;j++)
    {
       obj[arr[i][j][0]]=arr[i][j][1];
    }
     tranformEmployeeList.push(obj);
}
 return tranformEmployeeList;
}
var result=transformEmployeeData(arr);
console.log(result);// array of objects.


//Question 7.Parsing two JSON objects and Compare:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, "detects that two objects are equal");

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, "detects that two objects are equal");
function assertObjectsEqual(actual, expected, testName){

var actual1=Object.entries(actual);
var expected1=Object.entries(expected);
var equal=true;
for(i=0;i<actual1.length;i++)
{
    for(j=0;j<actual1[i].length;j++)
    {
        if(actual1[i][j]!==expected1[i][j])
        {
            equal=false;
            break;
        }
    }
    if(!equal)
    {
        break;
    }
}
if(equal)
{
    console.log("Passed");
}
else
{
 console.log("FAILED ["+ testName +"] Expected " + JSON.stringify(expected) +", but got "+ JSON.stringify(actual));
}
}



//Question 8.
var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   
   function chksecurityQuestions(securityQuestions,question,answer) 
   {   var check=false;
       for(i=0;i<securityQuestions.length;i++)
       {
           var obj={};
           obj=securityQuestions[i];// returen array of key and value.
           var key=Object.keys(obj);//array of key
               if((obj[key[0]]==question) && (obj[key[1]]==answer))
               {
                   check=true;
               }
       }
       if(check)
       {
           return true;
       }
       else
       {
           return false;
       }
   }
   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status1 = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status1); // true
   //Test case2:
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase

   //Question 9. Parsing JSON objects and Compare: Write a function to return the list of characters below 20 age
var students = [
 {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
    
   function returnMinors(arr)
   {
       var names=[];
       for(i=0;i<students.length;i++)
       {
           var obj={};
           obj=students[i];
           if(obj.age<20)
           {
               names.push(obj.name);
           }
       }
       return names;
   }
   console.log(returnMinors(students));


   //problem 0 Part A
   var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   };
   //1.Add height and weight to Fluffy
   cat.height=12;
   cat.weight=23;
   
   //2.Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name="Fluffyy";
   //3.List all the activities of Fluffyy’s catFriends.
   //4.Print the catFriends names.
   for(i=0;i<cat.catFriends.length;i++)
   {
   console.log(cat.catFriends[i].activities);
   }
   //4.Print the catFriends names.
   for(i=0;i<cat.catFriends.length;i++)
   {
   console.log(cat.catFriends[i].name);
   }
   //5.Print the total weight of catFriends
   var total_weight=0;
   for(i=0;i<cat.catFriends.length;i++)
   {
   total_weight+=(+cat.catFriends[i].weight);
   }
   console.log(total_weight);
   //Add 2 more activities to bar & foo cats
   for(i=0;i<cat.catFriends.length;i++)
   {
   cat.catFriends[i].fur="black";
   cat.catFriends[i].ishealthy=true;
   }
   //Update the fur color of bar
   cat.catFriends[1].fur="brown";
   console.log(cat);

   //Question 0.Part B
var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   };
   for(i=0;i<myCar.accidents.length;i++)
   {
   myCar.accidents[i].atFaultForAccident=false;
   console.log("date: ",myCar.accidents[i].date);
   console.log("atFaultForAccident: ",myCar.accidents[i].atFaultForAccident);
   }
   
