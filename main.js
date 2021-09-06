img="";
noseX=0;
noseY=0;
MarioX=325;
MarioY=325;

function preload() 
{
	img = loadImage("mario.jpg");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,450);
	video.parent('game_console');

	instializeInSetup(mario);

	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on('pose' , gotPoses);
}

function draw() {
	background("#D3D3D3");
	if(noseX > 300)
	{
		marioX = marioX -1;
	}
	if(noseX > 300)
	{
		marioX = marioX +1;
	}
	if(noseY > 150)
	{
		marioY = marioY -1;
	}
	if(noseY > 150)
	{
		marioY = marioY +1;
	}

	image(img,MarioX,MarioY,600,300);
	game()
}

function modelLoaded()
{
	console.log("Model Loaded!");
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.Y;
	}
}

