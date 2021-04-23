var canvas, context, nodeNum;
var allRects = [];
var numbers = [];
var newNodeNum = 200;
var removeNodeNumX = 50;
var removeNodeNumY = 275;
var frameCounter = 0;
var moveNumFrameCounter = 0;
var moveCircle = false;
var moveSecondCircle = false;
var moveToTemp = true;
var moveToCurrent = false;
var moveFromTemp = false;
var centerX = 238;
var centerY = 163;
var searchNum;
var searchIndex = 1;
var sortIndex1 = 1;
var sortIndex2 = 2;
var sort1CenterX = 63;
var sort1CenterY = 263;
var sort2CenterX = 163;
var sort2CenterY = 263;
var moveNum1X = 0;
var moveNum1Y = 0;
var moveNum2X = 0;
var moveNum2Y = 0;
var moveTempX = 500;
var moveTempY = 75;
var num1FrameX = 0;
var num1FrameY = 0;
var num2FrameX = 0;
var num2FrameY = 0;
var tempFrameX = 0;
var tempFrameY = 0;

function rect(x, y, width, height, border) {
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height,
    this.borderWidth = border
};

function drawFirstRectangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    context.font = '20px Sans-Serif';
    context.fillText("Pushing value: ", 25, 75);

    if (allRects.length > 1) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 2].x + 37, allRects[allRects.length - 2].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 2].x + 32, allRects[allRects.length - 2].y - 10)
        context.lineTo(allRects[allRects.length - 2].x + 37, allRects[allRects.length - 2].y);
        context.lineTo(allRects[allRects.length - 2].x + 43, allRects[allRects.length - 2].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }
    else if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    for (var i = 0; i < allRects.length - 1; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.lineWidth = 2;

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }

    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(allRects[allRects.length - 1].x + 55, allRects[allRects.length - 1].y);
    context.lineTo(allRects[allRects.length - 1].x + 55, allRects[allRects.length - 1].y + 75);
    context.stroke();

    context.strokeRect(allRects[allRects.length - 1].x, allRects[allRects.length - 1].y, allRects[allRects.length - 1].width, allRects[allRects.length - 1].height);
}

function drawRectangle() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    for (var i = 0; i < allRects.length; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.lineWidth = 2;

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }
}

function removeRectangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    context.font = '20px Sans-Serif';
    context.fillText("Popping value: ", 25, 75);

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    for (var i = 0; i < allRects.length - 1; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.lineWidth = 2;

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }

    context.beginPath();
    context.moveTo(allRects[allRects.length - 1].x + 55, allRects[allRects.length - 1].y);
    context.lineTo(allRects[allRects.length - 1].x + 55, allRects[allRects.length - 1].y + 75);
    context.stroke();

    context.strokeRect(allRects[allRects.length - 1].x, allRects[allRects.length - 1].y, allRects[allRects.length - 1].width, allRects[allRects.length - 1].height);
}

function drawCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    context.font = '20px Sans-Serif';
    context.fillText("Searching linked list...", 25, 75);

    for (var i = 0; i < allRects.length; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }

    context.lineWidth = 2;

    context.beginPath();
    context.arc(centerX, centerY, 38, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();
}

function drawFinishedSearch() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    context.font = '20px Sans-Serif';
    context.fillText("Finished searching.", 25, 75);

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    for (var i = 0; i < allRects.length; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.lineWidth = 2;

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }
}

function drawTwoCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    context.font = '20px Sans-Serif';
    context.fillText("Sorting linked list...", 25, 75);

    for (var i = 0; i < allRects.length; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }

    context.lineWidth = 2;

    context.beginPath();
    context.arc(sort1CenterX, sort1CenterY, 38, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.arc(sort2CenterX, sort2CenterY, 38, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();
}

function drawMovingNumbers() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    context.font = '20px Sans-Serif';
    context.fillText("Sorting linked list...", 25, 75);

    context.font = '20px Sans-Serif';
    context.fillText("temp:", 450, 125);

    for (var i = 0; i < allRects.length; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        if (i != allRects.length - sortIndex1 && i != allRects.length - sortIndex2) {
            context.font = '20px Sans-Serif';
            context.fillText(numbers[i], r.x + 25, r.y + 50);
        }
        else if (i == allRects.length - sortIndex1) {
            context.font = '20px Sans-Serif';
            context.fillText(numbers[i], moveNum1X + 25, moveNum1Y + 50);
        }
        else if (i == allRects.length - sortIndex2) {
            context.font = '20px Sans-Serif';
            context.fillText(numbers[i], moveNum2X + 25, moveNum2Y + 50);
        }
    }

    context.lineWidth = 2;

    context.beginPath();
    context.arc(sort1CenterX, sort1CenterY, 38, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.arc(sort2CenterX, sort2CenterY, 38, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();
}

function drawFinishedSort() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    context.font = '20px Sans-Serif';
    context.fillText("Finished sorting.", 25, 75);

    if (allRects.length > 0) {
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(238, 162);
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y - 10);
        context.stroke();

        context.beginPath();
        context.moveTo(allRects[allRects.length - 1].x + 32, allRects[allRects.length - 1].y - 10)
        context.lineTo(allRects[allRects.length - 1].x + 37, allRects[allRects.length - 1].y);
        context.lineTo(allRects[allRects.length - 1].x + 43, allRects[allRects.length - 1].y - 10);
        context.closePath();

        context.fillStyle = "black";
        context.fill();
    }

    if (allRects.length == 0) {
        context.beginPath();
        context.moveTo(200, 125);
        context.lineTo(275, 200);
        context.stroke();
    }

    for (var i = 0; i < allRects.length; i++) {
        context.lineWidth = 2;

        var r = allRects[i];
        context.strokeRect(r.x, r.y, r.width, r.height);

        context.beginPath();
        context.moveTo(r.x + 55, r.y);
        context.lineTo(r.x + 55, r.y + 75);
        context.stroke();

        if (i == 0) {
            context.beginPath();
            context.moveTo(r.x + 55, r.y);
            context.lineTo(r.x + 75, r.y + 75);
            context.stroke();
        }

        if (i != 0) {
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(r.x + 65, r.y + 37);
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.stroke();

            context.beginPath();
            context.moveTo(allRects[i - 1].x - 10, allRects[i - 1].y + 32)
            context.lineTo(allRects[i - 1].x, allRects[i - 1].y + 37);
            context.lineTo(allRects[i - 1].x - 10, allRects[i - 1].y + 43);
            context.closePath();

            context.fillStyle = "black";
            context.fill();
        }

        context.lineWidth = 2;

        context.font = '20px Sans-Serif';
        context.fillText(numbers[i], r.x + 25, r.y + 50);
    }
}

function animateNewNode(time) {
    drawFirstRectangle();

    context.fillText(numbers[numbers.length - 1], newNodeNum, 75);

    let reqAnim;

    if (newNodeNum < 350) {
        newNodeNum += 5;
        reqAnim = window.requestAnimationFrame(animateNewNode);
    }
    else {
        newNodeNum = 200;
        window.cancelAnimationFrame(reqAnim);
        reqAnim = window.requestAnimationFrame(animatePreviousNodes);
    }
}

