"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart =function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.storage = {};
  }

  _createClass(Cart, [{
    key: "take",
    value: function take() {
      //从硬盘中读取localStorage数据到内存中*************************
      if (window.localStorage) {
        //新用户的硬盘上没有购物车，怎么办？
        //老用户硬盘上已经有了购物车数据，然后怎么办？
        var _storage = window.localStorage;

        if (_storage.getItem("Cart1908")) {
          //getItem()的返回值是字符串
          this.storage = window.eval("(" + _storage.getItem("Cart1908") + ")"); //为什么要转换成字面量对象？为了方便操作
        } else {
          this.storage = {};
        }

        return true; //表示浏览器支持localStorage
      } else {
        return false; //表示浏览器不支持localStorage
      }
    }
  }, {
    key: "save",
    value: function save() {
      //save方法不能在外部被调用，如果需要调用请自定义的方法判断浏览器是否支持localStorage
      window.localStorage.setItem("Cart1908", JSON.stringify(this.storage)); //****************
    }
  }, {
    key: "insert",
    value: function insert(_identify, _counter) {
      if (_counter > 0) {
        if (this.take()) {
          this.storage[_identify] ? this.storage[_identify] += _counter : this.storage[_identify] = _counter;
          this.save();
        }
      }
    }
  }, {
    key: "subtract",
    value: function subtract(_identify, _counter) {
      if (this.take()) {
        if (this.storage[_identify]) {
          if (this.storage[_identify] > _counter) {
            this.storage[_identify] -= _counter;
          } else {
            delete this.storage[_identify];
          }

          this.save();
        }
      }
    }
  }, {
    key: "remove",
    value: function remove(_identify) {
      if (this.take()) {
        if (this.storage[_identify]) {
          delete this.storage[_identify];
          this.save();
        } else {
          alert("无此数据");
        }
      }
    }
  }, {
    key: "statistics",
    value: function statistics() {
      var _sum = 0;

      if (this.take()) {
        for (var _key in this.storage) {
          if (this.storage.hasOwnProperty(_key)) {
            _sum += this.storage[_key];
          }
        }
      }

      return _sum;
    }
  }, {
    key: "reset",
    value: function reset(_identify, _counter) {
      if (this.take()) {
        if (/^[1-9]\d*$/g.test(_counter + "")) {
          this.storage[_identify] = _counter;
          this.save();
        }
      }
    }
  }]);

  return Cart;
}();