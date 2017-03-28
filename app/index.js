// import _ from 'lodash';//此处引入的是一个第三方库,不会经常变化,这种引入会每次都被打包
// import '../src/index.css';
// function component(){
// 	var element = document.createElement('div');
// 	element.innerHTML = _.join(['Hello','Webpack','so easy'],' ');
// 	return element;
// }
// document.body.appendChild(component());


require('./a.js');//a同步加载
require.ensure([],function(require){//空数组参数，a,b都被执行,b异步
	require('./b.js')
})
// require.ensure(['./a.js'],function(require){//依赖作为参数，a被引用，但并不被执行
// 	require('./b.js')
// })