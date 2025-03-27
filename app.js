"use strict";

// console.log("hello")

// async function fetchData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Fetch attempt completed.");
//   }
// }

// fetchData();

// async function fetchDataAgain(){
// try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/invalid"
//     );
//     const data = await res.json();
// } catch (error) {
//     console.log(error);
// }finally {
//     console.log("The 2nd attempt was invalid");
// }
// }
// fetchDataAgain();

async function fetchWeatherData(key) {
  try {
    const res = await fetch(
      "https://api.weatherapi.com/v1/current.json?q=70816&days=5&key=" + key
    );
    const data = await res.json();

    const tempF =data.current.feelslike_f;
    const windDir = data.current.wind_dir;
    const precip = data.current.precip_in;

    

    document.querySelector("#weatherData").innerHTML = `<p>Temperature: ${tempF}&deg;F</p>
    <p>Wind Direction: ${windDir}</p>
    <p>Precipitation: ${precip}</p>`;

    console.log(data);
  } catch (error) {
    console.error("Error in the fetchWeatherData function", error);
    document.querySelector("#weatherData").innerHTML =
      "Sorry, something broke! Please try again later.";
  }
}


async function main() {
  await fetch("https://proxy-key-eb0j.onrender.com"); //the server on render
  const config = {
    method: "POST",
    //If method === get, header will be "accept": "application/json" instead of "Content-Type"
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "123456" }), //secret must be capitalized in the Environments variable on render
    //key must be capitalized in the Environments variable on render.com
  };
  const res = await fetch(
    "https://proxy-key-eb0j.onrender.com/get-key",
    config //server on render config that has the API Key
  );
  const data = await res.json();
  const { key } = data;

  console.log(key); //logging the API Key

 fetchWeatherData(key); 
}

main()
