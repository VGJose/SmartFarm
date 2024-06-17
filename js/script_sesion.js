
// INICIO DE SESION //

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const backToMain1 = document.getElementById('backToMain1');
const backToMain2 = document.getElementById('backToMain2');
const container = document.getElementById('container');
const Gotofront1 = document.getElementById('gotofront1');
const Gotofront2 = document.getElementById('gotofront2');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

backToMain1.addEventListener('click', () => {
    window.location.href = 'index.html'; 
});

backToMain2.addEventListener('click', () => {
    window.location.href = 'index.html'; L
});

Gotofront1.addEventListener('click', () => {
    window.location.href = 'front_index.html'; 
});
Gotofront2.addEventListener('click', () => {
    window.location.href = 'front_index.html'; 
});