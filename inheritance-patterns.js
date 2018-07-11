// WZORCE DZIEDZICZENIA

// 1 Wzorzec domyślny

function inherit (C, P) {
    C.prototype = new P();
}

// Child dziedziczy zarówno z obiektu Parent jak i z jego prototypu.
// Prototypem Child staje się nowy odłączny obiekt new Parent z jego 
// właściwościami this i dostępem do jego prototypu.


// 2 Pożyczanie konstruktora


let Parent = function(name) {
    this.name = name || "Adam";
};

let Child = function(name) {
    Parent.apply(this, arguments);
};

let kid = new Child();
kid.hasOwnProperty('name'); //true

// Child dziedziczy z obiektu Parent TYLKO KOPIĘ WŁAŚCIWOŚCI dodanych 
// do this. Tą metodą można przekwazywać argumenty oraz dziedziczyć 
// wiele konstruktorów(właściwości konstruktorów). W przypadku duplikatów 
// wygra ten, który będzie przypisywany jako ostatni.


// 3 Pożyczanie i ustawianie prototypu (mix 1 i 2)

let Parent = function(name) {
	this.name = name || "Adam";
};
Parent.prototype.say = function() {
	return this.name;
};

let Cild = function(name) {
	Parent.apply(this, arguments);
};
Child.prototype = new Parent();

let kid = new Child("Patryk");
kid.name; // Patryk
kid.say(); // Patryk
delete kid.name;
kid.say(); // Adam

// Child dziedziczy kopię właściwości obiektu Parent
// oraz obiekt Parent staje się jego prototypem.


// 4 Współdzielenie prototypu

function inherit(C, P) {
    C.prototype = P.prototype;
}


// Child oraz Parent współdzielą jeden prototyp. Jeśli dowolny potomek
// z łańcucha prototypów zmieni prototyp, zauważą to wszystkie obiekty,
// włączając w to przodka. Child.prototype === Parent.prototype.


// 5 Konstruktor tymczasowy

function inherit(C, P) {
	let F = function(){};
	F.prototype = P.prototype;
	C.prototype = new F();
}

// Child dziedziczy prototype Parent poprzez konstruktor F. 
// Nie ma do niego bezpośredniego dostępu więc nie może go modyfikować.
// Wzorzec podobny do 4 lecz w tym przypadku prawo modyfikacji swojego
// protypu ma tylko jego właściciel - Parent.