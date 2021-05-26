function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    this.sayHi = function() {
        console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}`);
    };
}

User.prototype.sayHello = function() {
  console.log(`Hello everybody, my name is ${this.name}`);
};
 
let boardMember = new BoardMember('Mr. Polished', 'New York', 'law');
boardMember.sayHi(); 