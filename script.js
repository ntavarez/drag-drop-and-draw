const divs = document.querySelectorAll(".draggable");

const canvasLine = document.getElementById("line");
const context = canvasLine.getContext("2d");

let startDiv, endDiv, clickTimeout;
let isDragging = false;

divs.forEach((div) => {
    div.addEventListener('click', (event) => {
        if (!isDragging) singleClickHandler(div);
    });

    div.addEventListener('dblclick', (event) => {
        if (!isDragging) doubleClickHandler(div);
    });

    div.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });

    div.addEventListener('mousedown', (event) => {
        if (!isDragging) dragAndDrop(event, div);
    });
});

function dragAndDrop(event, element) {
    event.preventDefault();

    let posX = event.clientX - element.getBoundingClientRect().left;
    let posY = event.clientY - element.getBoundingClientRect().top;

    function moveAt(clientX, clientY) {
        element.style.left = clientX - posX + "px";
        element.style.top = clientY - posY + "px";
        drawLine();
    }

    function onMouseMove(event) {
        moveAt(event.clientX, event.clientY);
    }

    document.addEventListener('mousemove', onMouseMove);

    element.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        element.onmouseup = null;
        isDragging = false;
    };

    isDragging = true;
}

function singleClickHandler(element) {
    clearTimeout(clickTimeout);

    clickTimeout = setTimeout(() => {
        if (startDiv !== element) {
            endDiv = element;
            drawLine();
        }
    }, 300);
}

function doubleClickHandler(element) {
    clearTimeout(clickTimeout);

    startDiv = element;
    endDiv = null;
}

function drawLine() {
    context.clearRect(0, 0, canvasLine.width, canvasLine.height);

    if (startDiv && endDiv) {
        let x1 = startDiv.offsetLeft + startDiv.offsetWidth / 2;
        let y1 = startDiv.offsetTop + startDiv.offsetHeight / 2;
        let x2 = endDiv.offsetLeft + endDiv.offsetWidth / 2;
        let y2 = endDiv.offsetTop + endDiv.offsetHeight / 2;

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
}