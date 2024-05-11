//2. Circle - Class

class Circle{
    constructor(radius){
        this.radius=radius;
    }

    Circle(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
        return radius;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
        return color;
    }
    toString(){
      return("Circle Radius:" + this.radius + " " + "Color:" + this.color);
    }
    getArea(){
        var area = 3.14*this.radius*this.radius;
        return area;
    }
    getCircimference(){
        var circum = 2*3.14*this.radius;
        return circum;
    }
}


var c1 = new Circle("50");

c1.Circle("20","Blue");

var radius = c1.getRadius();
console.log("Radius: " + radius);

var color = c1.getColor();
console.log("Color: " + color);

var newRadius = c1.setRadius("30");
console.log("New Radius: " + newRadius);

var newColor = c1.setColor("Green");
console.log("New Color: " + newColor);

var Value = c1.toString();
console.log(Value);

var area = c1.getArea();
console.log("Area " + area);

var circumference = c1.getCircimference();
console.log("Circumference " + circumference);


//1. 
class Movie{
    constructor(name,studio,rating){
        this.name=name;
        this.studio=studio;
        this.rating=rating;
        if (this.rating == undefined) {
            this.rating = "PG";
    
        }
        console.log(name+ " "+studio+ " "+this.rating)
    }
    
      function(arr){
        var res = 0;
        for (var i = 0; i < arr.length; i++) {
        if (mov[i].rating == 'PG') {
            res.push(mov[i].title);
            }
    }
    return res;
    }

}

var film = new Movie("Lupin","Gaumont","7.5/10");

var film1 = new Movie("film1","studio");

var film2 = new Movie("film2","studio2","5/10");

let arr = [film, film1, film2]
console.log((arr));

var mov = new Movie("Casino Royale","Eon Productions","PG-13");
console.log(mov);



