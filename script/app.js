
// get the Dom element to work within
let app=document.getElementById("weatherWidget");

// load your data
// local pos 56.949368, 10.066459
loadData('http://www.7timer.info/bin/api.pl?lon=10.06&lat=56.94&unit=Metric&product=civillight&output=json');


//Load Data function
function loadData(myUrl){

    console.log("fetching data");
    app.textContent="Loading data";

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
function buildView(myData){
  let myText= 'weather type: '+myData.dataseries[0].weather+' temp min: '+myData.dataseries[0].temp2m.min+' max: '+myData.dataseries[0].temp2m.max;
    app.textContent=myText;
}