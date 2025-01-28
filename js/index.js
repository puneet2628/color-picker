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