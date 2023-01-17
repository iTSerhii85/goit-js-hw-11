colors.onchange = changeBgColor;

function changeBgColor() {
    document.body.style.background = this.value;
}

changeBgColor();