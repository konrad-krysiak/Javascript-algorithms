// CONSTRUCTOR PROTOTYPE FUNCTIONS 

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype = (function() {
    var type = 'human',
        colour = 'white';
    return {
        getType: function() {
            return type;
        },
        getColour: function() {
            return colour;
        }
    }
}());

// EXAMPLE

var ala = new Person("Ala", 12);
alert(ala.getType());
alert(ala.getColour());