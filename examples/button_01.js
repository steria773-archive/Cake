alert("Check Web Developer Console For More!!!");
CreateCanvas(400,400,"3px black solid");
Initialize();
SetDrawingMode("fill");
var playButton = new Button(150, 200, 200, 50, 'Play', {
    //Colors!!!
    'default': {
      top: '#1879BD',
      bottom: '#084D79'
    },
    'hover': {
      top: '#678834',
      bottom: '#093905'
    },
    'active': {
      top: '#EB7723',
      bottom: '#A80000'
    }
  },
  //If Button Is Clicked!!! 
  () => {
    console.log('Button Clicked!!!');
  });
var Level_1 = new Level(() => {
  playButton.Update();
});
Level_1.Start();