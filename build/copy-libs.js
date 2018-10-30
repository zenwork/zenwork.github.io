const fse = require('fs-extra');
const path = require('path');

const baseSource = '../mkdn-web-component/markdown-components/';

cpFileType(baseSource + 'dist/', './lib', '.js');
cpFileType(baseSource + 'dist/', './lib', '.map');

function cpFileType(src, target, type) {
	fse.readdirSync(src)
		.forEach(file => {
			const filePath = path.resolve(src, file);
			var fileName = path.basename(filePath);
			if (filePath.indexOf(type) === filePath.length - type.length) {
				cp(filePath, target + '/' + fileName);
			}
		});
}

function cp(src, target) {
	fse.copy(src, target)
		.then(() => {
			console.log('copied from ' + src + ' to ' + target);
		})
		.catch(err => {
			console.error(err);
		});
}
