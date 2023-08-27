
async function fetchData(){
    const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '574441b6efmshabb3656029fabcap174e9ejsnd619ddb478a8',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        // document.getElementById('Address')=result.content
        const csvDataElement = document.getElementById('csvData');
        csvDataElement.innerText = result;
    } catch (error) {
        console.error(error);
    }
}

fetchData()