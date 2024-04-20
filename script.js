// script.js

document.getElementById("checkEligibilityBtn").addEventListener("click", function() {
    var diploma = document.getElementById("diploma").value;
    var experience = document.getElementById("experience").value;
    var graduation = document.getElementById("graduation").value;
    var skill = document.getElementById("skill").value;

    // Simulate eligibility check
    var result = checkEligibility(diploma, experience, graduation, skill);
    
    // Display result
    document.getElementById("result").innerText = result; 
});

function checkEligibility(diploma, experience, graduation, skill) {
    var validDiplomas = ["CS", "CP", "EE"];
    var requiredExperience = 3;
    var latestGraduationYear = 2021;
    var requiredSkill = "JS";

    if (validDiplomas.includes(diploma) && parseInt(experience) >= requiredExperience &&
        parseInt(graduation) <= latestGraduationYear && skill === requiredSkill) { // Modified the condition for graduation year
        return "You are eligible for the open position, your interview is in 1 week!";
    } else {
        return "We are sorry, you are not qualified, we moved on with other candidates";
    }
}
