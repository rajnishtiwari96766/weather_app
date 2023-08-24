// const inputField=document.getElementById('inputField')
// const searchButton=document.getElementById('searchButton')

// function inputData(){
//     console.log()
// }
// searchButton.addEventListener('click',()=>{

// })
// async function fetchData(){
//     const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '574441b6efmshabb3656029fabcap174e9ejsnd619ddb478a8',
//             'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         // const response=await response.json()
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchData()

// const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '574441b6efmshabb3656029fabcap174e9ejsnd619ddb478a8',
//             'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
//         }
//     }
//     fetch(url,options)
//     .then(Response=>Response.json())
//     .then(Response=>{
//         console.log(Response)
//         console.log(Response.timelines)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

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