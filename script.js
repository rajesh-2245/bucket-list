// Select elements
const form = document.getElementById('bucket-form');
const input = document.getElementById('new-item');
const list = document.getElementById('bucket-items');

// Handle form submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newItemText = input.value.trim();

    if (newItemText !== '') {
        addItem(newItemText);
        input.value = '';
    }
});

// Add new item to the list
function addItem(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="icon"><i class="far fa-circle"></i></span>
        ${text}
    `;

    list.appendChild(li);

    // Animate it
    li.style.animation = 'fadeIn 0.5s ease forwards';

    // Add click event to toggle complete
    li.addEventListener('click', toggleComplete);
}

// Toggle complete/incomplete state
function toggleComplete(e) {
    const li = e.currentTarget;
    const icon = li.querySelector('i');

    li.classList.toggle('complete');

    if (li.classList.contains('complete')) {
        icon.classList.remove('far', 'fa-circle');
        icon.classList.add('fas', 'fa-check-circle');
    } else {
        icon.classList.remove('fas', 'fa-check-circle');
        icon.classList.add('far', 'fa-circle');
    }
}

// Add click events to existing list items
document.querySelectorAll('#bucket-items li').forEach(li => {
    li.addEventListener('click', toggleComplete);
});
