// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("questionsForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const answers = {};
        for (let [key, value] of formData.entries()) {
            answers[key] = value;
        }

        console.log("Form submitted:", answers);
        alert("Form submitted! Check console for answers.");
    });
});

export default arrOfData = [
    {name: "q1"},
    
]