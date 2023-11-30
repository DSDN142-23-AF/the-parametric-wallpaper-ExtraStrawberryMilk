//color palette
var lightblue, yellow, pink, brown, purple;

var shelves = [];

var shelveLevels = 3;

const shelveSizes = [60,80,100, 120, 150];
const shelveXGap = 20;
const shelveYGap = 66;

/*
 *
 */
function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 70;

  strokeWeight(0.2);
  lightblue = color(39,94,172);
  //138, 243, 255
  yellow = color(237, 246, 125);
  pink = color(251, 204, 214);
  brown = color(82, 70, 50);
  purple = color(112, 86, 109);

}

/*
 *
 */
function wallpaper_background() {
  background(pink);
  
}

/*
 *
 */
function my_symbol() {
  noStroke();
  fill(235, 183, 194);
  strokeWeight(0.2);
  for(var i = 0; i < shelveLevels; i++)
  {
    let length = shelveSizes[(Math.random()*3).toFixed(0)];
    shelves.push(new Shelve(10, 30+i*shelveYGap, length, 10, 25, 10));
    if(length < 150) shelves.push(new Shelve(10+length+shelveXGap, 30+i*shelveYGap, 140-length, 10, 25, 10));
  }

  for(var i = 0; i < shelves.length; i++)
  { 
    shelves[i].display();
  }

  let x = new Blueberry(30,70,30);
  fill(lightblue);
  x.display();
  shelves = [];
}

class Shelve{
  constructor(x,y,length, height, depthX, depth){
    this.x = x;
    this.y = y;
    this.length = length;
    this.height= height;
    this.depthX = depthX;
    this.depth = depth;
  }

  display(){
    fill(120, 108, 90);
    rect(this.x, this.y, this.length, this.height);
    fill(153, 140, 121);
    quad(this.x, this.y, 
         this.x+this.length, this.y, 
         this.x+this.length+this.depthX, this.y-this.depth, 
         this.x+this.depthX, this.y-this.depth);
    
   fill(84, 77, 66);
    quad(this.x+this.length,this.y+this.height,
         this.x+this.length,this.y, 
         this.x+this.length+this.depthX, this.y-this.depth, 
         this.x+this.length+this.depthX,this.y+this.height-this.depth);

  }
}

class Pineapple{
  constructor(size){
    this.size = size;
  }
}

class Blueberry{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display(){
    circle(this.x, this.y, this.size);
  }
}

class Strawberry{
  constructor(size){
    this.size = size;
  }
}