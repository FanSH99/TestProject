module.exports={
    	devServer:{
            // 跨域配置
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

/* 
跨域
 1.脚本
 */