module.exports = (dependencies, devDependencies) => {
	var deps = 'npm install --save ';
	var dev_deps = 'npm install --save-dev ';

	for (var key in dependencies) {
		if (dependencies.hasOwnProperty(key)) {
			deps += key + '@' + dependencies[key] + ' ';
		}
	}

	for (var key in devDependencies) {
		if (devDependencies.hasOwnProperty(key)) {
			dev_deps += key + '@' + devDependencies[key] + ' ';
		}
	}

	console.log('---------------');
	console.log('dependencies');
	console.log('---------------');
	console.log(deps);
	console.log('---------------');
	console.log('devDependencies');
	console.log('---------------');
	console.log(dev_deps);
}