module.exports = {
	module: {
		context: ,//string,基础目录，绝对路径，用于从配置中解析入口起点(entry point)和加载器(loader)
		entry: ,//string | [string] | object { <key>: string | [string] }
		output: {
			chunkFilename:,//string
			crossOriginLoading: ,//boolean|string,只用于 target 是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk
			devtoolFallbackModuleFilenameTemplate: ,
			devtoolLineToLine: ,//已弃用
			devtoolModuleFilenameTemplate:,//string | function(info),此选项仅在 「devtool 使用了需要模块名称的选项」时使用
			filename: ,//string
			hotUpdateChunkFilename:'[id].[hash].hot-update.js',//string,默认值,自定义热更新 chunk 的文件名,占位符只能是 [id] 和 [hash]
			hotUpdateFunction: ,//function,只在 target 是 web 时使用，用于加载热更新(hot update)的 JSONP 函数
			hotUpdateMainFilename:'[hash].hot-update.json',//string,默认值，自定义热更新的主文件名(main filename),占位符只能是hash
			jsonpFunction: ,//function,只在 target 是 web 时使用，用于按需加载(load on-demand) chunk 的 JSONP 函数。
			//JSONP 函数用于异步加载(async load) chunk，或者拼接多个初始 chunk(CommonsChunkPlugin, AggressiveSplittingPlugin)。
			library:,//string,library 名称取决于 output.libraryTarget 选项的值。
			libraryTarget: 'var',//string,默认值
			path:,//string,绝对路径,output.path 中的 URL 以 HTML 页面为基准
			pathinfo:,//boolean,告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项默认值是 false，并且不应该用于生产环境(production)，但是对阅读开发环境(development)中的生成代码(generated code)极其有用
			publicPath: ,//string,对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。在多数情况下，此选项的值都会以/结束。
			//webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件
			sourceMapFilename: '[file].map',//string,此选项会向硬盘写入一个输出文件，只在 devtool 启用了 SourceMap 选项时才使用。
			//建议只使用 [file] 占位符，因为其他占位符在非 chunk 文件生成的 SourceMap 时不起作用。最好保持默认
			sourcePrefix: ,//string,修改输出 bundle 中每行的前缀
			umdNamedDefine: ,//boolean,当使用了 libraryTarget: "umd"，设置;umdNamedDefine: true
		},
		module: {//这些选项决定了如何处理项目中的不同类型的模块。
			noParse:,//RegExp | [RegExp]
			rules: ,//array,创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用加载器(loader)，或者修改解析器(parser)。
		},
		resolve: {
			alias: {

			},
			aliasFields:,//string
			descriptionFiles:,//array
			enforceExtension: false;//boolean ;false允许无扩展名的使用
			enforceModuleExtension: false;//对模块是否需要使用的扩展（例如 loader）
			extensions: ,//array,自动解析确定的扩展,默认值为['.js','.json'],能够使用户在引入模块时不带扩展
			mainFields: ,//array,默认值：['browser','module','main']
			mainFiles: ,//array,解析目录时要使用的文件名,默认：['index']
			modules: ,//array,默认值:['node_modules'],告诉 webpack 解析模块时应该搜索的目录,
			//如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索.modules:[path.resolve(__dirname,'path'),'node_modules']
			unsafeCache: ,//regx|array|boolean.启用，会主动缓存模块，但并不安全
			plugins: ,//array,应该使用的额外的解析插件列表。它允许插件，如 DirectoryNamedWebpackPlugin。
			symlinks: ,//boolean,
			cachePredicate:,//function,决定请求是否应该被缓存的函数
			resolveLoader:{//?
				//这组选项与上面的 resolve 对象的属性集合相同，但仅用于解析 webpack 的 loader 包
				moduleExtensions:,//array,在解析模块（例如，loader）时尝试使用的扩展。默认是一个空数组。
				//如果你想要不带 -loader 后缀使用 loader，你可以使用moduleExtensions:['-loader']

			},
		},
		plugins: [

		],
		devServer: {
			clientLogLevel:,//string
			compress: ,//boolean,一切服务都启用gzip 压缩：
			contentBase: ,//boolean|string|array,告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
			filename: ,//在惰性模式中，此选项可减少编译。 默认在惰性模式，每个请求结果都会产生全新的编译。使用 filename，可以只在某个文件时被请求时编译
			headers: ,//object,在所有请求中添加首部内容
			historyApiFallback:,//boolean||object ,当使用HTML5 History API，任意的 404 响应可以提供为 index.html 页面
			host: ,//string,只用在命令行工具(CLI);指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：host: "0.0.0.0"
			hot: ,//boolean,启用 webpack 的模块热替换特性
			hotOnly:,//boolean,only cli,
			https: ,//boolean|object;
			inline: ,//boolean,only cli,
			lazy: ,//boolean,当启用 lazy 时，dev-server 只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”
			noInfo:,//boolean
			port: ,//number,only cli
			proxy:,//string,如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。
			public:,//string,only cli

			stats: ,//string|object;对于 webpack-dev-server ，这个属性要放在 devServer 对象里;在使用 Node.js API 后，此选项无效
			
		},
		target: ,//string,告诉 webpack 这个程序的目标环境是什么,默认值为'web',编译为类浏览器环境
		watch: ,//boolean,默认false;webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启
		watchOptions: {
			//一组用来定制 Watch 模式的选项
			aggregateTimeout: ,//number,以毫秒记
			ignored: /node_modules/,//rgex|string,对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹，例如 node_modules;其他模式"files/**/*.js"
			poll:,//boolean|number; 如果监听没生效，试试这个选项吧。Watch 在 NFS 和 VirtualBox 机器上不适用。
		},
		externals: ,//string regex object array function
		//webpack 中的 externals 配置提供了「不从 bundle 中引用依赖」的方式。解决的是，所创建的 bundle 依赖于那些存在于用户环境(consumer environment)中的依赖。 此选项通常适用于 library 开发人员，但应用程序开发人员也可以充分利用此功能。
		node:,//object,使用 polyfill 或 mock 来自定义 NodeJS 环境
		performence: {
			hints:,//boolean | "error" | "warning"
			maxEntrypointSize:,//int,入口起点表示针对指定的入口，对于所有资源，要充分利用初始加载时(initial load time)期间。此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
			maxAssetSize: ,//int,资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
			assetFilter:,//function,此属性允许 webpack 控制用于计算性能提示的文件
		},
		amd: {

		},
		bail: true,//boolean,这将迫使 webpack 退出其打包过程
		cache: ,//boolean|object,缓存生成的 webpack 模块和 chunk，来改善构建速度
		loader: ,//object,在 loader 上下文中暴露自定义值
		profile: ,//boolean
		recordsPath: ,//
		recordsInputPath:,//
		recordsOutputPath:,//
	}
}