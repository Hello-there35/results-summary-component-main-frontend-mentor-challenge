// stores JSON file data in variable results
import results from '../data.json' assert {type: 'json'};
let getResults = results
let resultSide = document.getElementById("result-side");
// Goes through getResults data and displays the icon, category and score to div element with id result-side
for (let i = 0; i < getResults.length; i++) {
    resultSide.innerHTML += `
    <div class="sub-result-container" style="background-color:${getResults[i].backgroundColour}">
    <div class="result-left">
    <img class="icon-result" src="${getResults[i].icon}" alt="${getResults[i].category}-icon ">
    <p class="sub-result-text" style="color:${getResults[i].colour}">
      ${getResults[i].category}
    </p>
  </div>
  <div class="result-right">
    <p class="result">
      <span class="result-highlight">${getResults[i].score} </span>/ 100
    </p>
    </div>
  </div>
  </div>`;
  
}
// adds button to the end of resultSide div element 
resultSide.innerHTML += '<button class="continue-button">Continue</button>'