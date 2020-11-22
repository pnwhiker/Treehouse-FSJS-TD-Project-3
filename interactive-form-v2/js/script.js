const form = document.querySelector('form');
const body = document.querySelector('body');


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Page Load Focus = Name Input Element

body.onload = function (){
    nameInput.focus();
};

// Job Role Selection = Other = > Text Input Field Vis On/Off

const jobRoleSelect = document.getElementById('title');

const otherJobRoleInput = document.getElementById('other-job-role');
otherJobRoleInput.style.display = 'none';

let roleSelection = jobRoleSelect.value;
console.log(`first role selection is: ${roleSelection}`);



jobRoleSelect.addEventListener('change', () => {
    roleSelection = jobRoleSelect.value;
    console.log(roleSelection);
    if (roleSelection === 'other') {
        otherJobRoleInput.style.display = 'block';
    } else {
        otherJobRoleInput.style.display = 'none';
    }
    
    
        
    

});

