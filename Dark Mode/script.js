const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
