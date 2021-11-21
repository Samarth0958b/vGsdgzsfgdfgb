var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        p=Img;
        p.scaleToWidth(700);
        p.scaleToHeight(510);
        p.set({
        top:0,left:0
        });
        canvas.add(p);
    });
	
}

function playSound()
{
	x.play();
    
}
