class Main{
    static get(_router){
        _router.response.end("get");
    }
    static post(_router){
        _router.response.end(_router.map.get("account"));
    }
}
module.exports=Main;