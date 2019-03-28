var config = {
    type: Phaser.AUTO,//oyun tipi
    width: 800,//width of play ground
    height: 600,//height of play ground
    physics: {
        default: 'arcade'
    },
    //for music
    audio: {
        disableWebAudio: true
    },
    scene: {//game algorithm
        preload: preloadGame,
        create: createGame,
        update: updateGame
    }
};

//The game field is created according to the config information.
var game = new Phaser.Game(config);

var ship;
var speed=-10;
var shipArray=new Array();

var locationX=800;
var locationY=20;

function preloadGame ()
 {
    //With the background name we can access this image.
    this.load.image('background','assets/background.png');

    //With the ship name we can access this image.
    this.load.image('ship','assets/ship.png');

  //We are loading the audio file to be used.
  this.load.audio('backgroundSound', 'assets/audio/backgroundsound.mp3', {
         instances: 1
      });


 }

function createGame ()
{
    //location of center point
    this.add.image(400, 300, 'background');



//We have defined such for moving.
ship=this.physics.add.sprite(200, 200, 'ship')

//create sound
var music = this.sound.add('backgroundSound');
//set loop
music.setLoop(true)
//play sound
music.play()

//We adjust the speed in the x direction.
ship.setVelocityX(speed);
}

function updateGame ()
{


    
  

}
