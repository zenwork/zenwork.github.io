const fse = require('fs-extra');

const baseSource = '../mkdn-web-component/markdown-components/';

cp(baseSource + 'dist','./examples/api-demos');

function cp(src, target) {
	fse.copy(src, target)
		.then(() => {
			console.log('copied from ' + src + ' to ' + target);
		})
		.catch(err => {
			console.error(err);
		});
}
