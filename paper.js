class paper{
    constructor(x1,y1,r1){
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x1,y1,r1,options)
        this.image=loadImage("paper.png");
        World.add(world,this.body)
        this.r1=20;
        
    }
    display(){
        var paperpos=this.body.position;
        push()
     
        translate(paperpos.x,paperpos.y);
        
        imageMode(CENTER);
        image(this.image,0,0,70,70)
        pop()

    }
}