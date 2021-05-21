// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Positive-and-Negative

"use strict"

function enterClicked() {
  //input
  const number = parseInt(document.getElementById("number").value)

  // process
  if (number < 0) {
    //output that answer is negative
    document.getElementById('answer').innerHTML = "It is negative."
  } else {
    //output that answer is positive
    document.getElementById('answer').innerHTML = "It is positive."
  }
}