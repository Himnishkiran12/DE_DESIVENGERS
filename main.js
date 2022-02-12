// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
block_y = 20;
block_x = 1;

block_image_width = 280;
block_image_height = 360;

var block_image_object = "";

function new_image(get_image) {
    // to upload images
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '73') {
        block_x = 1;
        new_image("image.png.jpeg");
        console.log("I");
        // upload red ranger
    }
    if (keyPressed == '67') {
        block_x = 280;
        new_image("image.png1.jpeg");
        console.log("C");
        // upload green ranger
    }

    if (keyPressed == '84') {
        block_x = 640;
        new_image("image.png2.jpeg");
        console.log("T");
        // upload yellow ranger
    }
    if (keyPressed == '83') {
        block_x = 960;
        new_image("image.png3.jpeg");
        console.log("S");
        // upload pink ranger
    }
    if (keyPressed == '72') {
        block_x = 1300;
        new_image("image.png4.jpeg");
        console.log("H");
        // upload blue ranger
    }

    if (keyPressed == '82') {
        window.open("https://www.tomorrowtides.com/the-desivengers.html");

    }

}