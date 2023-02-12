module.exports = {
	devServer:{
		 proxy: {
			 "/douyu":{
			   target:"https://open.douyucdn.cn",
			   changeOrigin:true,
			   pathRewrite:{
			     "^/douyu":""
			   }
			 }
		 }
	}
}