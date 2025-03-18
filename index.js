let mainEl = document.querySelector("main");

let inputDiv = document.createElement("div")
inputDiv.id = "inputDiv"
inputDiv.innerHTML = '<h1>Workout Tracker</h1>'
mainEl.appendChild(inputDiv)

let workoutForm = document.createElement("form")
workoutForm.id = "workoutForm"
inputDiv.appendChild(workoutForm)

let workoutInput = document.createElement("input")
workoutInput.type = "text"
workoutInput.id = "workout-name"
workoutInput.placeholder = "Workout Name"
workoutForm.appendChild(workoutInput)

let repsInput = document.createElement("input");
repsInput.type = "text"
repsInput.id = "reps"
repsInput.placeholder = "Amount Of Reps"
workoutForm.appendChild(repsInput)

let amountOfSets = document.createElement("input")
amountOfSets.type ="text"
amountOfSets.id = "sets"
amountOfSets.placeholder = "Amount Of Sets"
workoutForm.appendChild(amountOfSets)

let toDoDiv = document.createElement("div")
toDoDiv.id = "toDo"
toDoDiv.innerHTML = "<h2>Workouts To Do</h2>"
mainEl.appendChild(toDoDiv)

let workoutsToDoUl = document.createElement("ul")
workoutsToDoUl.id =  "workoutsToDoUl"
toDoDiv.appendChild(workoutsToDoUl)

let completedWorkoutsDiv = document.createElement("div");
completedWorkoutsDiv.id = "completedWorkoutsDiv"
completedWorkoutsDiv.innerHTML = "<h2>Completed Workouts</h2>"
mainEl.appendChild(completedWorkoutsDiv)

let completedWorkoutsUl = document.createElement("ul")
completedWorkoutsUl.id = "completedWorkoutsUl"
completedWorkoutsDiv.appendChild(completedWorkoutsUl)



