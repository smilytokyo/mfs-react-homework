
@testtest
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

function testtest(className){
    className.log = function(){
        console.log("hhh")
    }
}

Circle.log;