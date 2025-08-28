let count: number = 34;
let name :string = "Rakib"
let fullName : string

let amImad :boolean = false;
let x:any=true;

let multipleTypes : string | number = "Rakib";
multipleTypes = 32;

if(typeof(name) ==="string"){
  console.log("Yes this is a string data type")
}
else{
  console.log("Nope");
}

class Car{
  name:string;
  constructor(input:string){
    this.name=input
  }
}
class Human{
  name:string;
  constructor(input:string){
    this.name=input
  }
}

let bmw = new Car("BMW CAR")
if(bmw instanceof Human){
  console.log("Yes");
}
else{
  console.log("No");
}

let str:any =" I am a string which used for any type";
let index : number = (str as string).indexOf("a");

let index1: number =(<string>str).indexOf("s")