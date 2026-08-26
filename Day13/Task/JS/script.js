const nameInput = document.querySelector(".name");
const ageInput = document.querySelector(".age");
const jobInput = document.querySelector(".job");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function () {

    const fullName = nameInput.value;
    const age = ageInput.value;
    const job = jobInput.value;

    if (fullName === "" || age === "" || job === "") {
        alert("Please fill all fields");
    } else {
        console.log(`Name: ${fullName}`);
        console.log(`Age: ${age}`);
        console.log(`Job title: ${job}`);

        if (age < 18) {
            alert("You are under age");
        } else {
            alert("Registration Completed");
        }
    }

});