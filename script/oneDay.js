

// controller ===========================================================================
// load your data
// local pos 56.949368, 10.066459

buildLoadView(); // to show user that we are loading

// 
loadData('http://www.7timer.info/bin/api.pl?lon=10.06&lat=56.94&unit=Metric&product=civillight&output=json');


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


      buildView(myData.dataseries[0].date, myData.dataseries[0].weather, myData.dataseries[0].temp2m.min, myData.dataseries[0].temp2m.max);
    })
    .catch(

    );
}



// view ===============================================================================


// get the Dom element to work within




function buildView(myDate, myWeatherType, myMin, myMax) {

  let dayApp = document.getElementById("weatherWidget");
  dayApp.innerHTML = "";

  // dato
  let wtHeadline = document.createElement("h2");

  myDay=getDayFromDate(myDate);
  wtHeadline.innerText = myDay;
  dayApp.appendChild(wtHeadline);


  // icon
  let wtImg = document.createElement("img");
  wtImg.src = "media/svg/" + getIcon(myWeatherType);
  wtImg.width = "200";
  dayApp.appendChild(wtImg);


  // temperature
  let wtDegree = document.createElement("p");
  wtDegree.innerText = 'Temperatur: ' + myMin + ' - ' + myMax + ' grader';
  dayApp.appendChild(wtDegree);

}


function buildLoadView() {
  let dayApp = document.getElementById("weatherWidget");
  dayApp.innerHTML = "";
  // icon
  let wtImg = document.createElement("img");
  wtImg.src = "media/svg/loading.svg";
  wtImg.width = "200";
  dayApp.appendChild(wtImg);

  let wtInfo = document.createElement("p");
  wtInfo.innerText = "loading...";
  dayApp.appendChild(wtInfo);

}


// view support functions ==========================================================

// return icon name support function
function getIcon(weaterType) {
  let myIcon = "none";

  //console.log("getting icon");


  switch (weaterType) {

    case "oshower":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "lightrain":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "rain":
      myIcon = "wi-day-rain-mix.svg";
      break;

    case "rainsnow":
      myIcon = "wi-day-rain-mix.svg";
      break;


    case "ishower":
      myIcon = "wi-train.svg";
      break;

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

