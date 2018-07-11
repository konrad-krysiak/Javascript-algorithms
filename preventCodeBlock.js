let preventCodeBlock = function(callback) {
	setTimeout(function() {
		if(typeof callback === "function") {
			callback();
		}
	}, 0);
};

// setTimeout permits other code to run 
// before being invoked