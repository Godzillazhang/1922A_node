class List{
    static get(){
        return "finish";
    }
    static post(_router){
        _router.response.end(_router.map.get("cmd"));
    }
}
module.exports=List;