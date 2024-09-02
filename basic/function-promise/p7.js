/*
  class Member :-
    instance
    static

  m1() & m2() both are the instance method of Message class.
*/
class Message{
    m1(){
        console.log("m1-executed...");
    }
    m2(){
        console.log("m2-executed....");
    }
}

let obj = new Message();
obj.m1();
obj.m2();