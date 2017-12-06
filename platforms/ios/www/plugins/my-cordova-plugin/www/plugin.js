cordova.define("my-cordova-plugin.plugin", function(require, exports, module) {

var exec = require('cordova/exec');

var PLUGIN_NAME = 'MyCordovaPlugin';

var MyCordovaPlugin = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  },
  createTable: function(cb){
    exec(cb,null,PLUGIN_NAME,'ActionCreateTable',[]);
    },

  insertIntoTable: function(params, cb){
    exec(cb, null, PLUGIN_NAME, 'ActionInsertIntoTable', [{
      "message" : params
    }]);
  },

  isLoginDataPresent: function(params, cb){
    exec(cb, null, PLUGIN_NAME, 'ActionIsLoginDataPresent', [{
    "message" : params
    }]);
  },

  updateUserData: function(params, cb){
    exec(cb, null, PLUGIN_NAME, 'ActionUpdateUserData', [{
      "message": params
    }])
  }
};

       
               

module.exports = MyCordovaPlugin;

});
