// 1. Guardar referencias a los elementos del DOM
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const jobInput = document.getElementById('job');
const designationInput = document.getElementById('designation');
const productTypeInput = document.getElementById('productType');
const feedbackInput = document.getElementById('feedbackText');

const submitButton = document.getElementById('submitBtn');

// 2. Definir la función de envío
function submitFeedback() {
    // Leer los valores en el MOMENTO en que se ejecuta la función
    document.getElementById('userName').innerHTML = nameInput.value;
    document.getElementById('userAge').innerHTML = ageInput.value;
    document.getElementById('userEmail').innerHTML = emailInput.value;
    document.getElementById('userJob').innerHTML = jobInput.value;
    document.getElementById('userDesignation').innerHTML = designationInput.value;
    document.getElementById('userProductChoice').innerHTML = productTypeInput.value;
    document.getElementById('userFeedback').innerHTML = feedbackInput.value;
    
    document.getElementById('userInfo').style.display = 'block';

    // El alert debe mostrarse aquí, después de procesar los datos
    alert('Thank you for your valuable feedback');
}

// 3. Asignar los escuchadores de eventos
submitButton.addEventListener('click', submitFeedback);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
});