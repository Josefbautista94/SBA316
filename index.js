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
applyButton.style.background = "linear-gradient(205deg, #0a1f44, #1e3c72, #f4a604)";
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

// Array of random fitness facts

//Ngl i'm doing this for the 5% right here
let randomFactsDiv = document.getElementById("randomFactsDiv");
randomFactsDiv.style.width = "60em";
randomFactsDiv.style.height = "10em"
randomFactsDiv.style.backgroundColor = "rgb(40, 40, 40)"
randomFactsDiv.style.border = "2px solid rgb(180, 180, 180)";
randomFactsDiv.style.color = "rgb(255, 255, 255)";
randomFactsDiv.style.marginBottom = "2em"
randomFactsDiv.style.display = "flex"
randomFactsDiv.style.flexDirection = "column"
randomFactsDiv.style.alignItems = "center";

applyButton.addEventListener("click", addWorkoutToList);

// Attach event listener to form for "Enter" submission
workoutForm.addEventListener("submit", function (event) {
    event.preventDefault()
    okToAddToList(event)
})

function addWorkoutToList() {

    const workoutName = correctWorkoutFormat();
    const reps = correctRepFormat();
    const sets = correctSetFormat();

    if (!workoutName || !reps || !sets) { // returns early if any validation fails.
        return;
    }

    //creating a new list item here
    let newListItem = document.createElement("li")
    newListItem.innerHTML = `<strong>${workoutName}</strong> - Reps : ${reps} Sets : ${sets}`

    //lets style here
    newListItem.style.borderBottom = "2px solid rgba(255, 255, 255, 0.3)"
    newListItem.style.padding = "10px"
    newListItem.style.margin = "5px 0";
    newListItem.style.color = "white";

    let completeButton = document.createElement("button");
    completeButton.innerHTML = "Completed ✔️"
    

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete 🗑️";


    completeButton.addEventListener("click", function(){
        newListItem.remove();
        newListItem.removeChild(completeButton);
        completedWorkoutsUl.appendChild(newListItem)
    })

    newListItem.appendChild(completeButton);
    newListItem.appendChild(deleteButton)

    workoutsToDoUl.appendChild(newListItem);


    //lets clear all inputs here
    workoutInput.value = "";
    repsInput.value = "";
    amountOfSets.value = "";
}

function correctWorkoutFormat() {
    let workout = workoutInput.value.trim();

    if (workout === "") {
        alert(`You can leave this blank! Wake Up!`);
        workoutInput.focus()
        return false;
    }

    if (/^\d/.test(workout)) { //🤮 Regex
        alert(`What type of workout starts with a number? Try again!`)
        workoutInput.focus();
        return false;
    }

    return workout;
}

// checking if the rep format is correct
function correctRepFormat() {

    let reps = repsInput.value.trim();

    if (reps === "") {
        alert(`Don't Leave your repetitions blank! What would be the whole point of the workout??`)
        repsInput.focus()
        return false;
    }

    if (!/^\d+$/.test(reps)) { // ^ -> Start of the string, \d+ -> Matches one or more digits (0-9), $ -> End of the string

        alert("Please only use numbers! No spaces, no letters or special characters!")
        repsInput.focus();
        return false;
    }

    return reps;

}

function correctSetFormat() {
    let sets = amountOfSets.value.trim();

    if (sets === "") {
        alert(`Don't Leave your sets blank! Come on now.`)
        amountOfSets.focus()
        return false;
    }

    if (!/^\d+$/.test(sets)) { // ^ -> Start of the string, \d+ -> Matches one or more digits (0-9), $ -> End of the string


        alert("Please only use numbers! No spaces, no letters or special characters!")
        amountOfSets.focus();
        return false;
    }

    return sets;
}


function completedWorkouts() {

}




