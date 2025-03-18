let mainEl = document.querySelector("main");
mainEl.style.display = "flex"
mainEl.style.flexDirection = "column"
mainEl.style.alignItems = "center"

let inputDiv = document.createElement("div");
inputDiv.id = "inputDiv";

// Add the title dynamically instead of using innerHTML
let title = document.createElement("h1");
title.textContent = "Workout Tracker";
title.style.marginBottom = "10px"; // Add spacing
inputDiv.appendChild(title);

// Styling
inputDiv.style.color = "rgb(255, 255, 255)";
inputDiv.style.backgroundColor = "rgb(60, 60, 59)";
inputDiv.style.display = "flex";
inputDiv.style.flexDirection = "column";
inputDiv.style.alignItems = "center";
inputDiv.style.justifyContent = "center"; // Center content vertically
inputDiv.style.padding = "20px"; // Added padding
inputDiv.style.height = "auto"; // Adjusts based on content
inputDiv.style.minHeight = "15em"; // Prevents it from being too small
inputDiv.style.width = "22em"; // Slightly wider for better spacing
inputDiv.style.border = "2px solid rgb(180, 180, 180)";
inputDiv.style.borderRadius = "10px"; // Rounded edges
inputDiv.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.3)"; // Subtle shadow for depth
inputDiv.style.textAlign = "center"; // Ensures text is centered
inputDiv.style.gap = "10px";
mainEl.appendChild(inputDiv)


let workoutForm = document.createElement("form")
workoutForm.id = "workoutForm"
workoutForm.style.display = "flex"
workoutForm.style.flexDirection = "column"
inputDiv.appendChild(workoutForm)

let workoutInput = document.createElement("input")
workoutInput.type = "text"
workoutInput.id = "workout-name"
workoutInput.placeholder = "Workout Name"
workoutInput.style.backgroundColor = "rgb(65, 65, 65)"
workoutInput.style.color = "rgb(255, 255, 255)"
workoutInput.style.borderColor = "rgb(135, 135, 135)"
workoutForm.appendChild(workoutInput)

let repsInput = document.createElement("input");
repsInput.type = "text"
repsInput.id = "reps"
repsInput.placeholder = "Amount Of Reps"
repsInput.style.backgroundColor = "rgb(65, 65, 65)";
repsInput.style.color = "rgb(255, 255, 255)"
repsInput.style.borderColor = "rgb(135, 135, 135)"
workoutForm.appendChild(repsInput)

let amountOfSets = document.createElement("input")
amountOfSets.type ="text"
amountOfSets.id = "sets"
amountOfSets.placeholder = "Amount Of Sets"
amountOfSets.style.backgroundColor = "rgb(65, 65, 65)";
amountOfSets.style.color = "rgb(255, 255, 255)"
amountOfSets.style.borderColor = "rgb(135, 135, 135)"
workoutForm.appendChild(amountOfSets)

let applyButton = document.createElement("button")
applyButton.textContent = "Add To List"
applyButton.style.padding = "10px 20px";
applyButton.style.fontSize = "16px";
applyButton.style.fontWeight = "bold";
applyButton.style.color = "white";
applyButton.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)"; // Dark blue gradient
applyButton.style.border = "none";
applyButton.style.borderRadius = "5px";
applyButton.style.cursor = "pointer";
applyButton.style.transition = "all 0.3s ease";

inputDiv.appendChild(applyButton)

let containerDiv = document.createElement("div")
containerDiv.style.display ="flex"
containerDiv.style.flexDirection = "center"
containerDiv.style.gap ="60em"
mainEl.appendChild(containerDiv)

let toDoDiv = document.createElement("div")
toDoDiv.id = "toDo"
toDoDiv.innerHTML = "<h2>Workouts To Do</h2>"
toDoDiv.style.color = "rgb(255, 255, 255)"
containerDiv.appendChild(toDoDiv)

let workoutsToDoUl = document.createElement("ul")
workoutsToDoUl.id =  "workoutsToDoUl"
toDoDiv.appendChild(workoutsToDoUl)

let completedWorkoutsDiv = document.createElement("div");
completedWorkoutsDiv.id = "completedWorkoutsDiv"
completedWorkoutsDiv.innerHTML = "<h2>Completed Workouts</h2>"
completedWorkoutsDiv.style.color = "rgb(255, 255, 255)"
containerDiv.appendChild(completedWorkoutsDiv)

let completedWorkoutsUl = document.createElement("ul")
completedWorkoutsUl.id = "completedWorkoutsUl"
completedWorkoutsDiv.appendChild(completedWorkoutsUl)



