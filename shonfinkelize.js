// PARTIAL FUNCTION
// IF FUNCTION DID NOT GET ENOUGH ARGUMENTS TO RUN
// IT RETURNS NEW FUNCTION WITH ARGUMENTS GIVEN, READY
// TO GET ARGUMENTS WHICH ARE MISSING

function shonfinkelize(fn) {
   var slice = Array.prototype.slice,
       stored_args = slice.call(arguments, 1);
   return function() {
       var new_args = slice.call(arguments),
           args = stored_args.concat(new_args);
       return fn.apply(null, args);
   }
}

// EXAMPLE

function add(a, b) {
	return a + b;
}

var newAdd = shonfinkelize(add, 5);
newAdd(4); // 9
