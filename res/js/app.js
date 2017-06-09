let wWidth = $(window).width();
let wHeight = $(window).height();
let circleRadius = wWidth*1.35;

function setup(){
  createCanvas(wWidth, wHeight);

}

function draw(){
  wWidth = $(window).width();
  wHeight = $(window).height();
  circleRadius = wWidth*1.3;
  background(0);
  $("#left h1,#left h2,#left h3").each((ind, el)=>{
    $(el).width($("#left").width() +Math.abs($(el).position().top+30 - ($("#left").height()/2))/3)
    //draw the line
    stroke(255);
    strokeWeight(1);
    line($(el).position().left+$(el).width()-1,$(el).position().top+$(el).height()+parseInt($(el).css("margin-top"))+0.5,wWidth/1.3, wHeight/2)

  })
  fill(0);
  strokeWeight(2);
  ellipse(wWidth, wHeight/2, circleRadius*1.01, circleRadius*1.01);

  fill(255);
  noStroke();
  ellipse(wWidth, wHeight/2, circleRadius, circleRadius);

}
