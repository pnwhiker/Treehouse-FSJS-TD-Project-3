const form = document.querySelector('form');
const body = document.querySelector('body');


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Page Load Focus = Name Input Element

body.onload = function (){
    nameInput.focus();
};

// Job Role Selection = Other = > Text Input Field Vis On/Off

const jobRoleSelect = document.getElementById("title");
let roleSelection = jobRoleSelect.value;
console.log(roleSelection);

jobRoleSelect.addEventListener('change', () => {
    roleSelection = jobRoleSelect.value;
    console.log(roleSelection);

});

