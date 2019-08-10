const _fs=require("fs");
class Router{
    constructor(){
        this.map=new Map();
        this.root="./Root/";
    }
    args(_args){//_args==="id=1"
        let _arg;
        _args=_args.split("&");
        for(let i=0;i<_args.length;i++){
            _arg=_args[i].split("=");
            this.map.set(_arg[0],_arg[1]);
        }
    }
    /**
     * 该方法主要是处理url
     * url中包含内容如下
     *      客户端浏览器访问服务器上的文件路径和文件名称
     *      客户端浏览器访问服务器时，向服务器传递的参数
     */
    url(){
        //http://localhost:3000/index.html?account=xiaoli&age=18
        let _url=this.request.url,_params,_item;
        if (/https?:\/{2}\w+(\.\w+)*(:\d+)?\/\w+\.\w+/g.test(_url)) {//检查请求URL中是否有域名存在，如果有过滤掉，因为域名地址在以下处理过程中基本没什么用，可以通过host访问
            _url = _url.replace(/https?:\/{2}\w+(\.\w+)*(:\d+\/)?/gi, "");
        }//       http://localhost:8081/    D32_Node/Root/images/_01.jpg
        this.path="index.html";//作用保存路径和文件名称
        if (/(\w+\/?)+\.\w+/gi.test(_url)) {
            this.path = _url.match(/(\w+\/?)+\.\w+/gi)[0];//获取请求文件的相对路径
        }
        if(/\?\w+=/g.test(_url)){//获取请求参数
            this.args(_url.substring(_url.indexOf("?")+1,_url.length));
        }
    }
    text(){
        try {
            this.response.writeHead(200, {'Content-Type': 'text/html', "charset": "utf-8"});
            _fs.readFile(this.root+this.path, (_err, _data) => {
                if (_err) {
                    this.response.end(_err.toString());
                } else {
                    this.response.end(_data.toString("utf-8"));
                }
            });
        }catch (e) {
            this.response.end(e.toString());
        }
    }
    image(){
        try{
            this.response.writeHead(200, {'Content-Type': 'image/jpeg'});
            _fs.readFile(this.root+this.path, "binary", (_err, _data) => {
                if (_err) {
                    this.response.end(_err.toString());
                }else{
                    this.response.write(_data, 'binary');
                    this.response.end();
                }
            });
        }catch (e) {
            this.response.end(e);
        }
    }
    api(){
        try{
            let _me=this;
            if(this.request.method.toUpperCase()==="POST"){
                let _data="";
                this.request.on("data",function(_paragraph){
                    _data+=_paragraph;
                });
                this.request.on("end",function(){
                    _me.args(_data);
                    require(__dirname+"/../Root/"+_me.path)[_me.request.method.toLowerCase()](_me);
                });
            }else{
                console.log(__dirname+"/../Root/"+_me.path);
                require(__dirname+"/../Root/"+this.path)[this.request.method.toLowerCase()](this);
            }
        }catch (e) {
            this.response.end(e.toString());
        }
    }
    /**
     * @param _request：是浏览器向服务器发出请求的时候创建的对象
     *                   包含浏览器端的所有信息：
     *                        请求头部报文、
     *                        请求方式、
     *                        请求的路径和文件名称以及参数、
     *                        请求时向服务器发送的参数、cookie、浏览器信息等等
     * @param _response：是服务器用于向客户端浏览器响应内容创建的对象
     *                   包含响应给浏览器的数据、字符编码、数据格式等一系列数据
     */
    listener(_request,_response){
        this.request=_request;
        this.response=_response;
        this.url();
        if (/(?<!interface\/(\w+\/?)+)\.(html|css|js(on)?)/g.test(this.path)) {
            this.text();
        }else if(/\.(jpg|jpeg|png|gif|bmp)$/g.test(this.path)) {
            this.image();
        }else if (/\/?interface\/(\w+\/?)+\.js/g.test(this.path)) {
            this.api();
        }else{
            this.response.writeHead(403, {'Content-Type': 'text/html'});
        }
    }
}
module.exports=Router;

