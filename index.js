async function weatherData(){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '574441b6efmshabb3656029fabcap174e9ejsnd619ddb478a8',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
weatherData()