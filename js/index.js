const colorPicker = document.getElementById("color-picker");
const colorInput = document.getElementById("color-input");

// When user picks a color, update the input field
colorPicker.addEventListener("input", () => {
    colorInput.value = colorPicker.value.toUpperCase();
});

// When user types a color, update the color picker
colorInput.addEventListener("input", () => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(colorInput.value)) {
        colorPicker.value = colorInput.value;
    }
}); 

// ------------dark/light mode----------------

document.body.classList.add("light");
document.getElementById('btn').addEventListener('click',() => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    //document.getElementById('btn').textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});