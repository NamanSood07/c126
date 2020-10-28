
left_wrist_y=0;
right_wrist_y=0;

function preload(){
 
   
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center()
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
        left_wrist_y=results[0].pose.leftWrist.y
        right_wrist_y=results[0].pose.rightWrist.y
        console.log("left wrist y="+results[0].pose.nose.x);
        console.log("right wrist y ="+results[0].pose.nose.y);
       
    }

}
function draw() {
    image(video, 0, 0, 400, 400);
    
}
