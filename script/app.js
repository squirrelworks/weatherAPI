
// get the Dom element to work within
let app=document.getElementById("app");

// load your data
loadData();


//Load Data function
function loadData(){

    console.log("fetching data");
    app.textContent="Loading data";

    fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json')
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
    app.textContent=myData.dataseries[0].weather;
}