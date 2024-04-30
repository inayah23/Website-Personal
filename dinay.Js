document.getElementById('check-button').addEventListener('click', function() {
    const input = document.getElementById('scientific-input').value;

    // Regular expression for scientific notation
    const scientificRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

    const result = document.getElementById('result');

    if (scientificRegex.test(input)) {
        result.textContent = "Nomor ilmiah valid!";
        result.style.color = 'green';
    } else {
        result.textContent = "Nomor ilmiah tidak valid.";
        result.style.color = 'red';
    }
});
