/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
if(!localStorage.getItem("uniqueId")){
     localStorage.setItem("uniqueId", "20");
}
                         

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        window.location.href = "login.html";
        // document.getElementById('gotologin').addEventListener('click', gotologin);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
                                var a = fileSystem.root;
                                var b = fileSystem.root.nativeURL.substring(0,fileSystem.root.nativeURL.length-1);
                                var c = fileSystem.root.nativeURL;
                                var path = fileSystem.root.nativeURL;
                                //debugger;
                                getDirectory(a,path);
                                
                                },function(){});
        
        window.MyCordovaPlugin.createTable();
        
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function getDirectory(fs, path){
     fs.getDirectory("prabodh", {create: true,exclusive: false}, function(dirEntry) {console.log("directory created");}, function(err) {console.log("error in creation" + err);});
     document.getElementById('gotologin').click();
}
function gotologin() {
    window.location.href = "login.html";
}
app.initialize();




