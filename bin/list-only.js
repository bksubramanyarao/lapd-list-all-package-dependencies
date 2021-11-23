module.exports = (dependencies, devDependencies) => {
	var deps = '';
	var dev_deps = '';

	for (var key in dependencies) {
		if (dependencies.hasOwnProperty(key)) {
			deps += key + '@' + dependencies[key] + '\n';
		}
	}

	for (var key in devDependencies) {
		if (devDependencies.hasOwnProperty(key)) {
			dev_deps += key + '@' + devDependencies[key] + '\n';
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