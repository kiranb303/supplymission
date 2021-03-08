class Package{
    constructor(){
        this.image=loadImage("package.png");
        this.body = Bodies.rectangle(width/2,190,20,20,{isStatic : true, restitution: .4});
        World.add(world,this.body);
        
    }

    display(){
       imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,40,40);
       //rect(this.body.position.x,this.body.position.y,20,20);
	}
}
