class Thunder {
    constructor(x, y, height, angle) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 10, 20, options);
        this.image = loadImage("lightning.png");
        this.x =this.body.position.x;
        this.y = this.body.position.y;
        this.angle = angle;
        this.height = height
        World.add(world, this.body);
    }

    display() { 
        push()
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 130, this.height)
        pop()
    }

    remove() {
        World.remove(world, this.body)
    }
}