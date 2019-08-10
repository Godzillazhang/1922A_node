const _http=require("http");

/*
http模块的作用：创建一个http协议的服务。
	如何创建服务？
	_http.createServer();//createServer()方法接受一个回调函数作为实参
	
	_request:对象是保存浏览器客户端请求的所有信息。
			作用：保存客户端信息。
	_response:保存服务器信息的对象。服务端自己形成的一个对象。
			作用：向客户端做信息反馈的工具。、
			
			
	window命令行中切换盘符的方式“f:”
	cd "path":进入路径中
	
	
	fs系统中readFile是异步读取文件的方法
	__dirname:是nodejs中系统全局变量，表示当前项目的根目录。
*/


const _fs=require("fs");

function fn(_request,_response){
    //console.log(_request.url);
	//console.log(__dirname+_request.url);
	if(/\.(html|js|css)$/g.test(__dirname+_request.url)){
		_fs.readFile(__dirname+_request.url,function(_error,_data){
			if(_error){
				_response.end("not found");
			}else {
				_response.end(_data.toString("utf8"));
			}
		});
	}else{
		_response.end("");
	}
}
_http.createServer(fn).listen(3000,()=>{
	console.log("我们银行成功开设VIP专区");
});






















