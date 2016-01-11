angular.module('simon_game_app', ['Simon_Service'])

.controller('MainCtrl', function(Simon){

var self=this;

self.simon=new Simon();


});

