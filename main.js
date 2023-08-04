/*document.getElementById("para").innerHTML += " Guys"
document.getElementById("image").src = "spider.jpg"
document.getElementById("para").style.fontSize = "50px"
document.body.innerHTML += "<h2>WELCOME</h2>"
let box = 5
let content = document.getElementById("para")
content.innerHTML = box

FUNCTION

function box(val){
    console.log("hello",val)
}
box("kishore")
box(100)

ARRAY

let content = document.getElementById("para")
let myarray=["tom","max","louise"]
content.innerHTML = myarray
console.log(myarray[2])

2D ARRAY

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
consolle.log([1][2])

OBJECT

let content = document.getElementById("para")
let meobj = {
    name:"kishore",
    age:["nineteen",19],
    place:"chennai",
    job_status:true
};
content.innerHTML = meobj.age[0];
console.log(meobj)

CONVERSIONS

let box = "john";
let newbox = Number(box)
let newbox = parseInt(box)
let newbox = parseFloat(box)
let newbox = Boolean(box)
console.log(newbox,typeof(newbox))

STRING METHODS

let box = "hello people";
let box2 = " welcome to home"
console.log(box.length)
console.log(box.charCodeAt(2))
console.log(box.charAt(4))
console.log(box.indexOf("p"))
console.log(box.slice(0,5))
console.log(box.substring(5,12))
console.log(box.split(""))
console.log(box.replace("hello","hi"))
console.log(box.toLowerCase())
console.log(box.toUpperCase())
console.log(box.concat(box2))


ARRAY METHODS AND PROPERTIES

let array = ['a','b','c','d']
array.push('e')
array.pop()
array.shift()
array.unshift('g')
array.splice(0,2,'x','y')
array.slice(0,3)
array.reverse()
console.log(array)

CONDITIONAL STATEMENT

let age = 14;
 if(age>18){
    console.log("you r eligible")
 }
 else{
    console.log("you r not eligible")
 }

if else if ladder

let num = 65;
if(num<20){
    console.log("num is less than 20")
}
else if(num<40){
    console.log("num is less than 40")
}
else if(num<60){
    console.log("num is less than 60")
}
else{
    console.log("num is less than 80")
}

SWITCH CASE

switch('E'){
    case 'A':
    console.log("GRADE A")
    break;
    case 'B':
    console.log("GRADE B")
    break;
    case 'C':
    console.log("GRADE C")
    break;
    case 'D':
    console.log("GRADE D")
    break;
    default:
        console.log("FAIL")
}

let myTime = new Date()
switch(myTime.getDay()){
          case 0:
          console.log("sunday");
          break;
           case 1:
           console.log("monday");
            break;
           case 2:
           console.log("tuesday");
            break;
            case 3:
            console.log("wednesday");
            break;
            case 4:
            console.log("thursday");
            break;
            case 5:
            console.log("friday");
            break;
            case 6:
            console.log("saturday");
            break;
            default:
                console.log("not a day");
}
let myTime = new Date()
console.log(myTime.getMinutes())

MATH PROPERTIES

console.log(
    Math.ceil(232.3),
    Math.max(3,6,8),
    Math.min(3,5,6),
    Math.pow(10,3),
    Math.sqrt(5)
)

ITERATIONS

FOR LOOP

for(let i = 1;i<=5;i++){
    document.body.innerHTML += "<img src = 'spider.jpg'>"
}
// for decreasing 12345 2345 345 45 5
// for increasing 1 12 123 1234 12345
let i,n=5,star="";
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){ //(j=1<=i=1 - true j=2<=i=1 - false)(j=1<=i=2 - true j=1<=i=3) - false
   star += " *"
}
     star += "\n"
}   
console.log(star)

        img = document.createElement("img")
        document.body.appendChild(img)
        img.src="spider.png"

Class and objects - class is a template or blueprint,Object is instances of class.

class animal{
    constructor(colour){
        this.colour=colour;
        console.log("constructor called",this)
    }
    dog(){
        console.log("barking")
    }
    cat(){
        console.log("meowing")
    }
    lion(){
        console.log("roaring")
    }
}
function sum(){
    console.log("fish is swimming",this)
}
sum()
let animal1 = new animal("red")
let animal2 = new animal("blue")
let animal3 = new animal("green")
animal1.dog()
animal2.cat()
animal3.lion()

CONSTRUCTOR - is a special method for assigning properties and automatically called when object is created

this keyword - reference to the object that we are currently working with

super keyword - refererence to parent class(super class),very similar to "this" keyword,can use super keyword in constructor and methods.


 class bike{
    constructor(Brand,Model,Color,Price){
        this.Brand=Brand;
        this.Model=Model;
        this.Color=Color;
        this.Price=Price;
    }
    drive(){
        console.log("you are driving the",this.Model)
    }
    brake(){
        console.log("Bike applied brake")
    }
    gear(){
        console.log("Bike changed gear")
    }
}
let bike1=new bike("PULSAR","NS200","WHITE",50000)
let bike2=new bike("YAMAHA","RX100","BLACK",20000)
console.log(bike1.Brand)
console.log(bike1.Color)
console.log(bike1.Price)
console.log(bike2.Brand)
console.log(bike2.Color)
console.log(bike2.Price)
bike1.drive()
bike2.gear()
bike1.brake() 

INHERITANCE USING CONSTRUCTOR,THIS,SUPER

class Animal{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    }
class Dog extends Animal{
    constructor(name,age,food){
    super(name,age)
    this.food = food;
    }
}
class Cat extends Animal{
    constructor(name,age,food){
        super(name,age) 
        this.food=food;
    }
}
class Fish extends Animal{
        constructor(name,age,food){
            super(name,age) 
            this.food=food;
    }
}
let dog = new Dog("shero",3,"biscut");
let cat = new Cat("tom",4,"milk");
let fish =  new Fish("nemo",1,"worms");
console.log(fish.food)
console.log(dog.name)
console.log(fish.age)
console.log(cat.name)
console.log(dog.food)

class person{
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
}
class student1 extends person{
    constructor(name,age,course){
        super(name,age)
        this.course=course
    }
}
class student2 extends person{
    constructor(name,age,course){
        super(name,age)
        this.course=course
    }
}
let Student1 = new student1("kishore",19,"bca")
let Student2 = new student2("saran",18,"bcom")
console.log(Student1.age)
console.log(Student2.course)
console.log(Student1.name)
console.log(Student2.name)
*/







