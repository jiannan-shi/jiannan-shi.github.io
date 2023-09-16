


function setup() {

    createCanvas(windowWidth, windowHeight);
    background(250);
    fade = 0


}

function draw() {
    stroke(0, 0, 255);

    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (keyIsPressed === true) {
        clear();
    }

}
