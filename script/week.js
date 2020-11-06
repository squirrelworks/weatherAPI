

// controller ===========================================================================
// load your data
// local pos 56.949368, 10.066459


const  weekView=true;



const apiUrl='http://www.7timer.info/bin/api.pl?lon=10.06&lat=56.94&unit=Metric&product=civillight&output=json';

buildLoadView(); // to show user that we are loading

// 
loadData(apiUrl);


//Load Data function controller
function loadData(myUrl) {

  fetch(myUrl)
    .then((response) => {
      //return response.text();
      return response.json();
    })
    .then((myData) => {
      // do something with 'data'
      //let myData=JSON.parse(data);


      makeWeek(myData.dataseries);
    })
    .catch(

    );
}


// view ===============================================================================


// get the Dom element to work within



function makeWeek(weekData){
 


  let app = document.getElementById("weekCards");

  app.innerHTML = "";

 

  if(weekView){
  weekData.forEach(prepareWiev);
  }else{
    prepareWiev(weekData[0])

  }
 
}

function prepareWiev(myDay){
  //console.log("building day");

  buildView(myDay.date,myDay.weather,myDay.temp2m.min, myDay.temp2m.max);
}







function buildView(myDate, myWeatherType, myMin, myMax) {

  let app = document.getElementById("weekCards");
 

 let myDayCard= document.createElement("div");
 myDayCard.classList.add("dayCard");


  // dato
  let wtHeadline = document.createElement("h2");



  myDay=getDayFromDate(myDate);
 

  wtHeadline.innerText = myDay;

  myDayCard.appendChild(wtHeadline);


  let wtImg = document.createElement("img");
  wtImg.src = "media/svg/" + getIcon(myWeatherType);
  wtImg.width = "200";
  myDayCard.appendChild(wtImg);


  // temperature
  let wtDegree = document.createElement("p");
  wtDegree.innerText = 'Temperatur: ' + myMin + ' - ' + myMax + ' grader';

  myDayCard.appendChild(wtDegree);
  app.appendChild(myDayCard);


}


function buildLoadView() {
  let app = document.getElementById("weekCards");
  app.innerHTML = "";
  // icon
  let wtImg = document.createElement("img");
  wtImg.src = "media/svg/loading.svg";
  wtImg.width = "200";
  app.appendChild(wtImg);

  /*
  let wtInfo = document.createElement("p");
  wtInfo.innerText = "loading...";
  app.appendChild(wtInfo);
  */

}


// view support functions ==========================================================

// return icon name support function
function getIcon(weaterType) {
  let myIcon = "none";

  //console.log("getting icon");


  switch (weaterType) {


    case "clear":
      myIcon = "wi-day-sunny.svg";
      break;

    case "pcloudy":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "mcloudy":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "mcloudy":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "cloudy":
      myIcon = "wi-day-rain-mix.svg";
      break;


      

    case "ishower":
      myIcon = "wi-rain.svg";
      break;

    case "oshower":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "lightrain":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "rain":
      myIcon = "wi-day-rain.svg";
      break;

    case "rainsnow":
      myIcon = "wi-day-rain.svg";
      break;



    case "humid":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "lightsnow":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "snow":
      myIcon = "wi-day-rain-mix.svg";
      break;


    default:

      myIcon = "wi-alien.svg";
  }

  return myIcon;



}


function getDayFromDate(myDateInt){

  let dateString=myDateInt.toString();

 let myYear = dateString.slice(0,4);

 let myMonth = dateString.slice(4,6);

 let myDate = dateString.slice(6,8);

 var jdDate = new Date(myMonth+"/"+myDate+"/"+myYear);
 //03/25/2015
let days = ["mandag","tirsdag","onsdag","torsdag","fredag","lørdag","søndag"]
return days[jdDate.getUTCDay()];
}

