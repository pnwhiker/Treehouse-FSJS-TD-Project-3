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
    if          (shirtDesign === 'js puns') {
        // console.log('js puns design selected');
        shirtColorSelect.options[0].disabled = false;
        shirtColorSelect.options[1].disabled = false;
        shirtColorSelect.options[2].disabled = false;
        shirtColorSelect.options[3].disabled = true;
        shirtColorSelect.options[4].disabled = true;
        shirtColorSelect.options[5].disabled = true;
    } else if   (shirtDesign === 'heart js') {
        // console.log('heart js design selected');
        shirtColorSelect.options[0].disabled = true;
        shirtColorSelect.options[1].disabled = true;
        shirtColorSelect.options[2].disabled = true;
        shirtColorSelect.options[3].disabled = false;
        shirtColorSelect.options[4].disabled = false;
        shirtColorSelect.options[5].disabled = false;

    };

});

// Activities Section

const activitiesFieldset = document.querySelector('.activities');

const mainConference = document.querySelector(`input[name="all"]`);
const mainConferenceCost = parseInt(mainConference.dataset.cost);

const frameworksCourse = document.querySelector(`input[name="js-frameworks"]`);
const frameworksCourseCost = frameworksCourse.dataset.cost;

const jsLibsCourse = document.querySelector(`input[name="js-libs"]`);
const jsLibsCourseCost = jsLibsCourse.dataset.cost;

const expressCourse = document.querySelector(`input[name="express"]`);
const expressCourseCost = expressCourse.dataset.cost;

const nodeCourse = document.querySelector(`input[name="node"]`);
const nodeCourseCost = nodeCourse.dataset.cost;

const buildToolsCourse = document.querySelector(`input[name="build-tools"]`);
const buildToolsCourseCost = buildToolsCourse.dataset.cost;

const npmCourse = document.querySelector(`input[name="npm"]`);
const npmCourseCost = npmCourse.dataset.cost;

function costCalculator() {
    let cost = 0;
    
    return cost;
};

activitiesFieldset.addEventListener('change', (event) => {
    let totalCost = costCalculator();
    console.log(totalCost);


});