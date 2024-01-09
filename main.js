function setup()
{
canvas = createCanvas(300 , 300);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function preload()
{
    classify = ml5.imageClassifier('DoodleNet');
}
function draw() {
    strokeWeight(15);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classify.classify(canvas, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    }
console.log(results);
document.getElementById("label").innerHTML = "label" + results[0].label;

document.getElementById("confedence").innerHTML = "confidence" + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}
function clearCanvas() {
    background("white");
}
