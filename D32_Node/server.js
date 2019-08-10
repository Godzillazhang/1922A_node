const _http=require("http");
const Router=require("./Library/Router");

_http.createServer((_request,_response)=>{
    new Router().listener(_request,_response);//模块化开发，实例化路由对象。
}).listen(3000,()=> {
    console.log("success");
});