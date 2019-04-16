var fs = require('fs');

var package = fs.readFileSync('./package.json').toString();
var { dependencies, devDependencies } = JSON.parse(package);




var deps = 'npm install ';
var dev_deps = 'npm install ';

for (var key in dependencies) {
  if (dependencies.hasOwnProperty(key)) {
    deps += key+' ';
  }
}
deps+'--save';

for (var key in devDependencies) {
  if (devDependencies.hasOwnProperty(key)) {
    dev_deps += key+' ';
  }
}
dev_deps+'--save-dev';

console.log('---------------');
console.log('dependencies');
console.log('---------------');
console.log(deps);
console.log('---------------');
console.log('devDependencies');
console.log('---------------');
console.log(dev_deps);
