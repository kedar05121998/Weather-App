//Api_key="42dd75f01a7758dfdf6e95bb13e3bd1f" -->
//url=https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let api_key="42dd75f01a7758dfdf6e95bb13e3bd1f"

function getData(){

  let city=  document.querySelector("#query").value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

showData()
async function showData(){

    try{
        let res= await fetch(url)

        let user=await  res.json()
    
        console.log(user)
        append(user)

    }catch(err){
        console.log(err);
    }
   
}
}

function append(data){

    let container=document.querySelector("#container")
    container.innerHTML=null

    let box=document.createElement("div")

    let h2=document.createElement("h2")
    h2.innerText=data.name;

    let temp=document.createElement("p")
    temp.innerText=`Temperature-${Math.floor(data.main.temp-273.15)} Celcius`

    let min_temp=document.createElement("p")
    min_temp.innerText=`Min. Temperature-${Math.floor(data.main.temp_min-270.15)} Celcius`

    let max_temp=document.createElement("p")
    max_temp.innerText=`Min. Temperature-${Math.floor(data.main.temp_max-276.15)} Celcius`

    let cloud=document.createElement("p")
    cloud.innerText=`☁️ Clouds-${data.wind.speed}`

    let wind=document.createElement('p')
    wind.innerText=`💨 Winds- ${data.wind.speed}`

    let visibility=document.createElement("p")
    visibility.innerText=`Visibility-${data.visibility}`

    let sunrise=document.createElement("p")
    sunrise.innerText=`🌞Sunrise-${data.sys.sunrise}`

    let sunset=document.createElement("p")
    sunset.innerText=`🌄 Sunset-${data.sys.sunset}`








    box.append(h2,temp,min_temp,max_temp,cloud,wind,visibility,sunrise,sunset)

    container.append(box)

    const url1=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    let iframe=document.getElementById("gmap_canvas") 
    iframe.src=url1



}

// function getlocation(){

//     navigator.geolocation.getCurrentPosition(success);

//     function success(pos) {
//         const crd = pos.coords;
      
//         console.log('Your current position is:');
//         console.log(`Latitude : ${crd.latitude}`);
//         console.log(`Longitude: ${crd.longitude}`);
//         console.log(`More or less ${crd.accuracy} meters.`);
//       }
// }

// getlocation()