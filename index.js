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

const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '574441b6efmshabb3656029fabcap174e9ejsnd619ddb478a8',
            'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
        }
    }
    fetch(url,options)
    .then(Response=>Response.json())
    .then(Response=>{
        console.log(Response)
        // console.log(Response.name)
        document.getElementById('location').innerHTML=Response.location
    })
    .catch(err=>{
        console.log(err)
    })
