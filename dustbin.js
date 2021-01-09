class dustbin{
    constructor(x1,y1,width1,height1){
        var property_change={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x1,y1,width1,height1,property_change)
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
        this.width=width1;
        this.height=height1;
        
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        
        imageMode(CENTER)
        image(this.image,650,570,220,190)
      
    }
}