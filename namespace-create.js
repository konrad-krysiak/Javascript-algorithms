// CREATING NAMESPACE FUNCTION
// IF NAMESPACE EXISTS IT WILL NOT BE DECLARED
// AGAIN/OVERRIDDEN

var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.'),
		parent = MYAPP,
		i;

	// Get rid of object name in the beginning
	// if it exists eg. 'MYAPP.modules.module1' -> 'modules.module1'
	if (parts[0] === "MYAPP") {
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i+=1) {
		// Create variable if it doesn't exist
		if (typeof parent(parts[i]) === "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}

// EXAMPLE

MYAPP.namespace('modules.module2');