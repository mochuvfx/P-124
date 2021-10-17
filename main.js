noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('posenet is intialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftwrist.x;
        rightwristX = results[0].pose.rightwrist.x;
        difference = floor(leftwristX - rightwristX);
        
        console.log("leftwristX = " + leftwristX + "rightwristX" + rightwristX + "difference = " + difference);

    }
}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "width and height of the square will be = " + difference + "px";
    fill('#00FFCD');
    stroke('#00FFCD');
    square(noseX, noseY, difference);
}

