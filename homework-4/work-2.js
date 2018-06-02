
class Circle{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.a = Math.PI*this.r*this.r;
    }
    set area(value){
        this.a = value
    }
    get area(){
        return this.a;
    }
}
var cricle = new Circle(1,2,10);
console.log(cricle.area)
