import React from "react";
import RectoVerso from "../assets/Crochet/rectoverso.png";

var Crochet = React.Component({
    render: function () {
        return (
            <div>
                <title>Crochet Pixel Image Converter</title>
                <style dangerouslySetInnerHTML={{ __html: "\n    table, td {\n        border: 1px solid black;\n        color: white;\n    \n        text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray;\n        font-family: sans;\n    }\n    \n    p {\n        color: gray;\n    }\n    " }} />
                <canvas id="canvas" width={80} height={80} />
                <p align="center" className="color-cell" id="hovered-color" />
                <img id="sourceImage" src={RectoVerso} />
                <div className="slidecontainer">
                    <input type="range" min={1} max={60} defaultValue={10} className="slider" id="sensitivitySlider" onchange="refreshTable()" />
                </div>
                <button id="testButton" onclick="getPixelData()"> Get pixel data (test) </button>
                <button id="removeTableButton" onclick="removeTable()"> Remove table </button>
                <button id="dataDisplay" onclick="displayPixelData()"> Display pixel data </button>
                <p align="center" id="pixel-grid-data" />
            </div>
        );
    }
});

var img = new Image();
document.createElement('img');
img.src = {RectoVerso};
img.id = "sourceImage";

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
ctx.drawImage(img,0,0, canvas.width, canvas.height);

function refreshTable() {
    removeTable();
    displayPixelData();
}

var pixelGrid = [];
var hoveredColor = document.getElementById('hovered-color');
var bufferAmount = 8;

function initGridArray() {
    for (let y=0; y < img.height; y++) {
        for (let x=0; x < img.width; x++) {
        
            if (Array.isArray(pixelGrid[x])) {
                pixelGrid[x][y] = new Color(0,0,0,0);
            }
            else {
                pixelGrid[x] = [new Color(0,0,0,0)];
            }
                    
        }
    }	
}

function pick(event, destination) {
    var x = event.clientX;
    var y = event.clientY;
    
    var pixel = ctx.getImageData(x-bufferAmount,y-bufferAmount,1,1);
    var data = pixel.data;
    
        const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
        destination.style.background = rgba;
        destination.textContent = rgba;
        
        console.log(rgba);
        
    return rgba;
}

function removeTable() {
    document.getElementById("table2").remove();
}

function getPixelData(){

    initGridArray();    
    
    for (let x=0; x < img.width; x++) {
        
        for (let y=0; y < img.height; y++) {
                    
            pixelGrid[x][y] = new Color(ctx.getImageData(y, x, 1, 1).data[0], 
                                            ctx.getImageData(y, x, 1, 1).data[1], 
                                                ctx.getImageData(y, x, 1, 1).data[2], 
                                                    1); 
              
            const rgba = `rgba(${(pixelGrid[x][y])[0]},
                                    ${(pixelGrid[x][y])[1]},
                                        ${(pixelGrid[x][y])[2]},
                                            ${(pixelGrid[x][y])[3]})`;
            
            console.log('x :' + x, 'y :' + y + '  |  ' + rgba);

        }
    }
    
}

class Color {
    constructor(R, G, B, A) {
        this.R = R;
        this.G = G;
        this.B = B;
        this.A = A;
    }
}

function pixelSameColor(currentColor, previousColor) {
    
    var sensitivity = document.getElementById("sensitivitySlider").value;
        
    if (currentColor.R > (previousColor.R - sensitivity) && currentColor.R < (previousColor.R + sensitivity)) {
        if (currentColor.G > (previousColor.G - sensitivity) && currentColor.G < (previousColor.G + sensitivity)) {
            if (currentColor.B > (previousColor.B - sensitivity) && currentColor.B < (previousColor.B + sensitivity)) {
            
            return true;
            
            }
        }
    }
    else {
        return false;
    }
}

function displayPixelData(){

    getPixelData();

    var t = document.createElement("TABLE");
    t.setAttribute("id", "table2");
    document.body.appendChild(t);

    var colorCount = 0;
    
    for (let x = 0; x < img.width; x++) {
        
        var r = document.createElement("TR");
        r.setAttribute("id", "row" + x);
        document.getElementById("table2").appendChild(r);
    
        for (let y = 0; y < img.height; y++) {
            
            if (!(y == 0)){ //check this isn't the first pixel in row
                
                var currentColor = pixelGrid[x][y];
                var previousColor = pixelGrid[x][y-1];
                        
                if (pixelSameColor(currentColor, previousColor)) {
                    colorCount++;
                }
                else {
                    //colour must have changed			
                    addToGrid(previousColor, colorCount, x);
                    //reset count for next colour
                    colorCount = 1;
                }
                
            }
            
            else if (y == 0) {
                //must be the first pixel in the row - just increase count and don't compare
                colorCount++;
            }
                        
            else {
                //Throw some exception here
                console.log("How did we get here?!");
                return;
            }			

        }
        //Reached the last iteration of the row so the current count needs to be added to the grid
        //before going on to the next row
        addToGrid(previousColor, colorCount, x);
        colorCount = 1;
    }
}

function addToGrid(color, colorCount, rowNum) {

    var c = document.createElement("TD");
    c.appendChild(document.createTextNode("x" + colorCount));
    
    const rgba = `rgba(${color.R}, ${color.G}, ${color.B}, ${color.A})`;
    
    c.style.backgroundColor = rgba;
    document.getElementById("row" + rowNum).appendChild(c);
    
}

canvas.addEventListener('mousemove', function(event) {
    pick(event, hoveredColor);
});

export default Crochet;

