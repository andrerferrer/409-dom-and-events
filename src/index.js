// console.log("Hello the best! It's #409!");

// const players = document.querySelector("#players");
// console.log(players);
// players.insertAdjacentHTML("beforeend", "<li>Luke</li>");
// players.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

// const link = document.querySelector("#home");
// // Console Log Driven Development CLDD
// console.log("link is", link);

// const andre = document.querySelector("#andre");
// // console.log("andre is", andre)


const nightmare = document.querySelectorAll(".andre");

nightmare.forEach((andre) => {
  andre.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(event.currentTarget);
    const myCurrentTarget = event.currentTarget;
    myCurrentTarget.classList.toggle("img-circle");
  });
});
