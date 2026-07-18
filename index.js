
function addPoint(button, point) {
    const column = button.closest(".column");
    const score = column.querySelector(".score");
    
    score.textContent = Number(score.textContent) + point;
}

