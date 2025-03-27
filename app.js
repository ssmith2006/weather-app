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


async function fetchWeatherData(){
  await fetch(
    "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}"
  );
  const config = {
    
  }
}