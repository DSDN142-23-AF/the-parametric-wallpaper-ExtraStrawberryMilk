//color palette
var lightblue, yellow, pink, brown, purple;

const outlineWeight = 1;
const stripWidth = 50;
const stripOffset = 20;


/*
 *
 */
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;

  lightblue = color(138, 243, 255);
  yellow = color(237, 246, 125);
  pink = color(251, 204, 214);
  brown = color(82, 70, 50);
  purple = color(112, 86, 109);
}

/*
 *
 */
function wallpaper_background() {
  background(112, 86, 109);
}

/*
 *
 */
function my_symbol() {
  for (let x = 0; x < 200; x += stripWidth) {
    createStrip((x / stripWidth) % 2 == 0 ? lightblue : yellow, brown, x, 0);
  }
}

/*
 *
 */
function createStrip(stripColor, outlineColor, x) {
  stroke(outlineColor);
  strokeWeight(outlineWeight);

  fill(stripColor);
  beginShape();
  vertex(x + stripWidth, 0);
  vertex(x + stripWidth + stripOffset, 50);
  vertex(x + stripWidth, 100);
  vertex(x + stripWidth + stripOffset, 150);
  vertex(x + stripWidth, 200);
  vertex(x, 200);
  vertex(x + stripOffset, 150);
  vertex(x, 100);
  vertex(x + stripOffset, 50);
  vertex(x, 0);
  endShape();

  if (stripColor == yellow) {
    drawPurpleArea(x, 100);
    drawPurpleArea(x, 200);
  }

  strokeWeight(outlineWeight * 4);
  for (let i = 0; i <= 200; i += 50) {
    line(0, i, 200, i)
  }
}

/*
 *
 */
function drawPurpleArea(x, y) {
  fill(purple);

  beginShape();
  vertex(x + stripWidth + stripOffset, y - 50);
  vertex(x + stripWidth, y);
  vertex(x, y);
  vertex(x + + stripOffset, y - 50);
  endShape();
}