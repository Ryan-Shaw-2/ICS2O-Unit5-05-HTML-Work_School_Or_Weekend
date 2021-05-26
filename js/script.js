// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function checkClicked () {
  // this function checks whether the user will get a discount at the museum

  // input
  const userDay = document.getElementById("user-day").value
  const userAge = parseInt(document.getElementById("user-age").value)

  // process
  if (!(userDay == "saturday" || userDay == "sunday") && (userAge >= 18)) {
    // output
    document.getElementById("user-answer").innerHTML = "Time for work"
  } else if (!(userDay == "saturday" || userDay == "sunday") && (userAge < 18)) {
    // output
    document.getElementById("user-answer").innerHTML = "Time for school"
  } else {
    // output
    document.getElementById("user-answer").innerHTML = "Time to relax"
  }
}
