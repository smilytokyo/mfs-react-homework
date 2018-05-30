
class Circle{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    area(){
        return Math.PI*this.r*this.r;
    }
}
var c = new Circle(1,2,10);
