function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
    this.sayHi = function() {
        console.log('No, I must disagree');
    };
}
 
let boardMember = new BoardMember('lauren', 'madrid', 'training');
boardMember.sayHi(); 