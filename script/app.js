
// get the Dom element to work within
let app = document.getElementById("weatherWidget");

// load your data
// local pos 56.949368, 10.066459
loadData('http://www.7timer.info/bin/api.pl?lon=10.06&lat=56.94&unit=Metric&product=civillight&output=json');


//Load Data function
function loadData(myUrl) {

  console.log("fetching data hurra");


  fetch(myUrl)
    .then((response) => {
      //return response.text();
      return response.json();
    })
    .then((data) => {
      // do something with 'data'
      //let myData=JSON.parse(data);
      buildView(data);
    })
    .catch(

    );
}

// dom setup
function buildView(myData) {

  // dato
  let wtHeadline = document.createElement("h2");
  let myDate = myData.dataseries[0].date
  let d = new Date(myDate);
  day = d.getDay();
  wtHeadline.innerText = 'Dato: ' + myDate;
  app.appendChild(wtHeadline);


  // icon
  let wtImg = document.createElement("img");
  wtImg.src = "media/svg/" + getIcon(myData.dataseries[0].weather);
  wtImg.width = "200";
  app.appendChild(wtImg);

  // info paragraph
  let wtInfo = document.createElement("p");
  wtInfo.innerText = 'Weather type: ' + myData.dataseries[0].weather;
  app.appendChild(wtInfo);

  let wtDegree = document.createElement("p");
  wtDegree.innerText = 'Temperatur: ' + myData.dataseries[0].temp2m.min + ' - ' + myData.dataseries[0].temp2m.max + ' grader';
  app.appendChild(wtDegree);

}



// return icon name
function getIcon(weaterType) {
  let myIcon = "none";

  switch (weaterType) {
    case "lightrain":
      myIcon = "wi-day-rain-mix.svg";

      break;
    case "ishower":
      myIcon = "wi-train.svg";
      break;

    default:
      myIcon = "wi-alien.svg";
  }

  return myIcon;



}