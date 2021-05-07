class UmbreMan{
    constructor(x, y) {
        var options= {
            isStatic: true,
            velocity: {x: 5, y: 0}
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("Man.png")
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x - 38, pos.y + 60);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 280, 280);
        pop();
    }
}