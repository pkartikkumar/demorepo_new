document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('bmi-result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        if (height > 0 && weight > 0) {
            const bmi = weight / ((height / 100) ** 2);
            let category = '';
            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi < 25) {
                category = 'Normal weight';
            } else if (bmi < 30) {
                category = 'Overweight';
            } else {
                category = 'Obesity';
            }
            resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})`;
        } else {
            resultDiv.textContent = 'Please enter valid height and weight.';
        }
    });
});
