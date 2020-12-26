class Ground{
    constructor(x,y,width,height){
        this.height=height;
        this.width=width;
        this.x=x;
        this.y=y;
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    dispaly(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop()

    }
}


