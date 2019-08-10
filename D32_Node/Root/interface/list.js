class List{
    static get(_router){
        // _router.response.end(_router.map.get("cmd"));
        switch (_router.map.get("cmd")) {
            case 100:

                break;
            case 200:
                break;
        }
    }
    static post(_router){
        _router.response.end(_router.map.get("cmd"));
    }
}
module.exports=List;