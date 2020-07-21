class User {
    constructor(name, age, email){
      this.name = name;
      this.age = age;
      this.email = email;
      this.coins=0;
      this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, age is ${this.age}, email is ${this.email}`);
        return this;
    } 
}
class Moderator extends User{
    addCoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }
    removeCoins(user){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }
}
class Admin extends Moderator{
    /*constructor(name,age,email){
        super(name,age,email);
        this.courses=[]; 
    }*/
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    removeCourse(user,course){
        user.courses.pop();
        console.log(user);
    }
}
let user1 = new User('Dilip',25,'dilip@gmail.com')
let user2 = new User('Krishnan',24,'k@gmai.com')
let mod = new Moderator('Berlin',24,'b@gmail.com');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});
user1.login();
user1.getDetails();
user2.login();
user2.getDetails();
mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.removeCoins();
mod.removeCoins();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.removeCourse(user1,'javascript');
