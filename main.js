wednesday_song = " ";
harry_potter_song = " ";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;




function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);

    function preload(){
        wednesday_song = loadSound("GLP_installer_900223150_market.eve");
        harry_potter_song = loadSound("Harry-Potter-Theme(1).mp3");
    }
}

function modelLoaded(){
    console.log("Posenet Is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

  
    
    
        console.log("scoreleftWrist = " + scoreleftWrist + "scoreRightWrist = " + scoreRightWrist);

        leftWrist_x = results[0].pose.leftWrist_x;
        leftWrist_y = results[0].pose.leftWrist_y;
        console.log("leftWrist_x = " + leftWrist_x + "leftWrist_y =" + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist_x;
        rightWrist_y = results[0].pose.rightWrist_y;
        console.log("rightWrist_x = " + rightWrist_x + "rightWrist_y =" + rightWrist_y);

    }
}
