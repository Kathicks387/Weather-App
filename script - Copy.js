//SELECT ELEMENTS
var button =document.querySelector('.button');
var inputValue =document.querySelector('.inputValue');
var main = document.querySelector ('#name')
var temp =document.querySelector('.temp');
var humid =document.querySelector('.humid');
var wind =document.querySelector('.wind');
var clouds = document.querySelector('.clouds');
var desc = document.querySelector('.desc');
var pastSearches = document.querySelector('pastSearches');
var NowMoment=moment();
var eDisplayMoment= document.querySelector(".displayMoment");
var a = document.querySelector('.a');
 
button.addEventListener('click', function(){
  fetch('http://api.openweathermap.org/data/2.5/weather/?q='+inputValue.value+'&name&appid=369017b264018e9107bf08d3d978c713&units=imperial&uvi&')
   
 .then(response => response.json())
   .then(data =>   {
 
  console.log(data);
 
    var tempValue = data['main']['temp'];
    var humidValue = data['main']['humidity'];
    var windValue = data['wind']['speed'];
    var descValue = data['weather'] [0] ['description'];
    var cloudsValue = data['weather'][0] ['icon'];
    var cloudsURL = "http://openweathermap.org/img/wn/" + cloudsValue + "@2x.png";
    
    main.innerHTML = inputValue.value;
    temp.innerHTML =  Math.floor(tempValue) + " °F";
    humid.innerHTML =`Humidity: ${humidValue}%`;
    wind.innerHTML = `Windspeed: ${windValue} MPH`;
    desc.innerHTML = descValue;
    clouds.innerHTML=  "<img src=" + cloudsURL + ">";
    eDisplayMoment.innerHTML=NowMoment.format("dddd, MMMM DD, YYYY");
    //a.innerHTML = inputValue.value;
    input.value="";
     
})
// .catch(err=> alert('No such city name.  Please check your spelling.'));
}) 
 
var inputValue =document.querySelector('.inputValue');
var submit =document.querySelector('.submit');
var date1 = document.querySelector('.date1');
var icon1 = document.querySelector('.icon1');
var temper1 = document.querySelector('.temper1');
var humidity1 = document.querySelector('.humidity1');
var date2 = document.querySelector('.date2');
var icon2 = document.querySelector('.icon2');
var temper2 = document.querySelector('.temper2');
var humidity2 = document.querySelector('.humidity2');
var date3 = document.querySelector('.date3');
var icon3 = document.querySelector('.icon3');
var temper3 = document.querySelector('.temper3');
var humidity3 = document.querySelector('.humidity3');
var date4 = document.querySelector('.date4');
var icon4 = document.querySelector('.icon4');
var temper4 = document.querySelector('.temper4');
var humidity4 = document.querySelector('.humidity4');
var date5 = document.querySelector('.date5');
var icon5 = document.querySelector('.icon5');
var temper5 = document.querySelector('.temper5');
var humidity5 = document.querySelector('.humidity5');

main.innerHTML = inputValue.value;

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=369017b264018e9107bf08d3d978c713&units=imperial&')
    .then(response => response.json())
    .then(data =>   {

    console.log(data);

      
    var icon1Value = data['list'][2]['weather'][0] ['icon'];  
    var temper1Value = data['list'][2]['main']['temp'];  
    var humidity1Value = data['list'][2]['main']['humidity'];
    icon1URL = "http://openweathermap.org/img/wn/" + icon1Value + "@2x.png";
    var icon2Value = data['list'][10]['weather'][0] ['icon'];  
    var temper2Value = data['list'][10]['main']['temp'];  
    var humidity2Value = data['list'][10]['main']['humidity'];
    icon2URL = "http://openweathermap.org/img/wn/" + icon2Value + "@2x.png";
    var icon3Value = data['list'][18]['weather'][0] ['icon'];  
    var temper3Value = data['list'][18]['main']['temp'];  
    var humidity3Value = data['list'][18]['main']['humidity'];
    icon3URL = "http://openweathermap.org/img/wn/" + icon3Value + "@2x.png";
    var icon4Value = data['list'][26]['weather'][0] ['icon'];  
    var temper4Value = data['list'][26]['main']['temp'];  
    var humidity4Value = data['list'][26]['main']['humidity'];
    icon4URL = "http://openweathermap.org/img/wn/" + icon4Value + "@2x.png";
    var icon5Value = data['list'][34]['weather'][0] ['icon'];  
    var temper5Value = data['list'][34]['main']['temp'];  
    var humidity5Value = data['list'][34]['main']['humidity'];
    icon5URL = "http://openweathermap.org/img/wn/" + icon5Value + "@2x.png";
    



    date1.innerHTML= moment().add(1, "days").format("MMMM DD, YYYY"); 
    icon1.innerHTML="<img src=" + icon1URL + ">";
    temper1.innerHTML=Math.floor(temper1Value) + " °F";
    humidity1.innerHTML =`Humidity: ${humidity1Value}%`;
    date2.innerHTML= moment().add(2, "days").format("MMMM DD, YYYY"); 
    icon2.innerHTML="<img src=" + icon2URL + ">";
    temper2.innerHTML=Math.floor(temper2Value) + " °F";
    humidity2.innerHTML =`Humidity: ${humidity2Value}%`;
    date3.innerHTML= moment().add(3, "days").format("MMMM DD, YYYY"); 
    icon3.innerHTML="<img src=" + icon3URL + ">";
    temper3.innerHTML=Math.floor(temper3Value) + " °F";
    humidity3.innerHTML =`Humidity: ${humidity3Value}%`;
    date4.innerHTML= moment().add(4, "days").format("MMMM DD, YYYY"); 
    icon4.innerHTML="<img src=" + icon4URL + ">";
    temper4.innerHTML=Math.floor(temper4Value) + " °F";
    humidity4.innerHTML =`Humidity: ${humidity4Value}%`;
    date5.innerHTML= moment().add(5, "days").format("MMMM DD, YYYY"); 
    icon5.innerHTML="<img src=" + icon5URL + ">";
    temper5.innerHTML=Math.floor(temper5Value) + " °F";
    humidity5.innerHTML =`Humidity: ${humidity5Value}%`;
   })
})

/* Get form, item, and wishlist
var addToPastSearches = document.querySelector('.a');
var pastSearches = document.querySelector('#inputText');
var searches = document.querySelector('#inputText');

addToPastSearches.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (pastSearches.value.length < 1) return;

	// Add item to wishlist
	searches.innerHTML += '<li>' + pastSearches.value + '</li>';

	// Clear input
//	pastSearches.value = '';

}, false);

/*function saveToLocal() {
  $(button).click(); {
    var saveInputTextValue = document.querySelector('#inputText').value;
    localStorage.setItem('text', saveInputTextValue);
  }
}*/
 var pastSearches = inputValue.value;
pastSearches=['.a', '.b', '.c', '.d', '.e', '.f', '.g']
 function renderSelections() {
  for(var i=0; i<pastSearches.length; i++){

  }
}


 '.a'.innerHTML=pastSearches;
 '.b'.innerHTML=pastSearches;
 '.c'.innerHTML=pastSearches;
 '.d'.innerHTML=renderSelections;
 '.e'.innerHTML=renderSelections;
 '.f'.innerHTML=renderSelections;
 '.g'.innerHTML=renderSelections;
 '.h'.innerHTML=renderSelections;



 