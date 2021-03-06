// Treehouse FSJS TD Project 3, Responsive Form & Input Validaton

// General Purpose Variable Declarrations

const form = document.querySelector('form');
const body = document.querySelector('body');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const zipcodeInput = document.getElementById('zip');
const ccNumInput = document.getElementById('cc-num');
const cvvNumInput = document.getElementById('cvv');
let conferenceCost = 0;
let activityCount = 0;
let ccPaymentDiv = document.getElementById('credit-card');
let paypalPaymentDiv = document.getElementById('paypal');
let bitcoinPaymentDiv = document.getElementById('bitcoin');


// Page Load & Initial Focus Section

body.onload = function() {
    nameInput.focus();
    shirtColorSelect.disabled = true;
    selectPaymentOption.hidden = true;
    ccPaymentOption.selected = true;
    paypalPaymentDiv.style.display = 'none';
    bitcoinPaymentDiv.style.display = 'none';
};


// Job Role Variable Declarations

const jobRoleSelect = document.getElementById('title');
const otherJobRoleInput = document.getElementById('other-job-role');
otherJobRoleInput.style.display = 'none';
let roleSelection = jobRoleSelect.value;


// Event Listener for Show or Hide on Text Input Field

jobRoleSelect.addEventListener('change', () => {
    
    roleSelection = jobRoleSelect.value;
    if (roleSelection == 'other') {
        otherJobRoleInput.style.display = 'block';
    } else {
        otherJobRoleInput.style.display = 'none';
    };   
});


// Shirt Size & Design Section, Show / Hide Colors based on Design Selected

const shirtSizeSelect = document.getElementById('size');
let shirtSize = shirtSizeSelect.value;

const shirtDesignSelect = document.getElementById('design');
let shirtDesign = shirtDesignSelect.value;

const shirtColorSelect = document.getElementById('color');
let shirtColor = shirtColorSelect.value;

shirtDesignSelect.addEventListener('change', () => {
    shirtColorSelect.disabled = false;
    
    let shirtDesign = shirtDesignSelect.value;

    if (shirtDesign === 'js puns') {
        // console.log('js puns design selected');
        shirtColorSelect.options[0].selected = true;
        shirtColorSelect.options[0].hidden = false;
        shirtColorSelect.options[1].hidden = false;
        shirtColorSelect.options[2].hidden = false;
        shirtColorSelect.options[3].hidden = true;
        shirtColorSelect.options[4].hidden = true;
        shirtColorSelect.options[5].hidden = true;
    };
    if (shirtDesign === 'heart js') {
        // console.log('heart js design selected');
        shirtColorSelect.options[0].hidden = true;
        shirtColorSelect.options[1].hidden = true;
        shirtColorSelect.options[2].hidden = true;
        shirtColorSelect.options[3].selected = true;
        shirtColorSelect.options[3].hidden = false;
        shirtColorSelect.options[4].hidden = false;
        shirtColorSelect.options[5].hidden = false;

    };
});


// Activities & Cost Variable Assignment(s) Section

const activitiesFieldset = document.querySelector('.activities');
const activitiesArray = activitiesFieldset.querySelectorAll(`input[type = 'checkbox']`);

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


// Adding HTML Element to Dispaly Total Cost for Activities

let activitiesTotalCost = document.createElement("p");
activitiesTotalCost.innerHTML = `Total Cost: $ 0`;
activitiesFieldset.appendChild(activitiesTotalCost); 


// Event Listener for Change(s) to Conference Activity Selection(s)

activitiesFieldset.addEventListener('change', (event) => {

    // Frameworks Course vs. Express Course Schedule Conflict Resolver
    if (frameworksCourse.checked === true) {
        expressCourse.disabled = true;
    } else {
        expressCourse.disabled = false;
    };
    if (expressCourse.checked === true) {
        frameworksCourse.disabled = true;
    } else {
        frameworksCourse.disabled = false;
    };

    // JS Libraries Course vs. Node Course Schedule Conflict Resolver
    if (jsLibsCourse.checked === true) {
        nodeCourse.disabled = true;
    } else {
        nodeCourse.disabled = false;
    };
    if (nodeCourse.checked === true) {
        jsLibsCourse.disabled = true;
    } else {
        jsLibsCourse.disabled = false;
    };
    
    // Total Conference Cost Generator
    conferenceCost = 0;

    for (let i = 0; i < activitiesArray.length; i++) {
        if (activitiesArray[i].checked === true) {            
            conferenceCost += +activitiesArray[i].dataset.cost;
        };        
    };

    activitiesTotalCost.innerHTML = `Total Cost: $ ${conferenceCost}`

});


// Conference Activities Accessibility Section - Focus & Blur Handler(s)

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


// Payment Select Menu & Payment Form Variables Declaration

const paymentSelection = document.querySelector('.credit-card');
const selectPaymentOption = document.querySelector(`option[value="select method"]`);
const ccPaymentOption = document.querySelector(`option[value="credit card"]`);
const paypalPaymentOption = document.querySelector(`option[value="paypal"]`);
const bitcoinPaymentOption = document.querySelector(`option[value="bitcoin"]`);


