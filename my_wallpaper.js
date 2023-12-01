//color palette
var blue, yellow, pink, brown, darkGreen, green;

//parameters [BB = blueberry] [PA = pineapple]
const BBOnePosition = [80, 110];
const BBTwoPosition = [170, 180];
const PAOnePosition = [150, 60];
const crossStrokeWeight = 5;
const squareSize = 40;
const BBSize = 30;
const PASize = 60;
const PAAngle = 20;
const BBAngle = -20;

/*
 *
 */
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 65;

  //setting up colours
  blue = color(39, 94, 172);
  yellow = color(253, 187, 76);
  pink = color(251, 204, 214, 180);
  brown = color(82, 70, 50);
  green = color(188, 215, 90);
  darkGreen = color(82, 191, 54);

  stroke(pink);
  fill(pink);

}

/*
 *
 */
function wallpaper_background() {
  background(240, 187, 198);
}

/*
 *
 */
function my_symbol() {
  //creating the rectangles in the background
  rect(20, 20, squareSize, squareSize);
  rect(40, 40, squareSize, squareSize);

  //creating triangle in the background
  triangle(120, 120, 90, 150, 150, 150);

  //creating the cross in background
  strokeWeight(crossStrokeWeight);
  line(20, 150, 50, 180);
  line(50, 150, 20, 180);

  //displaying the two blueberries and pineapple
  display(BBOnePosition[0], BBOnePosition[1], BBAngle, new Blueberry(BBSize));
  display(BBTwoPosition[0], BBTwoPosition[1], BBAngle, new Blueberry(BBSize));
  display(PAOnePosition[0], PAOnePosition[1], PAAngle, new Pineapple(PASize));
}

/*
 *
 */
function display(x, y, angle, obj) 
{
  push();
  translate(x, y); 
  rotate(angle)
  obj.show(); //shows the object on the screen
  pop();
}

/*
 *
 */
class Pineapple 
{
  constructor(size) 
  {
    this.size = size;
  }

  show() 
  {
    stroke(brown);
    strokeWeight(0.5);

    fill(yellow);
    ellipse(0, 0, this.size / 1.5, this.size / 1.2);

    fill(0);
    circle(-8, 0, 6);
    circle(8, 0, 6);

    arc(0, 5, this.size / 8, this.size / 8, 0, 180, CHORD);

    fill(255);
    circle(-9, -1, 2);
    circle(7, -1, 2);

    fill(green);

    push();
    translate(-9, -28);
    rotate(-70);
    ellipse(0, 0, 10, 25);
    pop();

    push();
    translate(9, -28);
    rotate(70);
    ellipse(0, 0, 10, 25);
    pop();

    fill(darkGreen);
    push();
    translate(-6, -31);
    rotate(140);
    ellipse(0, 0, 10, 25);
    pop();

    push();
    translate(6, -31);
    rotate(50);
    ellipse(0, 0, 10, 25);
    pop();

    fill(green);
    push();
    translate(0, -33);
    ellipse(0, 0, 10, 25);
    pop();




  }
}

/*
 *
 */
class Blueberry {
  constructor(size) {
    this.size = size;
  }

  show() {
    stroke(brown);
    strokeWeight(0.5);
    fill(blue);
    circle(0, 0, this.size);
    fill(15, 61, 121);
    beginShape();
    vertex(10, -2 - this.size / 2);
    vertex(5, -this.size / 2);
    vertex(0, -2 - this.size / 2);
    vertex(-5, -this.size / 2);
    vertex(-10, -2 - this.size / 2);
    vertex(-10, 4 - this.size / 2);
    vertex(10, 4 - this.size / 2);
    endShape();

    fill(51, 136, 255);
    noStroke();
    circle(this.size / 3.33, 7, 4);
    circle(-9, 7, 4);
    fill(0);
    circle(-8, 0, 6);
    circle(8, 0, 6);
    circle(0, 6, 4);

    fill(255);
    circle(-9, -1, 2);
    circle(7, -1, 2);

  }
}