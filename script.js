//complete this code
class Person {
	constructor(name , age){
		this._name = name;
		this._age = age;
	}
	get Name(){
		return `my name is ${this._name}`;
	}
	set Age(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
	super(name ,age);
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
