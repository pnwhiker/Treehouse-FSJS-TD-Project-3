// General Purpose Variables Section

const form = document.querySelector('form');
const body = document.querySelector('body');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');


// Page Load & Focus Section

body.onload = function (){
    nameInput.focus();
    shirtColorSelect.disabled = true;
    ccPaymentOption.selected = true;
    paypalPaymentDiv.style.display = 'none';
    bitcoinPaymentDiv.style.display = 'none';

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
const frameworksCourseCost = parseInt(frameworksCourse.dataset.cost);

const jsLibsCourse = document.querySelector(`input[name="js-libs"]`);
const jsLibsCourseCost = parseInt(jsLibsCourse.dataset.cost);

const expressCourse = document.querySelector(`input[name="express"]`);
const expressCourseCost = parseInt(expressCourse.dataset.cost);

const nodeCourse = document.querySelector(`input[name="node"]`);
const nodeCourseCost = parseInt(nodeCourse.dataset.cost);

const buildToolsCourse = document.querySelector(`input[name="build-tools"]`);
const buildToolsCourseCost = parseInt(buildToolsCourse.dataset.cost);

const npmCourse = document.querySelector(`input[name="npm"]`);
const npmCourseCost = parseInt(npmCourse.dataset.cost);




// Activities Accessibility Section - Focus & Blur Handler(s)

mainConference.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
mainConference.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});

frameworksCourse.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
frameworksCourse.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});

jsLibsCourse.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
jsLibsCourse.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});

expressCourse.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
expressCourse.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});

nodeCourse.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
nodeCourse.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});

buildToolsCourse.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
buildToolsCourse.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});

npmCourse.addEventListener('focus', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.className = 'focus';
});
npmCourse.addEventListener('blur', (event) => {
    let beta = event.target;
    let alpha = beta.parentNode;
    alpha.classList.remove('focus');
    alpha.className = 'blur';
});


// Payment Section

// Payment Select Menu & Payment Form Variables
const paymentSelection = document.getElementById('payment');
const ccPaymentOption = document.querySelector(`option[value="credit card"]`);
const paypalPaymentOption = document.querySelector(`option[value="paypal"]`);
const bitcoinPaymentOption = document.querySelector(`option[value="bitcoin"]`);

// Payment Form Div(s)

ccPaymentDiv = document.getElementById('credit-card');
paypalPaymentDiv = document.getElementById('paypal');
bitcoinPaymentDiv = document.getElementById('bitcoin');


// Payment Form Selection Event Handler(s)

paymentSelection.addEventListener('change', (event) => { 

    let optionPick = event.target.value;

    if (optionPick === 'credit card') {
        ccPaymentDiv.style.display = 'block';
        paypalPaymentDiv.style.display = 'none';
        bitcoinPaymentDiv.style.display = 'none';

    } else if (optionPick === 'paypal') {
        ccPaymentDiv.style.display = 'none';
        paypalPaymentDiv.style.display = 'block';
        bitcoinPaymentDiv.style.display = 'none';

    } else if (optionPick === 'bitcoin') {
        ccPaymentDiv.style.display = 'none';
        paypalPaymentDiv.style.display = 'none';
        bitcoinPaymentDiv.style.display = 'block';

    };
});

// Form Element Validation & Testing

function ValidateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  } else {
    return (false)
  };
};