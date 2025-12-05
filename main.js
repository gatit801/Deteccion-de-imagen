objectDetector= "";

img= "";
objects= [];
status= "";

function preload(){
    //img = loadImage('dog_cat.jpg')
    img = loadImage('CATP.jpg')

}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
    objectDetector =  ml5.objectDetector('cocosd', modelLoaded)
    document.getElementById('status').innerHTML = "Estatus: detectando objeto"
}

function modelLoaded(){
    console.log("Ola")
    status = true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)
    objects = results
}

function draw(){
        image(img, 0, 0, 640,420)
        if (status != ""){
        for (var i = 0; i < objects.length; i++){
            noFill(); 
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%",objects[i].x + 15, objects[i].y + 15)
            stroke(213, 219, 22)
            strokeWeight(1)
            document.getElementById("status").innerHTML = 'status: objeto designado'
            rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height)
        }
    }
}