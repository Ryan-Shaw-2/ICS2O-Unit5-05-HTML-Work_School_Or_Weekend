// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function checkClicked () {
  // this function checks if the user should go to work, school or if it's the weekend

  // input
  const weekday = document.getElementById('weekday').checked
  const weekend = document.getElementById('weekend').checked
  const under18 = document.getElementById("age1").checked
  const over18 = document.getElementById("age2").checked
  console.log(weekday, weekend)
  console.log(under18, over18)

  // process
  if (weekday == true && over18 == true) {
    // output
    document.getElementById("user-answer").innerHTML = "Time for work"
  } else if (weekday == true && under18 == true) {
    // output
    document.getElementById("user-answer").innerHTML = "Time for school"
  } else {
    // output
    document.getElementById("user-answer").innerHTML = "Time to relax"
  }
}
