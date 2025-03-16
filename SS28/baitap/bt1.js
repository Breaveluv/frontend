const CV ={
    name: "Nguyen Van A",
    age: 20,
    job: "coder",
    greet :function(){
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old"+ " and I am a " + this.job);
    }
}
console.log(CV.greet()); 