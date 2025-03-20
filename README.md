🏋🏻‍♂️ Workout Tracker

📌 Overview
This Workout Tracker is a simple web app that allows users to log their workouts, track progress, and store their data using localStorage. The app dynamically updates the UI using JavaScript and provides an interactive way to manage workouts efficiently.

🛠️ How the App Works
Users input a workout name, number of reps, and sets into the form.
Clicking "Add To List" saves the workout in the To-Do List.
Clicking "Completed ✔️" moves the workout to the Completed Workouts list.
Clicking "Delete 🗑️" removes the workout.
The app automatically saves all workouts using localStorage, so data remains after refreshing.
A random fitness fact is displayed and updated every 15 seconds.

Function Breakdown
addWorkoutToList(event)
Handles the submission of new workouts.
Retrieves workout name, reps, and sets from user input.
Creates a new list item (<li>) with buttons for completing or deleting the workout.
Appends the workout to the To-Do List.
Saves data to localStorage.
correctWorkoutFormat()
Ensures the workout name is valid.
Prevents empty inputs or workout names that start with a number.
correctRepFormat()
Ensures the reps input contains only numbers and is not empty.
correctSetFormat()
Ensures the sets input contains only numbers and is not empty.
updateLocalStorage()
Saves both the To-Do List and Completed Workouts lists to localStorage.
loadWorkoutsFromStorage()
Retrieves saved workouts from localStorage when the page loads.
Populates the To-Do List and Completed Workouts from stored data.
showRandomFact()
Displays a random fitness fact in the UI.
Updates the fact every 15 seconds using setInterval().
