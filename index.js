let mainEl = document.querySelector("main");
mainEl.style.display = "flex";
mainEl.style.flexDirection = "column";
mainEl.style.alignItems = "center";

//  Create inputDiv
let inputDiv = document.createElement("div");
inputDiv.id = "inputDiv";

// Title
let title = document.createElement("h1");
title.textContent = "Workout Tracker";
title.style.marginBottom = "10px"; // Add spacing
inputDiv.appendChild(title);

//  Style inputDiv
inputDiv.style.color = "rgb(255, 255, 255)";
inputDiv.style.backgroundColor = "rgb(40, 40, 40)";
inputDiv.style.display = "flex";
inputDiv.style.flexDirection = "column";
inputDiv.style.alignItems = "center";
inputDiv.style.justifyContent = "center";
inputDiv.style.padding = "20px";
inputDiv.style.width = "22em";
inputDiv.style.border = "2px solid rgb(180, 180, 180)";
inputDiv.style.borderRadius = "10px";
inputDiv.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.3)";
inputDiv.style.textAlign = "center";
inputDiv.style.gap = "10px";
mainEl.appendChild(inputDiv);

//  Create workoutForm
let workoutForm = document.createElement("form");
workoutForm.id = "workoutForm";
workoutForm.style.display = "flex";
workoutForm.style.flexDirection = "column";
workoutForm.style.alignItems = "center";
workoutForm.style.gap = "10px";
inputDiv.appendChild(workoutForm);

//  Create workout input fields 
function createInput(id, placeholder) {
    let input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.placeholder = placeholder;
    input.style.backgroundColor = "rgb(255, 255, 255)";
    input.style.color = "rgb(0, 0, 0)";
    input.style.border = "1px solid rgb(135, 135, 135)";
    input.style.padding = "10px";
    input.style.borderRadius = "5px";
    input.style.width = "20em";
    return input;
}

let workoutInput = createInput("workout-name", "Workout Name");
let repsInput = createInput("reps", "Amount Of Reps");
let amountOfSets = createInput("sets", "Amount Of Sets");

workoutForm.appendChild(workoutInput);
workoutForm.appendChild(repsInput);
workoutForm.appendChild(amountOfSets);

//  Create and style button
let applyButton = document.createElement("button");
applyButton.textContent = "Add To List";
applyButton.style.padding = "10px 20px";
applyButton.style.fontSize = "16px";
applyButton.style.fontWeight = "bold";
applyButton.style.color = "white";
applyButton.style.background = "linear-gradient(135deg, #1e3c72, #2a5298)";
applyButton.style.border = "none";
applyButton.style.borderRadius = "5px";
applyButton.style.cursor = "pointer";
applyButton.style.transition = "all 0.3s ease";
applyButton.style.marginTop = "10px";
workoutForm.appendChild(applyButton);

//  Create a flex container for lists
let containerDiv = document.createElement("div");
containerDiv.style.display = "flex";
containerDiv.style.flexDirection = "row";
containerDiv.style.justifyContent = "center";
containerDiv.style.gap = "30px"; //  Use px instead of em for better spacing
containerDiv.style.marginTop = "20px";
mainEl.appendChild(containerDiv);

//  Create Workout To-Do List
let toDoDiv = document.createElement("div");
toDoDiv.id = "toDo";
toDoDiv.innerHTML = "<h2>Workouts To Do</h2>";
toDoDiv.style.backgroundColor = "rgb(40, 40, 40)";
toDoDiv.style.color = "rgb(255, 255, 255)";
toDoDiv.style.width = "30em";
toDoDiv.style.border = "2px solid rgb(180, 180, 180)";
toDoDiv.style.display = "flex"; //
toDoDiv.style.flexDirection = "column";
toDoDiv.style.alignItems = "center";
toDoDiv.style.padding = "15px";
toDoDiv.style.textAlign = "center";
containerDiv.appendChild(toDoDiv);

//  Append the UL for Workouts To Do
let workoutsToDoUl = document.createElement("ul");
workoutsToDoUl.id = "workoutsToDoUl";
workoutsToDoUl.style.listStyle = "none"; // Removes bullet points
workoutsToDoUl.style.padding = "0";
toDoDiv.appendChild(workoutsToDoUl);

//  Create Completed Workouts List
let completedWorkoutsDiv = document.createElement("div");
completedWorkoutsDiv.id = "completedWorkoutsDiv";
completedWorkoutsDiv.innerHTML = "<h2>Completed Workouts</h2>";
completedWorkoutsDiv.style.backgroundColor = "rgb(40, 40, 40)";
completedWorkoutsDiv.style.color = "rgb(255, 255, 255)";
completedWorkoutsDiv.style.width = "30em";
completedWorkoutsDiv.style.border = "2px solid rgb(180, 180, 180)";
completedWorkoutsDiv.style.display = "flex"; //  
completedWorkoutsDiv.style.flexDirection = "column";
completedWorkoutsDiv.style.alignItems = "center";
completedWorkoutsDiv.style.padding = "15px";
completedWorkoutsDiv.style.textAlign = "center";
containerDiv.appendChild(completedWorkoutsDiv);

// Append the UL for Completed Workouts
let completedWorkoutsUl = document.createElement("ul");
completedWorkoutsUl.id = "completedWorkoutsUl";
completedWorkoutsUl.style.listStyle = "none"; // Removes bullet points
completedWorkoutsUl.style.padding = "0";
completedWorkoutsDiv.appendChild(completedWorkoutsUl);

applyButton.addEventListener("click", okToAddToList) //listening to see if the button was clicked

// Attach event listener to form for "Enter" submission
workoutForm.addEventListener("click,", function(event){
    event.preventDefault()
    okToAddToList(event)
})

function okToAddToList(event) {
    event.preventDefault()
    console.log("Submit button clicked"); // ✅ Debugging

    const workoutIsOk = correctWorkoutFormat()
    const repsIsOk = correctRepFormat() 
    const setsIsOk = correctSetFormat()

    if (!workoutIsOk) {
        return;
    }
    console.log("Workout added:", workoutIsOk); // ✅ Debugging

    if(!repsIsOk){
        return;
    }

    if(!setsIsOk){
        return;
    }

}

function correctWorkoutFormat() {
    let workout = workoutInput.value.trim();

    if (workout === "") {
        alert(`You can leave this blank! Wake Up!`);
        workoutInput.focus()
        return false;
    }

    if(/^\d/.test(workout)){ //🤮 Regex
        alert(`What type of workout starts with a number? Try again!`)
        workoutInput.focus();
        return false;
    }

    return workout;
}

// checking if the rep format is correct
function correctRepFormat(){

    let reps = repsInput.value.trim();

    if(reps === ""){
        alert(`Don't Leave your repetitions blank! What would be the whole point of the workout??`)
        repsInput.focus()
        return false;
    }
    
    if(!/^\d+$/.test(reps)){ // ^ -> Start of the string, \d+ -> Matches one or more digits (0-9), $ -> End of the string


        alert("Please only use numbers! No spaces, no letters or special characters!")
        repsInput.focus();
        return false;
    }

    return reps;

}

function correctSetFormat(){
    let sets = repsInput.value.trim();

    if(sets === ""){
        alert(`Don't Leave your sets blank! Come on now.`)
        repsInput.focus()
        return false;
    }
    
    if(!/^\d+$/.test(sets)){ // ^ -> Start of the string, \d+ -> Matches one or more digits (0-9), $ -> End of the string


        alert("Please only use numbers! No spaces, no letters or special characters!")
        repsInput.focus();
        return false;
    }

    return sets;
}
