import _ from 'lodash';//此处引入的是一个第三方库,不会经常变化,这种引入会每次都被打包
import '../src/index.css';
function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello','Webpack','so easy'],' ');
	return element;
}
document.body.appendChild(component());
