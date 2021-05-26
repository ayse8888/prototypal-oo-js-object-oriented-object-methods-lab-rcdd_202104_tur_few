function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    
}

BoardMember.prototype.sayHi = function() {
        return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}`;
};
 