const fitnessFacts = [
    "Muscles grow during rest, not during workouts.",
    "The human body has over 600 muscles!",
    "Lifting weights boosts metabolism for up to 38 hours after a workout.",
    "Running barefoot can reduce impact forces on your joints.",
    "Your body starts burning fat after about 20 minutes of steady cardio.",
    "The heart is a muscle and can be strengthened through exercise.",
    "Skipping meals slows metabolism.",
    "Exercise can improve memory and learning ability.",
    "Dehydration reduces workout performance.",
    "Jumping rope burns more calories per minute than running.",
    "Your body burns calories even when you're not moving.",
    "The world record for the longest plank is over 9 hours!",
    "Magnesium helps with muscle recovery.",
    "The strongest muscle in the human body (by weight) is the jaw muscle.",
    "A single push-up works over 200 muscles in your body.",
    "Walking just 30 minutes a day can improve mood and overall health.",
    "Squats engage more muscles than any other exercise.",
    "Your glutes are the largest muscle group in the human body.",
    "Regular exercise can reduce stress and anxiety by increasing endorphin levels.",
    "Strength training improves posture by strengthening core muscles.",
    "Sprinting for just 10 seconds can activate more muscle fibers than jogging for 10 minutes.",
    "Swimming is one of the best full-body workouts while being low impact.",
    "You start losing muscle strength after just two weeks of inactivity.",
    "Exercise helps regulate blood sugar and reduces the risk of diabetes.",
    "Stretching before a workout doesn’t prevent injuries as much as warming up does.",
    "Caffeine can boost workout performance by increasing endurance and focus.",
    "Weightlifting doesn’t make you bulky overnight—it takes time and proper nutrition.",
    "Sore muscles after a workout aren’t always a sign of a good workout.",
    "The human body is naturally stronger in the late afternoon than in the morning.",
    "Core strength is about more than abs—it supports your entire body’s movement.",
    "Drinking water before a workout improves endurance and prevents cramping.",
    "Rest days are just as important as workout days for muscle growth and recovery.",
    "Lack of sleep can slow down muscle recovery and fat loss.",
    "Exercising in the morning can boost energy levels for the entire day.",
    "Your body burns the most fat at moderate intensity rather than extreme intensity.",
    "Yoga can improve flexibility, reduce stress, and even boost strength.",
    "Cycling is one of the best ways to improve leg endurance and cardiovascular health.",
    "Good posture can make you appear taller and more confident.",
    "Cardio exercise can improve brain function and memory over time.",
    "People who work out regularly tend to have better focus and concentration.",
    "Lifting weights can improve bone density and reduce the risk of osteoporosis.",
    "HIIT (High-Intensity Interval Training) workouts burn more calories in less time.",
    "Jumping rope for 10 minutes is equivalent to running an 8-minute mile.",
    "Boxing is a great way to improve coordination, agility, and cardiovascular endurance.",
    "Planking works more than just your abs—it strengthens your shoulders, legs, and back.",
    "Rowing machines provide a full-body workout and are easy on the joints.",
    "Listening to music while working out can improve endurance and motivation.",
    "Your body adapts to workouts, so switching exercises prevents plateaus.",
    "The best way to improve at push-ups is to do them consistently over time.",
    "You don’t need to lift heavy weights to get stronger—progressive overload matters more.",
    "Running uphill burns more calories than running on flat ground.",
    "Strong leg muscles reduce the risk of knee and back pain.",
    "Deadlifts work almost every major muscle in the body.",
    "The best recovery drink after a workout is water with electrolytes or a protein shake.",
    "Flexibility exercises help reduce the risk of injury and improve mobility.",
    "Consistent strength training can reduce lower back pain over time.",
    "Workout consistency is more important than workout intensity.",
    "Good nutrition is just as important as exercise for reaching fitness goals.",
    "Working out with a friend increases motivation and accountability.",
    "Standing burns more calories than sitting, even when you're not moving.",
    "Cold showers after a workout can help reduce muscle inflammation and soreness.",
    "Even a 5-minute workout is better than skipping exercise entirely."
];

function showRandomFact() {
    let randomIndex = Math.floor(Math.random() * fitnessFacts.length) // using math.floor() to round up the number to choose a random index in the array of facts
    randomFactsDiv.innerHTML = `<h1>Random Fitness Facts</h1> <p>${fitnessFacts[randomIndex]}</p>`
}

showRandomFact();

// Change fact every 15 seconds
setInterval(showRandomFact, 15000);

