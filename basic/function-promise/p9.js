class Addition{
    constructor(a,b){
      this.a = a;
      this.b = b;
      console.log("2-parameter....");
    }
    add(){
        console.log("Addition : "+(this.a + this.b));
    }
}

let obj = new Addition(20,10); // obj :{a:20,b:10}
obj.add();