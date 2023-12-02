//color palette
var blue, yellow, pink, brown, darkGreen, green;

//parameters [BB = blueberry] [PA = pineapple]
const BBOnePosition = [80, 110];
const BBTwoPosition = [170, 180];
const PAOnePosition = [150, 60]; 
const crossStrokeWeight = 5;
const squareSize = 90;
const BBSize = 30;
const PASize = 100;
const PAAngle = 20;
const BBAngle = 140;
const drawBlueberry = false;

/*
 *
 */
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 30;

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
  
    display(PAOnePosition[0], PAOnePosition[1], PAAngle, new Pineapple(PASize));
    if(drawBlueberry){
    display(BBOnePosition[0], BBOnePosition[1], BBAngle, new Blueberry(BBSize));
    display(BBTwoPosition[0], BBTwoPosition[1], BBAngle, new Blueberry(BBSize));
    }
  
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

  /* draws a leaf for the pineapple
  * Inputs: col (color), x (float), y (float), angle (float)
  * Return: Void
  */
  #drawLeaf(col, x, y, angle){
    fill(col);
    push();
    translate(x,y);
    rotate(angle);
    ellipse(0, 0, this.size/6, this.size/2.4);
    pop();
  }

  show() 
  {
    stroke(brown);
    strokeWeight(0.5);

    //draws body
    fill(yellow);
    ellipse(0, 0, this.size / 1.5, this.size / 1.2);

    //draws eyes
    fill(0);
    circle(this.size/-7.5, 0, this.size/10);
    circle(this.size/7.5, 0, this.size/10);

    //draws mouth
    arc(0, this.size/12, this.size / 8, this.size / 8, 0, 180, CHORD);

    //draws pupils
    fill(255);
    circle(this.size/-6.66, this.size/-60, this.size/30);
    circle(this.size/8.57, this.size/-60, this.size/30);

    this.#drawLeaf(green, this.size/-6.66, this.size/-2.14, -70);
    this.#drawLeaf(green, this.size/6.66, this.size/-2.14, 70);
    this.#drawLeaf(darkGreen, this.size/-10, this.size/-1.93, 140);
    this.#drawLeaf(darkGreen, this.size/10, this.size/-1.82, 50);
    this.#drawLeaf(green, 0, this.size/-1.8, 0);
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

    //body
    fill(blue);
    circle(0, 0, this.size); 
    fill(15, 61, 121);
    
    //top of the blueberry
    beginShape();
    vertex(this.size/3, this.size/-15 - this.size / 2);
    vertex(this.size/6, -this.size / 2);
    vertex(0, this.size/-15 - this.size / 2);
    vertex(this.size/-6, -this.size / 2);
    vertex(this.size/-3, this.size/-15 - this.size / 2);
    vertex(this.size/-3, this.size/7.5 - this.size / 2);
    vertex(this.size/3, this.size/7.5 - this.size / 2);
    endShape();

    //cheeks
    fill(51, 136, 255);
    noStroke();
    circle(this.size / 3.33, this.size/4.83, this.size/7.5);
    circle(this.size/-3.33, this.size/4.83, this.size/7.5);

    //eyes and mouth
    fill(0);
    circle(this.size/-3.75, 0, this.size/5);
    circle(this.size/3.75, 0, this.size/5);
    circle(0, this.size/5, this.size/7.5);
    
    //pupils
    fill(255);
    circle(this.size/-3.33, this.size/-30, this.size/15);
    circle(this.size/4.3, this.size/-30, this.size/15);

  }
}