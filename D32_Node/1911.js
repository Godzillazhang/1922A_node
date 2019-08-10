const _http=require("http");
const _fs=require("fs");
_http.createServer(function(_request,_response){
    // _response.end("this is a first node js program!");
    /**
     * TODO:
     *      根据客户端浏览器地址栏的中url(保存在request对象中)信息，
     *      可以从硬盘中找到客户想要的文件内容
     *
     *      1.希望看到文件内的内容
     *
     * fs 系统模块可以帮我们打开文件并且将文件的内容打印输出到频幕上。也可以通过网络传输到远程浏览器端。
     * fs 系统模块作用：可以实现文件读、写、改、删
     *      拿到  fs  这个模块，就可以对文件进行I/O操作。
     *      fs 打开文件时需要，需要知道文件在磁盘上的地址（路径）；
     *      当 fs 模块找到地址以后，就可以对指定的文件进行操作。
     *      nodejs我们不需要知道是怎么去读取的。文件读取完毕以后
     *      文件系统模块会自动调用回调函数，并且给回调函数传递，两个参数
     *      第一个参数是错误（如果读取文件失败时产生的错误），
     *      第二个参数是文件系统模块读取文件内的内容（以输出流的形式存在，所以要toString()）
     */
    //F:/NodeJS/D32_Node===__dirname
    _fs.readFile(__dirname+_request.url,function(_err,_data){
        console.log(_err);
        if(_err){
            _response.end("error");
        }else{
            _response.end(_data.toString("utf-8"));
        }
    });
}).listen(8081,function(){
   console.log("success");
});