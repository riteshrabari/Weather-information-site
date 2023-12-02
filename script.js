arr=['delhi','boston','london','new york','melbourne','mumbai']
for(i=0;i<6;i++){
	regular_weather(arr[i]);
}

let head=document.querySelector("#head");
let btn=document.querySelector("#button");
let input=document.querySelector("#input");
btn.addEventListener("click",function(){
	let name=input.value;
	head.innerHTML=`Weather for ${name}`;
	check_weather(name);
})


function check_weather(city){

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f40e2b7b98mshbd5f9ff91d15ca7p1fa4e2jsn0e6b84b5243c',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
	.then(response=>response.json())
	.then(response=>{
		cloud.innerHTML=response.cloud_pct
		feel.innerHTML=response.feels_like
		hum.innerHTML=response.humidity
		temp.innerHTML=response.temp
		min.innerHTML=response.min_temp
		max.innerHTML=response.max_temp
		wind.innerHTML=response.wind_speed
		wind_d.innerHTML=response.wind_degrees
	})
	.catch(err => console.log(err));
	
	
}

function regular_weather(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f40e2b7b98mshbd5f9ff91d15ca7p1fa4e2jsn0e6b84b5243c',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById(`${city}_hum`).innerHTML = response.humidity;
            document.getElementById(`${city}_temp`).innerHTML = response.temp;
            document.getElementById(`${city}_wind`).innerHTML = response.wind_speed;
        })
        .catch(err => console.log(err));
}
