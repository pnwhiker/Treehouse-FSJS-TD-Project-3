// General Purpose Variables Section

const form = document.querySelector('form');
const body = document.querySelector('body');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Page Load & Focus Section

body.onload = function (){
    nameInput.focus();
    shirtColorSelect.disabled = true;
};

// Job Role Section

const jobRoleSelect = document.getElementById('title');
const otherJobRoleInput = document.getElementById('other-job-role');
otherJobRoleInput.style.display = 'none';

let roleSelection = jobRoleSelect.value;
console.log(`first role selection is: ${roleSelection}`);

jobRoleSelect.addEventListener('change', () => {
    roleSelection = jobRoleSelect.value;
    // console.log(roleSelection);  Test Line: roleSelection var contents

    if (roleSelection === 'other') {
        otherJobRoleInput.style.display = 'block';
    } else {
        otherJobRoleInput.style.display = 'none';
    }   

});


// Shirt Size & Design Section

const shirtSizeSelect = document.getElementById('size');
let shirtSize = shirtSizeSelect.value;

const shirtDesignSelect = document.getElementById('design');
let shirtDesign = shirtDesignSelect.value;

const shirtColorSelect = document.getElementById('color');
let shirtColor = shirtColorSelect.value;

shirtDesignSelect.addEventListener('change', () => {
    shirtColorSelect.disabled = false;
    
    let shirtDesign = shirtDesignSelect.value;
    // console.log(shirtDesign);  Test Line: shirtDesign var contents

    if (shirtDesign === 'js puns') {

    } else if (shirtDesign === 'heart js') {

    };

});

// Activities Section