// Payment Form Selection Event Handler(s)

paymentSelection.addEventListener('change', (event) => { 

    let optionPick = event.target.value;

    if (optionPick === 'credit card') {
        ccPaymentDiv.style.display = 'block';
        paypalPaymentDiv.style.display = 'none';
        bitcoinPaymentDiv.style.display = 'none';
        return optionPick;

    } else if (optionPick === 'paypal') {
        ccPaymentDiv.style.display = 'none';
        paypalPaymentDiv.style.display = 'block';
        bitcoinPaymentDiv.style.display = 'none';
        return optionPick;

    } else if (optionPick === 'bitcoin') {
        ccPaymentDiv.style.display = 'none';
        paypalPaymentDiv.style.display = 'none';
        bitcoinPaymentDiv.style.display = 'block';
        return optionPick;
    };
});


// Error Flag Function; Create -> Style -> Structuring

function createErrorFlag(mode, errMsg, errParentNode) {
    let errorFlag = document.createElement('p');
    errorFlag.style.textAlign = "center";
    errorFlag.style.fontWeight = "bold";
    errorFlag.style.fontSize = "large";
    errorFlag.style.color = "red";
    if (mode === 1) {
        errorFlag.innerHTML = `A Valid ${errMsg} is Required`;
    } else if (mode === 2) {
        errorFlag.innerHTML = `At least one Activity Must Be Selected`;
    };
    errParentNode.insertAdjacentElement("afterend", errorFlag);
    errorFlag.style.display = "none";
    return errorFlag;
};

// Error Messaging Flags Creation & Variable Declaration / Assignment(s)

let usernameErrorFlag = createErrorFlag(1, "User Name", nameInput);
let userEmailErrorFlag = createErrorFlag(1, "User Email", emailInput);
let userActivitiesErrorFlag = createErrorFlag(2, null, activitiesTotalCost);
let userCCNErrorFlag = createErrorFlag(1, "Credit Card Number", ccPaymentDiv);
let userCVNErrorFlag = createErrorFlag(1, "Card Verification Number", ccPaymentDiv)
let userZipcodeErrorFlag = createErrorFlag(1, "Billing Zip Code", ccPaymentDiv);


// Form Element Submit Handler & Input Validation Function(s)

form.addEventListener('submit', (event) => {

    let userName = nameInput.value;
    let userEmail = emailInput.value;
    let userZip = document.getElementById('zip').value;
    let userCCN = document.getElementById('cc-num').value;
    let userCVV = document.getElementById('cvv').value;
    
    if (validateUsername(userName) == false){
        usernameErrorFlag.style.display = "block";
        event.preventDefault();
    };

    if (validateEmail(userEmail) === false) {
        userEmailErrorFlag.style.display = "block";
        event.preventDefault();
    };

    if (validateCheckedAcitivities(activitiesArray) === false) {
        userActivitiesErrorFlag.style.display = "block";
        event.preventDefault();
    };

    if (ccPaymentOption.selected) {
        if (validateCC_Number(userCCN) === false) {
            userCCNErrorFlag.style.display = "block";
            event.preventDefault();
        };
        if (validateCVV_Number(userCVV) === false) {
            userCVNErrorFlag.style.display = "block";
            event.preventDefault();
        };
        if (validateZipcode(userZip) === false) {
            userZipcodeErrorFlag.style.display = "block";
            event.preventDefault();
        };

    };
});


//Form Input Data Validation Function(s)

function validateUsername(user) {
    console.log(user);
    if (user.length > 0) {
        //console.log("USERNAME VALIDATION PASSED")
        return true;
    } else {
        //console.log("USERNAME VALIDATION FAILED")
        return false;
    }
};

function validateEmail(mail) {
 if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail))
  {
    //console.log("EMAIL VALIDATION PASSED")
    return (true)
    
  } else {
      //console.log("EMAIL VALIDATION FAILED")
    return (false)
  };
};

function validateCheckedAcitivities(arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i].checked) {
            activityCount++;
        };
    };
    
    if (activityCount > 0) {
        //console.log("ACTIVITY VALIDATION PASSED")
        return true;
        } else {
            //console.log("ACTIVITY VALIDATION FAILED")
            return false;
        };    
};

function validateCC_Number(ccNumber) {
    if(/^\d{13,16}$/.test(ccNumber)) {
        //console.log("CCN VALIDATION PASSED")
        return true;
    } else {
        //console.log("CCN VALIDATION FAILED")
        return false;
    };
};

function validateCVV_Number(cvvNumber) {
    if (/^[0-9]{3}$/.test(cvvNumber)) {
        //console.log("CVV VALIDATION PASSED")
        return true;
        } else {
            //console.log("CVV VALIDATION FAILED")
            return false;
        }
};

function validateZipcode(zipcode) {
    if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(zipcode)) {
        //console.log("ZIPCODE VALIDATION PASSED")
        return true;
    } else {
        //console.log("ZIPCODE VALIDATION FAILED")
        return false;
    }
};