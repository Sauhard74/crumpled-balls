class Papers{
    constructor(x,y,diameter){
        var options={
            isStatic:false ,
            restituition:0.3,
            density:1.2,
            friction:0.5

        }
      this.body=Bodies.circle(x,y,diameter,options)
      World.add(world,this.body)

}
display(){
    fill("yellow")
    circle(200,650,10);
}

}
