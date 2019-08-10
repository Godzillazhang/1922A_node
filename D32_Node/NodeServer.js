/**
 * js既可以在服务器上运行，也可以在网页中运行。
 *      在网页上运行的js，应该以字符串或者文本的形式被发送到浏览器上。
 *      在服务器上运行的js接口，不能被发送到浏览器端。而是直接在服务器上运行。
 *
 *      服务器上的js接口可以被ajax通过get或者post方式请求。
 */
const _http=require("http");
const _fs=require("fs");


class Ananlysis{
    constructor(_url){
        this.url=_url;
        this.fp="";//file path 文件路径
        this.map=new Map();//保存请求参数
        this.parameter();
        this.path();
    }
    path(){
        //    /Root/List/demo/abc/index.html?account=xiaoli&age=18
        if(/(\/\w+)+(\.(html|css|js))/gi.test(this.url)){
            this.fp=this.url.match(/(\/\w+)*(\.(html|css|js))/gi)[0];
        }else{
            this.fp="/Root/index.html";
        }
    }
    parameter(){
        let _items=null,_item;
        if(/(\w+=[\w%]+)+/g.test(this.url)){
            _items=this.url.match(/(\w+=[\w%]+)+/g);
            for(let i=0;i<_items.length;i++){
                _item=_items[i].split("=");
                this.map.set(_item[0],_item[1]);
            }
        }
    }
    reader(_request,_response){
        if(/\.(html|css)$/g.test(this.fp)){
            // console.log(this.fp);
            _fs.readFile(__dirname+this.fp,function(_error,_data){
                if(!_error){
                    _response.end(_data.toString("utf-8"));
                }else{
                    _response.end("error");
                }
            });
        }else{
            if(/\.js$/g.test(this.fp)){
                if(/\/js\//g.test(this.fp)) {
                    _fs.readFile(__dirname + this.fp, function (_error, _data) {
                        if (!_error) {
                            _response.end(_data.toString("utf-8"));
                        } else {
                            _response.end("error");
                        }
                    });
                }
                if(/\/interface\//g.test(this.fp)){
                    _response.end(require("./Root/interface/list01.js").get());
                }
            }else{
                _response.end("");
            }
        }
    }
}

_http.createServer(function(_request,_response){
    new Ananlysis(_request.url).reader(_request,_response);
}).listen(3000,function(){
    console.log("success waitting.....");
});