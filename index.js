
async function weatherData(city){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '574441b6efmshabb3656029fabcap174e9ejsnd619ddb478a8',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);

        temp.innerHTML=`Temperature is: ${result.temp}`;
        humidity.innerHTML=`Humidity is: ${result.humidity}`
        
    } catch (error) {
        console.error(error);
    }
}

searchButton.addEventListener('click',(e)=>{
    // e.preventDefault();
    weatherData(city.value)
})

// weatherData(city)
