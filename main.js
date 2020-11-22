var canvas=new fabric.Canvas('myCanvas')
height=30;
width=30;
x=210;
y=301;
player_object="";
block_object="";



function playyerimg(){
fabric.Image.fromURL("player.png",function(img){
player_object=img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:y,
left:x
});
canvas.add(player_object);
});



}
function blockimg(getimage){
    fabric.Image.fromURL(getimage,function(img){
    block_object=img;
    block_object.scaleToWidth(width);
    block_object.scaleToHeight(height);
    block_object.set({
    top:y,
    left:x
    });
    canvas.add(block_object);
    });
    
    
    
    }