function animatePreviousNodes(time) {
    for (var i = 0; i < allRects.length; i++) {
        if (i == allRects.length - 1) {
            if (allRects[i].x > 0) {
                allRects[i].x -= 15;
                allRects[i].y += 10;
            }
        }
        else if ((i + 1) % 10 == allRects.length % 10 && allRects.length > 10) {
            allRects[i].x -= 45;
            allRects[i].y += 5;
        }
        else if(allRects[i].x < 25 + 100 * (allRects.length - 1 - i)) {
            allRects[i].x += 5;
        }
    }

    drawRectangle();

    let reqAnim;

    if (frameCounter < 19) {
        frameCounter += 1;
        reqAnim = window.requestAnimationFrame(animatePreviousNodes);
    }
    else {
        window.cancelAnimationFrame(reqAnim);

        document.getElementById('txtNumber').disabled = false;
        document.getElementById('btnCreate').disabled = false;
        document.getElementById('btnRemove').disabled = false;
        document.getElementById('btnSearch').disabled = false;
        document.getElementById('btnSort').disabled = false;

        nodeNum.value = "";
        frameCounter = 0;
    }
}

function animateRemoveNode(time) {
    removeRectangle();

    context.fillText(numbers[numbers.length - 1], removeNodeNumX, removeNodeNumY);

    let reqAnim;

    if (removeNodeNumY > 75) {
        removeNodeNumX += 7;
        removeNodeNumY -= 10;

        reqAnim = window.requestAnimationFrame(animateRemoveNode);
    }
    else {
        removeNodeNumX = 50;
        removeNodeNumY = 275;

        window.cancelAnimationFrame(reqAnim);

        allRects.pop();
        numbers.pop();

        reqAnim = window.requestAnimationFrame(animateRemovePreviousNodes);
    }
}

function animateRemovePreviousNodes(time) {
    for (var i = 0; i < allRects.length; i++) {
        if ((i + 1) % 10 == (allRects.length + 1) % 10 && (allRects.length + 1) > 10) {
            allRects[i].x += 45;
            allRects[i].y -= 5;
        }
        else{
            allRects[i].x -= 5;
        }
    }

    drawRectangle();

    let reqAnim;

    if (frameCounter < 19) {
        frameCounter += 1;
        reqAnim = window.requestAnimationFrame(animateRemovePreviousNodes);
    }
    else {
        window.cancelAnimationFrame(reqAnim);

        document.getElementById('txtNumber').disabled = false;
        document.getElementById('btnCreate').disabled = false;
        document.getElementById('btnRemove').disabled = false;
        document.getElementById('btnSearch').disabled = false;
        document.getElementById('btnSort').disabled = false;

        frameCounter = 0;
    }
}

function animateSearchHead(time) {
    drawCircle();

    let reqAnim;

    if (allRects.length > 0) {
        if (frameCounter < 19) {
            frameCounter += 1;
            centerX -= 8;
            centerY += 5;
            reqAnim = window.requestAnimationFrame(animateSearchHead);
        }
        else {
            centerX = 63;
            centerY = 263;
            window.cancelAnimationFrame(reqAnim);

            frameCounter = 0;
            reqAnim = window.requestAnimationFrame(animateSearch);
        }
    }
    else {
        window.cancelAnimationFrame(reqAnim);

        drawFinishedSearch();

        context.font = '20px Sans-Serif';
        context.fillText("Integer not found in linked list.", 205, 75);

        document.getElementById('txtNumber').disabled = false;
        document.getElementById('btnCreate').disabled = false;
        document.getElementById('btnRemove').disabled = false;
        document.getElementById('btnSearch').disabled = false;
        document.getElementById('btnSort').disabled = false;

        nodeNum.value = "";
        frameCounter = 0;
        searchIndex = 1;
        centerX = 238;
        centerY = 163;
    }
}

