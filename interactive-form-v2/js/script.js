const form = document.querySelector('form');
const body = document.querySelector('body');


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Page Load Focus = Name Input Element

body.onload = function (){
    nameInput.focus();
};

// Job Role Selection = Other = > Text Input Field Vis On/Off

const jobRole = document.getElementById("title");
