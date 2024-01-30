const textures =[];
function preload(){
// loop through the 4 textures that we have saved
    for(let textureNumber = 1; textureNumber <4; textureNumber++){
        // get the path of the current texture
        const pathToTexture = 'Textures/texture-trans' + textureNumber + '.png';
    //    load the image using the loadimage p5.js function and add it to the textures list.
        textures.push(loadImage(pathToTexture));
    }
}



function setup() {

    const squareSize = 20;

// number of cells of the grid
const cellNumber = 20;

const canvasSize = squareSize * cellNumber;
    createCanvas(canvasSize, canvasSize);
    background(220);
// size of each square
const maxOffsetPosition = 6;
const maxOffsetSize = 8;




for(let row = 0; row < cellNumber; row++) {
    for(let column = 0; column < cellNumber; column++){
        const red = random(255);
        const green = random(255);
        const blue = random(255);
    
        const myColour = color(red, green, blue);

        // get random texture

        const texture = random(textures);
        
    
        // fill(myColour);

        tint(myColour);

        const randomOffsetHorizontal = random(-maxOffsetPosition, maxOffsetPosition);
        const randomOffsetVertical = random(-maxOffsetPosition, maxOffsetPosition);

        const randomOffsetWidth = random(-maxOffsetSize, maxOffsetSize);
        const randomOffsetHeight = random(-maxOffsetSize, maxOffsetSize);

        // calculate horizontal position in pixels
        const x = row * squareSize + randomOffsetHorizontal;
    
        // calculate verticle position in pixels
        const y = column * squareSize + randomOffsetVertical;

        const width = squareSize + randomOffsetWidth ;
        const height = squareSize + randomOffsetHeight;
        
        image(texture, x, y, squareSize, squareSize);

        //square(x,y,s)
        // x = position of the left of the square 
        // y = position of the top of the square
        // s = size of the side of the square
        // square(x, y, squareSize);
    
        }
    }
}

