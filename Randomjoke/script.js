function getRandomJoke() {
  const categoryInput = document
    .getElementById("category")
    .value.trim()
    .toLowerCase();
  let apiUrl = "https://v2.jokeapi.dev/joke/";

  if (categoryInput !== "") {
    apiUrl += categoryInput;
  } else {
    apiUrl += "Any";
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const jokeDisplay = document.getElementById("jokeDisplay");
      if (data.type === "twopart") {
        jokeDisplay.innerHTML = `<p><strong>Category:</strong> ${data.category}</p>
                                   <p>${data.setup} ${data.delivery}</p>`;
      } else {
        jokeDisplay.innerHTML = `<p><strong>Category:</strong> ${data.category}</p>
                                   <p>${data.joke}</p>`;
      }
    })
    .catch((error) => {
      const jokeDisplay = document.getElementById("jokeDisplay");
      jokeDisplay.innerHTML =
        "<p>Failed to retrieve a joke. Please try again later.</p>";
    });
}

// const jokeContainer=document.getElementById("joke");
// const btn=document.getElementById("btn");
// const url="https://v2.jokeapi.dev/joke/";

// let getJoke=()=>{
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(data=>data.json())
//     .then(item =>{
//         jokeContainer.textContent = `$(item.joke)`;
//         jokeContainer.classList.add("fade");
//     });
// }
// btn.addEventListener("click",getJoke);
// getJoke();


// function getRandomJoke() {
//     const categoryInput = document
//       .getElementById("category")
//       .value.trim()
//       .toLowerCase();
//     let apiUrl = "https://v2.jokeapi.dev/joke/";
  
//     if (categoryInput !== "") {
//       apiUrl += categoryInput;
//     } else {
//       apiUrl += "Any";
//     }
  
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         const btn = document.getElementById("btn");
//         if (data.type === "twopart") {
//           btn.innerHTML = `<p><strong>Category:</strong> ${data.category}</p>
//                                      <p>${data.setup} ${data.delivery}</p>`;
//         } else {
//           btn.innerHTML = `<p><strong>Category:</strong> ${data.category}</p>
//                                      <p>${data.joke}</p>`;
//         }
//       })
//       .catch((error) => {
//         const btn = document.getElementById("btn");
//         btn.innerHTML =
//           "<p>Failed to retrieve a joke. Please try again later.</p>";
//       });
//   }