function animateSearch(time) {
    drawCircle();

    let reqAnim;

    if (frameCounter < 35 && !moveCircle) {
        if (searchIndex > allRects.length) {
            window.cancelAnimationFrame(reqAnim);

            drawFinishedSearch();

            context.font = '20px Sans-Serif';
            context.fillText("Integer not found in linked list.", 205, 75);
            

            document.getElementById('txtNumber').disabled = false;
            document.getElementById('btnCreate').disabled = false;
            document.getElementById('btnRemove').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnSort').disabled = false;

            nodeNum.value = "";
            frameCounter = 0;
            moveCircle = false;
            searchIndex = 1;
            centerX = 238;
            centerY = 163;
        }
        else if (searchIndex != allRects.length - searchNum) {
            frameCounter += 1;
            reqAnim = window.requestAnimationFrame(animateSearch);
        }
        else {
            window.cancelAnimationFrame(reqAnim);

            drawFinishedSearch();

            context.font = '20px Sans-Serif';
            context.fillText("Integer was found " + searchIndex.toString() + " nodes from the top.", 205, 75);

            document.getElementById('txtNumber').disabled = false;
            document.getElementById('btnCreate').disabled = false;
            document.getElementById('btnRemove').disabled = false;
            document.getElementById('btnSearch').disabled = false;
            document.getElementById('btnSort').disabled = false;

            nodeNum.value = "";
            frameCounter = 0;
            moveCircle = false;
            searchIndex = 1;
            centerX = 238;
            centerY = 163;
        }
    }
    else {
        if (!moveCircle) {
            frameCounter = 0;
            moveCircle = true;
        }

        if (searchIndex % 10 == 0 && allRects.length > 10) {
            centerX -= 45;
            centerY += 5;
        }
        else {
            centerX += 5;
        }
        
        if (frameCounter < 19) {
            frameCounter += 1;
            reqAnim = window.requestAnimationFrame(animateSearch);
        }
        else {
            frameCounter = 0;
            moveCircle = false;
            searchIndex += 1;

            reqAnim = window.requestAnimationFrame(animateSearch);
        }
    }
}

function animateMoveNumbers(time) {
    drawMovingNumbers();

    if (moveNumFrameCounter < 25 && moveToTemp) {
        moveNumFrameCounter += 1;

        moveNum1X += num1FrameX;
        moveNum1Y += num1FrameY;

        if (moveNumFrameCounter == 25) {
            moveToTemp = false;
            moveToCurrent = true;
            moveNumFrameCounter = 0;

            reqAnim = window.requestAnimationFrame(animateMoveNumbers);
        }
        else {
            reqAnim = window.requestAnimationFrame(animateMoveNumbers);
        }
    }
    else if (moveNumFrameCounter < 25 && moveToCurrent) {
        moveNumFrameCounter += 1;

        moveNum2X += num2FrameX;
        moveNum2Y += num2FrameY;

        if (moveNumFrameCounter == 25) {
            moveToCurrent = false;
            moveFromTemp = true;
            moveNumFrameCounter = 0;

            reqAnim = window.requestAnimationFrame(animateMoveNumbers);
        }
        else {
            reqAnim = window.requestAnimationFrame(animateMoveNumbers);
        }
    }
    else if (moveNumFrameCounter < 25 && moveFromTemp) {
        moveNumFrameCounter += 1;

        moveTempX += tempFrameX;
        moveTempY += tempFrameY;

        moveNum1X = moveTempX;
        moveNum1Y = moveTempY;

        if (moveNumFrameCounter == 25) {
            moveFromTemp = false;
            moveToTemp = true;
            moveNumFrameCounter = 0;

            moveNum1X = 0;
            moveNum1Y = 0;
            moveNum2X = 0;
            moveNum2Y = 0;
            moveTempX = 500;
            moveTempY = 75;
            num1FrameX = 0;
            num1FrameY = 0;
            num2FrameX = 0;
            num2FrameY = 0;
            tempFrameX = 0;
            tempFrameY = 0;
            frameCounter = 0;

            var temp = numbers[numbers.length - sortIndex1];
            numbers[numbers.length - sortIndex1] = numbers[numbers.length - sortIndex2];
            numbers[numbers.length - sortIndex2] = temp;

            reqAnim = window.requestAnimationFrame(animateSort);
        }
        else {
            reqAnim = window.requestAnimationFrame(animateMoveNumbers);
        }
    }
}

