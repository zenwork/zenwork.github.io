const fse = require('fs-extra');

const baseSource = '../mkdn-web-component/';

cp(baseSource + 'docs/','./md/');
cp(baseSource + 'README.md', './md/home.md');

function cp(src, target) {
	fse.copy(src, target)
		.then(() => {
			console.log('copied from ' + src + ' to ' + target);
		})
		.catch(err => {
			console.error(err);
		});
}
