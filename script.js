function ucde_case_study_load(){
  showScreen(1);
  showPersona(1);
  showScenario(1);
}


var screenIndex = 1;
var personaIndex = 1;
var scenarioIndex = 1;

function plusScreens(n) {
  showScreen(screenIndex += n)
}
function plusPersonas(n) {
  showPersona(personaIndex += n)
}
function plusScenarios(n) {
  showScenario(scenarioIndex +=n)
}

function currentScreen(n) {
  showScreen(screenIndex = n)
}
function currentPersona(n) {
  showPersona(personaIndex = n)
}
function currentScenario(n) {
  showScenario(scenarioIndex = n)
}

function showScreen(n) {
  var i;
  var screens = document.getElementsByClassName("screen");
  var dots = document.getElementsByClassName("screen-btn");
  if (n > screens.length) {screenIndex = 1;}
  if (n < 1) {screenIndex = screens.length;}
  for (i = 0; i < screens.length; i++) {
      screens[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  screens[screenIndex-1].style.display = "block";
  dots[screenIndex-1].className += " active";
}

function showPersona(n) {
  var i;
  var personas = document.getElementsByClassName("persona");
  var dots = document.getElementsByClassName("persona-btn");
  if (n > personas.length) {personaIndex = 1;}
  if (n < 1) {personaIndex = personas.length;}
  for (i = 0; i < personas.length; i++) {
      personas[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  personas[personaIndex-1].style.display = "block";
  dots[personaIndex-1].className += " active";
}

function showScenario(n) {
  var i;
  var scenarios = document.getElementsByClassName("scenario");
  var dots = document.getElementsByClassName("scenario-btn");
  if (n > scenarios.length) {scenarioIndex = 1;}
  if (n < 1) {scenarioIndex = scenarios.length;}
  for (i = 0; i < scenarios.length; i++) {
      scenarios[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  scenarios[scenarioIndex-1].style.display = "block";
  dots[scenarioIndex-1].className += " active";
}