function animateSort(time) {
    drawTwoCircle();

    let reqAnim;

    if (frameCounter < 35 && !moveSecondCircle) {
        if (frameCounter == 34 && numbers[numbers.length - sortIndex1] > numbers[numbers.length - sortIndex2]) {
            moveNum1X = allRects[allRects.length - sortIndex1].x;
            moveNum1Y = allRects[allRects.length - sortIndex1].y;
            moveNum2X = allRects[allRects.length - sortIndex2].x;
            moveNum2Y = allRects[allRects.length - sortIndex2].y;

            num1FrameX = (500 - moveNum1X) / 25;
            num1FrameY = (75 - moveNum1Y) / 25;
            num2FrameX = (moveNum1X - moveNum2X) / 25;
            num2FrameY = (moveNum1Y - moveNum2Y) / 25;
            tempFrameX = (moveNum2X - 500) / 25;
            tempFrameY = (moveNum2Y - 75) / 25;

            moveToTemp = true;

            reqAnim = window.requestAnimationFrame(animateMoveNumbers);
        }
        else {
            if (sortIndex1 == allRects.length) {
                window.cancelAnimationFrame(reqAnim);

                document.getElementById('txtNumber').disabled = false;
                document.getElementById('btnCreate').disabled = false;
                document.getElementById('btnRemove').disabled = false;
                document.getElementById('btnSearch').disabled = false;
                document.getElementById('btnSort').disabled = false;

                frameCounter = 0;
                moveSecondCircle = false;
                sortIndex1 = 1;
                sortIndex2 = 2;
                sort1CenterX = 63;
                sort1CenterY = 263;
                sort2CenterX = 163;
                sort2CenterY = 263;

                drawFinishedSort();
            }
            else {
                frameCounter += 1;
                reqAnim = window.requestAnimationFrame(animateSort);
            }
        }
    }
    else {
        if (sortIndex2 == allRects.length) {
            if (!moveSecondCircle) {
                frameCounter = 0;
                moveSecondCircle = true;
            }

            if (sortIndex1 % 10 == 0 && allRects.length > 10) {
                sort1CenterX -= 45;
                sort1CenterY += 5;
            }
            else {
                sort1CenterX += 5;
            }

            if (frameCounter < 19) {
                frameCounter += 1;
                reqAnim = window.requestAnimationFrame(animateSort);
            }
            else {
                sortIndex1 += 1;
                sortIndex2 = sortIndex1 + 1;
                frameCounter = 0;
                moveSecondCircle = false;

                if (sortIndex1 % 10 == 0 && allRects.length > 10) {
                    sort2CenterX = 63;
                    sort2CenterY = 263 + Math.floor(sortIndex1 / 10) * 100;
                }
                else {
                    sort2CenterX = sort1CenterX + 100;
                    sort2CenterY = sort1CenterY;
                }

                reqAnim = window.requestAnimationFrame(animateSort);
            }
        }
        else {
            if (!moveSecondCircle) {
                frameCounter = 0;
                moveSecondCircle = true;
            }

            if (sortIndex2 % 10 == 0 && allRects.length > 10) {
                sort2CenterX -= 45;
                sort2CenterY += 5;
            }
            else {
                sort2CenterX += 5;
            }

            if (frameCounter < 19) {
                frameCounter += 1;
                reqAnim = window.requestAnimationFrame(animateSort);
            }
            else {
                frameCounter = 0;
                moveSecondCircle = false;
                sortIndex2 += 1;

                reqAnim = window.requestAnimationFrame(animateSort);
            }
        }
    }
}

function create() {
    nodeNum = document.getElementById('txtNumber');

    if (nodeNum.value != "" && Number.isFinite(Number(nodeNum.value))) {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        context.font = '20px Sans-Serif';
        context.fillText("Top", 150, 175);

        context.strokeRect(200, 125, 75, 75);

        context.font = '20px Sans-Serif';
        context.fillText("Pushing value: ", 25, 75);

        allRects.push(new rect(325, 25, 75, 75, 2));
        numbers.push(Number(nodeNum.value));

        document.getElementById('txtNumber').disabled = true;
        document.getElementById('btnCreate').disabled = true;
        document.getElementById('btnRemove').disabled = true;
        document.getElementById('btnSearch').disabled = true;
        document.getElementById('btnSort').disabled = true;

        window.requestAnimationFrame(animateNewNode);
    }
    else {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        drawRectangle();

        context.font = '20px Sans-Serif';
        context.fillText("Value is not an integer. Try again.", 25, 75);
    }
}

function remove() {
    if (allRects.length > 0) {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        context.font = '20px Sans-Serif';
        context.fillText("Top", 150, 175);

        context.strokeRect(200, 125, 75, 75);

        context.font = '20px Sans-Serif';
        context.fillText("Popping value: ", 25, 75);

        document.getElementById('txtNumber').disabled = true;
        document.getElementById('btnCreate').disabled = true;
        document.getElementById('btnRemove').disabled = true;
        document.getElementById('btnSearch').disabled = true;
        document.getElementById('btnSort').disabled = true;

        window.requestAnimationFrame(animateRemoveNode);
    }
    else {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        context.font = '20px Sans-Serif';
        context.fillText("Top", 150, 175);

        context.strokeRect(200, 125, 75, 75);

        drawRectangle();

        context.font = '20px Sans-Serif';
        context.fillText("Cannot remove any further nodes.", 25, 75);
    }
}

function search() {
    nodeNum = document.getElementById('txtNumber');

    if (nodeNum.value != "" && Number.isFinite(Number(nodeNum.value))) {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        context.font = '20px Sans-Serif';
        context.fillText("Top", 150, 175);

        context.strokeRect(200, 125, 75, 75);

        context.font = '20px Sans-Serif';
        context.fillText("Searching linked list...", 25, 75);

        searchNum = numbers.lastIndexOf(Number(nodeNum.value));

        document.getElementById('txtNumber').disabled = true;
        document.getElementById('btnCreate').disabled = true;
        document.getElementById('btnRemove').disabled = true;
        document.getElementById('btnSearch').disabled = true;
        document.getElementById('btnSort').disabled = true;
        
        window.requestAnimationFrame(animateSearchHead);
    }
    else {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        drawRectangle();

        context.font = '20px Sans-Serif';
        context.fillText("Value is not an integer. Try again.", 25, 75);
    }
}

function sort() {
    if (allRects.length > 1) {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        context.font = '20px Sans-Serif';
        context.fillText("Top", 150, 175);

        context.strokeRect(200, 125, 75, 75);

        context.font = '20px Sans-Serif';
        context.fillText("Sorting linked list...", 25, 75);

        document.getElementById('txtNumber').disabled = true;
        document.getElementById('btnCreate').disabled = true;
        document.getElementById('btnRemove').disabled = true;
        document.getElementById('btnSearch').disabled = true;
        document.getElementById('btnSort').disabled = true;

        window.requestAnimationFrame(animateSort);
    }
    else {
        canvas = document.getElementById('mycanvas');
        context = canvas.getContext('2d');

        context.font = '20px Sans-Serif';
        context.fillText("Top", 150, 175);

        context.strokeRect(200, 125, 75, 75);

        drawFinishedSort();

        context.font = '20px Sans-Serif';
        context.fillText("Finished sorting.", 25, 75);
    }
}

function loadShapes() {
    canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d');

    context.lineWidth = 2;
    context.strokeStyle = 'black';

    context.font = '20px Sans-Serif';
    context.fillText("Top", 150, 175);

    context.strokeRect(200, 125, 75, 75);

    context.beginPath();
    context.moveTo(200, 125);
    context.lineTo(275, 200);
    context.stroke();
}